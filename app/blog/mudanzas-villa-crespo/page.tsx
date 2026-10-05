import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Villa Crespo Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Villa Crespo, Buenos Aires. Barrio en pleno crecimiento. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Villa Crespo Buenos Aires | Marino Mudanzas",
  "description": "Servicio de mudanzas en Villa Crespo, Buenos Aires. Barrio en pleno crecimiento. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-crespo",
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
          <h1 className="article-title">Mudanzas en Villa Crespo</h1>
          <div className="article-body">
            <p>Villa Crespo es uno de los barrios que mas ha crecido en los ultimos anos, con edificios nuevos, lofts reciclados y jovenes profesionales que se mudan constantemente. Su cercania con Palermo lo convierte en una alternativa cada vez mas buscada. En Marino Mudanzas tenemos amplia experiencia en mudanzas en Villa Crespo.</p>
            <h2 className="article-h2">Particularidades de las mudanzas en Villa Crespo</h2>
            <p>Villa Crespo tiene una mezcla de edificios nuevos con amenities y galpones reciclados convertidos en lofts. Las calles como Thames, Malabia y Scalabrini Ortiz tienen mucho trafico. La zona del Mercado de Pulgas concentra antiguedades y muebles de gran porte.</p>
            <h2 className="article-h2">Zonas de Villa Crespo que cubrimos</h2>
            <ul className="article-list">
              <li><strong>Villa Crespo Norte</strong> — zona de lofts reciclados cerca de Palermo</li>
              <li><strong>Villa Crespo Sur</strong> — zona de edificios nuevos y casas de familia</li>
              <li><strong>Scalabrini Ortiz</strong> — corredor con alta rotacion de inquilinos</li>
              <li><strong>Mercado de Pulgas</strong> — zona de anticuarios y galerias de arte</li>
            </ul>
            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas en Villa Crespo</h2>
            <h3 className="article-h3">Tienen experiencia en mudanzas de lofts en Villa Crespo?</h3>
            <p>Si, tenemos experiencia en mudanzas de lofts con espacios abiertos y techos altos, incluyendo el traslado de muebles de gran porte que no entran por el ascensor.</p>
            <h3 className="article-h3">Hacen mudanzas de estudios y oficinas en Villa Crespo?</h3>
            <p>Si, Villa Crespo tiene muchos estudios creativos y oficinas. Realizamos mudanzas comerciales minimizando el tiempo de inactividad de tu negocio.</p>
            <h2 className="article-h2">Barrios cercanos donde también operamos</h2>
            <p>Si tu mudanza involucra barrios limítrofes, también cubrimos:</p>
            <ul className="article-list">
              <li><a href="/blog/mudanzas-palermo" className="text-gold hover:underline">Mudanzas en Palermo</a></li>
              <li><a href="/blog/mudanzas-almagro" className="text-gold hover:underline">Mudanzas en Almagro</a></li>
              <li><a href="/blog/mudanzas-chacarita" className="text-gold hover:underline">Mudanzas en Chacarita</a></li>
              <li><a href="/blog/mudanzas-colegiales" className="text-gold hover:underline">Mudanzas en Colegiales</a></li>
              <li><a href="/blog/mudanzas-caballito" className="text-gold hover:underline">Mudanzas en Caballito</a></li>
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
