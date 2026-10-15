"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";

const CONSULTA = "(prefers-reduced-motion: reduce)";
// La escena 3D (three.js) es lo más pesado de la página: se descarga recién cuando la sección se acerca.
const Mudanza3D = dynamic(() => import("./Mudanza3D"), { ssr: false });

const puede3D = () => {
  if ((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData) return false;
  try {
    const c = document.createElement("canvas");
    return Boolean(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
};

/**
 * Momento principal del boceto: la sección queda fija y el scroll cuenta la
 * mudanza en 3D mientras pasan los cuatro pasos. Con movimiento reducido se
 * muestra como una lista común.
 */
export default function ComoFunciona({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos(idioma);
  const { comoFunciona: COMO_FUNCIONA, cta: CTA } = t;
  const [cargar3D, setCargar3D] = useState(false);
  const seccion = useRef<HTMLElement>(null);
  const progreso = useRef(0);
  const quieto = useSyncExternalStore(
    (avisar) => {
      const mq = window.matchMedia(CONSULTA);
      mq.addEventListener("change", avisar);
      return () => mq.removeEventListener("change", avisar);
    },
    () => window.matchMedia(CONSULTA).matches,
    () => true,
  );

  useEffect(() => {
    if (quieto || !seccion.current || !puede3D()) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setCargar3D(true); io.disconnect(); }
    }, { rootMargin: "1200px 0px" });
    io.observe(seccion.current);
    return () => io.disconnect();
  }, [quieto]);

  useEffect(() => {
    if (quieto || !seccion.current) return;
    let ctx: { revert: () => void } | undefined;
    let vivo = true;
    // GSAP también se pide aparte, para no sumar peso a la primera carga.
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (!vivo || !seccion.current) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
      const pasos = gsap.utils.toArray<HTMLElement>("[data-paso]");
      gsap.set(pasos, { autoAlpha: 0, y: 40 });
      gsap.set("[data-cierre]", { autoAlpha: 0, y: 20 });
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
        scrollTrigger: {
          trigger: seccion.current,
          start: "top top",
          end: () => `+=${window.innerHeight * 3.4}`,
          pin: true,
          scrub: 0.7,
          invalidateOnRefresh: true,
          onUpdate: (st) => { progreso.current = st.progress; },
        },
      });
      pasos.forEach((paso, i) => {
        tl.to(paso, { autoAlpha: 1, y: 0 });
        tl.to("[data-barra]", { scaleX: (i + 1) / pasos.length, ease: "none" }, "<");
        if (i < pasos.length - 1) tl.to(paso, { autoAlpha: 0, y: -40, ease: "power2.in", duration: 0.7 }, "+=0.55");
        else tl.to("[data-cierre]", { autoAlpha: 1, y: 0, duration: 0.6 }, "+=0.1");
      });
      }, seccion);
      // Fijar la sección agrega altura a la página: si se entró con un ancla (#presupuesto), se vuelve a ubicarla.
      const ancla = window.location.hash.slice(1);
      const destino = ancla ? document.getElementById(ancla) : null;
      if (destino && destino !== seccion.current) {
        ScrollTrigger.refresh();
        destino.scrollIntoView({ behavior: "instant" as ScrollBehavior });
      }
    });
    return () => { vivo = false; ctx?.revert(); };
  }, [quieto]);

  return (
    <section id="como-funciona" ref={seccion} className="on-dark relative overflow-hidden bg-navy-deep text-white">
      {cargar3D && <Mudanza3D progreso={progreso} quieto={quieto} />}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgb(11_23_40/0.92)_0%,rgb(11_23_40/0.55)_38%,rgb(11_23_40/0)_62%)] md:bg-[linear-gradient(to_right,rgb(11_23_40/0.9)_0%,rgb(11_23_40/0.5)_38%,rgb(11_23_40/0)_60%)]" />

      <div className={`relative mx-auto flex max-w-[1320px] flex-col px-5 md:px-8 ${quieto ? "gap-10 py-24 md:py-36" : "h-[100dvh] pt-[calc(var(--header-h)+1.5rem)] md:justify-center md:pt-0"}`}>
        <h2 className="display max-w-[15ch] text-[clamp(1.5rem,3vw,2.1rem)] text-gold">{COMO_FUNCIONA.titulo}</h2>

        <ol className={quieto ? "grid gap-8 md:grid-cols-2" : "relative mt-6 h-[230px] md:h-[300px] md:max-w-[520px]"}>
          {COMO_FUNCIONA.pasos.map((paso, i) => (
            <li key={paso.titulo} data-paso className={quieto ? "" : "absolute inset-0"}>
              <p className="display text-[clamp(3rem,7vw,5rem)] leading-none text-white/25 [font-variant-numeric:tabular-nums]">{i + 1}</p>
              <h3 className="display mt-2 text-[clamp(1.8rem,4.6vw,3.2rem)]">{paso.titulo}</h3>
              <p className="mt-3 max-w-[40ch] text-[1.05rem] leading-relaxed text-navy-soft md:text-[1.2rem]">{paso.texto}</p>
            </li>
          ))}
        </ol>

        <div className={quieto ? "" : "absolute inset-x-5 bottom-7 md:inset-x-8"}>
          <div data-cierre>
            <a href={CTA.href} className="btn btn-primario">{CTA.label}</a>
          </div>
          {!quieto && (
            <div className="mt-5 h-px w-full bg-white/15">
              <div data-barra className="h-px origin-left scale-x-0 bg-gold" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
