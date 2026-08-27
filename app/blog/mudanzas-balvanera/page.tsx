import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Balvanera Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Balvanera: Once, Abasto y Congreso. Alta rotación de inquilinos y edificios de los 40-60 sin ascensor. Precio cerrado. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Balvanera", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-balvanera" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Balvanera Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Balvanera: Once, Abasto y Congreso. Alta rotación de inquilinos y edificios de los 40-60 sin ascensor. Precio cerrado.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-balvanera",
  "datePublished": "2026-07-21",
  "dateModified": "2026-07-21",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-balvanera" },
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
      "name": "¿Cuánto cuesta una mudanza en Balvanera?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Balvanera se cotiza según el caso. Los edificios sin ascensor o con ascensores pequeños de los años 40-60 pueden tener un costo algo mayor por el trabajo adicional de escalera. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo manejan los edificios sin ascensor de la zona de Once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Contamos con personal especializado en subida por escalera y, cuando los muebles no pasan, elevación por soga desde el exterior. Es algo muy frecuente en los edificios de los años 40-60 del barrio y está contemplado en el presupuesto cerrado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Balvanera?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Balvanera tiene una de las tasas más altas de rotación de inquilinos de CABA, especialmente en la zona de Once y Congreso, y los turnos de fin de mes se llenan rápido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es difícil estacionar el camión en la zona de Once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La zona comercial de Once tiene mucho movimiento y restricciones de estacionamiento. Coordinamos el horario de llegada para evitar los picos de tráfico y usamos el vehículo adecuado al tipo de calle. En las calles internas el acceso es más fácil."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas en la zona del Abasto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, cubrimos todo Balvanera incluyendo la zona del Abasto con sus edificios nuevos y los conventillos reciclados. El Abasto tiene mejor accesibilidad que Once y las calles internas permiten el ingreso de camiones de distintos tamaños."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Balvanera</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Balvanera es uno de los barrios con mayor densidad de Buenos Aires, con tres zonas muy distintas: la comercial y bulliciosa de Once, la residencial y reciclada del Abasto, y la más tranquila de Congreso. Los edificios de los años 40-60 sin ascensor son muy comunes en la zona de Once, mientras que el Abasto concentra edificios nuevos y conventillos reciclados. En Marino Mudanzas trabajamos en Balvanera hace décadas y conocemos bien los desafíos logísticos de cada sector.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Balvanera</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Edificios sin ascensor de los 40-60</strong> — muy frecuentes en la zona de Once. Subida por escalera con personal extra o elevación por soga cuando los muebles no pasan.</li>
              <li><strong>Zona comercial de Once</strong> — mucho tráfico y restricciones de estacionamiento. Coordinamos el horario y el vehículo adecuado para minimizar demoras.</li>
              <li><strong>Abasto con edificios nuevos y reciclados</strong> — mejor accesibilidad y ascensores modernos. Conventillos reciclados con patios internos que facilitan la carga.</li>
              <li><strong>Congreso</strong> — zona de departamentos con alta rotación de inquilinos, muchos estudiantes y jóvenes profesionales.</li>
              <li><strong>Alta rotación de inquilinos</strong> — Balvanera tiene una de las tasas más altas de rotación de CABA. Los turnos de fin de mes se llenan muy rápido.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Balvanera?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Elevación por soga para edificios sin ascensor</li>
              <li>Vehículo del tamaño adecuado a la calle y el edificio</li>
              <li>Coordinación de horario para evitar el tráfico de Once</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Balvanera que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Once</strong> — zona comercial con edificios de los 40-60 y alta rotación de inquilinos</li>
              <li><strong>Abasto</strong> — zona reciclada con mejor accesibilidad y edificios nuevos</li>
              <li><strong>Congreso</strong> — zona de departamentos cerca del Palacio Legislativo</li>
              <li><strong>Av. Corrientes</strong> — eje de alta densidad con departamentos en alquiler</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Balvanera</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Balvanera?</h3>
            <p>Un 2 ambientes se cotiza según el caso. Edificios sin ascensor o con escaleras largas pueden tener costo adicional contemplado desde el presupuesto cerrado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo manejan los edificios sin ascensor de Once?</h3>
            <p>Con personal especializado en subida por escalera. Cuando los muebles no pasan, usamos soga desde el exterior. Está contemplado en el presupuesto antes del día.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. Balvanera tiene una de las tasas de rotación más altas de CABA.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Es difícil estacionar en Once?</h3>
            <p>Sí, hay mucho tráfico y restricciones. Coordinamos horario y elegimos el vehículo adecuado. En las calles internas el acceso es más fácil.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas en la zona del Abasto?</h3>
            <p>Sí, el Abasto tiene mejor accesibilidad que Once. Edificios nuevos y conventillos reciclados con patios internos que facilitan la carga.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-almagro" className="text-gold hover:underline text-sm">Almagro</Link>
              <Link href="/blog/mudanzas-caballito" className="text-gold hover:underline text-sm">Caballito</Link>
              <Link href="/blog/mudanzas-montserrat" className="text-gold hover:underline text-sm">Montserrat</Link>
              <Link href="/blog/mudanzas-san-telmo" className="text-gold hover:underline text-sm">San Telmo</Link>
              <Link href="/blog/mudanzas-boedo" className="text-gold hover:underline text-sm">Boedo</Link>
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
