import { MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const barrios = [
  {
    name: "Flores",
    text: "Nuestra base de operaciones. Conocemos cada calle, horario de carga y descarga, y normativa municipal del barrio.",
  },
  {
    name: "Caballito",
    text: "Uno de los barrios con más mudanzas de CABA. Manejamos los accesos por Rivadavia y las calles internas con total fluidez.",
  },
  {
    name: "Almagro",
    text: "Zona de edificios y pasillos angostos. Contamos con experiencia en movimientos por soga y logística de espacios reducidos.",
  },
  {
    name: "Ramos Mejía",
    text: "Principal punto de referencia en Zona Oeste. Realizamos fletes y mudanzas con tiempos optimizados gracias a nuestra flota propia.",
  },
  {
    name: "Haedo",
    text: "Cobertura constante en la zona. Conocemos las rutas de acceso y las regulaciones locales para carga y descarga.",
  },
];

const ZonasCoberturaSection = () => {
  return (
    <section id="cobertura" className="py-20 md:py-28 bg-background">
      <Helmet>
        <meta name="description" content="Zonas de cobertura de Marino Mudanzas: Flores, Caballito, Almagro, Ramos Mejía, Haedo y todo CABA y GBA." />
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Zonas de Cobertura en CABA y GBA
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Presencia en los principales barrios de Buenos Aires con conocimiento
            local de calles, normativas y logística de cada zona
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {barrios.map((barrio) => (
            <div
              key={barrio.name}
              className="bg-card rounded-xl p-6 border border-border hover:border-gold/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <h3 className="font-display text-lg font-bold text-foreground">
                  {barrio.name}
                </h3>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {barrio.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZonasCoberturaSection;
