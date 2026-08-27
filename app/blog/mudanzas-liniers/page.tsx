import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Liniers Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Liniers: zona comercial y residencial del oeste de CABA. Cerca de nuestra base en Flores. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Liniers", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-liniers" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Liniers Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Liniers: zona comercial y residencial del oeste de CABA. Cerca de nuestra base en Flores. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-liniers",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-liniers" },
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
      "name": "¿Cuánto cuesta una mudanza en Liniers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Liniers se cotiza según el caso. Una casa puede ir a consultar según el caso según el volumen. Nuestra base está en Flores, a pocos minutos del barrio, lo que reduce los costos de traslado respecto a empresas del centro. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo es el tráfico en la zona de Liniers para los camiones?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Av. Rivadavia es una de las avenidas con más tránsito de la zona oeste. Las calles internas del barrio son más tranquilas y accesibles. Coordinamos el horario de llegada para evitar los picos de tráfico y elegimos el camino de acceso más eficiente para cada dirección."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas comerciales en Liniers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Liniers tiene una importante zona comercial. Realizamos mudanzas de locales, traslado de mercadería y equipamiento comercial con precio cerrado desde el presupuesto. Coordinamos el horario para minimizar el tiempo de inactividad del negocio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Liniers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Liniers tiene una importante rotación de inquilinos especialmente en la zona de Av. Rivadavia y los departamentos de alquiler del barrio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de Liniers hacia el GBA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Liniers está en el límite con el GBA, con acceso directo a La Matanza por Av. General Paz. Realizamos mudanzas hacia cualquier punto del GBA con precio cerrado desde el presupuesto."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Liniers</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Liniers es uno de los barrios más activos del oeste de Buenos Aires, con una mezcla de zona comercial en Av. Rivadavia y un sector residencial de casas y departamentos en las calles internas. Su ubicación en el límite con el GBA lo convierte en un punto de partida frecuente para mudanzas tanto dentro de CABA como hacia La Matanza y otros partidos del GBA oeste. En Marino Mudanzas tenemos nuestra base en Flores, a pocos minutos de Liniers, lo que nos permite llegar antes y a menor costo que empresas ubicadas en el centro.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Liniers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zona comercial activa</strong> — Av. Rivadavia y sus alrededores concentran comercios y locales que generan mudanzas comerciales frecuentes. Coordinamos el horario para minimizar el impacto en la actividad del negocio.</li>
              <li><strong>Casas y edificios en las calles internas</strong> — el sector residencial tiene calles tranquilas y buen acceso para camiones de distintos tamaños.</li>
              <li><strong>Alta rotación en zona de alquiler</strong> — los departamentos y casas en alquiler del barrio tienen buena rotación, especialmente a fin de mes.</li>
              <li><strong>Acceso directo al GBA oeste</strong> — Av. General Paz está a pocas cuadras. Coordinamos mudanzas con destino en La Matanza, Morón y toda la zona sin complicaciones de acceso.</li>
              <li><strong>Tráfico en Av. Rivadavia</strong> — planificamos el horario de llegada para evitar los picos de tráfico del corredor principal del barrio.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Liniers?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Traslado de equipamiento comercial y de locales</li>
              <li>Vehículo del tamaño adecuado a cada tipo de propiedad y calle</li>
              <li>Mudanzas hacia el GBA con precio cerrado</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Liniers que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Corredor Rivadavia</strong> — eje comercial principal con alta rotación y mudanzas frecuentes</li>
              <li><strong>Liniers residencial</strong> — calles internas con casas y departamentos de buen acceso</li>
              <li><strong>Límite Mataderos</strong> — zona de transición hacia el sur del barrio con acceso por Av. Directorio</li>
              <li><strong>Límite Flores</strong> — zona de transición norte con características similares y muy cercana a nuestra base</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Liniers</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Liniers?</h3>
            <p>Un 2 ambientes se cotiza según el caso. Una casa puede ir a consultar según el caso según el volumen. Nuestra base en Flores nos permite llegar antes y con menor costo de traslado que empresas del centro.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo es el tráfico en la zona para los camiones?</h3>
            <p>Av. Rivadavia tiene tráfico intenso. Las calles internas son más accesibles. Coordinamos el horario de llegada para evitar los picos y elegimos el recorrido más eficiente para cada dirección.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas comerciales en Liniers?</h3>
            <p>Sí. Traslado de locales, mercadería y equipamiento comercial con precio cerrado. Coordinamos el horario para minimizar el tiempo de inactividad del negocio.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. La zona de Rivadavia tiene rotación y los turnos de fin de mes se llenan.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de Liniers hacia el GBA?</h3>
            <p>Sí. Liniers está en el límite con el GBA y tenemos acceso directo a La Matanza, Morón y toda la zona oeste. Precio cerrado desde el presupuesto.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-flores" className="text-gold hover:underline text-sm">Flores</Link>
              <Link href="/blog/mudanzas-mataderos" className="text-gold hover:underline text-sm">Mataderos</Link>
              <Link href="/blog/mudanzas-villa-luro" className="text-gold hover:underline text-sm">Villa Luro</Link>
              <Link href="/blog/mudanzas-villa-devoto" className="text-gold hover:underline text-sm">Villa Devoto</Link>
              <Link href="/blog/mudanzas-la-matanza" className="text-gold hover:underline text-sm">La Matanza</Link>
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
