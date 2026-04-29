import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Elegir una Empresa de Mudanzas Confiable en Buenos Aires | Marino Mudanzas",
  description: "Guía para elegir una empresa de mudanzas confiable en Buenos Aires. Qué verificar antes de contratar, señales de alerta y por qué Marino Mudanzas es la mejor opción.",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo Elegir una Empresa de Mudanzas Confiable en Buenos Aires | Marino Mudanzas",
  "description": "Guía para elegir una empresa de mudanzas confiable en Buenos Aires. Qué verificar antes de contratar, señales de alerta y por qué Marino Mudanzas es la mejor opción.",
  "url": "https://www.mudanzasmarino.com.ar/blog/empresa-mudanzas-confiable-buenos-aires",
  "author": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "url": "https://www.mudanzasmarino.com.ar"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png"
    }
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Cómo Elegir una Empresa de Mudanzas Confiable en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Elegir una empresa de mudanzas en Buenos Aires puede ser una tarea difícil. Hay cientos de opciones, desde grandes empresas hasta personas que ofrecen el servicio de manera informal. En esta guía te contamos qué factores considerar para tomar la mejor decisión y proteger tus pertenencias.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Qué verificar antes de contratar una empresa de mudanzas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Trayectoria y experiencia</strong> — una empresa con años en el mercado tiene los procesos más pulidos</li>
              <li><strong>Reseñas en Google</strong> — revisá la puntuación y leé los comentarios de clientes reales</li>
              <li><strong>Flota propia</strong> — las empresas con vehículos propios tienen más control sobre el servicio</li>
              <li><strong>Seguro de carga</strong> — fundamental para proteger tus pertenencias durante el traslado</li>
              <li><strong>Presupuesto detallado por escrito</strong> — desconfiá de presupuestos verbales o muy vagos</li>
              <li><strong>Dirección física verificable</strong> — una empresa seria tiene una sede real</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Señales de alerta al contratar una mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Precio muy por debajo del mercado sin explicación</li>
              <li>No tienen seguro de carga</li>
              <li>No pueden dar referencias de clientes anteriores</li>
              <li>Piden el pago total por adelantado</li>
              <li>No tienen presencia online ni reseñas verificables</li>
              <li>Cambian el precio acordado el día de la mudanza</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas que debés hacerle a la empresa antes de contratar</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>¿Tienen seguro de carga? ¿Qué cubre exactamente?</li>
              <li>¿Cuántos operarios van a venir?</li>
              <li>¿El presupuesto incluye el embalaje?</li>
              <li>¿Pueden desarmar y armar los muebles?</li>
              <li>¿Tienen experiencia en mudanzas por soga?</li>
              <li>¿Qué pasa si hay algún daño durante la mudanza?</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Por qué elegir Marino Mudanzas</h2>
            <p>Con más de 80 años de trayectoria, Marino Mudanzas es una de las empresas de mudanzas más antiguas y confiables de Buenos Aires. Tenemos sede en Flores desde 1950, flota propia de camiones, más de 338 reseñas en Google con 4.7 estrellas y seguro de carga en todos nuestros servicios. Cada mudanza tiene un presupuesto detallado por escrito y un equipo de operarios capacitados y comprometidos con el cuidado de tus pertenencias.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
