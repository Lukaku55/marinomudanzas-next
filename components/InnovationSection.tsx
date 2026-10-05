import { Sparkles } from "lucide-react";

const InnovationSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-navy grain">
      <div aria-hidden className="absolute inset-0 grid-lines" />
      <div aria-hidden className="aura left-1/4 -top-20 h-96 w-96 aura-blue" />
      <div aria-hidden className="aura right-0 bottom-0 h-80 w-80 bg-navy-light" style={{ animationDelay: "-8s" }} />
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div data-reveal="scale" className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center">
            <span aria-hidden className="absolute inset-0 rounded-full border border-gold/40 animate-ping-ring" style={{ animationDuration: "3s" }} />
            <span aria-hidden className="absolute inset-0 rounded-full border border-gold/30" />
            <span aria-hidden className="absolute -inset-3 rounded-full border border-dashed border-gold/20 animate-spin-slow" style={{ animationDuration: "25s" }} />
            <Sparkles className="w-10 h-10 text-gold" style={{ animation: "twinkle 2.6s ease-in-out infinite" }} />
          </div>
          <h2 data-reveal="up" className="section-title text-2xl md:text-5xl text-primary-foreground mb-8 delay-reveal-1">
            Al Servicio de Nuestros Clientes <span className="text-gold-shine">Desde 1950</span>
          </h2>
          <p data-reveal="blur" className="font-body text-primary-foreground/85 text-lg md:text-xl leading-relaxed delay-reveal-2">
            En 2026, seguimos innovando. Combinamos nuestra experiencia de 80 años
            con herramientas digitales de logística para que tu mudanza sea más simple.
            Seguimiento en tiempo real, materiales de embalaje sustentables y atención
            personalizada por WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
