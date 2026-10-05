import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Colegiales Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Colegiales, Buenos Aires. Barrio bohemio y tranquilo. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Colegiales Buenos Aires | Marino Mudanzas",
  "description": "Servicio de mudanzas en Colegiales, Buenos Aires. Barrio bohemio y tranquilo. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-colegiales",
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
          <h1 className="article-title">Mudanzas en Colegiales</h1>
          <div className="article-body">
            <p>Colegiales es un barrio bohemio y tranquilo ubicado entre Palermo y Belgrano, con una gran cantidad de casas bajas, PHs y edificios de baja altura. Su ambiente artistico y su creciente oferta gastronomica lo convierten en uno de los barrios mas buscados por jovenes profesionales. En Marino Mudanzas tenemos amplia experiencia en mudanzas en Colegiales.</p>
            <h2 className="article-h2">Particularidades de las mudanzas en Colegiales</h2>
            <p>Colegiales tiene calles angostas y arboladas que dan un caracter muy particular al barrio. Sus casas bajas y PHs suelen tener escaleras empinadas y espacios reducidos. La zona de la via del ferrocarril divide el barrio en dos sectores con caracteristicas distintas.</p>
            <h2 className="article-h2">Zonas de Colegiales que cubrimos</h2>
            <ul className="article-list">
              <li><strong>Colegiales Norte</strong> — zona de PHs y casas bajas cerca de Belgrano</li>
              <li><strong>Colegiales Sur</strong> — zona de transicion con Palermo muy demandada</li>
              <li><strong>Federico Lacroze</strong> — corredor comercial con alta rotacion</li>
              <li><strong>Virrey Loreto</strong> — zona residencial tipica del barrio</li>
            </ul>
            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas en Colegiales</h2>
            <h3 className="article-h3">Pueden mover muebles en casas bajas con escaleras angostas en Colegiales?</h3>
            <p>Si, tenemos experiencia en mudanzas en casas bajas y PHs con escaleras angostas, usando tecnicas especiales para mover muebles de gran tamano.</p>
            <h3 className="article-h3">Hacen mudanzas de estudios de artistas en Colegiales?</h3>
            <p>Si, tenemos experiencia en el traslado de equipamiento artistico, obras de arte y materiales de estudio con el mayor cuidado.</p>
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
