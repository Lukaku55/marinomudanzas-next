import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Elegir una Empresa de Mudanzas Confiable en Buenos Aires | Marino Mudanzas",
  description: "Guía para elegir una empresa de mudanzas confiable en Buenos Aires. Qué verificar antes de contratar, señales de alerta y las preguntas clave que debés hacer.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Cómo Elegir una Empresa de Mudanzas Confiable", "item": "https://www.mudanzasmarino.com.ar/blog/empresa-mudanzas-confiable-buenos-aires" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo Elegir una Empresa de Mudanzas Confiable en Buenos Aires",
  "description": "Qué verificar antes de contratar una empresa de mudanzas en Buenos Aires: trayectoria, reseñas, flota propia, presupuesto escrito y señales de alerta.",
  "datePublished": "2026-04-23",
  "dateModified": "2026-06-25",
  "url": "https://www.mudanzasmarino.com.ar/blog/empresa-mudanzas-confiable-buenos-aires",
  "author": { "@type": "Organization", "name": "Marino Mudanzas", "url": "https://www.mudanzasmarino.com.ar" },
  "publisher": { "@type": "Organization", "name": "Marino Mudanzas", "logo": { "@type": "ImageObject", "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png" } },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/empresa-mudanzas-confiable-buenos-aires" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo sé si una empresa de mudanzas es confiable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una empresa de mudanzas confiable tiene trayectoria comprobable, reseñas reales en Google con buena puntuación, flota propia de camiones, personal en relación de dependencia, dirección física verificable y presupuesto detallado por escrito antes del día del traslado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué preguntas debo hacerle a una empresa de mudanzas antes de contratar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las preguntas clave son: ¿Cuántos operarios van a venir? ¿El presupuesto incluye el embalaje? ¿Tienen flota propia? ¿Pueden desarmar y armar los muebles? ¿Tienen experiencia en mudanzas por soga? ¿Qué pasa si hay algún daño?"
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué no debo elegir la empresa de mudanzas más barata?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un precio muy por debajo del mercado puede significar: personal no capacitado, camiones en mal estado, falta de materiales de embalaje adecuados o cargos ocultos el día de la mudanza. El costo de reponer un mueble dañado o perder tiempo por imprevistos supera con creces el ahorro inicial."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo de anticipación necesito para contratar una empresa de mudanzas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lo ideal es contactar la empresa con al menos 15 días de anticipación. Para mudanzas a fin de mes o durante el verano, recomendamos reservar con 3 semanas o más para asegurar disponibilidad."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Cómo Elegir una Empresa de Mudanzas Confiable en Buenos Aires</h1>
          <p className="text-sm text-muted-foreground mb-8 font-body">23 de abril de 2026 · Marino Mudanzas</p>
          <div className="prose prose-lg mt-4 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Para elegir una empresa de mudanzas confiable en Buenos Aires verificá: trayectoria comprobable, reseñas reales en Google, flota propia de camiones, personal en relación de dependencia y presupuesto escrito antes del traslado. Estos cinco puntos diferencian a una empresa profesional de una informal — y en una mudanza, la diferencia puede ser enorme.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Qué verificar antes de contratar una empresa de mudanzas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Trayectoria y experiencia</strong> — una empresa con años en el mercado tiene los procesos más pulidos y sabe resolver imprevistos</li>
              <li><strong>Reseñas en Google</strong> — revisá la puntuación general y leé los comentarios más recientes de clientes reales</li>
              <li><strong>Flota propia</strong> — las empresas con vehículos propios tienen más control sobre el estado del camión y los tiempos</li>
              <li><strong>Presupuesto detallado por escrito</strong> — desconfiá de presupuestos verbales o que no especifiquen qué incluyen</li>
              <li><strong>Dirección física verificable</strong> — una empresa seria tiene una sede real donde podés ir si hay algún problema</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Señales de alerta al contratar una mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Precio muy por debajo del mercado sin explicación</li>
              <li>No pueden dar referencias de clientes anteriores</li>
              <li>Piden el pago total por adelantado</li>
              <li>No tienen presencia online ni reseñas verificables</li>
              <li>Cambian el precio acordado el día de la mudanza</li>
              <li>No tienen dirección física ni datos de contacto verificables</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas que debés hacerle a la empresa antes de contratar</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>¿Cuántos operarios van a venir?</li>
              <li>¿El presupuesto incluye el embalaje de muebles?</li>
              <li>¿Pueden desarmar y armar los muebles?</li>
              <li>¿Tienen experiencia en mudanzas por soga?</li>
              <li>¿Qué pasa si hay algún daño durante la mudanza?</li>
              <li>¿El camión es propio o tercerizan el transporte?</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Por qué elegir Marino Mudanzas</h2>
            <p>Con más de 80 años de trayectoria, Marino Mudanzas es una de las empresas de mudanzas más antiguas y confiables de Buenos Aires. Tenemos sede en Flores desde 1950, flota propia de camiones, más de 370 reseñas en Google con 4.7 estrellas y personal capacitado en cada traslado. Cada mudanza tiene un presupuesto detallado por escrito sin sorpresas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo sé si una empresa de mudanzas es confiable?</h3>
            <p>Tiene reseñas reales verificables en Google, flota propia, dirección física, presupuesto escrito y política clara ante daños. Más de 5 años en el mercado es un buen indicador de solidez.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Por qué no elegir la empresa más barata?</h3>
            <p>Un precio muy por debajo del mercado puede implicar personal no capacitado, camiones en mal estado o cargos ocultos el día del traslado. El costo de reponer un mueble dañado supera cualquier ahorro inicial.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación debo contratar?</h3>
            <p>Lo ideal es con al menos 15 días. Para mudanzas a fin de mes o en verano, recomendamos 3 semanas o más para asegurar disponibilidad en la fecha que necesitás.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Artículos relacionados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/que-preguntar-antes-de-contratar-mudanza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Qué preguntar antes de contratar una mudanza</Link>
              <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">¿Cuánto cuesta una mudanza?</Link>
              <Link href="/blog/que-incluye-una-mudanza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">¿Qué incluye un servicio de mudanza?</Link>
              <Link href="/mudanzas-residenciales" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas Residenciales</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
