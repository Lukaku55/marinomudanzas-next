import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Recoleta Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Recoleta, Buenos Aires. Especialistas en edificios de época y muebles de alto valor. Más de 80 años de experiencia. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Recoleta Buenos Aires | Marino Mudanzas",
  "description": "Servicio de mudanzas en Recoleta, Buenos Aires. Especialistas en edificios de época y muebles de alto valor. Más de 80 años de experiencia. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-recoleta",
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
          <Link href="/blog" className="article-back">← Volver al blog</Link>
          <h1 className="article-title">Mudanzas en Recoleta</h1>
          <div className="article-body">
            <p>Recoleta es uno de los barrios más exclusivos de Buenos Aires, con edificios de principios del siglo XX, departamentos de lujo y casas históricas. Su arquitectura particular requiere experiencia y delicadeza en cada mudanza. En Marino Mudanzas llevamos más de 80 años trabajando en Recoleta, con conocimiento de cada edificio emblemático del barrio.</p>
            <h2 className="article-h2">Particularidades de las mudanzas en Recoleta</h2>
            <p>Los edificios de Recoleta presentan desafíos únicos: ascensores pequeños de época, escaleras de mármol que requieren protección especial, y normas de consorcio muy estrictas. Las calles como Alvear, Quintana y Posadas tienen restricciones de carga que coordinamos previamente. Muchos departamentos de Recoleta tienen techos altos y ambientes grandes con muebles de gran porte.</p>
            <h2 className="article-h2">Zonas de Recoleta que cubrimos</h2>
            <ul className="article-list">
              <li><strong>Recoleta histórica</strong> — edificios de principios del siglo XX cerca del cementerio</li>
              <li><strong>Barrio Parque</strong> — casas y residencias de gran porte</li>
              <li><strong>Alvear</strong> — zona de hoteles cinco estrellas y embajadas</li>
              <li><strong>Santa Fe límite</strong> — zona de alta rotación residencial</li>
            </ul>
            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas en Recoleta</h2>
            <h3 className="article-h3">¿Tienen experiencia en mudanzas de antigüedades en Recoleta?</h3>
            <p>Sí, contamos con personal especializado en el manejo de muebles antiguos, obras de arte y objetos de colección. Usamos materiales de embalaje de primera calidad para proteger cada pieza.</p>
            <h3 className="article-h3">¿Protegen los pisos de mármol durante la mudanza?</h3>
            <p>Sí, utilizamos protectores especiales para pisos de mármol, madera y materiales delicados que son comunes en los edificios históricos de Recoleta.</p>
            <h3 className="article-h3">¿Pueden trabajar en horarios restringidos de consorcio?</h3>
            <p>Sí, coordinamos con los encargados de edificios para respetar los horarios permitidos de carga y descarga en cada consorcio de Recoleta.</p>
            <h2 className="article-h2">Barrios cercanos donde también operamos</h2>
            <p>Si tu mudanza involucra barrios limítrofes, también cubrimos:</p>
            <ul className="article-list">
              <li><a href="/blog/mudanzas-palermo" className="text-gold hover:underline">Mudanzas en Palermo</a></li>
              <li><a href="/blog/mudanzas-belgrano" className="text-gold hover:underline">Mudanzas en Belgrano</a></li>
              <li><a href="/blog/mudanzas-san-telmo" className="text-gold hover:underline">Mudanzas en San Telmo</a></li>
              <li><a href="/blog/mudanzas-retiro" className="text-gold hover:underline">Mudanzas en Retiro</a></li>
              <li><a href="/blog/mudanzas-balvanera" className="text-gold hover:underline">Mudanzas en Balvanera</a></li>
            </ul>

            <h2 className="article-h2">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactános por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
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
