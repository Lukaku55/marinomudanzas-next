import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Villa Urquiza Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Villa Urquiza, Buenos Aires. Barrio residencial del norte de CABA. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Villa Urquiza Buenos Aires | Marino Mudanzas",
  "description": "Servicio de mudanzas en Villa Urquiza, Buenos Aires. Barrio residencial del norte de CABA. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-urquiza",
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
          <h1 className="article-title">Mudanzas en Villa Urquiza</h1>
          <div className="article-body">
            <p>Villa Urquiza es uno de los barrios mas tranquilos y residenciales del norte de Buenos Aires. Con casas de gran porte y edificios modernos, las mudanzas en Villa Urquiza requieren experiencia y equipamiento adecuado. En Marino Mudanzas contamos con flota propia y personal capacitado para cualquier tipo de traslado en el barrio.</p>
            <h2 className="article-h2">Particularidades de las mudanzas en Villa Urquiza</h2>
            <p>Villa Urquiza tiene calles arboladas y tranquilas que fácilitan el traslado. Sus casas de familia suelen ser amplias, con jardines y garajes. Los edificios modernos tienen buenos ascensores y espacios de carga. La Avenida Triunvirato es el corredor principal del barrio.</p>
            <h2 className="article-h2">Zonas de Villa Urquiza que cubrimos</h2>
            <ul className="article-list">
              <li><strong>Villa Urquiza Centro</strong> — zona comercial alrededor de Triunvirato</li>
              <li><strong>Villa Urquiza Norte</strong> — zona residencial con casas de familia</li>
              <li><strong>Parque Saavedra limite</strong> — zona verde con casas amplias</li>
              <li><strong>Villa Pueyrredon limite</strong> — barrio de transicion tranquilo</li>
            </ul>
            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas en Villa Urquiza</h2>
            <h3 className="article-h3">Hacen mudanzas de casas grandes en Villa Urquiza?</h3>
            <p>Si, contamos con camiónes de distintos tamanos para mudanzas de casas grandes en Villa Urquiza, incluyendo el desmontaje y montaje de muebles a medida.</p>
            <h3 className="article-h3">Pueden mover autos o motos durante la mudanza en Villa Urquiza?</h3>
            <p>No trasladamos vehiculos, pero podemos coordinar el traslado de todos los demas bienes del hogar con total seguridad.</p>
            <h2 className="article-h2">Barrios cercanos donde también operamos</h2>
            <p>Si tu mudanza involucra barrios limítrofes, también cubrimos:</p>
            <ul className="article-list">
              <li><a href="/blog/mudanzas-belgrano" className="text-gold hover:underline">Mudanzas en Belgrano</a></li>
              <li><a href="/blog/mudanzas-saavedra" className="text-gold hover:underline">Mudanzas en Saavedra</a></li>
              <li><a href="/blog/mudanzas-nunez" className="text-gold hover:underline">Mudanzas en Núñez</a></li>
              <li><a href="/blog/mudanzas-villa-pueyrredon" className="text-gold hover:underline">Mudanzas en Villa Pueyrredón</a></li>
              <li><a href="/blog/mudanzas-colegiales" className="text-gold hover:underline">Mudanzas en Colegiales</a></li>
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
