"use client";
import { createContext, useContext, useRef, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { motion, useMotionValue, useScroll, useTransform, type MotionValue } from "motion/react";

const StackContext = createContext<{ progress: MotionValue<number>; total: number } | null>(null);

/** Wraps the service detail sections so they pile up as sticky cards while scrolling. */
export function ServiceStack({ children, total }: { children: ReactNode; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <StackContext.Provider value={{ progress: scrollYProgress, total }}>
      <div ref={ref} className="relative bg-background pt-16 pb-8 md:pt-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
        {children}
      </div>
    </StackContext.Provider>
  );
}

const variants = [
  {
    card: "bg-navy text-primary-foreground border-white/10",
    text: "text-primary-foreground/75",
    title: "text-primary-foreground",
    button: "btn-gold",
  },
  {
    card: "bg-card text-foreground border-border",
    text: "text-muted-foreground",
    title: "text-foreground",
    button: "btn-navy",
  },
  {
    card: "gradient-navy text-primary-foreground border-white/10",
    text: "text-primary-foreground/75",
    title: "text-primary-foreground",
    button: "btn-gold",
  },
  {
    card: "bg-[hsl(38_60%_97%)] text-foreground border-gold/30",
    text: "text-muted-foreground",
    title: "text-foreground",
    button: "btn-navy",
  },
];

export function ServiceDetailCard({
  id,
  index,
  icon: Icon,
  title,
  text,
  href,
}: {
  id: string;
  index: number;
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
}) {
  const ctx = useContext(StackContext);
  const total = ctx?.total ?? 1;
  const fallback = useMotionValue(0);
  const progress = ctx?.progress ?? fallback;
  const targetScale = 1 - (total - 1 - index) * 0.045;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const v = variants[index % variants.length];
  const dark = index % 2 === 0;

  return (
    <section
      id={id}
      className="sticky px-4 pb-10 md:pb-16"
      style={{ top: `calc(var(--header-h) + ${index * 22}px)` }}
    >
      <motion.div
        style={{ scale, transformOrigin: "top center" }}
        className={`group relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border shadow-[0_40px_80px_-40px_hsl(var(--navy)/0.55)] ${v.card}`}
      >
        {dark && <div aria-hidden className="absolute inset-0 grain" />}
        <div aria-hidden className={`aura -right-16 -top-16 h-80 w-80 ${dark ? "aura-blue" : "bg-gold/15"}`} />
        <div className="relative grid items-center gap-10 p-8 md:grid-cols-[1.4fr_1fr] md:p-14 lg:p-16">
          <div className="max-w-4xl">
            <span aria-hidden className="mb-6 block h-px w-16 origin-left bg-gradient-to-r from-gold to-transparent transition-transform duration-700 group-hover:scale-x-150" />
            <h2 className={`section-title text-3xl md:text-4xl lg:text-5xl mb-6 ${v.title}`}>{title}</h2>
            <p className={`font-body text-lg leading-relaxed mb-9 ${v.text}`}>{text}</p>
            <span data-magnetic="0.2" className="inline-flex transition-transform duration-300 ease-out">
              <Link href={href} className={`${v.button}`}>
                <span className="relative z-[2]">Ver servicio completo</span>
                <ArrowRight className="icon-shift relative z-[2] w-4 h-4" />
              </Link>
            </span>
          </div>

          {/* Decorative emblem: rotating rings, orbiting diamond and the service icon */}
          <div aria-hidden className="relative mx-auto hidden h-64 w-64 md:block lg:h-72 lg:w-72">
            <div className={`absolute inset-0 rounded-full border ${dark ? "border-gold/25" : "border-navy/15"} animate-spin-slow`} style={{ animationDuration: "40s" }}>
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gold" />
            </div>
            <div className={`absolute inset-8 rounded-full border border-dashed ${dark ? "border-white/15" : "border-navy/15"} animate-spin-slow`} style={{ animationDuration: "60s", animationDirection: "reverse" }} />
            <div className="absolute left-1/2 top-1/2 h-0 w-0">
              <span className="absolute -ml-1.5 -mt-1.5 block h-3 w-3 rounded-full bg-gold shadow-[0_0_16px_hsl(var(--gold))]" style={{ animation: "orbit 9s linear infinite", ["--orbit-r" as string]: "104px" }} />
            </div>
            <div
              className={`absolute inset-16 flex items-center justify-center rounded-full transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 ${
                dark ? "bg-white/5 border border-gold/30" : "bg-navy"
              }`}
            >
              <Icon className="h-16 w-16 animate-float text-gold" strokeWidth={1.25} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
