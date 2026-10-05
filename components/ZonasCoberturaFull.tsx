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

type Zona = { name: string; slug: string; text: string };

const ZonaCard = ({ zona }: { zona: Zona }) => (
  <Link
    href={`/blog/${zona.slug}`}
    data-reveal="up"
    className="group spotlight relative block overflow-hidden rounded-2xl border border-border bg-card p-6 transition-[transform,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_24px_50px_-28px_hsl(var(--navy)/0.45)]"
  >
    {/* Navy wash that rises from the bottom on hover */}
    <span
      aria-hidden
      className="absolute inset-0 origin-bottom scale-y-0 bg-navy transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
    />
    <span className="relative z-[1] block">
      <span className="flex items-center gap-3 mb-3">
        <span className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 transition-colors duration-500 group-hover:bg-gold/20">
          <span aria-hidden className="absolute inset-0 rounded-full border border-gold/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping-ring" />
          <MapPin className="w-5 h-5 text-gold flex-shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5" />
        </span>
        <h4 className="font-display text-lg font-bold text-foreground group-hover:text-gold transition-colors duration-500">{zona.name}</h4>
      </span>
      <p className="font-body text-muted-foreground text-sm leading-relaxed mb-3 transition-colors duration-500 group-hover:text-primary-foreground/75">{zona.text}</p>
      <span className="font-body text-gold text-sm flex items-center gap-1 opacity-0 -translate-x-2 max-md:opacity-100 max-md:translate-x-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
        Ver guía <ArrowRight className="w-3 h-3" />
      </span>
    </span>
  </Link>
);

const GroupTitle = ({ children }: { children: string }) => (
  <div data-reveal="left" className="mb-8 flex items-center gap-5">
    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">{children}</h3>
    <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent" />
  </div>
);

const ZonasCoberturaFull = () => {
  return (
    <section id="zonas-cobertura" className="relative overflow-hidden py-24 md:py-32 bg-secondary">
      <div aria-hidden className="aura -right-40 top-40 h-[28rem] w-[28rem] bg-gold/10" />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          {/* Radar pulse emblem */}
          <div data-reveal="scale" aria-hidden className="relative mx-auto mb-8 flex h-16 w-16 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-gold/50 animate-ping-ring" />
            <span className="absolute inset-0 rounded-full border border-gold/50 animate-ping-ring" style={{ animationDelay: "0.8s" }} />
            <span className="absolute inset-0 rounded-full border border-gold/50 animate-ping-ring" style={{ animationDelay: "1.6s" }} />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-navy">
              <MapPin className="h-6 w-6 text-gold" />
            </span>
          </div>
          <h2 data-reveal="up" className="section-title text-3xl md:text-5xl text-foreground mb-5 max-w-4xl mx-auto delay-reveal-1">
            Empresa de mudanzas en Buenos Aires — Cobertura en toda la ciudad
          </h2>
          <p data-reveal="up" className="font-body text-muted-foreground text-lg max-w-3xl mx-auto delay-reveal-2">
            Operamos en los principales barrios de CABA y localidades del Gran Buenos Aires con conocimiento local de calles, normativas y logística de cada zona.
          </p>
        </div>

        <GroupTitle>Ciudad Autónoma de Buenos Aires</GroupTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-20" data-reveal-stagger="50">
          {zonasCaba.map((zona) => (
            <ZonaCard key={zona.name} zona={zona} />
          ))}
        </div>

        <GroupTitle>Gran Buenos Aires</GroupTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" data-reveal-stagger="50">
          {zonasGba.map((zona) => (
            <ZonaCard key={zona.name} zona={zona} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZonasCoberturaFull;
