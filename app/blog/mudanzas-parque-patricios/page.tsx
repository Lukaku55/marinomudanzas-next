import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Parque Patricios Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Parque Patricios: Distrito Tecnológico, edificios nuevos y casas del barrio histórico. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Parque Patricios", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-parque-patricios" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Parque Patricios Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Parque Patricios: Distrito Tecnológico, edificios nuevos y casas del barrio histórico. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-parque-patricios",
  "datePublished": "2026-07-21",
  "dateModified": "2026-07-21",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-parque-patricios" },
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
      "name": "¿Cuánto cuesta una mudanza en Parque Patricios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Parque Patricios se cotiza según el caso. Los edificios nuevos del Distrito Tecnológico tienen buenas condiciones de acceso y no generan costos adicionales. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen experiencia en los edificios nuevos del Distrito Tecnológico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Los edificios nuevos del Distrito Tecnológico tienen ascensores amplios, montacargas y buenos accesos para camiones. Coordinamos con el encargado del edificio para cumplir con los horarios y requisitos del consorcio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas en el barrio histórico de Parque Patricios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El barrio histórico tiene casas bajas y edificios más antiguos, algunos sin ascensor. Contamos con personal especializado en subida por escalera y elevación por soga cuando los muebles no pasan."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Parque Patricios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para edificios con consorcios que asignan turnos de montacargas, 10–15 días. El Distrito Tecnológico genera una demanda creciente de mudanzas por la alta rotación de inquilinos en los edificios nuevos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de oficinas en el Distrito Tecnológico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El Distrito Tecnológico concentra empresas de tecnología, startups y oficinas corporativas. Realizamos mudanzas comerciales coordinando fuera de horario laboral o en fin de semana para no interrumpir la actividad del negocio."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Parque Patricios</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Parque Patricios es uno de los barrios con mayor crecimiento de Buenos Aires en la última década, impulsado por el Distrito Tecnológico que concentra empresas de tecnología y generó una fuerte demanda de vivienda nueva en el barrio. Conviven los edificios modernos del polo tecnológico con el barrio histórico de casas bajas y departamentos más antiguos. En Marino Mudanzas tenemos experiencia en ambas tipologías.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Parque Patricios</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Edificios nuevos del Distrito Tecnológico</strong> — ascensores amplios, montacargas y buenos accesos para camiones. Alta rotación de inquilinos que trabajan en las empresas tech del barrio.</li>
              <li><strong>Barrio histórico de Parque Patricios</strong> — casas bajas y edificios de los años 50-60, algunos sin ascensor. Subida por escalera con personal especializado.</li>
              <li><strong>Zona del Parque</strong> — entorno verde con casas familiares y edificios residenciales de mediana altura con buen acceso vehicular.</li>
              <li><strong>Empresas y oficinas</strong> — mudanzas comerciales frecuentes por la concentración de empresas en el polo.</li>
              <li><strong>Alta demanda de fin de mes</strong> — el crecimiento del barrio genera mucha rotación de inquilinos. Reservar con anticipación es clave.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Parque Patricios?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Coordinación con el consorcio y reserva del turno de montacargas</li>
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Elevación por soga para edificios sin ascensor</li>
              <li>Mudanzas comerciales de oficinas coordinadas fuera de horario</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Parque Patricios que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Distrito Tecnológico</strong> — edificios nuevos con ascensores amplios y alto tráfico de mudanzas</li>
              <li><strong>Av. Caseros</strong> — eje principal del barrio con edificios de departamentos</li>
              <li><strong>Zona del Parque</strong> — entorno residencial con casas y edificios de mediana altura</li>
              <li><strong>Límite con Barracas y Boedo</strong> — zona de transición cubierta por el mismo presupuesto</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Parque Patricios</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Parque Patricios?</h3>
            <p>Un 2 ambientes se cotiza según el caso. Los edificios nuevos tienen buenas condiciones de acceso que no generan costos adicionales. Precio cerrado desde el presupuesto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen experiencia en los edificios nuevos del Distrito Tecnológico?</h3>
            <p>Sí. Ascensores amplios, montacargas y buenos accesos. Coordinamos con el encargado para cumplir con los horarios y requisitos del consorcio.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas en el barrio histórico?</h3>
            <p>Sí. Casas bajas y edificios sin ascensor son frecuentes en el sector histórico. Tenemos personal especializado en subida por escalera y elevación por soga.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para edificios con turno de montacargas, 10–15 días. El barrio tiene alta demanda por el crecimiento del Distrito Tecnológico.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de oficinas en el Distrito Tecnológico?</h3>
            <p>Sí. Traslado de mobiliario de oficina y archivos. Coordinamos fuera de horario laboral para no interrumpir la actividad del negocio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-barracas" className="text-gold hover:underline text-sm">Barracas</Link>
              <Link href="/blog/mudanzas-boedo" className="text-gold hover:underline text-sm">Boedo</Link>
              <Link href="/blog/mudanzas-nueva-pompeya" className="text-gold hover:underline text-sm">Nueva Pompeya</Link>
              <Link href="/blog/mudanzas-san-telmo" className="text-gold hover:underline text-sm">San Telmo</Link>
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
