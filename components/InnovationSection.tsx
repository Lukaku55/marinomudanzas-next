import { Sparkles } from "lucide-react";

const InnovationSection = () => {
  return (
    <section className="py-16 md:py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="w-10 h-10 text-gold mx-auto mb-6" />
          <h2 className="font-display text-2xl md:text-4xl font-bold text-primary-foreground mb-6">
            Al Servicio de Nuestros Clientes Desde 1950
          </h2>
          <p className="font-body text-primary-foreground/85 text-lg leading-relaxed">
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
