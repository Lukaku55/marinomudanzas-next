import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Nordelta Tigre | Marino Mudanzas",
  description: "Mudanzas en Nordelta, Tigre: acceso coordinado con seguridad, casas de alto volumen en el delta del Paraná. Precio cerrado. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Nordelta", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-nordelta-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Nordelta Tigre | Marino Mudanzas",
  "description": "Mudanzas en Nordelta, Tigre: acceso coordinado con seguridad, casas de alto volumen en el delta del Paraná. Precio cerrado. Presupuesto sin cargo.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-nordelta-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-nordelta-buenos-aires" },
  "author": { "@type": "Organization", "name": "Marino Mudanzas", "url": "https://www.mudanzasmarino.com.ar" },
  "publisher": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "logo": { "@type": "ImageObject", "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png" }
  }
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo se coordina el acceso a Nordelta para una mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El propietario debe autorizarnos en la seguridad del barrio interno correspondiente antes del día de la mudanza. Esto incluye los datos del personal, la patente del camión y el horario de ingreso. Sin esa autorización previa, la seguridad no permite el acceso del vehículo. Nos ocupamos de guiar al cliente en este proceso desde que contrata el servicio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Nordelta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las mudanzas en Nordelta van a consultar según el caso, pudiendo superar los a consultar en casas de gran porte con mucho volumen. El precio exacto depende de la cantidad de ambientes, el volumen de muebles y enseres, y si se requiere embalaje especial. Pedí tu presupuesto sin cargo llamando al 4611-1818."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo lleva llegar desde CABA a Nordelta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entre 45 y 60 minutos desde CABA por Acceso Norte (Panamericana) tomando el desvío hacia Nordelta. El tiempo puede variar significativamente según el horario y el tráfico en la Panamericana. El traslado está incluido en el precio cerrado del presupuesto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubrís todos los barrios internos de Nordelta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, cubrimos todos los barrios internos de Nordelta. Cada barrio tiene su propio acceso con seguridad diferenciada. La clave es que el propietario coordine la autorización de acceso en cada punto de control que debamos cruzar para llegar a la propiedad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Pueden mover lanchas o botes junto con la mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Nuestro servicio cubre exclusivamente el traslado de muebles y enseres del hogar. No realizamos traslados de embarcaciones, vehículos ni maquinaria. Para el traslado de lanchas o botes recomendamos contactar un servicio especializado en logística náutica."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Nordelta</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Nordelta es un megaemprendimiento urbano privado ubicado en el partido de Tigre, sobre las islas del delta del Río Paraná. Con barrios internos de acceso controlado, casas de entre 150 y 500m2, muelles propios y una dinámica residencial muy particular, las mudanzas en Nordelta requieren planificación extra y coordinación previa con la seguridad del complejo. En Marino Mudanzas tenemos experiencia en este tipo de operaciones.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Lo que hace especiales a las mudanzas en Nordelta</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acceso exclusivo por puentes controlados</strong> — el ingreso a Nordelta solo es posible por los puentes internos con control de seguridad. No hay acceso libre para vehículos externos. La autorización previa del propietario es indispensable.</li>
              <li><strong>Seguridad en cada barrio interno</strong> — cada barrio dentro de Nordelta tiene su propio punto de control. Si la mudanza implica cruzar más de un barrio, se necesita autorización en cada acceso.</li>
              <li><strong>Casas de gran volumen</strong> — las propiedades en Nordelta tienen entre 150 y 500m2, muchas con múltiples plantas, grandes ambientes, muebles de diseño y espacios exteriores equipados. El volumen es significativamente mayor al de un departamento estándar.</li>
              <li><strong>Muelles y elementos de exterior</strong> — muchas casas tienen muelle, jardín, quinchos y equipamiento de exterior. Trasladamos muebles y enseres del hogar; para embarcaciones, se requiere servicio especializado.</li>
              <li><strong>Planificación imprescindible</strong> — la distancia desde CABA (45–60 minutos), el trámite de acceso y el volumen de las propiedades hacen que las mudanzas en Nordelta requieran coordinación y reserva con mayor anticipación que una mudanza convencional.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo coordinar el acceso antes de la mudanza</h2>
            <p>El propietario debe avisar a la administración del barrio con los datos del personal de mudanza (DNI o nombre) y la patente del camión, con al menos 48 horas de anticipación. El día de la mudanza presentamos la documentación en el ingreso. Sin esta autorización previa, la seguridad no permite el acceso del vehículo al predio. Desde que contratás el servicio, te guiamos en este proceso para que todo esté listo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Nordelta</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo se coordina el acceso a Nordelta para una mudanza?</h3>
            <p>El propietario debe autorizarnos en la seguridad del barrio interno antes del día de la mudanza, con los datos del personal y la patente del camión. Sin esa autorización previa, no se permite el acceso. Te guiamos en todo el proceso desde que contratás.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Nordelta?</h3>
            <p>Las mudanzas en Nordelta van a consultar según el caso, pudiendo superar los a consultar en casas de gran porte. El precio exacto depende del volumen y si se requiere embalaje especial. Pedí tu presupuesto sin cargo llamando al 4611-1818.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tiempo lleva llegar desde CABA a Nordelta?</h3>
            <p>Entre 45 y 60 minutos por Acceso Norte tomando el desvío hacia Nordelta. El tiempo puede variar según el horario y el tráfico. El traslado está incluido en el precio cerrado del presupuesto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cubrís todos los barrios internos de Nordelta?</h3>
            <p>Sí, cubrimos todos los barrios internos. Cada barrio tiene su propio acceso con seguridad diferenciada. La clave es que el propietario coordine la autorización de acceso en cada punto de control.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden mover lanchas o botes junto con la mudanza?</h3>
            <p>No. Nuestro servicio cubre exclusivamente muebles y enseres del hogar. No realizamos traslados de embarcaciones ni vehículos. Para lanchas o botes recomendamos contactar un servicio especializado en logística náutica.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-tigre" className="text-gold hover:underline text-sm">Tigre</Link>
              <Link href="/blog/mudanzas-pilar" className="text-gold hover:underline text-sm">Pilar</Link>
              <Link href="/blog/mudanzas-san-isidro" className="text-gold hover:underline text-sm">San Isidro</Link>
              <Link href="/blog/mudanzas-martinez-buenos-aires" className="text-gold hover:underline text-sm">Martínez</Link>
              <Link href="/blog/mudanzas-beccar-buenos-aires" className="text-gold hover:underline text-sm">Béccar</Link>
              <Link href="/blog/mudanzas-larga-distancia-argentina" className="text-gold hover:underline text-sm">Mudanzas larga distancia</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
