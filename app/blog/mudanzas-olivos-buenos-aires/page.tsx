import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Olivos GBA Norte | Marino Mudanzas",
  description: "Mudanzas en Olivos, Vicente López: mansiones sobre el río, edificios de alta gama en Av. Maipú y acceso por Panamericana. Precio cerrado. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Olivos", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-olivos-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Olivos GBA Norte | Marino Mudanzas",
  "description": "Mudanzas en Olivos, Vicente López: mansiones sobre el río, edificios de alta gama en Av. Maipú y acceso por Panamericana. Precio cerrado. Presupuesto sin cargo.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-olivos-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-olivos-buenos-aires" },
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
      "name": "¿Cuánto cuesta una mudanza en Olivos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una casa de alto nivel en Olivos puede ir desde $300.000 hasta $550.000 según el volumen y el tipo de propiedad. Un departamento de 2 ambientes ronda los $180.000–$280.000. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto se tarda en llegar desde CABA a Olivos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entre 20 y 30 minutos desde CABA por Acceso Norte (Panamericana) o por la costera (continuación de Av. del Libertador). El tiempo puede variar según el horario y el tráfico. El traslado desde o hacia CABA está incluido en el precio cerrado del presupuesto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas en el norte del GBA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, el norte del GBA —Vicente López, San Isidro, San Fernando, Tigre— es una de las zonas más frecuentes en las que trabajamos. Tenemos amplia experiencia en las características de cada localidad: accesos, tipos de propiedades y restricciones de tránsito."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de propiedades hay en Olivos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Olivos tiene un mix variado. La zona del río y el barrio parque concentra mansiones y casas grandes de alto nivel. Sobre Av. Maipú y cerca de la estación de tren hay edificios residenciales de alta gama. También hay casas de familia de mediano porte en el interior del partido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Olivos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para casas o departamentos estándar, una semana de anticipación es suficiente. Para propiedades de gran porte o mudanzas a fin de mes, recomendamos reservar con 15 días de anticipación para garantizar disponibilidad del camión y el personal adecuados."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Olivos</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Olivos es una de las zonas más exclusivas del partido de Vicente López, en el norte del Gran Buenos Aires. Con propiedades sobre el Río de la Plata, edificios de alta gama en sus avenidas principales y una identidad residencial consolidada, las mudanzas en Olivos requieren coordinación, equipamiento y experiencia en el manejo de muebles de valor. En Marino Mudanzas trabajamos en Olivos desde hace décadas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Características de las mudanzas en Olivos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zona del río y barrio parque</strong> — concentra mansiones y casas grandes de alto nivel con jardín, muebles de valor y grandes volúmenes. Se requieren camiones de mayor capacidad y personal experimentado.</li>
              <li><strong>Edificios en Av. Maipú y cerca de la estación</strong> — edificios residenciales de alta gama con consorcios exigentes en cuanto a horarios y uso de ascensores. Coordinamos con la administración antes del día de la mudanza.</li>
              <li><strong>Acceso por Panamericana o costera</strong> — el acceso desde CABA es fluido por el Acceso Norte o por la continuación de Av. del Libertador. Elegimos el mejor recorrido según el punto de origen y destino.</li>
              <li><strong>Muebles y objetos de valor</strong> — las propiedades de Olivos suelen tener antigüedades, obras de arte y muebles importados. Usamos mantas acolchadas, film stretch y materiales de embalaje especiales.</li>
              <li><strong>Consorcios exigentes</strong> — muchos edificios de alta gama en Olivos tienen reglamentos estrictos sobre horarios de mudanza, uso del ascensor de servicio y requisitos de seguro del personal. Nos ocupamos de toda esa gestión.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Olivos</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Olivos?</h3>
            <p>Una casa de alto nivel puede ir desde $300.000 hasta $550.000 según el volumen. Un 2 ambientes ronda los $180.000–$280.000. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto se tarda en llegar desde CABA a Olivos?</h3>
            <p>Entre 20 y 30 minutos por Acceso Norte o por la costera (continuación de Av. del Libertador). El traslado está incluido en el precio cerrado del presupuesto, sin costos adicionales por distancia.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas en el norte del GBA?</h3>
            <p>Sí, el norte del GBA es una de las zonas más frecuentes en las que trabajamos. Tenemos amplia experiencia en Vicente López, San Isidro, San Fernando y Tigre.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué tipo de propiedades hay en Olivos?</h3>
            <p>La zona del río concentra mansiones y casas grandes de alto nivel. Sobre Av. Maipú y cerca de la estación hay edificios residenciales de alta gama. También hay casas de familia de mediano porte en el interior del partido.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Para propiedades estándar, una semana es suficiente. Para propiedades de gran porte o mudanzas a fin de mes, recomendamos reservar con 15 días de anticipación.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-vicente-lopez" className="text-gold hover:underline text-sm">Vicente López</Link>
              <Link href="/blog/mudanzas-martinez-buenos-aires" className="text-gold hover:underline text-sm">Martínez</Link>
              <Link href="/blog/mudanzas-san-isidro" className="text-gold hover:underline text-sm">San Isidro</Link>
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Belgrano</Link>
              <Link href="/blog/mudanzas-nunez" className="text-gold hover:underline text-sm">Núñez</Link>
              <Link href="/blog/mudanzas-recoleta" className="text-gold hover:underline text-sm">Recoleta</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
