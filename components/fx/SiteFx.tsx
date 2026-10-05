"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { motion, useScroll, useSpring, useMotionValue } from "motion/react";

declare global {
  interface Window {
    __lenis?: Lenis;
    __revealReady?: boolean;
  }
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ------------------------------------------------------------------ */
/* Smooth scroll (Lenis) + same-page anchor handling                  */
/* ------------------------------------------------------------------ */
function useSmoothScroll(pathname: string) {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, wheelMultiplier: 1 });
    window.__lenis = lenis;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const link = (e.target as HTMLElement).closest("a");
      if (!link || link.target === "_blank") return;
      const href = link.getAttribute("href");
      if (!href || !href.includes("#")) return;
      const url = new URL(link.href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return;
      const el = document.querySelector(decodeURIComponent(url.hash));
      if (!el) return;
      e.preventDefault();
      // Lenis already honours html { scroll-padding-top } for the fixed header
      lenis.scrollTo(el as HTMLElement, { duration: 1.4 });
      history.pushState(null, "", url.hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  useEffect(() => {
    const lenis = window.__lenis;
    if (!lenis) return;
    lenis.resize();
    if (!window.location.hash) lenis.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);
}

/* ------------------------------------------------------------------ */
/* Scroll reveal: elements with [data-reveal] get .is-in when visible  */
/* Optional [data-reveal-stagger] on a parent staggers its children.   */
/* ------------------------------------------------------------------ */
function useReveal(pathname: string) {
  useEffect(() => {
    window.__revealReady = true;
    const root = document.documentElement;
    root.classList.add("js-reveal");

    // Article pages (service pages + blog posts) are plain markup: tag their
    // blocks below the fold so they reveal as the reader scrolls.
    document
      .querySelectorAll<HTMLElement>(".article-body > *, .article-related, .article-body .grid > *")
      .forEach((el) => {
        if (!el.hasAttribute("data-reveal") && el.getBoundingClientRect().top > window.innerHeight) {
          el.setAttribute("data-reveal", el.classList.contains("article-h2") ? "left" : "up");
        }
      });

    document.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach((parent) => {
      const step = Number(parent.dataset.revealStagger) || 80;
      Array.from(parent.querySelectorAll<HTMLElement>(":scope > [data-reveal]")).forEach((child, i) => {
        if (!child.style.getPropertyValue("--reveal-delay")) {
          child.style.setProperty("--reveal-delay", `${Math.min(i * step, 900)}ms`);
        }
      });
    });

    // Fully clipped elements never report as intersecting, so those are
    // tracked through their parent instead.
    const proxies = new Map<Element, HTMLElement[]>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const targets = [...(proxies.get(target) ?? [])];
          if (target.dataset.reveal !== undefined) targets.push(target);
          targets.forEach((t) => t.classList.add("is-in"));
          proxies.delete(entry.target);
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const observed = new WeakSet<Element>();
    const scan = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)").forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        if (el.dataset.reveal === "clip" && el.parentElement) {
          const parent = el.parentElement;
          const list = proxies.get(parent);
          if (list) list.push(el);
          else proxies.set(parent, [el]);
          io.observe(parent);
        } else {
          io.observe(el);
        }
      });
    };
    scan();
    // Catch elements mounted after the first paint (client navigations, lazy UI)
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);
}

/* ------------------------------------------------------------------ */
/* Pointer effects: spotlight (.spotlight) and magnetic ([data-magnetic]) */
/* ------------------------------------------------------------------ */
function usePointerFx() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || prefersReducedMotion()) return;
    let magnet: HTMLElement | null = null;

    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement;
      const spot = target.closest<HTMLElement>(".spotlight");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      const m = target.closest<HTMLElement>("[data-magnetic]");
      if (magnet && magnet !== m) {
        magnet.style.transform = "";
        magnet = null;
      }
      if (m) {
        const r = m.getBoundingClientRect();
        const strength = Number(m.dataset.magnetic) || 0.25;
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength;
        m.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        magnet = m;
      }
    };
    const onLeave = () => {
      if (magnet) magnet.style.transform = "";
      magnet = null;
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);
}

/* ------------------------------------------------------------------ */
/* Gold reading/scroll progress bar                                    */
/* ------------------------------------------------------------------ */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, hsl(var(--gold)), hsl(var(--gold-light)), hsl(var(--gold)))",
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Cursor follower ring (desktop only)                                 */
/* ------------------------------------------------------------------ */
function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.5 });
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || prefersReducedMotion()) return;
    const ring = ringRef.current;
    if (!ring) return;
    ring.style.display = "block";

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const interactive = (e.target as HTMLElement).closest("a, button, [role='button'], input, select, textarea, label");
      ring.dataset.active = interactive ? "true" : "false";
      ring.style.opacity = "1";
    };
    const onLeave = () => (ring.style.opacity = "0");
    const onDown = () => (ring.dataset.pressed = "true");
    const onUp = () => (ring.dataset.pressed = "false");
    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("pointerup", onUp);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("pointerup", onUp);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={ringRef}
      aria-hidden
      style={{ x: sx, y: sy, display: "none", opacity: 0 }}
      className="cursor-ring pointer-events-none fixed left-0 top-0 z-[70] -ml-4 -mt-4 h-8 w-8 rounded-full border border-[hsl(var(--gold))] transition-[width,height,margin,background-color,opacity] duration-300 data-[active=true]:-ml-7 data-[active=true]:-mt-7 data-[active=true]:h-14 data-[active=true]:w-14 data-[active=true]:bg-[hsl(var(--gold)/0.12)] data-[pressed=true]:bg-[hsl(var(--gold)/0.35)]"
    />
  );
}

export default function SiteFx() {
  const pathname = usePathname();
  useSmoothScroll(pathname);
  useReveal(pathname);
  usePointerFx();
  return (
    <>
      <ScrollProgress />
      <CursorFollower />
    </>
  );
}
