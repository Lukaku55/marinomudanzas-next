"use client";
import { useRef } from "react";
import { MessageCircle, ArrowDown, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "motion/react";
import { Ornament, SplitWords } from "@/components/fx/primitives";

// Deterministic positions so server and client markup match
const dust = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 53) % 100}%`,
  size: 2 + ((i * 7) % 4),
  delay: `${(i * 1.7) % 12}s`,
  duration: `${12 + ((i * 5) % 10)}s`,
  drift: `${((i * 37) % 80) - 40}px`,
  opacity: 0.35 + ((i * 13) % 50) / 100,
}));

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="inicio" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-navy-dark">
      <Helmet>
        <title>Marino Mudanzas | 80 años de experiencia en CABA y GBA</title>
        <meta name="description" content="Empresa de mudanzas en Buenos Aires con más de 80 años. Mudanzas residenciales, de oficinas y guardamuebles en CABA y GBA. Presupuesto sin cargo. Llame al 4611-1818." />
      </Helmet>
      {/* Background image: slow Ken Burns loop + scroll parallax */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: imageY }}>
        <picture>
          <source media="(max-width: 768px)" srcSet="/hero-mudanzas-mobile.webp" type="image/webp" />
          <source srcSet="/hero-mudanzas.webp" type="image/webp" />
          <img
            src="/hero-mudanzas.jpg"
            alt="Camión de Marino Mudanzas en CABA - Servicio de flete y embalaje profesional"
            className="w-full h-full object-cover"
            style={{ animation: "kenburns 24s ease-in-out infinite alternate" }}
            fetchPriority="high"
          />
        </picture>
      </motion.div>
      <div className="absolute inset-0 bg-navy/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/40" />
      <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
      <div aria-hidden className="aura -right-32 top-10 h-[32rem] w-[32rem] aura-blue" />
      <div aria-hidden className="aura -left-40 bottom-0 h-[26rem] w-[26rem] bg-navy-light/60" style={{ animationDelay: "-6s" }} />

      {/* Floating gold dust */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {dust.map((d, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-gold-light"
            style={{
              left: d.left,
              width: d.size,
              height: d.size,
              boxShadow: "0 0 10px hsl(var(--gold) / 0.8)",
              animation: `dust ${d.duration} linear ${d.delay} infinite both`,
              ["--dust-x" as string]: d.drift,
              ["--dust-o" as string]: d.opacity,
            }}
          />
        ))}
      </div>

      {/* Rotating ornamental rings */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10 animate-spin-slow" style={{ animationDuration: "80s" }}>
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gold/70" />
      </div>
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.07] animate-spin-slow" style={{ animationDuration: "120s", animationDirection: "reverse" }} />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 container mx-auto px-4 text-center py-32">
        <div className="mb-8 flex justify-center" style={{ animation: "fade-up 1s 0.1s var(--ease-out-expo) both" }}>
          <Ornament />
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-8 leading-[1.08] max-w-6xl mx-auto">
          <SplitWords text="Empresa de mudanzas en Buenos Aires —" delay={150} step={70} />{" "}
          <SplitWords text="Más de 80 años de experiencia" delay={600} step={70} wordClassName="text-gold-shine" />
        </h1>
        <p
          className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ animation: "fade-up 1.1s 1.1s var(--ease-out-expo) both" }}
        >
          Más de 80 años brindando un servicio profesional, seguro y puntual.
          Hacemos que tu mudanza sea simple y sin estrés.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: "fade-up 1.1s 1.3s var(--ease-out-expo) both" }}
        >
          <span data-magnetic="0.25" className="inline-flex transition-transform duration-300 ease-out">
            <a
              href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20cotizar%20una%20mudanza"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-shimmer !px-9 !py-4 text-lg font-bold"
            >
              <MessageCircle className="w-5 h-5 relative z-[2]" />
              <span className="relative z-[2]">Pedí tu Presupuesto Gratis</span>
            </a>
          </span>
          <span data-magnetic="0.25" className="inline-flex transition-transform duration-300 ease-out">
            <a href="tel:+541146111818" className="btn-ghost !px-9 !py-4 text-lg">
              <Phone aria-hidden className="w-5 h-5" />
              Llamanos: 4611-1818
            </a>
          </span>
        </div>

        <a
          href="#servicios"
          className="group mt-20 inline-flex flex-col items-center gap-3 text-primary-foreground/60 hover:text-gold transition-colors"
          style={{ animation: "fade-up 1s 1.6s var(--ease-out-expo) both" }}
        >
          <span className="relative block h-14 w-px overflow-hidden bg-white/15">
            <span className="absolute inset-0 bg-gold" style={{ animation: "scroll-line 2.4s ease-in-out infinite" }} />
          </span>
          <ArrowDown className="w-6 h-6 animate-float" style={{ animationDuration: "2.4s" }} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
