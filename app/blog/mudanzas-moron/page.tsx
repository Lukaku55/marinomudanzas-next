import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Morón GBA | Marino Mudanzas",
  description: "Mudanzas en Morón: Haedo, El Palomar y Castelar. Servicio rápido desde nuestra base en Flores. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Morón", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-moron" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Morón GBA | Marino Mudanzas",
  "description": "Mudanzas en Morón: Haedo, El Palomar y Castelar. Servicio rápido desde nuestra base en Flores. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-moron",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-moron" },
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
      "name": "¿Cuánto cuesta una mudanza en Morón?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Morón se cotiza según el caso. Una casa puede ir a consultar según el caso según el volumen. Nuestra base en Flores permite llegar al corredor oeste rápidamente y a menor costo que empresas ubicadas en el centro o norte de CABA. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Morón?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Morón tiene alta densidad de inquilinos especialmente en la zona céntrica y Haedo, y los turnos de fin de mes se llenan rápido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen guardamuebles para mudanzas en Morón?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Nuestro depósito de guardamuebles está en Flores, CABA, muy cerca del corredor oeste. Podemos almacenar tus muebles mientras terminás de organizar la mudanza o el nuevo domicilio. Consultá disponibilidad y tarifas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de Morón a CABA o viceversa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es una de las rutas más frecuentes del corredor oeste. El traslado entre Morón y cualquier barrio de CABA está incluido en el precio cerrado del presupuesto, sin costos adicionales por distancia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas comerciales en Morón?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Morón tiene una importante actividad comercial especialmente en el centro. Realizamos mudanzas de oficinas y locales con precio cerrado, coordinando el horario para minimizar el tiempo de inactividad del negocio."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Morón</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Morón es uno de los partidos más importantes del corredor oeste del Gran Buenos Aires, con una importante zona comercial en el centro, barrios residenciales en Haedo y El Palomar, y una conexión directa con CABA por Av. Rivadavia y la autopista del Oeste. En Marino Mudanzas operamos desde nuestra base en Flores, lo que nos permite cubrir todo el partido de Morón con tiempos de llegada más cortos y costos de traslado más bajos que empresas ubicadas en el centro o norte de CABA.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Morón</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Morón centro</strong> — zona comercial con alta densidad de edificios de departamentos. Alta rotación de inquilinos y mudanzas frecuentes a fin de mes.</li>
              <li><strong>Haedo</strong> — barrio residencial tranquilo con casas y edificios de mediana altura. Buen acceso vehicular en la mayoría de las calles.</li>
              <li><strong>El Palomar</strong> — zona de casas de familia con jardín y calles amplias. Mayor volumen de muebles en promedio.</li>
              <li><strong>Castelar</strong> — barrio en crecimiento con nuevos edificios y PHs. Acceso directo por autopista.</li>
              <li><strong>Acceso desde Flores</strong> — nuestra base en Flores está a 15–20 minutos del centro de Morón por autopista, lo que reduce los tiempos y costos respecto a empresas más lejanas.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Morón?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Guardamuebles disponible en Flores para mudanzas en etapas</li>
              <li>Camión del tamaño adecuado al volumen y al tipo de propiedad</li>
              <li>Traslado entre Morón y CABA con precio cerrado</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Localidades de Morón que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Morón centro</strong> — zona comercial con edificios y alta rotación de inquilinos</li>
              <li><strong>Haedo</strong> — barrio residencial tranquilo con buen acceso vehicular</li>
              <li><strong>El Palomar</strong> — zona de casas de familia con mayor volumen</li>
              <li><strong>Castelar</strong> — en crecimiento, acceso directo por autopista</li>
              <li><strong>Ituzaingó límite</strong> — zona de transición igualmente cubierta</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Morón</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Morón?</h3>
            <p>Un 2 ambientes se cotiza según el caso. Una casa puede ir a consultar según el caso según el volumen. Nuestra base en Flores permite llegar más rápido y a menor costo que empresas del centro de CABA.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. Morón centro tiene alta rotación y los turnos de fin de mes se llenan rápido.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen guardamuebles para mudanzas en Morón?</h3>
            <p>Sí. Nuestro depósito en Flores, a pocos minutos del corredor oeste. Podés almacenar tus muebles mientras organizás la mudanza o el nuevo domicilio.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de Morón a CABA?</h3>
            <p>Sí, es una de las rutas más frecuentes. El traslado entre Morón y cualquier barrio de CABA está incluido en el precio cerrado, sin costos adicionales por distancia.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas comerciales en Morón?</h3>
            <p>Sí. Oficinas y locales con precio cerrado. Coordinamos el horario para minimizar el tiempo de inactividad del negocio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-flores" className="text-gold hover:underline text-sm">Flores</Link>
              <Link href="/blog/mudanzas-la-matanza" className="text-gold hover:underline text-sm">La Matanza</Link>
              <Link href="/blog/mudanzas-tres-de-febrero" className="text-gold hover:underline text-sm">Tres de Febrero</Link>
              <Link href="/blog/mudanzas-hurlingham" className="text-gold hover:underline text-sm">Hurlingham</Link>
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
