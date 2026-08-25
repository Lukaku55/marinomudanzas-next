import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Vicente López GBA | Marino Mudanzas",
  description: "Mudanzas en Vicente López: Olivos, La Lucila, Munro y Florida. Casas de gran porte y edificios modernos. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Vicente López", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-vicente-lopez" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Vicente López GBA | Marino Mudanzas",
  "description": "Mudanzas en Vicente López: Olivos, La Lucila, Munro y Florida. Casas de gran porte y edificios modernos. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-vicente-lopez",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-vicente-lopez" },
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
      "name": "¿Cuánto cuesta una mudanza en Vicente López?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una casa de gran porte en Olivos o La Lucila puede ir desde $400.000 según el volumen. Un departamento de 2 ambientes ronda los $180.000–$280.000. El precio incluye el traslado desde y hacia CABA y es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen restricciones de carga en Av. del Libertador o Av. Maipú?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Av. del Libertador y Av. Maipú tienen restricciones de carga y descarga en horarios pico y algunos tramos restringidos los fines de semana. Coordinamos el horario de llegada y la logística para evitar multas o demoras."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de casas de gran porte en Olivos y La Lucila?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es una de nuestras especialidades en el partido. Las casas de Olivos y La Lucila suelen tener jardín, garaje, dos plantas y muebles de alto valor. Contamos con el personal y los vehículos adecuados para este tipo de mudanzas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Vicente López?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para casas de gran porte o mudanzas en edificios con consorcio estricto, 10–15 días. Vicente López tiene demanda constante y los turnos de fin de mes se llenan rápido, especialmente en la zona de Florida y Munro."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan los sábados en Vicente López?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, de lunes a sábado de 8 a 18hs. Para edificios con consorcio es importante verificar si permiten mudanzas en sábado, ya que algunos edificios de la zona tienen restricciones de fin de semana."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Vicente López</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Vicente López es uno de los partidos más residenciales del norte del Gran Buenos Aires, con una mezcla de casas de gran porte en Olivos y La Lucila, edificios modernos en Florida y Munro, y una conexión directa con los barrios del norte de CABA por Av. del Libertador. Es una de las rutas de mudanza más demandadas que realizamos desde nuestra base en Flores, con precio cerrado que incluye el traslado sin costos adicionales.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Vicente López</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Casas de gran porte en Olivos y La Lucila</strong> — propiedades amplias con jardín, garaje, dos plantas y muebles de alto valor. Requieren camiones de mayor capacidad y personal extra.</li>
              <li><strong>Edificios modernos en Florida y Munro</strong> — buenas instalaciones con ascensor y espacios de carga. Consorcios con reglas claras que coordinamos previamente.</li>
              <li><strong>Restricciones en avenidas principales</strong> — Av. del Libertador y Av. Maipú tienen restricciones de carga. Planificamos el horario y la logística para evitar multas.</li>
              <li><strong>Zona de Vicente López centro</strong> — zona comercial y residencial mixta con buena accesibilidad y alta rotación de departamentos en alquiler.</li>
              <li><strong>Boulogne</strong> — zona de transición con mayor accesibilidad y propiedades de distinto porte.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Vicente López?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles de gran porte</li>
              <li>Embalaje de objetos frágiles, vajilla, cuadros y obras de arte</li>
              <li>Coordinación previa con el consorcio o el encargado del edificio</li>
              <li>Traslado de muebles de jardín y elementos de exterior</li>
              <li>Camión del tamaño adecuado al volumen y al tipo de propiedad</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Localidades de Vicente López que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Olivos</strong> — zona residencial premium con casas de gran porte y alto valor</li>
              <li><strong>La Lucila</strong> — barrio tranquilo cerca del río, con propiedades exclusivas</li>
              <li><strong>Florida</strong> — zona familiar con casas y edificios de departamentos</li>
              <li><strong>Munro</strong> — zona de transición con buen acceso vehicular y alta rotación</li>
              <li><strong>Vicente López centro</strong> — zona comercial y residencial con edificios modernos</li>
              <li><strong>Boulogne</strong> — sector con mayor mezcla de tipologías</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Vicente López</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Vicente López?</h3>
            <p>Una casa de gran porte en Olivos o La Lucila puede ir desde $400.000 según el volumen. Un 2 ambientes ronda los $180.000–$280.000. Precio cerrado que incluye el traslado desde o hacia CABA.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen restricciones de carga en Av. del Libertador?</h3>
            <p>Sí, hay restricciones en horarios pico y algunos tramos. Coordinamos el horario y la logística para evitar problemas. Para los edificios sobre Libertador usamos siempre el espacio de carga designado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de casas de gran porte en Olivos?</h3>
            <p>Sí, es una de nuestras especialidades. Casas con jardín, dos plantas y muebles de alto valor. Personal y vehículo del tamaño adecuado al volumen real.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para casas grandes o edificios con consorcio estricto, 10–15 días. Los turnos de fin de mes en Florida y Munro se llenan rápido.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trabajan los sábados en Vicente López?</h3>
            <p>Sí, de lunes a sábado de 8 a 18hs. Verificamos antes si el edificio permite mudanzas en sábado y coordinamos el turno necesario.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Belgrano</Link>
              <Link href="/blog/mudanzas-nunez" className="text-gold hover:underline text-sm">Núñez</Link>
              <Link href="/blog/mudanzas-san-isidro" className="text-gold hover:underline text-sm">San Isidro</Link>
              <Link href="/blog/mudanzas-saavedra" className="text-gold hover:underline text-sm">Saavedra</Link>
              <Link href="/blog/mudanzas-tigre" className="text-gold hover:underline text-sm">Tigre</Link>
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
