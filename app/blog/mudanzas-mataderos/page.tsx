import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Mataderos Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Mataderos, Buenos Aires. Barrio tradicional del sur de CABA. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Mataderos Buenos Aires | Marino Mudanzas",
  "description": "Servicio de mudanzas en Mataderos, Buenos Aires. Barrio tradicional del sur de CABA. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-mataderos",
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
          <h1 className="article-title">Mudanzas en Mataderos</h1>
          <div className="article-body">
            <p>Mataderos es un barrio con mucha historia y tradicion en el sur de Buenos Aires, conocido por su feria de artesanias y su ambiente gaucho. Con casas de familia y edificios de baja altura, Mataderos es un barrio tranquilo con una demanda constante de mudanzas. En Marino Mudanzas tenemos experiencia en cada rincon del barrio.</p>
            <h2 className="article-h2">Particularidades de las mudanzas en Mataderos</h2>
            <p>Mataderos tiene calles amplias que fácilitan el acceso de camiónes. Sus casas de familia son en su mayoria de una o dos plantas, lo que fácilita el proceso de mudanza. La Feria de Mataderos los domingos genera restricciones de acceso en algunas calles del barrio.</p>
            <h2 className="article-h2">Zonas de Mataderos que cubrimos</h2>
            <ul className="article-list">
              <li><strong>Mataderos Centro</strong> — zona comercial alrededor de la feria</li>
              <li><strong>Mataderos Norte</strong> — zona residencial con casas de familia</li>
              <li><strong>Mataderos Sur</strong> — zona tranquila cerca del limite con Lomas</li>
              <li><strong>Villa Lugano limite</strong> — zona de transicion al este</li>
            </ul>
            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas en Mataderos</h2>
            <h3 className="article-h3">Hacen mudanzas en Mataderos los dias de feria?</h3>
            <p>Recomendamos evitar los domingos para mudanzas en la zona de la feria. De lunes a sabado no hay restricciones y realizamos mudanzas sin inconvenientes.</p>
            <h3 className="article-h3">Pueden hacer mudanzas a Mataderos desde el norte de CABA?</h3>
            <p>Si, realizamos mudanzas desde cualquier barrio de CABA hacia Mataderos. Conocemos las rutas mas eficientes para optimizar el tiempo del traslado.</p>
            <h2 className="article-h2">Barrios cercanos donde también operamos</h2>
            <p>Si tu mudanza involucra barrios limítrofes, también cubrimos:</p>
            <ul className="article-list">
              <li><a href="/blog/mudanzas-liniers" className="text-gold hover:underline">Mudanzas en Liniers</a></li>
              <li><a href="/blog/mudanzas-villa-lugano" className="text-gold hover:underline">Mudanzas en Villa Lugano</a></li>
              <li><a href="/blog/mudanzas-flores" className="text-gold hover:underline">Mudanzas en Flores</a></li>
              <li><a href="/blog/mudanzas-villa-riachuelo" className="text-gold hover:underline">Mudanzas en Villa Riachuelo</a></li>
              <li><a href="/blog/mudanzas-villa-soldati" className="text-gold hover:underline">Mudanzas en Villa Soldati</a></li>
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
