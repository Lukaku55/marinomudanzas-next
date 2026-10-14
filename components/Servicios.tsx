"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { ArrowRight, ArrowsVertical, Buildings, House, Package, Path, Warehouse } from "@phosphor-icons/react";
import Image from "next/image";
import type { Servicio } from "@/content/site";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";
import type { Textos } from "@/content/textos";
import Reveal from "./Reveal";

const ICONOS = { casa: House, oficina: Buildings, caja: Package, deposito: Warehouse, ruta: Path, soga: ArrowsVertical };

/** Tarjeta con inclinación 3D que sigue al puntero (solo con mouse). */
function Tarjeta({ s, t }: { s: Servicio; t: Textos }) {
  const ref = useRef<HTMLElement>(null);
  const reducir = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 160, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 160, damping: 18 });
  const Icono = ICONOS[s.icono];

  const mover = (e: React.PointerEvent) => {
    if (reducir || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const salir = () => { mx.set(0); my.set(0); };

  return (
    <motion.article
      ref={ref}
      onPointerMove={mover}
      onPointerLeave={salir}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-line bg-surface"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-navy">
        {s.foto ? (
          <Image src={s.foto.src} alt={s.foto.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
        ) : (
          <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_20%,#1f3a5c_0%,#0b1728_70%)]">
            <Icono size={72} weight="thin" className="text-gold" aria-hidden="true" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6" style={{ transform: "translateZ(30px)" }}>
        <h3 className="display text-[1.4rem]">{s.nombre}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{s.texto}</p>
        <Link href={s.href ?? t.cta.href} hrefLang={s.href && t.idioma === "en" ? "es" : undefined} className="link-sub mt-5 inline-flex min-h-[44px] items-center gap-2 font-semibold text-navy">
          {s.href ? t.ui.verServicio : t.ui.consultarServicio}
          <ArrowRight size={16} weight="bold" className="transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}

export default function Servicios({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos(idioma);
  return (
    <section id="servicios" className="border-y border-line bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <h2 className="display max-w-[16ch] text-[clamp(2rem,4.6vw,3.6rem)]">{t.ui.serviciosTitulo}</h2>
        </Reveal>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1400 }}>
          {t.servicios.map((s, i) => (
            <Reveal as="li" key={s.nombre} demora={0.06 * i} className="grid">
              <Tarjeta s={s} t={t} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
