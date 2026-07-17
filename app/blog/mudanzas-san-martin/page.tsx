import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en San Martín GBA | Marino Mudanzas",
  description: "Mudanzas en San Martín: Villa Ballester, Villa Maipú y José León Suárez. Precio cerrado sin sorpresas para todo el partido. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en San Martín", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-martin" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en San Martín GBA | Marino Mudanzas",
  "description": "Mudanzas en San Martín: Villa Ballester, Villa Maipú y José León Suárez. Precio cerrado sin sorpresas para todo el partido.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-martin",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-martin" },
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
      "name": "¿Cuánto cuesta una mudanza en San Martín?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en San Martín ronda los $170.000–$270.000. Una casa puede ir desde $280.000 según el volumen. El precio es cerrado desde el presupuesto e incluye el traslado desde o hacia CABA, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubren Villa Ballester, Villa Maipú y José León Suárez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, cubrimos todo el partido de San Martín: San Martín centro, Villa Ballester, Villa Maipú, Villa Lynch, José León Suárez y Villa del Parque (GBA). El precio es cerrado desde el presupuesto independientemente de la localidad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo acceden a San Martín desde CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El acceso principal desde CABA es por el Acceso Oeste (Autopista) o por Av. San Martín. Desde Flores, nuestra base, el acceso es muy directo. Coordinamos la ruta más eficiente según la localidad y el horario."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en San Martín?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. San Martín centro y Villa Ballester tienen alta rotación de inquilinos y los turnos de fin de mes se llenan rápido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de San Martín a CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es una de las rutas más frecuentes del corredor norte-oeste. El traslado entre San Martín y cualquier barrio de CABA está incluido en el precio cerrado del presupuesto."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en San Martín</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>San Martín es uno de los partidos más industriales e históricos del norte del GBA, con una importante zona residencial en Villa Ballester, Villa Maipú y Villa Lynch. Su ubicación estratégica entre CABA y el corredor norte del GBA lo convierte en un punto de partida y destino frecuente en las rutas de mudanza del noroeste. En Marino Mudanzas realizamos mudanzas en todo el partido desde nuestra base en Flores, con acceso directo por el Acceso Oeste o Av. San Martín.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en San Martín</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Villa Ballester</strong> — barrio residencial de clase media con casas y edificios. Alta demanda de mudanzas por su buena conectividad con CABA.</li>
              <li><strong>Villa Maipú</strong> — zona de casas de familia con jardín. Calles amplias y buen acceso para camiones de todos los tamaños.</li>
              <li><strong>Villa Lynch</strong> — barrio residencial con edificios y casas. Buen acceso desde CABA por Av. San Martín.</li>
              <li><strong>San Martín centro</strong> — zona comercial con edificios y alta rotación de inquilinos en departamentos de alquiler.</li>
              <li><strong>José León Suárez</strong> — localidad con casas de familia y buen acceso vehicular.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en San Martín?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Coordinación con el consorcio o encargado del edificio</li>
              <li>Camión del tamaño adecuado al volumen y la localidad</li>
              <li>Traslado entre San Martín y CABA con precio cerrado</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Localidades de San Martín que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Villa Ballester</strong> — la localidad más demandada del partido</li>
              <li><strong>Villa Maipú</strong> — casas con jardín y calles amplias</li>
              <li><strong>Villa Lynch</strong> — residencial con buen acceso desde CABA</li>
              <li><strong>San Martín centro</strong> — zona comercial con alta rotación</li>
              <li><strong>José León Suárez</strong> — casas de familia, igualmente cubierta</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en San Martín</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en San Martín?</h3>
            <p>Un 2 ambientes ronda los $170.000–$270.000. Una casa puede ir desde $280.000 según el volumen. Precio cerrado que incluye el traslado desde o hacia CABA.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cubren Villa Ballester, Villa Maipú y José León Suárez?</h3>
            <p>Sí, todo el partido. Precio cerrado sin importar la localidad.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo acceden a San Martín desde CABA?</h3>
            <p>Por el Acceso Oeste (autopista) o por Av. San Martín. Desde nuestra base en Flores el acceso es muy directo. Coordinamos la ruta más eficiente para cada localidad.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. Villa Ballester y el centro tienen alta rotación de inquilinos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de San Martín a CABA?</h3>
            <p>Sí, una de las rutas más frecuentes del noroeste. El traslado a CABA está incluido en el precio cerrado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos la localidad, el tipo de propiedad y el piso. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-tres-de-febrero" className="text-gold hover:underline text-sm">Tres de Febrero</Link>
              <Link href="/blog/mudanzas-vicente-lopez" className="text-gold hover:underline text-sm">Vicente López</Link>
              <Link href="/blog/mudanzas-moron" className="text-gold hover:underline text-sm">Morón</Link>
              <Link href="/blog/mudanzas-hurlingham" className="text-gold hover:underline text-sm">Hurlingham</Link>
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Belgrano</Link>
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
