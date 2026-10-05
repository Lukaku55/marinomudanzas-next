"use client";
import { CheckCircle } from "lucide-react";
import { CountUp, Ornament } from "@/components/fx/primitives";

const features = [
  "Más de 80 años de experiencia",
  "Personal capacitado y profesional",
  "Flota propia de camiones",
  "Cobertura en CABA y GBA",
  "Presupuesto sin compromiso",
  "Atención personalizada",
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="relative overflow-hidden py-24 md:py-32 bg-background">
      <div aria-hidden className="aura right-0 top-1/3 h-[30rem] w-[30rem] bg-gold/10" />
      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <div data-reveal="up" className="mb-6"><Ornament /></div>
            <h2 data-reveal="up" className="section-title text-3xl md:text-6xl text-foreground mb-8 delay-reveal-1">
              ¿Por Qué Elegirnos?
            </h2>
            <p data-reveal="up" className="font-body text-muted-foreground text-lg mb-10 leading-relaxed delay-reveal-2">
              En <strong className="text-foreground">Marino Mudanzas</strong> entendemos que cada mudanza es única.
              Por eso ofrecemos un servicio personalizado, cuidando cada detalle
              para que tu experiencia sea impecable de principio a fin.
              Con más de 80 años de trayectoria, somos especialistas en <strong className="text-foreground">mudanzas particulares</strong>,
              traslados de oficinas y servicios de guardamuebles. Contamos con flota propia para <strong className="text-foreground">fletes</strong> en
              Flores, Caballito y todo Buenos Aires. Realizamos embalajes profesionales y movimientos
              por soga con la máxima seguridad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" data-reveal-stagger="80">
              {features.map((feature, index) => (
                <div
                  key={index}
                  data-reveal="left"
                  className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 -mx-3 transition-colors duration-300 hover:border-gold/30 hover:bg-gold/5"
                >
                  <span className="relative flex h-7 w-7 flex-shrink-0 items-center justify-center">
                    <span aria-hidden className="absolute inset-0 rounded-full bg-gold/15 scale-0 transition-transform duration-500 group-hover:scale-100" />
                    <CheckCircle className="relative w-5 h-5 text-gold transition-transform duration-500 group-hover:rotate-[360deg]" />
                  </span>
                  <span className="font-body text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="relative">
            {/* Decorative rotating ring behind the stats */}
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold/25 animate-spin-slow" style={{ animationDuration: "70s" }} />
            <div className="relative grid grid-cols-2 gap-4 md:gap-6" data-reveal-stagger="120">
              {[
                { number: "+150.000", label: "Mudanzas Realizadas" },
                { number: "80+", label: "Años de Experiencia" },
                { number: "100%", label: "Clientes Satisfechos" },
                { number: "24hs", label: "Respuesta Inmediata" },
              ].map((stat, index) => (
                <div
                  key={index}
                  data-reveal="scale"
                  className={index % 2 === 1 ? "translate-y-8" : ""}
                >
                  <div
                    className="group gold-border-spin relative overflow-hidden bg-navy rounded-3xl p-6 md:p-9 text-center shadow-[0_30px_60px_-30px_hsl(var(--navy)/0.9)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2"
                    style={{ animationDelay: `${index * -1.5}s` }}
                  >
                    <div aria-hidden className="absolute inset-0 grain" />
                    <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />
                    <div className="relative font-display text-3xl md:text-5xl font-bold text-gold-shine mb-3">
                      <CountUp value={stat.number} />
                    </div>
                    <div className="relative font-body text-xs md:text-sm text-primary-foreground/80 uppercase tracking-[0.18em]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
