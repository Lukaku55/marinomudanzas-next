import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Quilmes GBA | Marino Mudanzas",
  description: "Mudanzas en Quilmes: Bernal, Berazategui y zona sur del GBA. Camiones de distintos tamaños y precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Quilmes", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-quilmes" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Quilmes GBA | Marino Mudanzas",
  "description": "Mudanzas en Quilmes: Bernal, Berazategui y zona sur del GBA. Camiones de distintos tamaños y precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-quilmes",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-quilmes" },
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
      "name": "¿Cuánto cuesta una mudanza en Quilmes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Quilmes centro se cotiza según el caso. Una casa puede ir a consultar según el caso según el volumen. El precio es cerrado desde el presupuesto e incluye el traslado desde o hacia CABA, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo acceden a Quilmes desde CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El acceso principal es por la Autopista Buenos Aires-La Plata, que es rápida y directa. También se puede acceder por Av. Mitre a través de Avellaneda para las zonas más cercanas. Elegimos la ruta más eficiente según la dirección de destino."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas en Bernal y Berazategui además de Quilmes centro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, cubrimos todo el partido de Quilmes incluyendo Bernal, Quilmes Oeste, Don Bosco, Ezpeleta y Berazategui. El precio es cerrado desde el presupuesto independientemente de la localidad del partido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Quilmes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Quilmes centro tiene alta rotación de inquilinos en la zona de edificios y los turnos de fin de mes se llenan rápido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de Quilmes a CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es una de las rutas más frecuentes del sur del GBA. El traslado entre Quilmes y cualquier barrio de CABA está incluido en el precio cerrado del presupuesto."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Quilmes</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Quilmes es uno de los partidos más poblados del sur del Gran Buenos Aires, con una importante zona céntrica de edificios, barrios residenciales en Bernal y Quilmes Oeste, y localidades más alejadas como Ezpeleta y Berazategui. La Autopista Buenos Aires-La Plata es el acceso principal desde CABA, lo que hace al partido muy accesible para mudanzas. En Marino Mudanzas realizamos mudanzas en todo el partido con camiones de distintos tamaños y precio cerrado desde el presupuesto.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Quilmes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Quilmes centro</strong> — zona de edificios de departamentos con alta rotación de inquilinos. Acceso por autopista o Av. Calchaquí. Consorcios con reglas claras.</li>
              <li><strong>Bernal</strong> — barrio residencial con casas y edificios. Buen acceso vehicular en la mayoría de las calles.</li>
              <li><strong>Quilmes Oeste</strong> — zona de casas de familia con jardín. Calles amplias y buen acceso para camiones grandes.</li>
              <li><strong>Don Bosco y Ezpeleta</strong> — localidades con casas de familia y menor densidad.</li>
              <li><strong>Acceso por autopista</strong> — la Autopista Buenos Aires-La Plata es rápida y directa. Elegimos la ruta más eficiente según la dirección.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Quilmes?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Coordinación con el consorcio o encargado del edificio</li>
              <li>Camiones de distintos tamaños según el volumen y la dirección</li>
              <li>Traslado entre Quilmes y CABA con precio cerrado</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Localidades de Quilmes que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Quilmes centro</strong> — zona con mayor demanda y rotación de inquilinos</li>
              <li><strong>Bernal</strong> — residencial con casas y edificios de buen acceso</li>
              <li><strong>Quilmes Oeste</strong> — casas de familia con jardín y calles amplias</li>
              <li><strong>Don Bosco</strong> — barrio tranquilo con casas de familia</li>
              <li><strong>Ezpeleta</strong> — localidad con casas unifamiliares, igualmente cubierta</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Quilmes</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Quilmes?</h3>
            <p>Un 2 ambientes en Quilmes centro se cotiza según el caso. Una casa puede ir a consultar según el caso según el volumen. Precio cerrado que incluye el traslado desde o hacia CABA.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo acceden a Quilmes desde CABA?</h3>
            <p>Por la Autopista Buenos Aires-La Plata, que es rápida y directa. Para zonas más cercanas también por Av. Mitre a través de Avellaneda. Elegimos la ruta más eficiente para cada dirección.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas en Bernal y Berazategui?</h3>
            <p>Sí, cubrimos todo el partido: Bernal, Quilmes Oeste, Don Bosco, Ezpeleta y Berazategui. Precio cerrado sin importar la localidad.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. Quilmes centro tiene alta rotación y los turnos de fin de mes se llenan rápido.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de Quilmes a CABA?</h3>
            <p>Sí, una de las rutas más frecuentes del sur. El traslado a CABA está incluido en el precio cerrado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos la localidad, el tipo de propiedad y el piso. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-avellaneda" className="text-gold hover:underline text-sm">Avellaneda</Link>
              <Link href="/blog/mudanzas-lanus" className="text-gold hover:underline text-sm">Lanús</Link>
              <Link href="/blog/mudanzas-lomas-de-zamora" className="text-gold hover:underline text-sm">Lomas de Zamora</Link>
              <Link href="/blog/mudanzas-berazategui" className="text-gold hover:underline text-sm">Berazategui</Link>
              <Link href="/blog/mudanzas-florencio-varela" className="text-gold hover:underline text-sm">Florencio Varela</Link>
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
