import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Nunez Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Nunez, Buenos Aires. Barrio residencial cerca del rio. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Nunez Buenos Aires | Marino Mudanzas",
  "description": "Servicio de mudanzas en Nunez, Buenos Aires. Barrio residencial cerca del rio. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-nunez",
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
      <main className="article-main">
        <article className="article-shell container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="article-back">Volver al blog</Link>
          <h1 className="article-title">Mudanzas en Nunez</h1>
          <div className="article-body">
            <p>Nunez es uno de los barrios mas tranquilos y exclusivos del norte de Buenos Aires, con amplias avenidas, casas de familia y edificios modernos cerca del rio. Su cercania con el Aeroparque y los estadios de River y Atlanta lo convierten en un barrio con mucha demanda de mudanzas. En Marino Mudanzas tenemos experiencia en cada rincon de Nunez.</p>
            <h2 className="article-h2">Particularidades de las mudanzas en Nunez</h2>
            <p>Nunez tiene una mezcla de edificios modernos sobre Av. del Libertador y casas de familia en las calles internas. La cercania con el estadio de River genera restricciones de acceso los dias de partido, por lo que planificamos las mudanzas en horarios adecuados.</p>
            <h2 className="article-h2">Zonas de Nunez que cubrimos</h2>
            <ul className="article-list">
              <li><strong>Nunez Norte</strong> — zona residencial tranquila cerca del rio</li>
              <li><strong>Libertador</strong> — avenida principal con edificios modernos</li>
              <li><strong>Virrey del Pino</strong> — zona de casas de familia amplias</li>
              <li><strong>Belgrano limite</strong> — zona de transicion muy demandada</li>
            </ul>
            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas en Nunez</h2>
            <h3 className="article-h3">Hacen mudanzas cerca del estadio de River en Nunez?</h3>
            <p>Si, coordinamos las mudanzas en horarios que no coincidan con los partidos para evitar restricciones de acceso en la zona.</p>
            <h3 className="article-h3">Tienen experiencia en edificios modernos de Libertador en Nunez?</h3>
            <p>Si, conocemos los requisitos de los edificios de alta categoria sobre Av. del Libertador y coordinamos previamente con los encargados.</p>
            <h2 className="article-h2">Barrios cercanos donde también operamos</h2>
            <p>Si tu mudanza involucra barrios limítrofes, también cubrimos:</p>
            <ul className="article-list">
              <li><a href="/blog/mudanzas-belgrano" className="text-gold hover:underline">Mudanzas en Belgrano</a></li>
              <li><a href="/blog/mudanzas-saavedra" className="text-gold hover:underline">Mudanzas en Saavedra</a></li>
              <li><a href="/blog/mudanzas-colegiales" className="text-gold hover:underline">Mudanzas en Colegiales</a></li>
              <li><a href="/blog/mudanzas-villa-urquiza" className="text-gold hover:underline">Mudanzas en Villa Urquiza</a></li>
              <li><a href="/blog/mudanzas-vicente-lopez" className="text-gold hover:underline">Mudanzas en Vicente López</a></li>
            </ul>

            <h2 className="article-h2">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactános por WhatsApp o teléfono y te damos un presupuesto sin cargo y sin compromiso. Trabajamos de lunes a sabado de 8 a 18hs.</p>
            <div className="article-cta">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-shimmer">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="btn-navy">Llamános: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
