import { MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const zonasCaba = [
  { name: "Flores", text: "Realizamos mudanzas en Flores con camiones de distintos tamaños, personal capacitado y servicio de embalaje profesional. Nuestra base de operaciones está en este barrio, por lo que conocemos cada calle y normativa local." },
  { name: "Palermo", text: "Realizamos mudanzas en Palermo con camiones de distintos tamaños, personal capacitado y servicio de embalaje. Amplia experiencia en edificios de Palermo Hollywood, Soho y Chico." },
  { name: "Belgrano", text: "Realizamos mudanzas en Belgrano con personal especializado en edificios de categoría. Conocemos las regulaciones de carga y descarga de Belgrano R y Belgrano C." },
  { name: "Caballito", text: "Realizamos mudanzas en Caballito con camiones adaptados a calles internas y avenidas. Uno de los barrios donde más operamos por su alta demanda de mudanzas." },
  { name: "Villa Crespo", text: "Realizamos mudanzas en Villa Crespo con servicio puerta a puerta. Experiencia en edificios antiguos con pasillos angostos y escaleras sin ascensor." },
  { name: "San Telmo", text: "Realizamos mudanzas en San Telmo con logística especial para la zona de calles empedradas y edificios históricos. Cuidamos cada detalle del traslado." },
  { name: "Recoleta", text: "Realizamos mudanzas en Recoleta con personal capacitado para edificios de alto standing. Coordinación con encargados y horarios de carga controlados." },
  { name: "Almagro", text: "Realizamos mudanzas en Almagro con experiencia en movimientos por soga y maniobras en espacios reducidos. Servicio de embalaje incluido." },
  { name: "Villa Urquiza", text: "Realizamos mudanzas en Villa Urquiza con camiones de distintos tamaños. Zona de gran crecimiento edilicio donde operamos con frecuencia." },
  { name: "Boedo", text: "Realizamos mudanzas en Boedo con servicio integral de embalaje, carga y descarga. Conocemos las particularidades de cada cuadra del barrio." },
];

const zonasGba = [
  { name: "Vicente López", text: "Realizamos mudanzas en Vicente López con servicio de primera calidad. Cobertura completa en Olivos, Munro, Florida y La Lucila." },
  { name: "San Isidro", text: "Realizamos mudanzas en San Isidro con camiones adaptados a barrios residenciales y countries. Servicio de embalaje y guardamuebles disponible." },
  { name: "Tigre", text: "Realizamos mudanzas en Tigre y Nordelta con logística especializada para barrios cerrados. Consultá tu presupuesto sin cargo." },
  { name: "Morón", text: "Realizamos mudanzas en Morón y alrededores con servicio rápido desde nuestra base en Flores. Flota propia con tiempos optimizados." },
  { name: "La Matanza", text: "Realizamos mudanzas en La Matanza con cobertura en Ramos Mejía, San Justo, Isidro Casanova y toda la zona. Personal y embalaje profesional." },
  { name: "Avellaneda", text: "Realizamos mudanzas en Avellaneda con servicio integral. Conocemos las rutas de acceso y regulaciones para carga y descarga en la zona." },
  { name: "Quilmes", text: "Realizamos mudanzas en Quilmes y zona sur del GBA con camiones de distintos tamaños y personal experimentado." },
];

const ZonasCoberturaFull = () => {
  return (
    <section id="zonas-cobertura" className="py-20 md:py-28 bg-background">
      <Helmet>
        <meta name="description" content="Zonas de cobertura de Marino Mudanzas: Flores, Palermo, Belgrano, Caballito, Recoleta, Villa Urquiza, Vicente López, San Isidro, Tigre, Morón y todo CABA y GBA." />
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Empresa de mudanzas en Buenos Aires — Cobertura en toda la ciudad
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-3xl mx-auto">
            Operamos en los principales barrios de CABA y localidades del Gran Buenos Aires con conocimiento local de calles, normativas y logística de cada zona.
          </p>
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mb-6">Ciudad Autónoma de Buenos Aires</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {zonasCaba.map((zona) => (
            <div key={zona.name} className="bg-card rounded-xl p-6 border border-border hover:border-gold/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <h4 className="font-display text-lg font-bold text-foreground">{zona.name}</h4>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{zona.text}</p>
            </div>
          ))}
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mb-6">Gran Buenos Aires</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zonasGba.map((zona) => (
            <div key={zona.name} className="bg-card rounded-xl p-6 border border-border hover:border-gold/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <h4 className="font-display text-lg font-bold text-foreground">{zona.name}</h4>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{zona.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZonasCoberturaFull;
