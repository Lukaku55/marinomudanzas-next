import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Pilar GBA | Marino Mudanzas",
  description: "Mudanzas en Pilar: countries y barrios privados del norte del GBA. Coordinación previa con administraciones y precio cerrado. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Pilar", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-pilar" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Pilar GBA | Marino Mudanzas",
  "description": "Mudanzas en Pilar: countries y barrios privados del norte del GBA. Coordinación previa con administraciones y precio cerrado.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-pilar",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-pilar" },
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
      "name": "¿Pueden ingresar a countries y barrios cerrados en Pilar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Coordinamos el acceso previamente con la administración de cada country: documentación del personal, datos del vehículo y el turno asignado para la mudanza. Todo queda acordado antes del día para no tener demoras en el ingreso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Pilar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza en Pilar incluye la distancia desde nuestra base en Flores. Una casa en country puede ir a consultar según el caso según el volumen. Un departamento o casa urbana se cotiza según el caso. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Pilar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para mudanzas en countries o barrios cerrados, al menos 2 semanas para gestionar los permisos de ingreso. Para casas o departamentos urbanos, 10–15 días de anticipación son suficientes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo acceden a Pilar desde CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El acceso principal es por la Autopista Panamericana (Ramal Pilar). Desde nuestra base en Flores, el tiempo estimado hasta Pilar centro es de 40–55 minutos según el tráfico. Coordinamos el horario de salida para evitar los picos de tráfico en la autopista."
      }
    },
    {
      "@type": "Question",
      "name": "¿Manejan muebles de alto valor o casas grandes en Pilar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las casas en countries de Pilar suelen ser grandes, con mucho volumen y muebles de alto valor. Embalamos con materiales especiales y contamos con el personal necesario para mudanzas de este tipo."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Pilar</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Pilar es uno de los partidos con mayor concentración de urbanizaciones privadas del norte del Gran Buenos Aires. La gran cantidad de countries y barrios cerrados requiere una logística especial: coordinación previa con cada administración, documentación del personal, datos del vehículo y el turno asignado para la mudanza. En Marino Mudanzas tenemos experiencia en este tipo de accesos y en el manejo de casas de gran porte con muebles de alto valor.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Pilar</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Countries y barrios cerrados</strong> — la principal tipología del partido. Requieren coordinación previa con la administración para el ingreso del camión y el personal. Lo gestionamos nosotros.</li>
              <li><strong>Casas de gran porte</strong> — las propiedades de Pilar suelen ser amplias, con jardín, pileta y múltiples ambientes. Se requieren camiones de mayor capacidad y personal abundante.</li>
              <li><strong>Pilar urbano</strong> — el centro de Pilar y Villa Rosa tienen casas y edificios con acceso más sencillo.</li>
              <li><strong>Muebles de alto valor</strong> — embalaje especial con mantas acolchadas y materiales específicos para piezas delicadas.</li>
              <li><strong>Acceso por Panamericana</strong> — el tiempo de traslado desde CABA se incorpora al presupuesto cerrado. Coordinamos el horario para evitar los picos de tráfico.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Pilar?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Coordinación previa con la administración del country o barrio privado</li>
              <li>Desarmado y armado de muebles de gran porte</li>
              <li>Embalaje especial para muebles de alto valor y objetos delicados</li>
              <li>Traslado de muebles de jardín y elementos de exterior</li>
              <li>Camión del tamaño adecuado al volumen de la propiedad</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2idy font-bold text-foreground mt-10 mb-4">Zonas de Pilar que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Countries y barrios privados</strong> — toda la zona de urbanizaciones privadas del partido</li>
              <li><strong>Pilar centro</strong> — zona urbana con casas y edificios de fácil acceso</li>
              <li><strong>Villa Rosa</strong> — localidad residencial al norte del partido</li>
              <li><strong>Del Viso</strong> — zona con barrios privados y casas de familia</li>
              <li><strong>Maquinista Savio</strong> — zona industrial y residencial, igualmente cubierta</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Pilar</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden ingresar a countries y barrios cerrados?</h3>
            <p>Sí. Coordinamos el acceso previamente: documentación, datos del vehículo y turno asignado. Todo acordado antes del día para no tener demoras.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Pilar?</h3>
            <p>Una casa en country puede ir a consultar según el caso. Un departamento o casa urbana se cotiza según el caso. El precio incluye la distancia y es cerrado desde el presupuesto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Para countries, al menos 2 semanas para gestionar los permisos de ingreso. Para casas y departamentos urbanos, 10–15 días.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo acceden a Pilar desde CABA?</h3>
            <p>Por la Autopista Panamericana, Ramal Pilar. Aproximadamente 40–55 minutos desde nuestra base en Flores. Coordinamos el horario para evitar los picos de tráfico.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Manejan casas grandes con muebles de alto valor?</h3>
            <p>Sí, es lo más frecuente en Pilar. Embalaje especial, personal suficiente y camiones de mayor capacidad para propiedades grandes.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos si es country o propiedad urbana, el volumen aproximado y la localidad. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-tigre" className="text-gold hover:underline text-sm">Tigre</Link>
              <Link href="/blog/mudanzas-san-isidro" className="text-gold hover:underline text-sm">San Isidro</Link>
              <Link href="/blog/mudanzas-tortuguitas" className="text-gold hover:underline text-sm">Tortuguitas</Link>
              <Link href="/blog/mudanzas-malvinas-argentinas" className="text-gold hover:underline text-sm">Malvinas Argentinas</Link>
              <Link href="/blog/mudanzas-jose-c-paz" className="text-gold hover:underline text-sm">José C. Paz</Link>
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
