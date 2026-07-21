import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Villa Pueyrredón Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Villa Pueyrredón: barrio noroeste de propietarios con casas con jardín y calles arboladas. Precio cerrado. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Villa Pueyrredón", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-pueyrredon" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Villa Pueyrredón Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Villa Pueyrredón: barrio noroeste de propietarios con casas con jardín y calles arboladas. Precio cerrado.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-pueyrredon",
  "datePublished": "2026-07-21",
  "dateModified": "2026-07-21",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-pueyrredon" },
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
      "name": "¿Cuánto cuesta una mudanza en Villa Pueyrredón?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Villa Pueyrredón ronda los $140.000–$230.000. Una casa de familia puede ir desde $200.000 según el volumen. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de casas con jardín en Villa Pueyrredón?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las casas de familia con jardín son la tipología más frecuente del barrio. Coordinamos el acceso por frente o lateral según la disposición de la propiedad y trasladamos muebles de jardín, parrillas y objetos de exterior sin costo adicional."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es fácil el acceso vehicular en Villa Pueyrredón?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las calles de Villa Pueyrredón son amplias y arboladas, con poco tráfico pesado. Las avenidas principales como Triunvirato, De los Incas y Álvarez Thomas permiten el ingreso de camiones de distintos tamaños sin mayores inconvenientes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Villa Pueyrredón?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Villa Pueyrredón es un barrio de propietarios con menos rotación que otras zonas, pero las mudanzas de casas completas requieren más planificación por el mayor volumen."
      }
    },
    {
      "@type": "Question",
      "name": "¿Manejan muebles voluminosos en Villa Pueyrredón?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las casas de Villa Pueyrredón suelen tener más ambientes y más volumen que un departamento céntrico. Contamos con camiones de mayor capacidad y personal adicional para mudanzas de casas completas con muchos muebles."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Villa Pueyrredón</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Villa Pueyrredón es un barrio residencial del noroeste de Buenos Aires, con un perfil marcado de propietarios y familias que llevan décadas en el barrio. Predominan las casas de familia con jardín, los edificios bajos y las calles arboladas que le dan un ambiente tranquilo muy distinto al del centro. Las mudanzas de casas en Villa Pueyrredón suelen tener más volumen que las de departamentos céntricos, y en Marino Mudanzas tenemos la flota y el personal para manejarlas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Villa Pueyrredón</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Casas de familia con jardín</strong> — la tipología dominante del barrio. Mudanzas de mayor volumen con muebles de jardín, parrillas y múltiples ambientes.</li>
              <li><strong>Calles amplias y arboladas</strong> — facilitan el estacionamiento del camión y las maniobras de carga. Poco tráfico pesado en el interior del barrio.</li>
              <li><strong>Edificios de mediana altura</strong> — algunos sin ascensor, especialmente los de los años 50-60. Subida por escalera con personal especializado.</li>
              <li><strong>Barrio de propietarios</strong> — menos rotación de inquilinos que en zonas céntricas. Las mudanzas son más espaciadas pero de mayor volumen.</li>
              <li><strong>Buena accesibilidad</strong> — Av. Triunvirato, De los Incas y Álvarez Thomas conectan el barrio con el centro y el GBA sin mayores inconvenientes de tráfico.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Villa Pueyrredón?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla, cuadros y obras de arte</li>
              <li>Traslado de muebles de jardín, parrillas y objetos de exterior</li>
              <li>Elevación por soga para muebles que no pasan por escalera</li>
              <li>Camión del tamaño adecuado al volumen de la casa</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Villa Pueyrredón que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zona central del barrio</strong> — casas de familia con jardín y buenas calles de acceso</li>
              <li><strong>Av. Triunvirato</strong> — eje norte-sur del barrio con edificios de departamentos</li>
              <li><strong>Av. De los Incas</strong> — límite este con Villa Urquiza, zona de casas y edificios</li>
              <li><strong>Límite con Saavedra y Paternal</strong> — zona de transición cubierta por el mismo presupuesto</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Villa Pueyrredón</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Villa Pueyrredón?</h3>
            <p>Un 2 ambientes ronda los $140.000–$230.000. Una casa de familia puede ir desde $200.000 según el volumen. Precio cerrado desde el presupuesto, sin sorpresas el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de casas con jardín?</h3>
            <p>Sí, es la tipología más frecuente del barrio. Traslado de muebles de jardín y parrillas incluido. Acceso por frente o lateral según la disposición de la propiedad.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Es fácil el acceso vehicular en el barrio?</h3>
            <p>Sí. Calles amplias y arboladas con poco tráfico pesado. Las avenidas principales permiten camiones de distintos tamaños.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Las mudanzas de casas completas requieren más planificación por el mayor volumen. Para fin de mes o sábados, 10–15 días.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Manejan muebles voluminosos?</h3>
            <p>Sí. Camiones de mayor capacidad y personal adicional para mudanzas de casas completas con muchos ambientes y muebles de gran porte.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos si es casa o departamento, la cantidad de ambientes y si hay objetos de exterior. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-saavedra" className="text-gold hover:underline text-sm">Saavedra</Link>
              <Link href="/blog/mudanzas-villa-urquiza" className="text-gold hover:underline text-sm">Villa Urquiza</Link>
              <Link href="/blog/mudanzas-paternal" className="text-gold hover:underline text-sm">Paternal</Link>
              <Link href="/blog/mudanzas-chacarita" className="text-gold hover:underline text-sm">Chacarita</Link>
              <Link href="/blog/mudanzas-villa-devoto" className="text-gold hover:underline text-sm">Villa Devoto</Link>
              <Link href="/mudanzas-residenciales" className="text-gold hover:underline text-sm">Mudanzas residenciales</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
