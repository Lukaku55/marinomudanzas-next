import { MessageCircle, ArrowDown } from "lucide-react";
import { NEGOCIO, TELEFONO, TEL_HREF, whatsappUrl } from "@/lib/cerebro";
import EstadoAtencion from "@/components/vivo/EstadoAtencion";




const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/hero-mudanzas-mobile.webp" type="image/webp" />
          <source srcSet="/hero-mudanzas.webp" type="image/webp" />
          <img src="/hero-mudanzas.jpg" alt="Camión de Marino Mudanzas en CABA - Servicio de flete y embalaje profesional" className="w-full h-full object-cover" fetchPriority="high" />
        </picture>
        <div className="absolute inset-0 bg-navy/75" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in leading-tight">
          Empresa de mudanzas en Buenos Aires — Más de {NEGOCIO.stats.anios} años de experiencia
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Más de {NEGOCIO.stats.anios} años brindando un servicio profesional, seguro y puntual. 
          Hacemos que tu mudanza sea simple y sin estrés.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gold text-accent-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Pedí tu Presupuesto Gratis
          </a>
          <a
            href={TEL_HREF}
            className="flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Llamanos: {TELEFONO.visible}
          </a>
        </div>

        <a
          href="#contacto"
          className="inline-block mt-6 font-body text-primary-foreground/85 underline underline-offset-4 hover:text-gold transition-colors animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          ¿Qué camión y cuánta gente necesitás? Calculalo en 1 minuto →
        </a>

        <EstadoAtencion className="justify-center mt-6 font-body" />

        <a href="#servicios" aria-label="Ver servicios" className="inline-block mt-10 text-primary-foreground/60 hover:text-gold transition-colors animate-bounce">
          <ArrowDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
