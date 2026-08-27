import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en San Cristóbal Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en San Cristóbal: barrio obrero del sur de CABA con edificios sin ascensor y alta rotación de alquileres. Precio cerrado. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en San Cristóbal", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-cristobal" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en San Cristóbal Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en San Cristóbal: barrio obrero del sur de CABA con edificios sin ascensor y alta rotación de alquileres. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-cristobal",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-cristobal" },
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
      "name": "¿Cuánto cuesta una mudanza en San Cristóbal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en San Cristóbal se cotiza según el caso. Los edificios de los años 40-60 sin ascensor pueden tener un costo algo mayor por la subida por escalera o la elevación por soga, que siempre está contemplada en el presupuesto cerrado antes del día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo manejan los edificios sin ascensor de San Cristóbal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "San Cristóbal tiene muchos edificios de 4 a 6 pisos construidos entre los años 40 y 60, la mayoría sin ascensor. Contamos con personal especializado en subida y bajada por escalera y con equipo de elevación por soga desde el exterior para muebles que no pasan por las escaleras angostas. Todo está incluido en el presupuesto cerrado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en San Cristóbal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos 10 días antes. El barrio tiene alta rotación de inquilinos, lo que genera mucha demanda especialmente a fin de mes. Para mudanzas en los últimos o primeros días del mes, recomendamos reservar con 15 días de anticipación. Los sábados se ocupan rápido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Piden permiso al consorcio para hacer la mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En los edificios de San Cristóbal es habitual que el consorcio exija reservar un turno para el uso del ascensor o las áreas comunes. Aunque en muchos casos no hay ascensor, siempre recomendamos consultar al administrador con anticipación y notificar a los vecinos. Nosotros coordinamos los horarios de acceso sin problema."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de comercios en San Cristóbal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El barrio tiene actividad comercial, especialmente en el eje de Av. San Juan. Realizamos traslados de comercios: mobiliario, equipos, cajas de archivo y góndolas. Coordinamos el acceso en horarios de baja circulación para minimizar interrupciones. El presupuesto es sin cargo y el precio cerrado."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en San Cristóbal</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>San Cristóbal es un barrio obrero y popular del sur de Buenos Aires, delimitado por Boedo, Barracas y Constitución. Su tejido urbano está marcado por edificios de 4 a 6 pisos de los años 40 y 60 —la mayoría sin ascensor—, casas chorizo reformadas y antiguos conventillos convertidos en departamentos. Con Av. San Juan como eje principal y una alta densidad poblacional, el barrio tiene rotación constante de inquilinos. En Marino Mudanzas conocemos cada particularidad de San Cristóbal: los pasillos angostos, las escaleras empinadas y la escasez de estacionamiento en las calles internas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en San Cristóbal</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Edificios sin ascensor de los años 40-60</strong> — la tipología más frecuente del barrio. Personal especializado en subida por escalera y elevación por soga desde el exterior cuando los muebles no pasan por el hueco de la escalera.</li>
              <li><strong>Casas chorizo y conventillos reformados</strong> — pasillos y patios internos angostos que requieren planificación del acceso. Coordinamos el desarmado de muebles cuando el espacio lo exige.</li>
              <li><strong>Alta rotación de inquilinos</strong> — demanda concentrada a fin de mes. Es fundamental reservar con anticipación para asegurar el turno, especialmente los últimos días del mes.</li>
              <li><strong>Av. San Juan como eje de acceso</strong> — avenida ancha con buena circulación que facilita el ingreso del camión al barrio, aunque las calles internas tienen poco espacio para estacionar.</li>
              <li><strong>Alta densidad, baja oferta de parking</strong> — coordinamos el corte temporario de calle o el estacionamiento en doble fila en los casos necesarios para no demorar la mudanza.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en San Cristóbal?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Elevación por soga para muebles que no pasan por escalera</li>
              <li>Vehículo del tamaño adecuado a la propiedad</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
              <li>Traslado de mobiliario y equipos de comercios</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en San Cristóbal</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en San Cristóbal?</h3>
            <p>Un departamento de 2 ambientes se cotiza según el caso. Los edificios sin ascensor pueden tener un costo algo mayor por la subida por escalera o la elevación por soga, siempre contemplado en el presupuesto cerrado antes del día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo manejan los edificios sin ascensor?</h3>
            <p>Contamos con personal especializado en subida y bajada por escalera y equipo de elevación por soga desde el exterior para muebles que no pasan. Todo incluido en el presupuesto cerrado, sin costos adicionales el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos 10 días antes. A fin de mes, 15 días. El barrio tiene alta rotación de inquilinos y los turnos de fin de mes se llenan rápidamente, especialmente los sábados.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Piden permiso al consorcio?</h3>
            <p>Recomendamos consultar al administrador con anticipación y notificar a los vecinos, especialmente en edificios con escalera compartida. Coordinamos los horarios de acceso para evitar conflictos y respetar los reglamentos internos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de comercios en San Cristóbal?</h3>
            <p>Sí. Trasladamos comercios: mobiliario, equipos, cajas de archivo y góndolas. Coordinamos el acceso en horarios de baja circulación para minimizar interrupciones. Presupuesto sin cargo y precio cerrado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad y a dónde te mudás. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-boedo" className="text-gold hover:underline text-sm">Boedo</Link>
              <Link href="/blog/mudanzas-barracas" className="text-gold hover:underline text-sm">Barracas</Link>
              <Link href="/blog/mudanzas-constitucion" className="text-gold hover:underline text-sm">Constitución</Link>
              <Link href="/blog/mudanzas-nueva-pompeya" className="text-gold hover:underline text-sm">Nueva Pompeya</Link>
              <Link href="/blog/mudanzas-balvanera" className="text-gold hover:underline text-sm">Balvanera</Link>
              <Link href="/blog/mudanzas-parque-patricios" className="text-gold hover:underline text-sm">Parque Patricios</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
