import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Moron GBA | Marino Mudanzas Buenos Aires",
  description: "Servicio de mudanzas en Moron, Haedo y El Palomar. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Moron GBA | Marino Mudanzas Buenos Aires",
  "description": "Servicio de mudanzas en Moron, Haedo y El Palomar. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-moron",
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Moron</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Moron es uno de los partidos mas importantes del oeste del Gran Buenos Aires, con una gran densidad poblacional y una intensa actividad comercial y residencial. En Marino Mudanzas realizamos mudanzas en Moron, Haedo, El Palomar y todas las localidades del partido.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Localidades de Moron que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Moron centro</strong> — zona comercial con alta densidad de edificios</li>
              <li><strong>Haedo</strong> — barrio residencial tranquilo</li>
              <li><strong>El Palomar</strong> — zona de casas de familia</li>
              <li><strong>Castelar</strong> — barrio en crecimiento con nuevos edificios</li>
              <li><strong>Ituzaingo limite</strong> — zona de transicion al oeste</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Moron</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas desde CABA a Moron?</h3>
            <p>Si, realizamos mudanzas entre CABA y Moron frecuentemente. Es una de las rutas mas demandadas del oeste del GBA.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Tienen servicio de guardamuebles para mudanzas en Moron?</h3>
            <p>Si, nuestro deposito de guardamuebles en Flores, CABA, esta estrategicamente ubicado para dar servicio a toda la zona oeste del GBA.</p>
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
