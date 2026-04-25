import { MessageCircle, ArrowDown } from "lucide-react";
import { Helmet } from "react-helmet-async";




const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Helmet>
        <title>Marino Mudanzas | 80 años de experiencia en CABA y GBA</title>
        <meta name="description" content="Empresa de mudanzas en Buenos Aires con más de 80 años. Mudanzas residenciales, de oficinas y guardamuebles en CABA y GBA. Presupuesto sin cargo. Llame al 4611-1818." />
      </Helmet>
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
          Empresa de mudanzas en Buenos Aires — Más de 80 años de experiencia
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Más de 80 años brindando un servicio profesional, seguro y puntual. 
          Hacemos que tu mudanza sea simple y sin estrés.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20cotizar%20una%20mudanza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gold text-accent-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Pedí tu Presupuesto Gratis
          </a>
          <a
            href="tel:+541146111818"
            className="flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Llamanos: 4611-1818
          </a>
        </div>

        <a href="#servicios" className="inline-block mt-16 text-primary-foreground/60 hover:text-gold transition-colors animate-bounce">
          <ArrowDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
