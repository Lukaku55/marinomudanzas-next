import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en La Matanza GBA | Marino Mudanzas Buenos Aires",
  description: "Servicio de mudanzas en La Matanza, San Justo, Ramos Mejia y todo el partido. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en La Matanza GBA | Marino Mudanzas Buenos Aires",
  "description": "Servicio de mudanzas en La Matanza, San Justo, Ramos Mejia y todo el partido. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-la-matanza",
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
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en La Matanza</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>La Matanza es el partido mas poblado del Gran Buenos Aires y uno de los mas extensos, con localidades muy diversas como San Justo, Ramos Mejia, Moron y muchas mas. En Marino Mudanzas realizamos mudanzas en todo el partido de La Matanza con la experiencia y el equipamiento necesario para cualquier tipo de traslado.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de La Matanza que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>San Justo</strong> — cabecera del partido con mucha actividad comercial</li>
              <li><strong>Ramos Mejia</strong> — barrio residencial de clase media muy demandado</li>
              <li><strong>Gonzalez Catan</strong> — zona de casas de familia en el sur del partido</li>
              <li><strong>Ciudad Evita</strong> — barrio planificado con amplias avenidas</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Por que elegirnos para tu mudanza en La Matanza</h2>
            <p>Con más de 80 anos de trayectoria, Marino Mudanzas es la empresa de mudanzas con mayor experiencia de Buenos Aires. Nuestro equipo conoce las particularidades de cada zona del GBA y esta capacitado para resolver cualquier situación logistica.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas en toda La Matanza?</h3>
            <p>Si, cubrimos todo el partido de La Matanza desde San Justo hasta Gonzalez Catan. Conocemos las principales rutas y accesos del partido.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Pueden hacer mudanzas de larga distancia desde La Matanza?</h3>
            <p>Si, realizamos mudanzas desde La Matanza a cualquier punto del pais con servicio exclusivo.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas cercanas donde también operamos</h2>
            <p>Si tu mudanza involucra zonas limítrofes, también cubrimos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="/blog/mudanzas-lanus" className="text-gold hover:underline">Mudanzas en Lanús</a></li>
              <li><a href="/blog/mudanzas-moron" className="text-gold hover:underline">Mudanzas en Morón</a></li>
              <li><a href="/blog/mudanzas-merlo" className="text-gold hover:underline">Mudanzas en Merlo</a></li>
              <li><a href="/blog/mudanzas-lomas-de-zamora" className="text-gold hover:underline">Mudanzas en Lomas de Zamora</a></li>
              <li><a href="/blog/mudanzas-ezeiza" className="text-gold hover:underline">Mudanzas en Ezeiza</a></li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactános por WhatsApp o teléfono y te damos un presupuesto sin cargo y sin compromiso. Trabajamos de lunes a sabado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamános: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
