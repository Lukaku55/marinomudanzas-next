import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Parque Chacabuco Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Parque Chacabuco: barrio residencial tranquilo con casas de familia y calles arboladas. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Parque Chacabuco", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-parque-chacabuco" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Parque Chacabuco Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Parque Chacabuco: barrio residencial tranquilo con casas de familia y calles arboladas. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-parque-chacabuco",
  "datePublished": "2026-07-21",
  "dateModified": "2026-07-21",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-parque-chacabuco" },
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
      "name": "¿Cuánto cuesta una mudanza en Parque Chacabuco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Parque Chacabuco se cotiza según el caso. Una casa de familia puede ir a consultar según el caso según el volumen. Los edificios sin ascensor pueden tener un costo algo mayor por la subida por escalera, contemplado en el presupuesto cerrado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de casas con jardín en Parque Chacabuco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las casas de familia con jardín son la tipología más frecuente del barrio. Coordinamos el acceso por frente o lateral según la disposición de la propiedad, y trasladamos muebles de jardín, parrillas y objetos de exterior sin costo adicional."
      }
    },
    {
      "@type": "Question",
      "name": "¿Manejan los edificios sin ascensor de los años 50-60 del barrio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Los edificios de 4-6 pisos sin ascensor son frecuentes en Parque Chacabuco. Contamos con personal especializado en subida por escalera y elevación por soga desde el exterior para muebles que no pasan. Todo está contemplado en el presupuesto cerrado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Parque Chacabuco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. El barrio tiene rotación de inquilinos constante y los turnos de fin de mes se llenan rápido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es fácil estacionar el camión en Parque Chacabuco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El barrio tiene calles relativamente tranquilas con poco tráfico pesado. Las avenidas principales como Asamblea y Directorio tienen buena circulación, y las calles internas permiten estacionar sin mayores inconvenientes."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Parque Chacabuco</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Parque Chacabuco es un barrio tranquilo y familiar del sur de Buenos Aires, delimitado por el parque homónimo que le da su nombre. Predominan las casas de familia con jardín, los edificios de mediana altura y las calles arboladas que mantienen el espíritu de barrio. En Marino Mudanzas conocemos bien el barrio: las calles internas con poco tráfico que facilitan la carga, los edificios de los años 50-60 sin ascensor y las casas amplias con acceso frontal o lateral.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Parque Chacabuco</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Casas de familia con jardín</strong> — la tipología más frecuente. Buen acceso para muebles de gran tamaño y traslado de objetos de exterior como parrillas y muebles de jardín.</li>
              <li><strong>Edificios de 4-6 pisos sin ascensor</strong> — frecuentes en construcciones de los años 50-60. Personal especializado en subida por escalera y elevación por soga cuando los muebles no pasan.</li>
              <li><strong>Calles tranquilas con poco tráfico</strong> — facilitan estacionar el camión y las maniobras de carga sin demoras.</li>
              <li><strong>Avenidas principales amplias</strong> — Asamblea, Directorio y Eva Perón son los ejes de acceso con buena circulación.</li>
              <li><strong>Barrio familiar estable</strong> — menos rotación que en zonas céntricas, pero con demanda constante de mudanzas de propietarios que cambian de tamaño.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Parque Chacabuco?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Traslado de muebles de jardín, parrillas y objetos de exterior</li>
              <li>Elevación por soga para muebles que no pasan por escalera</li>
              <li>Vehículo del tamaño adecuado a la propiedad y la calle</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Parque Chacabuco que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zona del Parque</strong> — casas de familia con jardín alrededor del parque homónimo</li>
              <li><strong>Av. Asamblea</strong> — eje principal con edificios de departamentos y buena circulación</li>
              <li><strong>Av. Directorio</strong> — límite sur con acceso desde Caballito y Nueva Pompeya</li>
              <li><strong>Interior del barrio</strong> — calles tranquilas con poco tráfico ideal para mudanzas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Parque Chacabuco</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Parque Chacabuco?</h3>
            <p>Un 2 ambientes se cotiza según el caso. Una casa de familia puede ir a consultar según el caso según el volumen. Los edificios sin ascensor pueden tener un costo algo mayor contemplado en el presupuesto cerrado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de casas con jardín?</h3>
            <p>Sí, es la tipología más frecuente del barrio. Acceso por frente o lateral, traslado de muebles de jardín y parrillas incluido en el presupuesto cerrado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Manejan los edificios sin ascensor de los años 50-60?</h3>
            <p>Sí. Personal especializado en subida por escalera y elevación por soga para muebles que no pasan. Todo contemplado en el presupuesto antes del día.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. Los turnos se llenan rápido.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Es fácil estacionar el camión en el barrio?</h3>
            <p>Sí. Calles tranquilas con poco tráfico pesado. Las calles internas permiten estacionar sin mayores inconvenientes.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos si es casa o departamento, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-caballito" className="text-gold hover:underline text-sm">Caballito</Link>
              <Link href="/blog/mudanzas-boedo" className="text-gold hover:underline text-sm">Boedo</Link>
              <Link href="/blog/mudanzas-nueva-pompeya" className="text-gold hover:underline text-sm">Nueva Pompeya</Link>
              <Link href="/blog/mudanzas-almagro" className="text-gold hover:underline text-sm">Almagro</Link>
              <Link href="/blog/mudanzas-flores" className="text-gold hover:underline text-sm">Flores</Link>
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
