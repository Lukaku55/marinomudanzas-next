import { MapPin } from "lucide-react";

const zonas = [
  {
    title: "Flores y Caballito",
    description:
      "Nuestra zona de influencia directa. Conocemos cada avenida y normativa de carga y descarga.",
  },
  {
    title: "Palermo y Belgrano",
    description:
      "Expertos en mudanzas de departamentos y movimientos por soga en edificios de altura.",
  },
  {
    title: "Zona Oeste (Ramos Mejía, Haedo)",
    description:
      "Traslados rápidos y seguros con flota propia.",
  },
  {
    title: "Microcentro y Retiro",
    description:
      "Especialistas en mudanzas de oficinas con logística coordinada para evitar demoras.",
  },
];

const ZonasSection = () => {
  return (
    <section id="zonas" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Zonas de Especialidad
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Cobertura en <strong className="text-foreground">CABA</strong> y{" "}
            <strong className="text-foreground">Gran Buenos Aires</strong> con
            conocimiento local de cada barrio
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {zonas.map((zona, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-border group"
            >
              <div className="w-12 h-12 bg-gold/15 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {zona.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {zona.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZonasSection;
