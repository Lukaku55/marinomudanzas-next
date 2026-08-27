import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Tigre GBA | Marino Mudanzas",
  description: "Mudanzas en Tigre: Nordelta, countries y barrios cerrados del norte del GBA. Coordinación previa incluida. Precio cerrado. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Tigre", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-tigre" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Tigre GBA | Marino Mudanzas",
  "description": "Mudanzas en Tigre: Nordelta, countries y barrios cerrados del norte del GBA. Coordinación previa incluida. Precio cerrado.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-tigre",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-tigre" },
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
      "name": "¿Hacen mudanzas en Nordelta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Nordelta es una de las urbanizaciones más grandes del GBA y tiene sus propias reglas de acceso para proveedores externos. Coordinamos el ingreso previamente con la administración: documentación del personal, datos del vehículo y el turno asignado. Todo queda listo antes del día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Tigre?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza en Tigre incluye la distancia desde nuestra base en Flores. Una casa en Nordelta o country puede ir a consultar según el caso según el volumen. Una casa o departamento en Tigre urbano se cotiza según el caso. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Pueden ingresar a todos los countries de Tigre?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Coordinamos el acceso con la administración de cada barrio privado: documentación, datos del vehículo y turno asignado. Cada urbanización tiene sus propias reglas y las gestionamos nosotros para que no tengas que hacerlo vos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Tigre?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para mudanzas en Nordelta o countries, al menos 2–3 semanas para gestionar los permisos de ingreso. Para Tigre urbano, al menos 10–15 días de anticipación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo acceden a Tigre desde CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Por la Autopista Panamericana, Ramal Tigre. Nordelta tiene acceso específico por el Acceso Nordelta. Desde nuestra base en Flores, el tiempo estimado es de 40–60 minutos según el tráfico en la autopista."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Tigre</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Tigre es uno de los partidos con mayor variedad de tipologías residenciales del norte del GBA: desde Nordelta y los countries del sector continental, hasta las casas sobre el río en la zona isleña y el casco urbano tradicional. Las mudanzas en Tigre requieren coordinación especial para el acceso a urbanizaciones privadas y, en algunos casos, logística específica para la zona isleña. En Marino Mudanzas nos ocupamos de toda la gestión previa para que la mudanza sea simple y sin sorpresas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Tigre</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nordelta</strong> — la urbanización más grande del partido. Requiere registro previo de proveedores y turno asignado por la administración. Lo gestionamos nosotros antes del día de la mudanza.</li>
              <li><strong>Countries y barrios cerrados</strong> — el sector continental de Tigre concentra numerosas urbanizaciones privadas. Coordinamos el acceso con cada una individualmente.</li>
              <li><strong>Tigre urbano</strong> — el casco histórico de Tigre tiene casas de familia con buen acceso vehicular. Zona con menor demanda de coordinación previa.</li>
              <li><strong>Casas grandes con jardín</strong> — las propiedades de Nordelta y los countries suelen tener mucho volumen. Camiones de mayor capacidad y personal extra.</li>
              <li><strong>Acceso por Panamericana</strong> — el tiempo de traslado desde CABA está incluido en el presupuesto cerrado. Coordinamos el horario para evitar el tráfico.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Tigre?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Coordinación previa con la administración de Nordelta o el country</li>
              <li>Desarmado y armado de muebles de gran porte</li>
              <li>Embalaje especial para muebles de alto valor y objetos delicados</li>
              <li>Traslado de muebles de jardín y elementos de exterior</li>
              <li>Camión del tamaño adecuado al volumen de la propiedad</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Tigre que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nordelta</strong> — la urbanización más grande y exigente en coordinación previa</li>
              <li><strong>Countries del sector continental</strong> — toda la zona de urbanizaciones privadas</li>
              <li><strong>Tigre urbano</strong> — casco histórico con casas de familia y buen acceso</li>
              <li><strong>Don Torcuato</strong> — localidad con casas y buen acceso desde la Panamericana</li>
              <li><strong>General Pacheco</strong> — zona residencial e industrial al sur del partido</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Tigre</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas en Nordelta?</h3>
            <p>Sí. Nordelta requiere registro previo de proveedores y turno asignado. Lo gestionamos nosotros. Todo queda listo antes del día de la mudanza para no tener demoras en el ingreso.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Tigre?</h3>
            <p>Una casa en Nordelta o country puede ir a consultar según el caso según el volumen. Tigre urbano se cotiza según el caso. El precio incluye la distancia y es cerrado desde el presupuesto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden ingresar a todos los countries de Tigre?</h3>
            <p>Sí. Coordinamos el acceso con la administración de cada barrio privado. Cada urbanización tiene sus propias reglas y las gestionamos nosotros.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Para Nordelta o countries, 2–3 semanas para gestionar los permisos. Para Tigre urbano, 10–15 días.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo acceden a Tigre desde CABA?</h3>
            <p>Por la Autopista Panamericana, Ramal Tigre. Aproximadamente 40–60 minutos desde nuestra base en Flores según el tráfico en la autopista.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos si es Nordelta, country o propiedad urbana, el volumen aproximado y la zona. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-pilar" className="text-gold hover:underline text-sm">Pilar</Link>
              <Link href="/blog/mudanzas-san-isidro" className="text-gold hover:underline text-sm">San Isidro</Link>
              <Link href="/blog/mudanzas-san-fernando" className="text-gold hover:underline text-sm">San Fernando</Link>
              <Link href="/blog/mudanzas-vicente-lopez" className="text-gold hover:underline text-sm">Vicente López</Link>
              <Link href="/blog/mudanzas-nunez" className="text-gold hover:underline text-sm">Núñez</Link>
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
