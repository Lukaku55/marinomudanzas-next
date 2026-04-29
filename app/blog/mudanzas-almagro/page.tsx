import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Almagro Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Almagro, Buenos Aires. Barrio del tango. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Almagro Buenos Aires | Marino Mudanzas",
  "description": "Servicio de mudanzas en Almagro, Buenos Aires. Barrio del tango. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-almagro",
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Almagro</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Almagro es el barrio del tango y la cultura portena, con una gran densidad de edificios de departamentos y casas de familia. Su ubicacion central y su mezcla de arquitectura antigua y moderna hacen que cada mudanza sea un desafio particular. En Marino Mudanzas llevamos mas de 80 anos realizando mudanzas en Almagro con profesionalismo y eficiencia.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Almagro</h2>
            <p>Almagro tiene calles angostas como Medrano, Salguero y Bulnes que dificultan el acceso de camiones grandes. Sus edificios de los anos 40 y 50 suelen tener ascensores pequenos y escaleras empinadas. La cercania con el Centro hace que el trafico sea intenso en horas pico.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Almagro que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Almagro Norte</strong> — zona de edificios modernos cerca de Corrientes</li>
              <li><strong>Almagro Sur</strong> — zona de casas y PHs cerca de Rivadavia</li>
              <li><strong>Medrano</strong> — corredor comercial con mucha rotacion</li>
              <li><strong>Castro Barros</strong> — zona residencial tranquila</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Almagro</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Pueden mover pianos en Almagro?</h3>
            <p>Si, tenemos experiencia en el traslado de pianos e instrumentos musicales, algo muy comun en Almagro dado su tradicion cultural y artistica.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas de locales comerciales en Almagro?</h3>
            <p>Si, realizamos mudanzas comerciales en Almagro, incluyendo el traslado de equipamiento, mobiliario de oficina y mercaderia.</p>
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
