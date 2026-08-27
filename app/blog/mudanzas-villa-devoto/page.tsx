import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Villa Devoto Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Villa Devoto: barrio familiar con casas de dos plantas y buen acceso vehicular. Cerca de nuestra base en Flores. Precio cerrado. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Villa Devoto", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-devoto" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Villa Devoto Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Villa Devoto: barrio familiar con casas de dos plantas y buen acceso vehicular. Cerca de nuestra base en Flores.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-devoto",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-devoto" },
  "author": { "@type": "Organization", "name": "Marino Mudanzas", "url": "https://www.mudanzasmarino.com.ar" },
  "publisher": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "logo": { "@type": "ImageObject", "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png" }
  }
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Villa Devoto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una casa de dos plantas en Villa Devoto puede ir a consultar según el caso según el volumen. Un departamento de 2 ambientes se cotiza según el caso. Nuestra base está en Flores, a pocos minutos del barrio, lo que reduce los costos de traslado respecto a empresas del centro. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo es el acceso para camiones en Villa Devoto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muy bueno. Las avenidas principales como Av. Álvarez Thomas, Av. Francisco Beiró y Av. Chilavert permiten el ingreso de camiones de todos los tamaños. Las calles internas son amplias y tranquilas, sin el tráfico de los barrios más céntricos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de casas con jardín en Villa Devoto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es lo más frecuente en Villa Devoto. Las casas del barrio suelen tener jardín, garaje y dos plantas. Contamos con el personal y los vehículos necesarios para manejar el volumen y las escaleras internas. El presupuesto se ajusta al volumen real."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Villa Devoto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Villa Devoto tiene baja rotación de inquilinos comparado con barrios más céntricos, pero para fin de mes o sábados conviene reservar con 10–15 días de anticipación para asegurar el turno."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de Villa Devoto hacia el GBA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Por la ubicación del barrio en el noroeste de CABA, la salida hacia el GBA oeste (Morón, La Matanza, Merlo) es muy accesible. Realizamos mudanzas hacia cualquier punto del GBA con precio cerrado desde el presupuesto."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Villa Devoto</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Villa Devoto es uno de los barrios más tranquilos y familiares del noroeste de Buenos Aires. Sus calles arboladas, las casas de dos plantas con jardín y garaje, y la baja densidad de tráfico lo hacen uno de los barrios más cómodos para operar con camiones. Además, nuestra base está en Flores, a pocos minutos del barrio, lo que nos permite llegar antes y a menor costo que empresas ubicadas en el centro. En Marino Mudanzas realizamos mudanzas en Villa Devoto con la experiencia y el equipo que cada tipo de propiedad requiere.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Villa Devoto</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Casas de dos plantas con jardín</strong> — la tipología más común del barrio. Suelen tener mucho volumen acumulado, escalera interna y muebles de exterior. Personal suficiente para este tipo de mudanzas.</li>
              <li><strong>Chalets y casas chorizo</strong> — propiedades de los años 40–60 con ambientes en hilera y buen acceso desde la vereda.</li>
              <li><strong>Edificios de departamentos</strong> — sobre las avenidas principales, con buenas instalaciones y mayor accesibilidad.</li>
              <li><strong>Calles amplias y tranquilas</strong> — a diferencia de barrios como Palermo o Almagro, Villa Devoto tiene muy buen acceso vehicular en casi toda su extensión.</li>
              <li><strong>Baja rotación de inquilinos</strong> — zona de propietarios y familias. Las mudanzas suelen ser de mayor volumen y menos frecuentes que en barrios de estudiantes.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Villa Devoto?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles de gran porte (roperos, camas dobles, bibliotecas)</li>
              <li>Embalaje de objetos frágiles, vajilla, cuadros y espejos</li>
              <li>Traslado de muebles de jardín y elementos de exterior</li>
              <li>Personal adecuado para casas de dos plantas</li>
              <li>Camión del tamaño adecuado al volumen</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Villa Devoto que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Villa Devoto histórico</strong> — zona de casas de familia alrededor de Plaza Arenales, el corazón del barrio</li>
              <li><strong>Av. Francisco Beiró</strong> — eje comercial con departamentos y buena accesibilidad</li>
              <li><strong>Av. Álvarez Thomas</strong> — corredor norte del barrio con edificios y PHs</li>
              <li><strong>Límite Villa del Parque</strong> — zona de transición con tipología similar, igualmente cubierta</li>
              <li><strong>Límite Monte Castro</strong> — sector sur del barrio con buen acceso desde Av. Chilavert</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Villa Devoto</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Villa Devoto?</h3>
            <p>Una casa de dos plantas puede ir a consultar según el caso según el volumen. Un 2 ambientes se cotiza según el caso. Nuestra base está en Flores, a minutos del barrio, lo que reduce el costo de traslado respecto a empresas del centro.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo es el acceso para camiones en Villa Devoto?</h3>
            <p>Muy bueno. Las avenidas principales permiten camiones de todos los tamaños y las calles internas son amplias y tranquilas. No hay los problemas de tráfico ni las restricciones de estacionamiento de barrios más céntricos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de casas con jardín?</h3>
            <p>Sí, es lo más frecuente en Villa Devoto. Contamos con personal y vehículos para el volumen de una casa completa, incluyendo muebles de exterior y elementos de jardín.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. El barrio tiene baja rotación pero los turnos de fin de mes en la zona se llenan.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de Villa Devoto hacia el GBA?</h3>
            <p>Sí. La ubicación noroeste del barrio hace muy accesible la salida hacia el GBA oeste. Realizamos mudanzas hacia Morón, La Matanza, Merlo y toda la zona con precio cerrado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-flores" className="text-gold hover:underline text-sm">Flores</Link>
              <Link href="/blog/mudanzas-villa-del-parque" className="text-gold hover:underline text-sm">Villa del Parque</Link>
              <Link href="/blog/mudanzas-monte-castro" className="text-gold hover:underline text-sm">Monte Castro</Link>
              <Link href="/blog/mudanzas-villa-urquiza" className="text-gold hover:underline text-sm">Villa Urquiza</Link>
              <Link href="/blog/mudanzas-liniers" className="text-gold hover:underline text-sm">Liniers</Link>
              <Link href="/mudanzas-residenciales" className="text-gold hover:underline text-sm">Mudanzas residenciales</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
