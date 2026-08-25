import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en San Justo Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en San Justo, cabecera de La Matanza. Precio cerrado para casas y edificios. Acceso por Rivadavia, Crovara o Autopista del Oeste. Presupuesto sin cargo: 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en San Justo", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-justo-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en San Justo Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en San Justo, cabecera de La Matanza. Precio cerrado para casas y edificios. Acceso por Rivadavia, Crovara o Autopista del Oeste.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-justo-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-justo-buenos-aires" },
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
      "name": "¿Cuánto cuesta una mudanza en San Justo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en San Justo ronda los $130.000–$210.000. El precio final depende del piso, si hay ascensor y el volumen de muebles. El precio es cerrado desde el presupuesto: sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se accede a San Justo desde CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los accesos principales desde CABA son Av. Rivadavia, Av. Crovara o la Autopista del Oeste (A1). El tiempo de traslado es de 25 a 40 minutos según el punto exacto y el horario. Coordinamos la ruta más eficiente para cada mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de propiedades hay en San Justo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "San Justo tiene un mix amplio: casas de familia, edificios residenciales de varios pisos y viviendas de todo tipo. La cabecera de La Matanza concentra una alta densidad habitacional con mucha variedad de propiedades."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubren todo el partido de La Matanza, no solo San Justo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Cubrimos todo el partido de La Matanza: San Justo, Ramos Mejía, Ciudad Evita, Aldo Bonzi, La Tablada, Tapiales, Villa Luzuriaga y más. El precio cerrado aplica a toda la zona del partido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en San Justo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para mudanzas de fin de mes o sábados, recomendamos reservar con 10 a 15 días de anticipación. San Justo tiene una alta densidad poblacional y alta rotación de alquileres, lo que genera gran demanda de mudanzas."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en San Justo</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>San Justo es la cabecera del partido de La Matanza, el partido más poblado del GBA y uno de los más dinámicos del conurbano bonaerense. Con una gran actividad comercial, alta densidad habitacional y un mercado de alquileres muy activo, San Justo genera una demanda constante de mudanzas en todas las franjas del mes. El mix de casas de familia y edificios residenciales de todo tipo requiere una empresa con experiencia real en la zona. En Marino Mudanzas operamos en San Justo y en todo el partido de La Matanza, accediendo por Av. Rivadavia, Av. Crovara o la Autopista del Oeste (A1).</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en San Justo</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Alta densidad y variedad de propiedades</strong> — San Justo tiene casas de familia, edificios de departamentos, casas en PH y todo tipo de viviendas. Adaptamos el vehículo y el equipo a cada situación.</li>
              <li><strong>Centro comercial activo</strong> — la zona céntrica concentra edificios con alta rotación de inquilinos. Coordinamos el horario de mudanza con el encargado del edificio para evitar contratiempos.</li>
              <li><strong>Alta rotación de alquileres</strong> — La Matanza tiene uno de los mercados de alquiler más activos del GBA, con mucha demanda de mudanzas a fin de mes.</li>
              <li><strong>Múltiples accesos desde CABA</strong> — Av. Rivadavia, Av. Crovara y la Autopista del Oeste dan distintas opciones de ingreso. El tiempo de traslado desde CABA es de 25 a 40 minutos según el punto exacto.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en San Justo</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en San Justo?</h3>
            <p>Un departamento de 2 ambientes ronda los $130.000–$210.000. El precio varía según el piso, el ascensor y el volumen. El precio es cerrado desde el presupuesto: sin sorpresas el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo se accede a San Justo desde CABA?</h3>
            <p>Por Av. Rivadavia, Av. Crovara o la Autopista del Oeste (A1). El tiempo de traslado es de 25 a 40 minutos según el punto exacto y el tráfico. Coordinamos la ruta más eficiente para cada mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué tipo de propiedades hay en San Justo?</h3>
            <p>Un mix amplio: casas, edificios, PHs y todo tipo de viviendas. Contamos con vehículos y personal adecuado para cada caso, con o sin ascensor.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cubren todo el partido de La Matanza?</h3>
            <p>Sí. Operamos en todo el partido: San Justo, Ramos Mejía, Ciudad Evita, Aldo Bonzi, La Tablada, Tapiales, Villa Luzuriaga y más. El precio cerrado aplica a toda la zona.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10 a 15 días. La alta demanda en La Matanza hace que los turnos de fin de mes se completen rápido.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-la-matanza" className="text-gold hover:underline text-sm">Mudanzas en La Matanza</Link>
              <Link href="/blog/mudanzas-ramos-mejia-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas en Ramos Mejía</Link>
              <Link href="/blog/mudanzas-haedo-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas en Haedo</Link>
              <Link href="/blog/mudanzas-moron" className="text-gold hover:underline text-sm">Mudanzas en Morón</Link>
              <Link href="/blog/mudanzas-merlo" className="text-gold hover:underline text-sm">Mudanzas en Merlo</Link>
              <Link href="/blog/mudanzas-liniers" className="text-gold hover:underline text-sm">Mudanzas en Liniers</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
