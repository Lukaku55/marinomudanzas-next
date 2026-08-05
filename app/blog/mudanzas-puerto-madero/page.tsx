import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Puerto Madero Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Puerto Madero: torres premium, consorcios estrictos, montacargas con turno anticipado y acceso vehicular controlado. Precio cerrado. 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Puerto Madero", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-puerto-madero" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Puerto Madero Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Puerto Madero: torres premium, consorcios estrictos, montacargas con turno anticipado y acceso vehicular controlado. Precio cerrado.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-puerto-madero",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-puerto-madero" },
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
      "name": "¿Cuánto cuesta una mudanza en Puerto Madero?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Puerto Madero ronda los $250.000–$400.000. El precio es mayor al promedio del resto de CABA porque los edificios requieren coordinación anticipada con el consorcio, protección premium de áreas comunes y personal con experiencia en edificios exclusivos. El precio es cerrado desde el presupuesto, sin adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se tramita el turno de montacargas en Puerto Madero?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los edificios de Puerto Madero como Alvear Tower, Le Parc y Madero Harbour asignan el turno de montacargas con semanas o meses de anticipación. Nosotros coordinamos directamente con el encargado o la administración del consorcio una vez que tenés la fecha confirmada, gestionando la reserva del turno, la protección obligatoria de hall y ascensores, y el depósito de garantía si lo exigen."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo es el acceso vehicular en Puerto Madero?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puerto Madero tiene barreras de acceso vehicular en muchas de sus torres. Utilizamos vehículos del tamaño adecuado para circular en zonas con control de acceso y coordinamos con el consorcio el ingreso del camión el día de la mudanza. El personal llega con documentación y datos del servicio para facilitar el paso en los controles."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Puerto Madero?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos reservar con al menos 2 a 3 semanas de anticipación, y en muchos casos más, porque el turno de montacargas en las torres premium puede requerir solicitud formal a la administración con 15 a 30 días de antelación. Cuanto antes nos contactés, mejor podemos coordinar todo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de oficinas en Puerto Madero?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Puerto Madero concentra muchos edificios corporativos de alto nivel. Realizamos mudanzas de oficinas incluyendo traslado de mobiliario, servidores, archivos y equipamiento delicado. Coordinamos fuera de horario laboral o en fin de semana para no interrumpir la operación de la empresa."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Puerto Madero</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Puerto Madero es el barrio más exclusivo y costoso de Buenos Aires. Sus torres residenciales y de oficinas — Alvear Tower, Le Parc, Madero Harbour — imponen exigencias que pocas empresas de mudanzas están preparadas para cumplir: turnos de montacargas asignados con semanas de anticipación, depósitos de garantía, protección obligatoria de áreas comunes y acceso vehicular controlado por barreras. En Marino Mudanzas trabajamos con este tipo de edificios desde hace décadas y sabemos cómo manejarlo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Lo que diferencia a una mudanza en Puerto Madero</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consorcios muy estrictos</strong> — protocolo formal: solicitud escrita a la administración, turno de montacargas con reserva anticipada, seguro de consorcio y depósito de garantía en muchos casos.</li>
              <li><strong>Acceso vehicular con barreras</strong> — los ingresos están controlados. El camión debe tener los datos previos para pasar el control. Elegimos el vehículo adecuado para cada acceso.</li>
              <li><strong>Muebles de alto valor</strong> — en Puerto Madero es habitual el traslado de mobiliario de diseño, obras de arte, electrodomésticos de gama alta y equipamiento especial. Aplicamos protección premium en cada pieza.</li>
              <li><strong>Edificios corporativos</strong> — además de las torres residenciales, el barrio concentra oficinas de grandes empresas. Hacemos mudanzas comerciales coordinadas fuera de horario.</li>
              <li><strong>Precios más altos del mercado</strong> — un 2 ambientes en Puerto Madero ronda los $250.000–$400.000, reflejando la complejidad logística y el nivel de servicio requerido.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio en Puerto Madero?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Coordinación anticipada con el consorcio y tramitación del turno de montacargas</li>
              <li>Desarmado y armado de muebles (placares, camas, escritorios, estanterías)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo adecuado para zonas con control de acceso y barreras</li>
              <li>Protección premium de muebles de alto valor durante todo el traslado</li>
              <li>Personal con experiencia en edificios exclusivos y protocolos de consorcio</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Puerto Madero</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Puerto Madero?</h3>
            <p>Un departamento de 2 ambientes ronda los $250.000–$400.000, más que el promedio de CABA por la complejidad logística y el nivel de servicio. El precio es cerrado desde el presupuesto, sin adicionales el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo se tramita el turno de montacargas?</h3>
            <p>Coordinamos directamente con el encargado o la administración. Muchos edificios de Puerto Madero requieren solicitud formal con 15 a 30 días de anticipación. Por eso recomendamos contactarnos lo antes posible una vez que tenés la fecha.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo es el acceso vehicular en Puerto Madero?</h3>
            <p>Muchas torres tienen barreras de acceso. Coordinamos el ingreso del camión con anticipación y enviamos la documentación necesaria al consorcio para facilitar el paso el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos 2 a 3 semanas, y en muchos casos más. El turno de montacargas en las torres premium puede requerir hasta 30 días de anticipación en la solicitud a la administración.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de oficinas en Puerto Madero?</h3>
            <p>Sí. Traslado de mobiliario, servidores, archivos y equipamiento delicado. Coordinamos fuera de horario laboral o en fin de semana para no interrumpir la operación de la empresa.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el edificio, el piso y si ya tenés fecha tentativa para coordinar el turno de montacargas. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-san-nicolas" className="text-gold hover:underline text-sm">San Nicolás</Link>
              <Link href="/blog/mudanzas-retiro" className="text-gold hover:underline text-sm">Retiro</Link>
              <Link href="/blog/mudanzas-montserrat" className="text-gold hover:underline text-sm">Montserrat</Link>
              <Link href="/blog/mudanzas-san-telmo" className="text-gold hover:underline text-sm">San Telmo</Link>
              <Link href="/blog/mudanzas-recoleta" className="text-gold hover:underline text-sm">Recoleta</Link>
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
