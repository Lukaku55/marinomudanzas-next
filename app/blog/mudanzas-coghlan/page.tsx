import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Coghlan Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Coghlan: barrio tranquilo del norte de CABA con predominio de casas bajas y calles arboladas. Conocemos cada calle. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Coghlan", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-coghlan" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Coghlan Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Coghlan: barrio tranquilo del norte de CABA con predominio de casas bajas y calles arboladas. Conocemos cada calle.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-coghlan",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-coghlan" },
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
      "name": "¿Cuánto cuesta una mudanza en Coghlan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una casa de 3 ambientes en Coghlan ronda los $220.000–$380.000. Al tratarse de un barrio con predominio de casas bajas, el acceso suele ser fácil y no hay demoras por consorcios o turnos de montacargas, lo que simplifica la logística. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo son los accesos para el camión en Coghlan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coghlan tiene calles tranquilas y poco tráfico, lo que facilita enormemente el estacionamiento y la maniobra del camión. La mayoría de las calles internas son de un solo sentido y anchas, sin restricciones de carga particulares. Es uno de los barrios con mejor acceso vehicular del norte de CABA."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hay muchos edificios sin ascensor en Coghlan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coghlan es uno de los barrios de CABA con mayor proporción de casas bajas y PH. Los pocos edificios que existen son de mediana altura y en general cuentan con ascensor. La gran mayoría de las mudanzas en el barrio son de casas, lo que simplifica el traslado de muebles grandes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Coghlan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos reservar con al menos 7 a 10 días de anticipación. En Coghlan no hay restricciones de consorcio ni turnos de montacargas en la mayoría de los casos, por lo que la coordinación es más sencilla que en otros barrios de CABA. A fin de mes, conviene reservar con más tiempo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de casas completas en Coghlan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las mudanzas de casas son la especialidad en Coghlan, dado que el barrio tiene muchas propiedades grandes con jardín, garaje y sótano. Contamos con camiones de distintos tamaños y el personal necesario para trasladar el contenido completo de una casa en una sola jornada."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Coghlan</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Coghlan es uno de los barrios más tranquilos y silenciosos del norte de Buenos Aires. Con un perfil marcadamente residencial, calles arboladas y un tejido urbano dominado por casas bajas y PH, el barrio ofrece condiciones óptimas para mudarse: poco tráfico, buen acceso vehicular y casi sin restricciones de consorcio. En Marino Mudanzas trabajamos en Coghlan desde hace décadas y conocemos bien su fisonomía particular.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Coghlan</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Predominio de casas y PH</strong> — a diferencia de otros barrios del norte de CABA, Coghlan conserva una altísima proporción de casas con jardín, garaje y patio. Las mudanzas son en general de mayor volumen pero sin las complicaciones del ascensor o el consorcio.</li>
              <li><strong>Calles tranquilas y buen acceso</strong> — el tráfico interno es mínimo. El camión puede estacionar sin problemas frente a la propiedad en la mayoría de los casos, reduciendo tiempos y esfuerzo.</li>
              <li><strong>Pocos edificios, sin consorcios estrictos</strong> — los edificios que existen son de baja o mediana altura. No hay las restricciones horarias ni los turnos de montacargas que complican otras zonas de CABA.</li>
              <li><strong>Casas con garaje y sótano</strong> — muchas propiedades tienen muebles y objetos almacenados en garajes, sótanos o depósitos. Coordinamos el vaciado completo en una sola jornada.</li>
              <li><strong>Zona de propietarios</strong> — Coghlan tiene baja rotación locativa, lo que significa que cuando hay una mudanza, suele ser de toda la casa. Nuestros camiones de mayor capacidad están disponibles para estos casos.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Coghlan?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, bibliotecas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla, cuadros y espejos</li>
              <li>Traslado de electrodomésticos con protección adecuada</li>
              <li>Camión del tamaño correcto según el volumen de la mudanza</li>
              <li>Personal capacitado para subir y bajar muebles pesados por escaleras internas</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Coghlan</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Coghlan?</h3>
            <p>Una casa de 3 ambientes ronda los $220.000–$380.000. Al no haber demoras por consorcios ni montacargas, el tiempo de trabajo suele ser más predecible. El precio es siempre cerrado desde el presupuesto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo son los accesos para el camión?</h3>
            <p>Coghlan tiene calles muy tranquilas con bajo tráfico. El camión puede estacionar directamente frente a la propiedad en casi todos los casos. Es uno de los barrios con mejor acceso vehicular del norte de CABA.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hay muchos edificios sin ascensor?</h3>
            <p>No. El barrio tiene predominio de casas y PH. Los pocos edificios suelen tener ascensor. La mayoría de las mudanzas son de propiedades en planta baja o con escaleras internas manejables.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación reservar?</h3>
            <p>7 a 10 días es suficiente en la mayoría de los casos. A fin de mes o en temporada alta (diciembre–enero), conviene reservar con 2 semanas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de casas completas?</h3>
            <p>Sí, es nuestra especialidad en el barrio. Contamos con camiones de gran capacidad y el personal necesario para trasladar el contenido completo de una casa —incluyendo garaje, sótano y patio— en una sola jornada.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos qué tipo de propiedad tenés y a dónde te mudás. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-saavedra" className="text-gold hover:underline text-sm">Saavedra</Link>
              <Link href="/blog/mudanzas-villa-urquiza" className="text-gold hover:underline text-sm">Villa Urquiza</Link>
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Belgrano</Link>
              <Link href="/blog/mudanzas-nunez" className="text-gold hover:underline text-sm">Núñez</Link>
              <Link href="/blog/mudanzas-colegiales" className="text-gold hover:underline text-sm">Colegiales</Link>
              <Link href="/blog/mudanzas-villa-ortuzar" className="text-gold hover:underline text-sm">Villa Ortúzar</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
