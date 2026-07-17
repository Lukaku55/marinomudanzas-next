import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const zonasCaba = [
  { name: "Flores", slug: "mudanzas-flores", text: "Nuestro barrio de origen desde 1950. Base en Av. Alberdi 2968. Guardamuebles propio y llegada más rápida que cualquier competidor." },
  { name: "Palermo", slug: "mudanzas-palermo", text: "Palermo Soho, Hollywood y Chico. Embalaje incluido, mudanzas por soga en PHs y precio cerrado sin sorpresas." },
  { name: "Belgrano", slug: "mudanzas-belgrano", text: "Belgrano R, C y Chico. Muebles de alto valor, consorcios exigentes y coordinación previa incluida." },
  { name: "Caballito", slug: "mudanzas-caballito", text: "El barrio más céntrico de CABA. Edificios de todas las épocas, escaleras angostas y precio cerrado." },
  { name: "Recoleta", slug: "mudanzas-recoleta", text: "Edificios de época, ascensores de reja, pisos de mármol y antigüedades. Especialistas con precio cerrado." },
  { name: "Almagro", slug: "mudanzas-almagro", text: "Edificios de los años 40-50, calles angostas y tráfico en Corrientes. Sabemos cómo movernos en el barrio." },
  { name: "Boedo", slug: "mudanzas-boedo", text: "Barrio tradicional con casas de jardín, edificios de los 60 y calles tranquilas. Presupuesto sin cargo." },
  { name: "Villa Crespo", slug: "mudanzas-villa-crespo", text: "PHs recicladas, lofts y edificios nuevos. El barrio que más crece en CABA, con alta rotación de inquilinos." },
  { name: "San Telmo", slug: "mudanzas-san-telmo", text: "El barrio más exigente de CABA. Casas chorizo, adoquines y antigüedades. Especialistas con precio cerrado." },
  { name: "Villa Urquiza", slug: "mudanzas-villa-urquiza", text: "Calles arboladas, casas de gran porte y el mejor acceso para camiones de CABA. Precio cerrado." },
  { name: "Colegiales", slug: "mudanzas-colegiales", text: "Calles angostas, PHs con escalera y edificios de los 60. Vehículo adecuado para cada tipo de acceso." },
  { name: "Núñez", slug: "mudanzas-nunez", text: "Torres frente al río, casas con jardín y consorcios exigentes. Coordinamos todo previamente." },
  { name: "Chacarita", slug: "mudanzas-chacarita", text: "Barrio residencial con buena accesibilidad. Casas, PHs y edificios de departamentos cerca de Palermo." },
  { name: "Saavedra", slug: "mudanzas-saavedra", text: "Zona norte tranquila con casas de familia y buena accesibilidad para camiones de todos los tamaños." },
  { name: "Villa Devoto", slug: "mudanzas-villa-devoto", text: "Barrio familiar con casas de dos plantas y buen acceso vehicular. Servicio completo desde el presupuesto." },
  { name: "Liniers", slug: "mudanzas-liniers", text: "Zona comercial y residencial del oeste de CABA. Conocemos cada calle y acceso del barrio." },
];

const zonasGba = [
  { name: "Vicente López", slug: "mudanzas-vicente-lopez", text: "Cobertura completa en Olivos, Munro, Florida y La Lucila. Servicio de primera calidad en el norte del GBA." },
  { name: "San Isidro", slug: "mudanzas-san-isidro", text: "Camiones adaptados a barrios residenciales y countries. Servicio de embalaje y guardamuebles disponible." },
  { name: "Tigre", slug: "mudanzas-tigre", text: "Logística especializada para barrios cerrados y Nordelta. Consultá tu presupuesto sin cargo." },
  { name: "Morón", slug: "mudanzas-moron", text: "Servicio rápido desde nuestra base en Flores. Cobertura en todo el corredor oeste del GBA." },
  { name: "La Matanza", slug: "mudanzas-la-matanza", text: "Cobertura en Ramos Mejía, San Justo, Isidro Casanova y toda la zona. Personal y embalaje profesional." },
  { name: "Avellaneda", slug: "mudanzas-avellaneda", text: "Servicio integral hacia el sur del GBA. Conocemos las rutas de acceso y la regulación de carga de la zona." },
  { name: "Quilmes", slug: "mudanzas-quilmes", text: "Camiones de distintos tamaños y personal experimentado para toda la zona sur del GBA." },
  { name: "Lanús", slug: "mudanzas-lanus", text: "Cobertura completa en Lanús Este y Oeste. Presupuesto sin cargo para mudanzas en todo el partido." },
  { name: "San Martín", slug: "mudanzas-san-martin", text: "Cobertura en Villa Maipú, Villa Lynch y toda la zona. Servicio completo con precio cerrado." },
  { name: "Moreno", slug: "mudanzas-moreno", text: "Mudanzas al oeste del GBA con personal y equipo propio. Precio cerrado sin sorpresas." },
  { name: "Lomas de Zamora", slug: "mudanzas-lomas-de-zamora", text: "Servicio hacia el sur del GBA. Camiones de distintos tamaños y presupuesto sin cargo." },
  { name: "Pilar", slug: "mudanzas-pilar", text: "Logística para countries y barrios cerrados del norte del GBA. Coordinación previa incluida." },
];

const ZonasCoberturaFull = () => {
  return (
    <section id="zonas-cobertura" className="py-20 md:py-28 bg-background">
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
            <Link
              key={zona.name}
              href={`/blog/${zona.slug}`}
              className="group bg-card rounded-xl p-6 border border-border hover:border-gold/40 transition-colors block"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <h4 className="font-display text-lg font-bold text-foreground group-hover:text-gold transition-colors">{zona.name}</h4>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-3">{zona.text}</p>
              <span className="font-body text-gold text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Ver guía <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>

        <h3 className="font-display text-2xl font-bold text-foreground mb-6">Gran Buenos Aires</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zonasGba.map((zona) => (
            <Link
              key={zona.name}
              href={`/blog/${zona.slug}`}
              className="group bg-card rounded-xl p-6 border border-border hover:border-gold/40 transition-colors block"
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <h4 className="font-display text-lg font-bold text-foreground group-hover:text-gold transition-colors">{zona.name}</h4>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-3">{zona.text}</p>
              <span className="font-body text-gold text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Ver guía <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZonasCoberturaFull;
