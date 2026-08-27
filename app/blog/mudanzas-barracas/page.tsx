import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Barracas Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Barracas: Polo Tecnológico, lofts en galpones reconvertidos y casas de barrio tradicional. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Barracas", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-barracas" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Barracas Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Barracas: Polo Tecnológico, lofts en galpones reconvertidos y casas de barrio tradicional. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-barracas",
  "datePublished": "2026-07-21",
  "dateModified": "2026-07-21",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-barracas" },
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
      "name": "¿Cuánto cuesta una mudanza en Barracas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Barracas se cotiza según el caso. Los lofts en galpones reconvertidos pueden tener particularidades de acceso que contemplamos en el presupuesto cerrado. El precio es fijo desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen experiencia en lofts y galpones reconvertidos de Barracas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Los galpones reconvertidos en lofts del Polo Tecnológico y alrededores tienen características particulares: techos altos, plantas abiertas y a veces accesos que no son los típicos de un edificio residencial. Evaluamos el acceso antes del día de la mudanza para no tener sorpresas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es fácil el acceso vehicular en Barracas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La zona del Polo Tecnológico y las calles industriales de Barracas tienen buen acceso para camiones de carga. El barrio tradicional tiene calles más angostas. Elegimos el vehículo adecuado para cada zona y lo evaluamos en el presupuesto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Barracas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Barracas tiene una demanda creciente de mudanzas por la reconversión del barrio y la llegada de nuevos residentes al Polo Tecnológico y alrededores."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de oficinas en el Polo Tecnológico de Barracas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El Polo Tecnológico concentra muchas empresas de tecnología y startups. Realizamos mudanzas comerciales incluyendo traslado de mobiliario de oficina y archivos, coordinando fuera de horario laboral si es necesario."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Barracas</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Barracas es un barrio en plena transformación: conviven el barrio tradicional obrero con casas bajas y edificios de departamentos, y la nueva Barracas del Polo Tecnológico con galpones reconvertidos en lofts, oficinas de empresas tech y estudios creativos. Esta dualidad genera mudanzas muy distintas entre sí, y en Marino Mudanzas tenemos experiencia en ambas: desde el departamento de dos ambientes en el barrio hasta el loft en planta abierta con muebles de diseño.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Barracas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Lofts en galpones reconvertidos</strong> — plantas abiertas con techos altos y a veces accesos no convencionales. Evaluamos el acceso antes del día para evitar sorpresas.</li>
              <li><strong>Polo Tecnológico</strong> — zona con buen acceso vehicular y calles amplias que facilitan el ingreso de camiones de mayor tamaño.</li>
              <li><strong>Barrio tradicional de Barracas</strong> — casas bajas, edificios de departamentos de los años 50-70 y calles más angostas en el sector histórico.</li>
              <li><strong>Empresas y startups</strong> — mudanzas comerciales frecuentes por la concentración de empresas de tecnología en el área del polo.</li>
              <li><strong>Alta rotación de inquilinos</strong> — la reconversión del barrio atrae nuevos residentes constantemente. Turnos de fin de mes muy demandados.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Barracas?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Evaluación previa del acceso en lofts y galpones reconvertidos</li>
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado a la calle y el acceso</li>
              <li>Mudanzas comerciales de oficinas y estudios</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Barracas que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Polo Tecnológico</strong> — zona de empresas tech y galpones reconvertidos con buen acceso vehicular</li>
              <li><strong>Av. Montes de Oca</strong> — eje principal del barrio con edificios de departamentos</li>
              <li><strong>Barracas histórico</strong> — casas bajas y edificios de los años 50-70 en el sector tradicional</li>
              <li><strong>Límite con La Boca y Parque Patricios</strong> — zona de transición con calles amplias y buen acceso</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Barracas</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Barracas?</h3>
            <p>Un 2 ambientes se cotiza según el caso. Los lofts con particularidades de acceso se evalúan antes del día de la mudanza y el costo queda contemplado en el presupuesto cerrado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen experiencia en lofts y galpones reconvertidos?</h3>
            <p>Sí. Plantas abiertas con techos altos y accesos no convencionales son frecuentes en Barracas. Evaluamos antes del día de la mudanza para no tener sorpresas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Es fácil el acceso vehicular en Barracas?</h3>
            <p>La zona del Polo Tecnológico tiene calles amplias y buen acceso para camiones. El barrio tradicional tiene calles más angostas; elegimos el vehículo adecuado para cada caso.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. Barracas tiene demanda creciente por la reconversión del barrio.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de oficinas en el Polo Tecnológico?</h3>
            <p>Sí. Traslado de mobiliario de oficina y archivos. Podemos coordinar fuera de horario laboral si es necesario.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el acceso y el piso. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-parque-patricios" className="text-gold hover:underline text-sm">Parque Patricios</Link>
              <Link href="/blog/mudanzas-la-boca" className="text-gold hover:underline text-sm">La Boca</Link>
              <Link href="/blog/mudanzas-san-telmo" className="text-gold hover:underline text-sm">San Telmo</Link>
              <Link href="/blog/mudanzas-nueva-pompeya" className="text-gold hover:underline text-sm">Nueva Pompeya</Link>
              <Link href="/blog/mudanzas-constitucion" className="text-gold hover:underline text-sm">Constitución</Link>
              <Link href="/mudanzas-oficinas-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas de oficinas</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
