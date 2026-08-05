import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Parque Avellaneda Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Parque Avellaneda: barrio tranquilo del oeste de CABA con casas bajas y buen acceso vehicular. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Parque Avellaneda", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-parque-avellaneda" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Parque Avellaneda Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Parque Avellaneda: barrio tranquilo del oeste de CABA con casas bajas y buen acceso vehicular. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-parque-avellaneda",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-parque-avellaneda" },
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
      "name": "¿Cuánto cuesta una mudanza en Parque Avellaneda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Parque Avellaneda ronda los $130.000–$210.000. Las casas bajas de familia, que son frecuentes en el barrio, pueden ir desde $200.000 según el volumen. El precio es siempre cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de viviendas predominan en Parque Avellaneda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parque Avellaneda tiene un mix de casas bajas de familia —muchas con jardín y patio— y edificios de 4 a 5 pisos en sus avenidas principales. Las calles internas son predominantemente de casas. Es un barrio de propietarios y nuevas familias con buena estabilidad residencial."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es fácil el acceso para el camión de mudanzas en Parque Avellaneda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las calles internas son tranquilas y permiten estacionar el camión sin inconvenientes en la mayoría de los casos. Av. Directorio y Av. Rivadavia son los ejes principales de acceso con buena circulación. No hay restricciones de carga particulares en el barrio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Parque Avellaneda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Con 7 a 10 días de anticipación es suficiente en la mayoría de los casos. Para mudanzas a fin de mes o los sábados, recomendamos reservar con 2 semanas. El barrio tiene demanda moderada, lo que da más flexibilidad que en zonas más céntricas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen servicio de guardamuebles para Parque Avellaneda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Contamos con guardamuebles en Buenos Aires para quienes necesiten almacenar muebles o pertenencias durante una reforma, un viaje o entre mudanzas. El servicio es mensual, con seguridad y acceso coordinado. Consultanos por el precio según el volumen que necesitás guardar."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Parque Avellaneda</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Parque Avellaneda es un barrio tranquilo y familiar del oeste de Buenos Aires, organizado en torno al gran parque que le da su nombre. Con un mix de casas bajas con jardín y edificios de mediana altura sobre sus avenidas, el barrio atrae a familias que buscan más espacio y calidad de vida. Av. Directorio y Av. Rivadavia son sus ejes de acceso. Las calles internas, arboladas y con poco tráfico, facilitan enormemente las mudanzas. En Marino Mudanzas operamos en Parque Avellaneda con camiones de distintos tamaños según el tipo de propiedad.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Parque Avellaneda</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Casas bajas con jardín</strong> — la tipología más frecuente en las calles internas. Buen acceso para muebles de gran tamaño, sin las complicaciones del ascensor o el consorcio.</li>
              <li><strong>Edificios de 4 a 5 pisos sobre avenidas</strong> — sobre Directorio y Rivadavia hay edificios de mediana altura, algunos con ascensor y otros sin él. Coordinamos el desarmado de muebles cuando el espacio lo requiere.</li>
              <li><strong>Calles internas tranquilas</strong> — tráfico mínimo que permite estacionar el camión directamente frente a la propiedad sin demoras.</li>
              <li><strong>Av. Directorio y Av. Rivadavia como ejes de acceso</strong> — avenidas amplias con buena circulación que conectan el barrio con el resto del oeste de CABA.</li>
              <li><strong>Barrio de propietarios y nuevas familias</strong> — demanda estable de mudanzas de quienes amplían su espacio o llegan al barrio desde zonas más céntricas.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Parque Avellaneda?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Traslado de muebles de jardín, parrillas y objetos de exterior</li>
              <li>Vehículo del tamaño adecuado a la propiedad</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
              <li>Servicio de guardamuebles disponible para almacenaje temporal</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Parque Avellaneda</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Parque Avellaneda?</h3>
            <p>Un departamento de 2 ambientes ronda los $130.000–$210.000. Una casa de familia puede ir desde $200.000 según el volumen. El precio es siempre cerrado desde el presupuesto, sin costos adicionales el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué tipo de viviendas predominan en el barrio?</h3>
            <p>Un mix de casas bajas con jardín en las calles internas y edificios de 4 a 5 pisos sobre las avenidas. Es un barrio de propietarios y nuevas familias con buena estabilidad residencial.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Es fácil el acceso para el camión?</h3>
            <p>Sí. Las calles internas son tranquilas y permiten estacionar el camión directamente frente a la propiedad. Av. Directorio y Av. Rivadavia tienen buena circulación y no hay restricciones de carga particulares en el barrio.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Con 7 a 10 días es suficiente. Para fin de mes o sábados, recomendamos 2 semanas. El barrio tiene demanda moderada, lo que da más flexibilidad que en zonas más céntricas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen servicio de guardamuebles?</h3>
            <p>Sí. Contamos con guardamuebles para quienes necesiten almacenar muebles durante una reforma o entre mudanzas. El servicio es mensual con seguridad y acceso coordinado. Consultanos por el precio según el volumen.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad y a dónde te mudás. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-liniers" className="text-gold hover:underline text-sm">Liniers</Link>
              <Link href="/blog/mudanzas-floresta" className="text-gold hover:underline text-sm">Floresta</Link>
              <Link href="/blog/mudanzas-villa-lugano" className="text-gold hover:underline text-sm">Villa Lugano</Link>
              <Link href="/blog/mudanzas-mataderos" className="text-gold hover:underline text-sm">Mataderos</Link>
              <Link href="/blog/mudanzas-velez-sarsfield" className="text-gold hover:underline text-sm">Vélez Sársfield</Link>
              <Link href="/blog/mudanzas-parque-chacabuco" className="text-gold hover:underline text-sm">Parque Chacabuco</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
