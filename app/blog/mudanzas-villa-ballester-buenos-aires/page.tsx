import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Villa Ballester Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Villa Ballester, partido de San Martín. Precio cerrado sin sorpresas para casas y edificios. Acceso rápido desde CABA. Presupuesto sin cargo: 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Villa Ballester", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-ballester-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Villa Ballester Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Villa Ballester, partido de San Martín. Precio cerrado sin sorpresas para casas y edificios. Acceso rápido desde CABA.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-ballester-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-ballester-buenos-aires" },
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
      "name": "¿Cuánto cuesta una mudanza en Villa Ballester?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Villa Ballester se cotiza según el caso. El precio final depende del piso, si hay ascensor y el volumen de muebles. El precio es cerrado desde el presupuesto: no hay costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda el acceso a Villa Ballester desde CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El acceso desde CABA es rápido: entre 20 y 30 minutos por la General Paz y Av. Constituyentes, o por el Acceso Norte. Desde nuestra base en Flores coordinamos la ruta más eficiente según el horario y el punto exacto en Villa Ballester."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de propiedades predominan en Villa Ballester?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Villa Ballester tiene un mix equilibrado de casas de familia y edificios de 4 a 8 pisos. Contamos con vehículos de todos los tamaños para adaptarnos tanto a una casa con jardín como a un edificio con o sin ascensor."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubren toda la zona de San Martín, no solo Villa Ballester?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Cubrimos todo el partido de General San Martín: Villa Ballester, José León Suárez, Villa Maipú, Villa Lynch, San Martín centro y otras localidades del partido. El precio cerrado aplica a toda la zona."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Villa Ballester?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para mudanzas de fin de mes o sábados, recomendamos reservar con 10 a 15 días de anticipación. Villa Ballester tiene alta rotación de alquileres y los turnos de fin de mes se ocupan rápido."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Villa Ballester</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Villa Ballester es una de las localidades más importantes del partido de General San Martín, en el GBA norte. Ciudad residencial con un centro comercial activo, tiene un mix característico de casas de familia y edificios de 4 a 8 pisos que generan una demanda constante de mudanzas. Su excelente conectividad con CABA —a través de la General Paz, Av. Constituyentes o el Acceso Norte— la convierte en una de las zonas más ágiles del corredor norte para operar. En Marino Mudanzas hacemos mudanzas en Villa Ballester todos los días desde nuestra base en Flores.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Villa Ballester</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Edificios de 4 a 8 pisos</strong> — gran parte del parque habitacional son edificios de altura media. Coordinamos horarios con el encargado y el uso del montacargas si lo hay.</li>
              <li><strong>Casas de familia</strong> — garajes, jardines y accesos amplios facilitan la operación. Tenemos vehículos de todos los tamaños para adaptarnos a cada caso.</li>
              <li><strong>Alta rotación de alquileres</strong> — Villa Ballester tiene una población joven y un mercado de alquileres muy activo, lo que genera alta demanda de mudanzas, especialmente a fin de mes.</li>
              <li><strong>Acceso directo desde CABA</strong> — por Av. Constituyentes o el Acceso Norte, el tiempo de traslado desde CABA es de 20 a 30 minutos en condiciones normales de tráfico.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Villa Ballester</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Villa Ballester?</h3>
            <p>Un departamento de 2 ambientes se cotiza según el caso. El precio final varía según el piso, si hay ascensor y el volumen total. El precio es cerrado desde el presupuesto: sin sorpresas el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tarda el acceso desde CABA?</h3>
            <p>Entre 20 y 30 minutos por la General Paz y Av. Constituyentes, o por el Acceso Norte. Coordinamos la ruta más eficiente según el horario y el punto exacto de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué tipo de propiedades predominan?</h3>
            <p>Un mix equilibrado de casas de familia y edificios de 4 a 8 pisos. Tenemos vehículos y personal adecuado para cualquier tipo de propiedad, con o sin ascensor.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cubren toda la zona de San Martín?</h3>
            <p>Sí. Cubrimos todo el partido de General San Martín: Villa Ballester, José León Suárez, Villa Maipú, Villa Lynch y San Martín centro, con precio cerrado en toda la zona.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10 a 15 días. La alta rotación de alquileres en Villa Ballester hace que los turnos de fin de mes se ocupen rápidamente.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-san-martin" className="text-gold hover:underline text-sm">Mudanzas en San Martín</Link>
              <Link href="/blog/mudanzas-tres-de-febrero" className="text-gold hover:underline text-sm">Mudanzas en Tres de Febrero</Link>
              <Link href="/blog/mudanzas-moron" className="text-gold hover:underline text-sm">Mudanzas en Morón</Link>
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Mudanzas en Belgrano</Link>
              <Link href="/blog/mudanzas-villa-urquiza" className="text-gold hover:underline text-sm">Mudanzas en Villa Urquiza</Link>
              <Link href="/blog/mudanzas-haedo-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas en Haedo</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
