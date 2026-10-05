import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Lomas de Zamora GBA | Marino Mudanzas",
  description: "Mudanzas en Lomas de Zamora: Banfield, Temperley y todo el partido sur del GBA. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Lomas de Zamora", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-lomas-de-zamora" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Lomas de Zamora GBA | Marino Mudanzas",
  "description": "Mudanzas en Lomas de Zamora: Banfield, Temperley y todo el partido sur del GBA. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-lomas-de-zamora",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-lomas-de-zamora" },
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
      "name": "¿Cuánto cuesta una mudanza en Lomas de Zamora?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Lomas de Zamora se cotiza según el caso. Una casa puede ir a consultar según el caso según el volumen. El precio es cerrado desde el presupuesto e incluye el traslado desde o hacia CABA, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubren Banfield y Temperley además de Lomas de Zamora centro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, cubrimos todo el partido de Lomas de Zamora: Lomas centro, Banfield, Temperley, Turdera, Ingeniero Budge, Villa Centenario y todas las localidades. El precio es cerrado desde el presupuesto independientemente de la localidad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo acceden a Lomas de Zamora desde CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El acceso principal es por la Autopista Buenos Aires-La Plata o por Av. Hipólito Yrigoyen a través de Lanús. Elegimos la ruta más eficiente según la localidad y el horario para evitar el tráfico del Puente Pueyrredón."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Lomas de Zamora?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Lomas de Zamora centro y Banfield tienen alta rotación de inquilinos y los turnos de fin de mes se llenan rápido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de Lomas de Zamora a CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es una ruta frecuente del sur del GBA. El traslado entre Lomas de Zamora y cualquier barrio de CABA está incluido en el precio cerrado del presupuesto."
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
      <main className="article-main">
        <article className="article-shell container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="article-back">← Volver al blog</Link>
          <h1 className="article-title">Mudanzas en Lomas de Zamora</h1>
          <div className="article-body">

            <p>Lomas de Zamora es uno de los partidos más importantes del sur del Gran Buenos Aires, con una zona céntrica comercial activa, barrios residenciales muy demandados como Banfield y Temperley, y un tejido de casas de familia y edificios que genera una demanda constante de mudanzas. El acceso desde CABA es por la Autopista Buenos Aires-La Plata o por Av. Hipólito Yrigoyen, rutas que conocemos bien para optimizar cada traslado.</p>

            <h2 className="article-h2">Cómo son las mudanzas en Lomas de Zamora</h2>
            <ul className="article-list">
              <li><strong>Lomas de Zamora centro</strong> — zona con edificios de departamentos y alta rotación de inquilinos. Centro comercial activo con algunas restricciones de carga en hora pico.</li>
              <li><strong>Banfield</strong> — barrio residencial con casas y edificios. Muy demandado por su buena conectividad con CABA por ferrocarril y autopista.</li>
              <li><strong>Temperley</strong> — zona residencial tranquila con casas de familia y calles amplias. Buen acceso vehicular.</li>
              <li><strong>Turdera y Villa Centenario</strong> — zonas más alejadas del partido con casas de familia y menor densidad.</li>
              <li><strong>Ingeniero Budge</strong> — localidad con casas de familia en el límite con La Matanza.</li>
            </ul>

            <h2 className="article-h2">¿Qué incluye nuestro servicio de mudanzas en Lomas de Zamora?</h2>
            <ul className="article-list">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Coordinación con el consorcio o encargado del edificio</li>
              <li>Camiones de distintos tamaños según el volumen y la localidad</li>
              <li>Traslado entre Lomas de Zamora y CABA con precio cerrado</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="article-h2">Localidades de Lomas de Zamora que cubrimos</h2>
            <ul className="article-list">
              <li><strong>Lomas de Zamora centro</strong> — zona con mayor demanda y rotación</li>
              <li><strong>Banfield</strong> — residencial con alta conectividad a CABA</li>
              <li><strong>Temperley</strong> — tranquilo con casas y buen acceso vehicular</li>
              <li><strong>Turdera</strong> — zona de casas de familia más alejada</li>
              <li><strong>Ingeniero Budge y Villa Centenario</strong> — igualmente cubiertas</li>
            </ul>

            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas en Lomas de Zamora</h2>

            <h3 className="article-h3">¿Cuánto cuesta una mudanza en Lomas de Zamora?</h3>
            <p>Un 2 ambientes se cotiza según el caso. Una casa puede ir a consultar según el caso según el volumen. Precio cerrado que incluye el traslado desde o hacia CABA.</p>

            <h3 className="article-h3">¿Cubren Banfield y Temperley?</h3>
            <p>Sí, todo el partido incluyendo Banfield, Temperley, Turdera, Ingeniero Budge y Villa Centenario. Precio cerrado sin importar la localidad.</p>

            <h3 className="article-h3">¿Cómo acceden a Lomas de Zamora desde CABA?</h3>
            <p>Por la Autopista Buenos Aires-La Plata o por Av. Hipólito Yrigoyen a través de Lanús. Elegimos la ruta más eficiente para cada localidad.</p>

            <h3 className="article-h3">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. Lomas centro y Banfield tienen alta rotación de inquilinos.</p>

            <h3 className="article-h3">¿Hacen mudanzas de Lomas de Zamora a CABA?</h3>
            <p>Sí, ruta frecuente del sur. El traslado a CABA está incluido en el precio cerrado.</p>

            <h2 className="article-h2">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos la localidad, el tipo de propiedad y el piso. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="article-cta">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-shimmer">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="btn-navy">Llamanos: 4611-1818</a>
            </div>

            <h2 className="article-h2">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-lanus" className="article-chip">Lanús</Link>
              <Link href="/blog/mudanzas-avellaneda" className="article-chip">Avellaneda</Link>
              <Link href="/blog/mudanzas-quilmes" className="article-chip">Quilmes</Link>
              <Link href="/blog/mudanzas-la-matanza" className="article-chip">La Matanza</Link>
              <Link href="/blog/mudanzas-ezeiza" className="article-chip">Ezeiza</Link>
              <Link href="/mudanzas-residenciales" className="article-chip">Mudanzas residenciales</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
