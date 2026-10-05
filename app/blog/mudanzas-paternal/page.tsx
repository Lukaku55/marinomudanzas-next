import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Paternal Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Paternal: barrio tranquilo del oeste CABA con casas bajas y calles de poco tráfico. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Paternal", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-paternal" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Paternal Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Paternal: barrio tranquilo del oeste CABA con casas bajas y calles de poco tráfico. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-paternal",
  "datePublished": "2026-07-21",
  "dateModified": "2026-07-21",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-paternal" },
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
      "name": "¿Cuánto cuesta una mudanza en Paternal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Paternal se cotiza según el caso. Una casa de familia puede ir a consultar según el caso según el volumen. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de casas con jardín en Paternal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las casas de familia con jardín son frecuentes en Paternal. Coordinamos el acceso por frente o lateral y trasladamos muebles de jardín y objetos de exterior incluidos en el presupuesto cerrado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es fácil estacionar el camión en Paternal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Paternal es uno de los barrios más tranquilos de CABA en cuanto a tráfico. Las calles internas tienen poco movimiento y permiten estacionar el camión sin inconvenientes durante el tiempo necesario para la carga y descarga."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Paternal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Paternal tiene menos rotación de inquilinos que barrios más céntricos, pero los turnos de fin de mes igual se llenan."
      }
    },
    {
      "@type": "Question",
      "name": "¿Manejan los edificios sin ascensor en Paternal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Los edificios de 3-5 pisos sin ascensor son frecuentes en el barrio, especialmente en construcciones antiguas. Contamos con personal especializado en subida por escalera y elevación por soga para muebles que no pasan."
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
          <h1 className="article-title">Mudanzas en Paternal</h1>
          <div className="article-body">

            <p>Paternal es un barrio tranquilo del oeste de Buenos Aires, enclavado entre Chacarita, Villa del Parque y Agronomía. Con calles arboladas, casas bajas y un tráfico notablemente más liviano que el de los barrios céntricos, Paternal ofrece condiciones muy favorables para las operaciones de mudanza: buen acceso vehicular, posibilidad de estacionar sin inconvenientes y vecinos habituados al ritmo tranquilo del barrio. En Marino Mudanzas conocemos bien sus particularidades.</p>

            <h2 className="article-h2">Cómo son las mudanzas en Paternal</h2>
            <ul className="article-list">
              <li><strong>Casas bajas con jardín</strong> — la tipología más frecuente. Buen acceso frontal o lateral para muebles de gran tamaño y objetos de exterior.</li>
              <li><strong>Edificios de 3-5 pisos</strong> — muchos sin ascensor, especialmente los de construcción antigua. Subida por escalera con personal especializado.</li>
              <li><strong>Calles tranquilas con poco tráfico</strong> — una de las ventajas del barrio. Permite estacionar el camión durante el tiempo necesario sin presión.</li>
              <li><strong>Calles angostas en el interior</strong> — algunas calles internas requieren vehículos más pequeños. Lo evaluamos en el presupuesto.</li>
              <li><strong>Barrio familiar estable</strong> — menos rotación que en zonas céntricas. Mudanzas de propietarios con más volumen y más planificación.</li>
            </ul>

            <h2 className="article-h2">¿Qué incluye nuestro servicio de mudanzas en Paternal?</h2>
            <ul className="article-list">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Traslado de muebles de jardín y objetos de exterior</li>
              <li>Elevación por soga para muebles que no pasan por escalera</li>
              <li>Vehículo del tamaño adecuado a la calle y la propiedad</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="article-h2">Zonas de Paternal que cubrimos</h2>
            <ul className="article-list">
              <li><strong>Zona central de Paternal</strong> — casas bajas y edificios de poca altura con calles tranquilas</li>
              <li><strong>Av. San Martín</strong> — eje principal del barrio con acceso desde Palermo y Villa del Parque</li>
              <li><strong>Av. Gaona</strong> — límite sur con Villa del Parque y acceso al oeste de CABA</li>
              <li><strong>Límite con Chacarita y Agronomía</strong> — zona de transición cubierta por el mismo presupuesto</li>
            </ul>

            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas en Paternal</h2>

            <h3 className="article-h3">¿Cuánto cuesta una mudanza en Paternal?</h3>
            <p>Un 2 ambientes se cotiza según el caso. Una casa de familia puede ir a consultar según el caso según el volumen. Precio cerrado desde el presupuesto, sin sorpresas.</p>

            <h3 className="article-h3">¿Hacen mudanzas de casas con jardín en Paternal?</h3>
            <p>Sí. Acceso por frente o lateral, traslado de muebles de jardín incluido en el presupuesto cerrado.</p>

            <h3 className="article-h3">¿Es fácil estacionar el camión?</h3>
            <p>Sí, es una de las ventajas del barrio. Calles tranquilas con poco tráfico que permiten estacionar durante el tiempo necesario.</p>

            <h3 className="article-h3">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. Los turnos de fin de mes se llenan incluso en barrios tranquilos.</p>

            <h3 className="article-h3">¿Manejan los edificios sin ascensor?</h3>
            <p>Sí. Personal especializado en subida por escalera y elevación por soga para muebles que no pasan. Todo contemplado en el presupuesto antes del día.</p>

            <h2 className="article-h2">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos si es casa o departamento, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="article-cta">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-shimmer">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="btn-navy">Llamanos: 4611-1818</a>
            </div>

            <h2 className="article-h2">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-chacarita" className="article-chip">Chacarita</Link>
              <Link href="/blog/mudanzas-villa-del-parque" className="article-chip">Villa del Parque</Link>
              <Link href="/blog/mudanzas-villa-pueyrredon" className="article-chip">Villa Pueyrredón</Link>
              <Link href="/blog/mudanzas-villa-ortuzar" className="article-chip">Villa Ortúzar</Link>
              <Link href="/blog/mudanzas-almagro" className="article-chip">Almagro</Link>
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
