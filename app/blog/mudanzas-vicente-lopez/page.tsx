import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Vicente Lopez GBA | Marino Mudanzas Buenos Aires",
  description: "Servicio de mudanzas en Vicente Lopez, Olivos, La Lucila y todo el partido. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Vicente Lopez GBA | Marino Mudanzas Buenos Aires",
  "description": "Servicio de mudanzas en Vicente Lopez, Olivos, La Lucila y todo el partido. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-vicente-lopez",
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Vicente Lopez</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Vicente Lopez es uno de los partidos mas elegantes del norte del Gran Buenos Aires, con barrios como Olivos, La Lucila, Munro y Florida. Sus amplias avenidas y residencias de gran porte requieren experiencia y equipamiento adecuado. En Marino Mudanzas realizamos mudanzas en Vicente Lopez desde hace más de 80 anos.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Localidades de Vicente Lopez que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Olivos</strong> — zona residencial premium con casas de gran porte</li>
              <li><strong>La Lucila</strong> — barrio tranquilo cerca del rio</li>
              <li><strong>Munro</strong> — zona de transicion con edificios y casas</li>
              <li><strong>Florida</strong> — barrio familiar con amplia oferta residencial</li>
              <li><strong>Vicente Lopez centro</strong> — zona comercial y residencial</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Carga y descarga en Vicente López</h2>
            <p>Avenida Maipú y Avenida del Libertador, las principales arterias del partido, presentan restricciones para la carga y descarga no solo en horarios pico sino también los fines de semana. En Marino Mudanzas te asesoramos sobre los horarios permitidos y coordinamos todos los permisos necesarios para que tu mudanza se realice sin multas ni demoras.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Vicente Lopez</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas desde CABA a Vicente Lopez?</h3>
            <p>Si, realizamos mudanzas entre CABA y Vicente Lopez frecuentemente. Es una de las rutas mas demandadas del norte del GBA.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Tienen experiencia en mudanzas de casas grandes en Olivos?</h3>
            <p>Si, contamos con camiónes de distintos tamanos y personal especializado para mudanzas de casas de gran porte en Olivos y La Lucila.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas cercanas donde también operamos</h2>
            <p>Si tu mudanza involucra zonas limítrofes, también cubrimos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="/blog/mudanzas-belgrano" className="text-gold hover:underline">Mudanzas en Belgrano</a></li>
              <li><a href="/blog/mudanzas-san-isidro" className="text-gold hover:underline">Mudanzas en San Isidro</a></li>
              <li><a href="/blog/mudanzas-nunez" className="text-gold hover:underline">Mudanzas en Núñez</a></li>
              <li><a href="/blog/mudanzas-saavedra" className="text-gold hover:underline">Mudanzas en Saavedra</a></li>
              <li><a href="/blog/mudanzas-tigre" className="text-gold hover:underline">Mudanzas en Tigre</a></li>
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
