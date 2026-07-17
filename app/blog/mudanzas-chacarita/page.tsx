import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Chacarita Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Chacarita: casas bajas, PHs y edificios sin ascensor de los 50. Precio cerrado sin sorpresas. Conocemos cada calle del barrio. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Chacarita", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-chacarita" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Chacarita Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Chacarita: casas bajas, PHs y edificios sin ascensor de los 50. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-chacarita",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-chacarita" },
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
      "name": "¿Tienen vehículos pequeños para las calles angostas de Chacarita?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las calles internas de Chacarita como Fraga, Charlone o Céspedes pueden ser estrechas. Usamos camioneta o camión chico en esas direcciones y reservamos los camiones grandes para las avenidas. Lo evaluamos cuando pedís el presupuesto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo manejan los edificios sin ascensor de Chacarita?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Con personal extra y, cuando los muebles no pasan por la escalera, mediante elevación por soga desde el exterior. Los edificios de los años 50 y 60 del barrio son una de nuestras especialidades. El costo adicional por escaleras está incluido en el presupuesto cerrado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Chacarita?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes ronda los $150.000–$250.000. Una PH o casa puede ir desde $250.000 según el volumen y el acceso. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza. Pedí el tuyo sin cargo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Chacarita?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Chacarita tiene buena rotación de inquilinos especialmente en las zonas de Av. Corrientes y Dorrego, y los turnos de fin de mes se llenan rápido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas comerciales o de estudio en Chacarita?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Chacarita tiene muchos estudios creativos, ateliers y locales gastronómicos. Realizamos mudanzas comerciales incluyendo traslado de mobiliario de local, equipamiento de cocina y mobiliario de oficina con precio cerrado."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Chacarita</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Chacarita es uno de los barrios con más carácter del norte de CABA. La mezcla de casas bajas de principios del siglo XX, PHs con jardín, edificios de los 50 sin ascensor y una creciente escena gastronómica y cultural genera una demanda variada de mudanzas. En Marino Mudanzas trabajamos en Chacarita hace décadas y conocemos bien cada tipo de propiedad y cada calle del barrio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Chacarita</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Edificios sin ascensor de los años 50–60</strong> — la mayoría de los edificios del interior del barrio son de esta época. Personal extra para subida por escalera y elevación por soga cuando los muebles no pasan.</li>
              <li><strong>PHs y casas bajas</strong> — propiedades con jardín y acceso directo desde la vereda. El mayor desafío suele ser el volumen, no el acceso.</li>
              <li><strong>Calles internas angostas</strong> — Fraga, Charlone, Céspedes y otras calles del interior del barrio tienen árboles grandes y poco espacio. Usamos el vehículo adecuado para cada dirección.</li>
              <li><strong>Edificios nuevos en Dorrego</strong> — la zona de Av. Dorrego y Av. Forest concentra edificios modernos con ascensor y espacios de carga bien señalizados.</li>
              <li><strong>Alta rotación en Corrientes</strong> — el corredor de Av. Corrientes tiene muchos departamentos en alquiler con alta rotación, especialmente a fin de mes.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Chacarita?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Elevación por soga para muebles que no entran por escalera</li>
              <li>Vehículo del tamaño adecuado a cada calle</li>
              <li>Coordinación con el consorcio o encargado del edificio</li>
              <li>Traslado de equipamiento de locales y estudios creativos</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Chacarita que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chacarita histórico</strong> — casas bajas y PHs entre Av. Forest y Av. Corrientes, el corazón residencial del barrio</li>
              <li><strong>Corredor Dorrego</strong> — edificios nuevos y mayor accesibilidad para camiones de todos los tamaños</li>
              <li><strong>Av. Corrientes</strong> — alta rotación de inquilinos, muchos departamentos de 1 y 2 ambientes</li>
              <li><strong>Límite Palermo</strong> — zona de transición con creciente oferta de PHs recicladas y locales</li>
              <li><strong>Límite Colegiales</strong> — calles tranquilas con casas y PHs de principios del siglo XX</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Chacarita</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen vehículos pequeños para las calles angostas?</h3>
            <p>Sí. En calles como Fraga o Charlone usamos camioneta o camión chico para no interrumpir el tráfico ni dañar ramas. Lo evaluamos al presupuestar para no tener sorpresas el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo manejan los edificios sin ascensor?</h3>
            <p>Con personal extra y, cuando el mueble no pasa por la escalera, elevamos por soga desde el exterior. Es algo frecuente en los edificios de los 50-60 de Chacarita y está incluido en el presupuesto cerrado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Chacarita?</h3>
            <p>Un 2 ambientes ronda los $150.000–$250.000. Una PH o casa puede ir desde $250.000 según el volumen y el acceso. Precio cerrado desde el presupuesto sin costos adicionales el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. La zona de Corrientes tiene alta rotación y los turnos se llenan rápido.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas comerciales o de estudio en Chacarita?</h3>
            <p>Sí. Locales gastronómicos, estudios creativos y ateliers. Traslado de equipamiento de cocina, mobiliario de local y equipos con precio cerrado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-palermo" className="text-gold hover:underline text-sm">Palermo</Link>
              <Link href="/blog/mudanzas-villa-crespo" className="text-gold hover:underline text-sm">Villa Crespo</Link>
              <Link href="/blog/mudanzas-colegiales" className="text-gold hover:underline text-sm">Colegiales</Link>
              <Link href="/blog/mudanzas-paternal" className="text-gold hover:underline text-sm">Paternal</Link>
              <Link href="/blog/mudanzas-villa-ortuzar" className="text-gold hover:underline text-sm">Villa Ortúzar</Link>
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
