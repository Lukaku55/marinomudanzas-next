import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
          ¿Listo Para Tu Mudanza?
        </h2>
        <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Contactanos hoy y recibí tu presupuesto sin cargo. 
          Estamos disponibles para atenderte y resolver todas tus consultas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20cotizar%20una%20mudanza"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[hsl(142,70%,35%)] text-primary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            WhatsApp: 11-5450-7435
          </a>
          <a
            href="tel:+541146111818"
            className="flex items-center gap-3 bg-navy text-primary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
          >
            <Phone className="w-6 h-6" />
            Llamar: 4611-1818
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
