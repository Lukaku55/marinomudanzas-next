import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Avellaneda GBA | Marino Mudanzas Buenos Aires",
  description: "Servicio de mudanzas en Avellaneda, Lanus y zona sur del GBA. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Avellaneda GBA | Marino Mudanzas Buenos Aires",
  "description": "Servicio de mudanzas en Avellaneda, Lanus y zona sur del GBA. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-avellaneda",
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Avellaneda</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Avellaneda es uno de los partidos mas importantes del conurbano sur, lindero con la Ciudad de Buenos Aires. Su cercania con CABA lo convierte en uno de los destinos mas frecuentes para familias que se mudan del centro hacia el sur. En Marino Mudanzas tenemos amplia experiencia en mudanzas en Avellaneda y toda la zona sur del GBA.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Avellaneda que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Avellaneda Centro</strong> — zona comercial e industrial muy activa</li>
              <li><strong>Wilde</strong> — barrio residencial con casas de familia</li>
              <li><strong>Sarandi</strong> — zona en crecimiento con edificios nuevos</li>
              <li><strong>Piñeyro</strong> — barrio tranquilo cerca del Riachuelo</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Por que elegirnos para tu mudanza en Avellaneda</h2>
            <p>Con mas de 80 anos de trayectoria, Marino Mudanzas es la empresa de mudanzas con mayor experiencia de Buenos Aires. Nuestro equipo conoce las particularidades de cada zona del GBA y esta capacitado para resolver cualquier situacion logistica.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas desde CABA a Avellaneda?</h3>
            <p>Si, Avellaneda esta lindero con CABA y es una de las rutas mas frecuentes. Podemos estar en cualquier punto del partido en muy poco tiempo.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Tienen experiencia en la zona industrial de Avellaneda?</h3>
            <p>Si, realizamos mudanzas comerciales e industriales en Avellaneda, incluyendo traslado de maquinaria liviana y equipamiento de oficina.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicita tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o telefono y te damos un presupuesto sin cargo y sin compromiso. Trabajamos de lunes a sabado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedi tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
