import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en General Paz Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en General Paz: barrio pequeño y tranquilo del sur de CABA con casas bajas y excelente acceso vehicular. Precio cerrado sin sorpresas → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en General Paz", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-general-paz" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en General Paz Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en General Paz: barrio pequeño y tranquilo del sur de CABA con casas bajas y excelente acceso vehicular. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-general-paz",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-general-paz" },
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
      "name": "¿Cuánto cuesta una mudanza en General Paz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las mudanzas en General Paz son principalmente de casas bajas, que tienen un volumen mayor que los departamentos. El costo se cotiza según el caso según el contenido de la propiedad. El precio es siempre cerrado desde el presupuesto, sin sorpresas ni costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo es el acceso para el camión en General Paz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Excelente. El barrio tiene tráfico mínimo y calles amplias con muy poca circulación vehicular. El camión puede estacionar directamente frente a la propiedad en prácticamente todos los casos, sin necesidad de permisos ni coordinaciones especiales. Es uno de los barrios con mejor logística para mudanzas del sur de CABA."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de viviendas hay en el barrio General Paz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "General Paz tiene un predominio casi total de casas bajas de familia, sin apenas edificios de departamentos. Muchas propiedades tienen patio y jardín. El perfil es de barrio obrero consolidado, con propietarios que habitan el barrio desde hace décadas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en General Paz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La demanda en General Paz es menor que en barrios más céntricos, lo que da más flexibilidad. Con 5 a 7 días de anticipación suele ser suficiente. Para fin de mes o sábados, recomendamos reservar con 10 días. La baja demanda hace que tengamos más disponibilidad en este barrio que en zonas de alta rotación locativa."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas con destino al GBA sur desde General Paz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. General Paz limita con el sur de CABA y tiene salida natural hacia municipios del GBA sur como Lomas de Zamora, Lanús y Avellaneda. Realizamos mudanzas con origen o destino en el GBA sur, con precio cerrado desde el presupuesto sin cargo. Consultanos por la combinación de zonas que necesitás."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en General Paz</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>General Paz es uno de los barrios más pequeños y menos conocidos de Buenos Aires, ubicado en el extremo sur de la ciudad, lindero con Villa Lugano, Nueva Pompeya y Parque Avellaneda. De perfil obrero y tranquilo, el barrio está compuesto casi exclusivamente por casas bajas con patio, con muy poca circulación vehicular y calles despejadas que facilitan enormemente la logística de una mudanza. La baja demanda del barrio también se traduce en más disponibilidad de fechas y más flexibilidad para coordinar el turno.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en General Paz</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Casas bajas con patio</strong> — la tipología dominante del barrio. Sin ascensores, sin consorcios, sin turnos de montacargas. El acceso al camión es directo desde la vereda en prácticamente todos los casos.</li>
              <li><strong>Tráfico mínimo y calles despejadas</strong> — la baja circulación vehicular facilita el estacionamiento del camión y las maniobras de carga sin interferencias ni presiones de tiempo.</li>
              <li><strong>Excelente acceso vehicular</strong> — las calles del barrio son amplias y en buen estado. No hay restricciones de carga ni zonas peatonales que compliquen el ingreso del camión.</li>
              <li><strong>Barrio obrero consolidado</strong> — perfil de propietarios estables con baja rotación. Cuando hay una mudanza, suele ser de toda la casa, lo que requiere vehículos de mayor capacidad.</li>
              <li><strong>Salida natural al GBA sur</strong> — la ubicación del barrio facilita las mudanzas con destino a Lomas de Zamora, Lanús o Avellaneda, que coordinamos con precio cerrado.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en General Paz?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Traslado de muebles de jardín, parrillas y objetos de exterior</li>
              <li>Vehículo del tamaño adecuado a la propiedad</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
              <li>Cobertura hacia el GBA sur con precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en General Paz</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en General Paz?</h3>
            <p>Las mudanzas son principalmente de casas bajas, con mayor volumen que los departamentos. El costo se cotiza según el caso según el contenido de la propiedad. El precio es siempre cerrado desde el presupuesto, sin sorpresas el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo es el acceso para el camión?</h3>
            <p>Excelente. Tráfico mínimo, calles despejadas y amplias. El camión puede estacionar directamente frente a la propiedad en prácticamente todos los casos, sin coordinaciones especiales. Es uno de los barrios con mejor logística para mudanzas del sur de CABA.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué tipo de viviendas hay en el barrio?</h3>
            <p>Casi exclusivamente casas bajas de familia con patio y jardín. Sin edificios de departamentos. Perfil de barrio obrero consolidado con propietarios estables.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>La menor demanda del barrio da más flexibilidad. Con 5 a 7 días suele ser suficiente. Para fin de mes o sábados, reservar con 10 días. Hay más disponibilidad que en barrios de alta rotación locativa.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas con destino al GBA sur?</h3>
            <p>Sí. La ubicación del barrio facilita la salida hacia Lomas de Zamora, Lanús y Avellaneda. Realizamos mudanzas con origen o destino en el GBA sur con precio cerrado desde el presupuesto sin cargo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad y a dónde te mudás. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-villa-lugano" className="text-gold hover:underline text-sm">Villa Lugano</Link>
              <Link href="/blog/mudanzas-nueva-pompeya" className="text-gold hover:underline text-sm">Nueva Pompeya</Link>
              <Link href="/blog/mudanzas-villa-soldati" className="text-gold hover:underline text-sm">Villa Soldati</Link>
              <Link href="/blog/mudanzas-parque-avellaneda" className="text-gold hover:underline text-sm">Parque Avellaneda</Link>
              <Link href="/blog/mudanzas-barracas" className="text-gold hover:underline text-sm">Barracas</Link>
              <Link href="/blog/mudanzas-mataderos" className="text-gold hover:underline text-sm">Mataderos</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
