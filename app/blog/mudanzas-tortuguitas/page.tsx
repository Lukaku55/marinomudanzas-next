import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Tortuguitas | Marino Mudanzas | Presupuesto sin cargo",
  description: "Empresa de mudanzas en Tortuguitas, partido de Malvinas Argentinas. Más de 80 años de experiencia en CABA y GBA. Embalaje incluido. Llamanos: 4611-1818.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Tortuguitas, Malvinas Argentinas",
  "description": "Servicio de mudanzas en Tortuguitas, partido de Malvinas Argentinas. Más de 80 años de experiencia en el noroeste del GBA.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-tortuguitas",
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
          <Link href="/blog" className="article-back">{"<-"} Volver al blog</Link>
          <h1 className="article-title">Mudanzas en Tortuguitas</h1>
          <p className="font-body text-muted-foreground text-sm mb-8">Partido de Malvinas Argentinas, Zona Noroeste del GBA</p>

          <div className="article-body">
            <p>En Marino Mudanzas realizamos mudanzas en Tortuguitas y en todo el partido de Malvinas Argentinas desde hace más de 80 años. Conocemos la zona, los accesos por Ruta 8 y Ruta Provincial 25, y las particularidades de las casas de familia y countries de la zona noroeste del Gran Buenos Aires.</p>

            <h2 className="article-h2">Por qué elegirnos para tu mudanza en Tortuguitas</h2>
            <ul className="article-list">
              <li><strong className="text-foreground">Más de 80 años de experiencia</strong> en mudanzas en todo el GBA y CABA</li>
              <li><strong className="text-foreground">Flota propia</strong> de camiones de distintos tamaños para todo tipo de mudanza</li>
              <li><strong className="text-foreground">Embalaje de protección incluido</strong> en todos los servicios</li>
              <li><strong className="text-foreground">Seguro de carga</strong> en cada traslado</li>
              <li><strong className="text-foreground">Presupuesto sin cargo</strong> y precio cerrado sin sorpresas</li>
              <li><strong className="text-foreground">Atención de lunes a sábado</strong> de 8 a 18hs</li>
            </ul>

            <h2 className="article-h2">Características de las mudanzas en Tortuguitas</h2>
            <p>Tortuguitas es una localidad residencial del partido de Malvinas Argentinas, con predominio de casas de familia de una y dos plantas, algunos countries y barrios privados cercanos. El acceso principal es por Ruta 8, lo que facilita el traslado de camiones de gran porte.</p>
            <p>La mayoría de las mudanzas en la zona involucran viviendas con jardín, garaje y espacios amplios que requieren camiones de mayor capacidad. En Marino Mudanzas contamos con unidades adecuadas para mudanzas grandes y la experiencia para manejar muebles de jardín, piletas portátiles y electrodomésticos de gran porte.</p>

            <h2 className="article-h2">Zonas que cubrimos en Malvinas Argentinas</h2>
            <p>Además de Tortuguitas, cubrimos todo el partido de Malvinas Argentinas:</p>
            <ul className="article-list">
              <li>Grand Bourg</li>
              <li>Los Polvorines</li>
              <li>Pablo Nogués</li>
              <li>Ing. Adolfo Sourdeaux</li>
              <li>Villa de Mayo</li>
              <li>Barrios privados y countries de la zona</li>
            </ul>

            <h2 className="article-h2">Mudanzas entre Tortuguitas y CABA</h2>
            <p>El traslado entre Tortuguitas y la Ciudad de Buenos Aires es uno de los más frecuentes que realizamos. Accedemos por Ruta 8 hasta conectar con las principales arterias de la ciudad. El tiempo estimado de viaje es de 45 a 60 minutos dependiendo del horario, y lo contemplamos siempre en el presupuesto para evitar sorpresas.</p>
            <p>También realizamos mudanzas entre Tortuguitas y otros partidos del GBA como Pilar, Escobar, Tigre, José C. Paz y San Miguel, coordinando los accesos más eficientes para cada caso.</p>

            <h2 className="article-h2">¿Qué incluye el servicio?</h2>
            <ul className="article-list">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de protección con mantas y film stretch</li>
              <li>Carga y descarga con operarios capacitados</li>
              <li>Transporte en camión propio con seguro de carga</li>
              <li>Coordinación del traslado de punta a punta</li>
            </ul>

            <h2 className="article-h2">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono para recibir un presupuesto sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="article-cta">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-shimmer">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="btn-navy">Llamanos: 4611-1818</a>
            </div>
          </div>

          <div className="article-related">
            <h3 className="article-related-title">Conocé nuestros servicios</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/mudanzas-residenciales" className="article-related-link">Mudanzas Residenciales</Link>
              <Link href="/mudanzas-oficinas" className="article-related-link">Mudanzas de Oficinas</Link>
              <Link href="/guardamuebles" className="article-related-link">Guardamuebles</Link>
              <Link href="/mudanzas-interior" className="article-related-link">Mudanzas al Interior</Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
