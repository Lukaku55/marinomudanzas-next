import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas entre Provincias en Argentina | Marino Mudanzas",
  description: "Mudanzas interprovinciales exclusivas desde Buenos Aires a todo el país. Sin cargas parciales: un solo cliente por camión. Precio cerrado. Presupuesto sin cargo: 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas entre Provincias en Argentina", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-entre-provincias-argentina" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas entre Provincias en Argentina | Marino Mudanzas",
  "description": "Mudanzas interprovinciales exclusivas desde Buenos Aires a todo el país. Sin cargas parciales: un solo cliente por camión. Precio cerrado.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-entre-provincias-argentina",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-entre-provincias-argentina" },
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
      "name": "¿Hacen cargas parciales o mudanzas compartidas entre provincias?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Solo realizamos mudanzas exclusivas: el camión es para un único cliente. Esto garantiza mayor seguridad para tus pertenencias, sin mezcla con las de otros clientes, y una llegada en tiempo preciso al destino."
      }
    },
    {
      "@type": "Question",
      "name": "¿A qué provincias y destinos llegan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cubrimos todo el país. Los destinos más frecuentes desde Buenos Aires son Córdoba, Rosario, Mendoza, Mar del Plata, Bariloche, Tucumán, Santa Fe y Salta, pero operamos a cualquier destino del territorio nacional."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que coordinar una mudanza interprovincial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos un mínimo de 5 a 7 días hábiles para coordinar la logística. Para destinos lejanos como Bariloche o Salta, o cuando hay mucho volumen, conviene planificarlo con al menos 2 semanas de anticipación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas a Uruguay o Chile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Son casos especiales que requieren gestión de documentación aduanera. Los evaluamos caso a caso. Consultanos directamente para que podamos asesorarte sobre la viabilidad y los requisitos según el destino."
      }
    },
    {
      "@type": "Question",
      "name": "¿Quién coordina la descarga en destino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para destinos frecuentes como Córdoba, Rosario o Mar del Plata, nuestro equipo realiza la descarga. Para destinos más lejanos o específicos, coordinamos con una empresa asociada de confianza en destino. Te informamos la modalidad al presupuestar."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas entre Provincias en Argentina</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Una mudanza interprovincial es aquella en la que el origen o el destino es la provincia de Buenos Aires y la otra punta está en una provincia diferente del país. Son mudanzas que requieren mayor planificación logística, vehículos de gran porte y una empresa con experiencia real en larga distancia. En Marino Mudanzas realizamos mudanzas exclusivas entre provincias desde 1950, operando desde Buenos Aires hacia todos los destinos del país, y también en sentido inverso.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Qué es una mudanza exclusiva y por qué no hacemos cargas parciales</h2>
            <p>En Marino Mudanzas solo realizamos mudanzas exclusivas: un único cliente por camión. No compartimos el espacio del vehículo con las pertenencias de otros clientes. Las razones son concretas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mayor seguridad</strong> — tus pertenencias no se mezclan con las de otros clientes ni se manipulan en paradas intermedias.</li>
              <li><strong>Llegada en tiempo preciso</strong> — el camión va directo a tu destino sin desvíos para entregar o retirar otras cargas.</li>
              <li><strong>Responsabilidad clara</strong> — sabemos exactamente qué cargamos, desde dónde y hacia dónde.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Destinos frecuentes y tiempos estimados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Rosario</strong> — aprox. 300 km · 4 a 5 horas de viaje</li>
              <li><strong>Córdoba</strong> — aprox. 700 km · 8 a 10 horas de viaje</li>
              <li><strong>Santa Fe</strong> — aprox. 470 km · 5 a 6 horas de viaje</li>
              <li><strong>Mar del Plata</strong> — aprox. 400 km · 4 a 5 horas de viaje</li>
              <li><strong>Tucumán</strong> — aprox. 1.300 km · viaje en etapas</li>
              <li><strong>Salta</strong> — aprox. 1.600 km · viaje en etapas</li>
              <li><strong>Mendoza</strong> — aprox. 1.000 km · 14 a 16 horas de viaje</li>
              <li><strong>Bariloche</strong> — aprox. 1.600 km · 20 a 24 horas de viaje</li>
            </ul>
            <p>Los tiempos son estimativos y varían según el volumen, los cortes de ruta y las condiciones de tráfico. En destinos lejanos el traslado puede realizarse en etapas con descanso obligatorio del conductor.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas entre provincias?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Carga y protección de todos los muebles y pertenencias en origen</li>
              <li>Transporte exclusivo (un solo cliente por camión)</li>
              <li>Descarga en destino</li>
              <li>Coordinación de fechas y horarios con el cliente</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo se cotiza una mudanza interprovincial</h2>
            <p>El precio de una mudanza entre provincias se calcula de forma personalizada según:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Volumen</strong> — el tamaño del camión necesario según la cantidad y el tipo de muebles</li>
              <li><strong>Destino</strong> — la distancia y la accesibilidad al punto de entrega</li>
              <li><strong>Fecha y horario</strong> — la disponibilidad de turno y la logística de coordinación</li>
            </ul>
            <p>Solicitá tu presupuesto sin cargo y te damos un precio cerrado. No hay costos sorpresa en destino.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas entre provincias</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen cargas parciales o mudanzas compartidas?</h3>
            <p>No. Solo realizamos mudanzas exclusivas: un único cliente por camión. Esto garantiza mayor seguridad para tus pertenencias y una llegada en tiempo preciso al destino.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿A qué provincias y destinos llegan?</h3>
            <p>Cubrimos todo el país. Los destinos más frecuentes desde Buenos Aires son Córdoba, Rosario, Mendoza, Mar del Plata, Bariloche, Tucumán, Santa Fe y Salta.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que coordinar?</h3>
            <p>Mínimo 5 a 7 días hábiles. Para destinos lejanos o mucho volumen, al menos 2 semanas. La logística de larga distancia requiere más tiempo de organización que una mudanza local.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas a Uruguay o Chile?</h3>
            <p>Son casos especiales con documentación aduanera. Los evaluamos caso a caso. Consultanos directamente para asesorarte sobre viabilidad y requisitos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Quién coordina la descarga en destino?</h3>
            <p>Para destinos frecuentes, nuestro equipo realiza la descarga. Para destinos más lejanos, coordinamos con una empresa asociada de confianza en destino. Te informamos la modalidad al presupuestar.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-larga-distancia-argentina" className="text-gold hover:underline text-sm">Mudanzas de larga distancia</Link>
              <Link href="/blog/guardamuebles-buenos-aires" className="text-gold hover:underline text-sm">Guardamuebles en Buenos Aires</Link>
              <Link href="/blog/mudanzas-pilar" className="text-gold hover:underline text-sm">Mudanzas en Pilar</Link>
              <Link href="/blog/mudanzas-lujan" className="text-gold hover:underline text-sm">Mudanzas en Luján</Link>
              <Link href="/blog/mudanzas-zarate" className="text-gold hover:underline text-sm">Mudanzas en Zárate</Link>
              <Link href="/blog/que-no-transportan-las-empresas-de-mudanzas" className="text-gold hover:underline text-sm">Qué no transportan las mudanzas</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
