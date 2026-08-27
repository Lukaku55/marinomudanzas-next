import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en La Matanza GBA | Marino Mudanzas",
  description: "Mudanzas en La Matanza: Ramos Mejía, San Justo, Isidro Casanova y todo el partido. Personal propio, precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en La Matanza", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-la-matanza" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en La Matanza GBA | Marino Mudanzas",
  "description": "Mudanzas en La Matanza: Ramos Mejía, San Justo, Isidro Casanova y todo el partido. Personal propio, precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-la-matanza",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-la-matanza" },
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
      "name": "¿Cuánto cuesta una mudanza en La Matanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en La Matanza se cotiza según el caso. Una casa puede ir a consultar según el caso según el volumen. Nuestra base en Flores tiene acceso directo al partido por Av. General Paz, lo que reduce los tiempos de llegada. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubren toda La Matanza o solo algunas zonas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cubrimos todo el partido de La Matanza: Ramos Mejía, San Justo, Isidro Casanova, González Catán, Ciudad Evita, Rafael Castillo, Villa Luzuriaga y todas las localidades. El precio es cerrado desde el presupuesto independientemente de la localidad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de La Matanza a CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es una de las rutas más frecuentes del corredor oeste. El traslado entre La Matanza y cualquier barrio de CABA está incluido en el precio cerrado del presupuesto, sin costos adicionales por distancia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en La Matanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Ramos Mejía y San Justo tienen alta rotación de inquilinos y los turnos de fin de mes se llenan rápido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen guardamuebles para mudanzas en La Matanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Nuestro depósito de guardamuebles en Flores, CABA, está muy cerca del partido por Av. General Paz. Ideal para mudanzas en etapas o cuando el nuevo domicilio todavía no está listo."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en La Matanza</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>La Matanza es el partido más extenso y poblado del Gran Buenos Aires, con localidades muy diversas que van desde el residencial Ramos Mejía hasta las zonas más alejadas de González Catán. La alta densidad poblacional y la gran cantidad de inquilinos generan una demanda constante de mudanzas en toda su extensión. En Marino Mudanzas cubrimos todo el partido desde nuestra base en Flores, con acceso directo por Av. General Paz, lo que nos permite llegar con rapidez y a precios competitivos respecto a empresas más lejanas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en La Matanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ramos Mejía</strong> — la localidad más demandada del partido. Zona residencial de clase media con edificios de departamentos y casas. Alta rotación de inquilinos.</li>
              <li><strong>San Justo</strong> — cabecera del partido con zona comercial activa, edificios y casas de familia. Importante tráfico en las avenidas principales.</li>
              <li><strong>Isidro Casanova</strong> — zona de casas de familia con calles amplias y buen acceso vehicular.</li>
              <li><strong>Ciudad Evita</strong> — barrio planificado con avenidas amplias y casas unifamiliares de gran porte.</li>
              <li><strong>González Catán y Rafael Castillo</strong> — zonas más alejadas del partido con casas de familia. El traslado desde Flores tiene un costo adicional por distancia que cotizamos sin cargo.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en La Matanza?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Guardamuebles disponible en Flores para mudanzas en etapas</li>
              <li>Camión del tamaño adecuado al volumen y la localidad</li>
              <li>Traslado entre La Matanza y CABA con precio cerrado</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Localidades de La Matanza que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ramos Mejía</strong> — la más demandada, residencial de clase media con alta rotación</li>
              <li><strong>San Justo</strong> — cabecera del partido con zona comercial y residencial</li>
              <li><strong>Isidro Casanova</strong> — casas de familia con buen acceso vehicular</li>
              <li><strong>Ciudad Evita</strong> — barrio planificado con avenidas amplias</li>
              <li><strong>Villa Luzuriaga</strong> — zona residencial tranquila</li>
              <li><strong>González Catán y Rafael Castillo</strong> — zona sur del partido, igualmente cubierta</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en La Matanza</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en La Matanza?</h3>
            <p>Un 2 ambientes se cotiza según el caso. Una casa puede ir a consultar según el caso según el volumen. Nuestra base en Flores tiene acceso directo al partido por Av. General Paz, lo que reduce los tiempos de llegada.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cubren toda La Matanza?</h3>
            <p>Sí, todo el partido: Ramos Mejía, San Justo, Isidro Casanova, González Catán, Ciudad Evita, Villa Luzuriaga y todas las localidades. Precio cerrado sin importar la localidad.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de La Matanza a CABA?</h3>
            <p>Sí, es una de las rutas más frecuentes del corredor oeste. El traslado entre La Matanza y CABA está incluido en el precio cerrado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. Ramos Mejía y San Justo tienen alta rotación y los turnos se llenan rápido.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen guardamuebles para mudanzas en La Matanza?</h3>
            <p>Sí. Nuestro depósito en Flores, CABA, está muy cerca del partido por Av. General Paz. Ideal para mudanzas en etapas o cuando el nuevo domicilio todavía no está listo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos la localidad, el tipo de propiedad y el piso. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-flores" className="text-gold hover:underline text-sm">Flores</Link>
              <Link href="/blog/mudanzas-liniers" className="text-gold hover:underline text-sm">Liniers</Link>
              <Link href="/blog/mudanzas-moron" className="text-gold hover:underline text-sm">Morón</Link>
              <Link href="/blog/mudanzas-lomas-de-zamora" className="text-gold hover:underline text-sm">Lomas de Zamora</Link>
              <Link href="/blog/mudanzas-merlo" className="text-gold hover:underline text-sm">Merlo</Link>
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
