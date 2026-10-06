// Generadores de datos estructurados (schema.org / JSON-LD).
import { NEGOCIO, TELEFONO, absUrl } from "./negocio";
import { SERVICIOS } from "./servicios";

const DIAS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const hhmm = (h: number) => `${String(h).padStart(2, "0")}:00`;

/** Barrios y partidos que declaramos como área de servicio. */
const AREAS = ["Palermo", "Belgrano", "Caballito", "Recoleta", "Flores", "Almagro", "Villa Urquiza", "San Telmo", "Boedo", "Villa Crespo", "Núñez", "Colegiales", "Chacarita", "Saavedra", "Villa Devoto", "Liniers", "Mataderos", "Balvanera", "Montserrat", "Retiro", "Barracas", "Parque Patricios", "Nueva Pompeya", "Parque Chacabuco", "Villa Pueyrredón", "Paternal", "Villa Ortúzar", "Vicente López", "San Isidro", "Tigre", "Pilar", "Morón", "La Matanza", "Lomas de Zamora", "Avellaneda", "Quilmes", "Lanús"];

/** Ficha única de la empresa (antes había dos versiones distintas en layout y home). */
export function empresaSchema() {
  const { direccion, geo, horario, stats } = NEGOCIO;
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: NEGOCIO.nombre,
    url: NEGOCIO.url,
    logo: { "@type": "ImageObject", url: absUrl("/logo-marino-nuevo.png") },
    image: absUrl("/hero-mudanzas.jpg"),
    description: `Empresa de mudanzas en Buenos Aires con más de ${stats.anios} años de experiencia. Mudanzas residenciales, de oficinas, guardamuebles y fletes en CABA y GBA. Presupuesto sin cargo.`,
    telephone: TELEFONO.e164,
    priceRange: "$$",
    foundingDate: String(NEGOCIO.fundacion),
    address: {
      "@type": "PostalAddress",
      streetAddress: direccion.calle,
      addressLocality: direccion.barrio,
      addressRegion: direccion.region,
      postalCode: direccion.codigoPostal,
      addressCountry: direccion.pais,
    },
    geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: horario.dias.map((d) => DIAS[d]),
        opens: hhmm(horario.abre),
        closes: hhmm(horario.cierra),
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(stats.rating),
      reviewCount: String(stats.resenas),
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "City", name: "Buenos Aires", sameAs: "https://www.wikidata.org/wiki/Q1486" },
      { "@type": "AdministrativeArea", name: "Gran Buenos Aires" },
      ...AREAS.map((name) => ({ "@type": "AdministrativeArea", name })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Mudanzas en Buenos Aires",
      itemListElement: [SERVICIOS.residencial, SERVICIOS.oficinas, SERVICIOS.guardamuebles, SERVICIOS.interior].map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `${s.nombre} en Buenos Aires`, url: absUrl(s.href) },
      })),
    },
    sameAs: [
      "https://www.google.com/maps/place/Marino+Mudanzas",
      "https://www.facebook.com/mudanzasmarino",
      "https://www.instagram.com/mudanzasmarino",
    ],
  };
}

export function websiteSchema() {
  return { "@context": "https://schema.org", "@type": "WebSite", name: NEGOCIO.nombre, url: NEGOCIO.url };
}

export function faqSchema(faqs: { pregunta: string; respuesta: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.pregunta,
      acceptedAnswer: { "@type": "Answer", text: f.respuesta },
    })),
  };
}
