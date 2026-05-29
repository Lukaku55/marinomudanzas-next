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
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">{"<-"} Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Tortuguitas</h1>
          <p className="font-body text-muted-foreground text-sm mb-8">Partido de Malvinas Argentinas, Zona Noroeste del GBA</p>

          <div className="prose prose-lg font-body text-muted-foreground leading-relaxed space-y-6">
            <p>En Marino Mudanzas realizamos mudanzas en Tortuguitas y en todo el partido de Malvinas Argentinas desde hace más de 80 años. Conocemos la zona, los accesos por Ruta 8 y Ruta Provincial 25, y las particularidades de las casas de familia y countries de la zona noroeste del Gran Buenos Aires.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Por qué elegirnos para tu mudanza en Tortuguitas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Más de 80 años de experiencia</strong> en mudanzas en todo el GBA y CABA</li>
              <li><strong className="text-foreground">Flota propia</strong> de camiones de distintos tamaños para todo tipo de mudanza</li>
              <li><strong className="text-foreground">Embalaje de protección incluido</strong> en todos los servicios</li>
              <li><strong className="text-foreground">Seguro de carga</strong> en cada traslado</li>
              <li><strong className="text-foreground">Presupuesto sin cargo</strong> y precio cerrado sin sorpresas</li>
              <li><strong className="text-foreground">Atención de lunes a sábado</strong> de 8 a 18hs</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Características de las mudanzas en Tortuguitas</h2>
            <p>Tortuguitas es una localidad residencial del partido de Malvinas Argentinas, con predominio de casas de familia de una y dos plantas, algunos countries y barrios privados cercanos. El acceso principal es por Ruta 8, lo que facilita el traslado de camiones de gran porte.</p>
            <p>La mayoría de las mudanzas en la zona involucran viviendas con jardín, garaje y espacios amplios que requieren camiones de mayor capacidad. En Marino Mudanzas contamos con unidades adecuadas para mudanzas grandes y la experiencia para manejar muebles de jardín, piletas portátiles y electrodomésticos de gran porte.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas que cubrimos en Malvinas Argentinas</h2>
            <p>Además de Tortuguitas, cubrimos todo el partido de Malvinas Argentinas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Grand Bourg</li>
              <li>Los Polvorines</li>
              <li>Pablo Nogués</li>
              <li>Ing. Adolfo Sourdeaux</li>
              <li>Villa de Mayo</li>
              <li>Barrios privados y countries de la zona</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Mudanzas entre Tortuguitas y CABA</h2>
            <p>El traslado entre Tortuguitas y la Ciudad de Buenos Aires es uno de los más frecuentes que realizamos. Accedemos por Ruta 8 hasta conectar con las principales arterias de la ciudad. El tiempo estimado de viaje es de 45 a 60 minutos dependiendo del horario, y lo contemplamos siempre en el presupuesto para evitar sorpresas.</p>
            <p>También realizamos mudanzas entre Tortuguitas y otros partidos del GBA como Pilar, Escobar, Tigre, José C. Paz y San Miguel, coordinando los accesos más eficientes para cada caso.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye el servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de protección con mantas y film stretch</li>
              <li>Carga y descarga con operarios capacitados</li>
              <li>Transporte en camión propio con seguro de carga</li>
              <li>Coordinación del traslado de punta a punta</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono para recibir un presupuesto sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Conocé nuestros servicios</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/mudanzas-residenciales" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas Residenciales</Link>
              <Link href="/mudanzas-oficinas" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas de Oficinas</Link>
              <Link href="/guardamuebles" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Guardamuebles</Link>
              <Link href="/mudanzas-interior" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas al Interior</Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
