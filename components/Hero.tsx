"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";

export default function Hero({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos(idioma);
  const { hero: HERO, cta: CTA, confianza: CONFIANZA } = t;
  const ref = useRef<HTMLElement>(null);
  const reducir = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const escala = useTransform(scrollYProgress, [0, 1], [1.05, 1.16]);
  const palabras = HERO.titulo.split(" ");

  // La entrada del texto es CSS (.entra, .entra-palabra): se ve apenas llega el HTML, sin esperar al JavaScript.
  return (
    <section id="inicio" ref={ref} className="on-dark relative flex min-h-[100dvh] items-end overflow-hidden bg-navy-deep text-white">
      <motion.div className="absolute inset-0" style={reducir ? undefined : { y, scale: escala }}>
        <Image src={HERO.foto.src} alt={HERO.foto.alt} fill priority sizes="100vw" className="object-cover object-[56%_center]" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(11_23_40/0.96)_0%,rgb(11_23_40/0.7)_45%,rgb(11_23_40/0.45)_100%)]" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-14 pt-[calc(var(--header-h)+3rem)] md:px-8 md:pb-20">
        <h1 className="display max-w-[15ch] text-[clamp(2.4rem,7.4vw,5.4rem)]">
          {palabras.map((p, i) => (
            <span key={i}>
              <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <span className="entra-palabra inline-block" style={{ animationDelay: `${0.1 + i * 0.06}s` }}>{p}</span>
              </span>
              {i < palabras.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>
        <p className="entra mt-6 max-w-[48ch] text-[1.1rem] leading-relaxed text-white/85 md:text-[1.25rem]" style={{ animationDelay: "0.45s" }}>
          {HERO.bajada}
        </p>
        <div className="entra mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "0.55s" }}>
          <a href={CTA.href} className="btn btn-primario">
            {CTA.label}
            <ArrowRight size={18} weight="bold" />
          </a>
          <a href={t.whatsapp()} target="_blank" rel="noopener noreferrer" className="btn btn-linea text-white">
            <WhatsappLogo size={20} weight="fill" />
            {t.ui.whatsappContactar}
          </a>
        </div>
        <ul className="entra mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-white/85" style={{ animationDelay: "0.7s" }}>
          {CONFIANZA.map((c) => <li key={c} className="border-l border-gold pl-3">{c}</li>)}
        </ul>
      </div>
    </section>
  );
}
