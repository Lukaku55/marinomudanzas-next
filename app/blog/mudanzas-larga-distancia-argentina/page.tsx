import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas de Larga Distancia en Argentina | Marino Mudanzas Buenos Aires",
  description: "Servicio de mudanzas de larga distancia desde Buenos Aires a todo el pais y paises limitrofes. Mudanzas exclusivas sin cargas parciales. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas de Larga Distancia en Argentina | Marino Mudanzas Buenos Aires",
  "description": "Servicio de mudanzas de larga distancia desde Buenos Aires a todo el pais y paises limitrofes. Mudanzas exclusivas sin cargas parciales. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-larga-distancia-argentina",
  "author": { "@type": "Organization", "name": "Marino Mudanzas", "url": "https://www.mudanzasmarino.com.ar" },
  "publisher": { "@type": "Organization", "name": "Marino Mudanzas", "logo": { "@type": "ImageObject", "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png" } }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="article-main">
        <article className="article-shell container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="article-back">← Volver al blog</Link>
          <h1 className="article-title">Mudanzas de Larga Distancia en Argentina</h1>
          <div className="article-body">
            <p>Las mudanzas de larga distancia desde Buenos Aires al interior del país o a países limítrofes requieren una planificación especial y una empresa de confianza que garantice que tus pertenencias lleguen en perfectas condiciones. En Marino Mudanzas realizamos mudanzas exclusivas de larga distancia con más de 80 años de experiencia.</p>

            <h2 className="article-h2">¿Qué es una mudanza exclusiva?</h2>
            <p>A diferencia de otros servicios que combinan cargas de distintos clientes en un mismo camión, en Marino Mudanzas realizamos mudanzas exclusivas: el camión es exclusivamente para tus pertenencias. Esto garantiza mayor seguridad, menos manipulación de tus objetos y tiempos de entrega más precisos.</p>

            <h2 className="article-h2">Destinos frecuentes desde Buenos Aires</h2>
            <ul className="article-list">
              <li><strong>Córdoba</strong> — 700 km, uno de los destinos más frecuentes</li>
              <li><strong>Rosario</strong> — 300 km, traslado del día</li>
              <li><strong>Mendoza</strong> — 1.000 km, requiere planificación especial</li>
              <li><strong>Mar del Plata</strong> — 400 km, muy demandado en temporada</li>
              <li><strong>Bariloche</strong> — 1.600 km, mudanzas al sur patagónico</li>
              <li><strong>Tucumán</strong> — 1.300 km, norte del país</li>
              <li><strong>Uruguay y Paraguay</strong> — países limítrofes</li>
            </ul>

            <h2 className="article-h2">¿Cómo planificamos una mudanza de larga distancia?</h2>
            <p>Primero realizamos una evaluación del volumen para determinar el tamaño del camión necesario. Luego coordinamos la fecha y el horario de salida para optimizar los tiempos. Embalamos todo el contenido con materiales de primera calidad para protegerlo durante el viaje. El día acordado retiramos todo de tu domicilio y lo entregamos en destino.</p>

            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas de larga distancia</h2>

            <h3 className="article-h3">¿Cuánto tiempo tarda una mudanza de larga distancia?</h3>
            <p>Depende de la distancia. Una mudanza a Rosario puede hacerse en el día, mientras que una mudanza a Bariloche puede tardar 2 o 3 días entre carga, viaje y descarga.</p>

            <h3 className="article-h3">¿Hacen cargas parciales para larga distancia?</h3>
            <p>No. Para garantizar la seguridad de tus pertenencias y cumplir con los tiempos acordados, solo realizamos mudanzas exclusivas de larga distancia.</p>

            <h3 className="article-h3">¿El seguro de carga cubre todo el trayecto?</h3>
            <p>Sí, el seguro de carga cubre tus pertenencias durante todo el trayecto, desde que las retiramos de tu domicilio hasta que las entregamos en destino.</p>

            <h2 className="article-h2">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactános por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="article-cta">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-shimmer">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="btn-navy">Llamános: 4611-1818</a>
            </div>
          </div>

          <div className="article-related">
            <h3 className="article-related-title">Conocé nuestros servicios</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/mudanzas-residenciales" className="article-related-link">Mudanzas Residenciales</Link>
              <Link href="/mudanzas-oficinas" className="article-related-link">Mudanzas de Oficinas</Link>
              <Link href="/guardamuebles" className="article-related-link">Guardamuebles</Link>
              <Link href="/mudanzas-interior" className="article-related-link">Ver Mudanzas al Interior</Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};
