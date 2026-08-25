import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Ramos Mejía GBA Oeste | Marino Mudanzas",
  description: "Mudanzas en Ramos Mejía, GBA oeste: mix de casas y edificios, acceso fácil desde CABA por Av. Rivadavia o autopista. Precio cerrado. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Ramos Mejía", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-ramos-mejia-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Ramos Mejía GBA Oeste | Marino Mudanzas",
  "description": "Mudanzas en Ramos Mejía, GBA oeste: mix de casas y edificios, acceso fácil desde CABA por Av. Rivadavia o autopista. Precio cerrado. Presupuesto sin cargo.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-ramos-mejia-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-ramos-mejia-buenos-aires" },
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
      "name": "¿Cuánto cuesta una mudanza en Ramos Mejía?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Ramos Mejía ronda los $140.000–$220.000. Una casa de familia puede ir desde $250.000 hasta $420.000 según el volumen y la cantidad de ambientes. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se llega desde CABA a Ramos Mejía?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En 20 a 30 minutos por Av. Rivadavia, que conecta directamente con el centro de Ramos Mejía, o por la A1 (Autopista del Oeste) tomando la salida correspondiente. El traslado desde o hacia CABA está incluido en el precio cerrado del presupuesto, sin cargos adicionales por distancia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de propiedades hay en Ramos Mejía?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ramos Mejía tiene un mix equilibrado: casas de familia de mediano porte en las zonas internas y edificios residenciales de 4 a 10 pisos sobre las avenidas principales y cerca de la estación de tren. Hay tanto propiedades con ascensor como sin él, lo que varía la logística de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubrís todo el partido de La Matanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Además de Ramos Mejía cubrimos todo el partido de La Matanza: San Justo, Haedo, Ciudad Evita, Tapiales, González Catán, Isidro Casanova, Rafael Castillo, La Tablada y todas las localidades del partido. Es una de las zonas más activas del GBA oeste en las que trabajamos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Ramos Mejía?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para mudanzas estándar, una semana de anticipación es suficiente. Para mudanzas a fin de mes —la fecha de mayor demanda en Ramos Mejía dado el alto volumen de alquileres— recomendamos reservar con al menos 15 días de anticipación para asegurar disponibilidad."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Ramos Mejía</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Ramos Mejía es una de las ciudades más importantes y pobladas del partido de La Matanza, en el GBA oeste. Ciudad histórica con fuerte actividad comercial, un mix equilibrado de casas de familia y edificios residenciales, y un eje comercial consolidado sobre Av. De Mayo. Con fácil acceso desde CABA por Av. Rivadavia o por la A1 (Autopista del Oeste), Ramos Mejía es una de las zonas del GBA oeste en las que Marino Mudanzas trabaja con mayor frecuencia.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Características de las mudanzas en Ramos Mejía</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mix de casas y edificios</strong> — las zonas internas tienen casas de familia de mediano porte; las avenidas y el entorno de la estación concentran edificios residenciales de 4 a 10 pisos con alta rotación de alquileres.</li>
              <li><strong>Edificios con y sin ascensor</strong> — hay una gran proporción de edificios sin ascensor en Ramos Mejía, especialmente en construcciones más antiguas. Contamos con el equipo y el personal para mudanzas por escalera en cualquier piso.</li>
              <li><strong>Alta rotación de alquileres</strong> — Ramos Mejía tiene un mercado de alquiler muy activo. Los fines de mes concentran la mayor cantidad de mudanzas del año; recomendamos reservar con anticipación en esas fechas.</li>
              <li><strong>Acceso por Av. Rivadavia o A1</strong> — dos rutas directas desde CABA permiten llegar en 20 a 30 minutos. El tráfico sobre Rivadavia puede extender los tiempos en horas pico.</li>
              <li><strong>Eje comercial en Av. De Mayo</strong> — la avenida principal concentra comercios y servicios. Para mudanzas en edificios sobre esta arteria, coordinamos el horario de estacionamiento del camión.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Ramos Mejía</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Ramos Mejía?</h3>
            <p>Un departamento de 2 ambientes ronda los $140.000–$220.000. Una casa puede ir desde $250.000 hasta $420.000 según el volumen. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo se llega desde CABA a Ramos Mejía?</h3>
            <p>En 20 a 30 minutos por Av. Rivadavia o por la A1 (Autopista del Oeste). El traslado desde o hacia CABA está incluido en el precio cerrado del presupuesto, sin cargos adicionales por distancia.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué tipo de propiedades hay en Ramos Mejía?</h3>
            <p>Un mix equilibrado: casas de familia en zonas internas y edificios de 4 a 10 pisos sobre las avenidas y cerca de la estación. Hay propiedades con y sin ascensor, lo que varía la logística de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cubrís todo el partido de La Matanza?</h3>
            <p>Sí. Cubrimos Ramos Mejía, San Justo, Haedo, Ciudad Evita, Tapiales, González Catán, Isidro Casanova, Rafael Castillo, La Tablada y todas las localidades del partido de La Matanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Para mudanzas estándar, una semana es suficiente. Para mudanzas a fin de mes —la fecha de mayor demanda por el alto volumen de alquileres— recomendamos reservar con al menos 15 días de anticipación.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-la-matanza" className="text-gold hover:underline text-sm">La Matanza</Link>
              <Link href="/blog/mudanzas-san-justo-buenos-aires" className="text-gold hover:underline text-sm">San Justo</Link>
              <Link href="/blog/mudanzas-haedo-buenos-aires" className="text-gold hover:underline text-sm">Haedo</Link>
              <Link href="/blog/mudanzas-moron" className="text-gold hover:underline text-sm">Morón</Link>
              <Link href="/blog/mudanzas-villa-ballester-buenos-aires" className="text-gold hover:underline text-sm">Villa Ballester</Link>
              <Link href="/blog/mudanzas-liniers" className="text-gold hover:underline text-sm">Liniers</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
