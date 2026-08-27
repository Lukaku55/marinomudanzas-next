import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Moreno GBA | Marino Mudanzas",
  description: "Mudanzas en Moreno: partido del oeste del GBA con personal y equipo propios. Precio cerrado sin sorpresas desde el presupuesto. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Moreno", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-moreno" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Moreno GBA | Marino Mudanzas",
  "description": "Mudanzas en Moreno: partido del oeste del GBA con personal y equipo propios. Precio cerrado sin sorpresas desde el presupuesto.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-moreno",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-moreno" },
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
      "name": "¿Cuánto cuesta una mudanza en Moreno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza en Moreno tiene un costo que incluye la distancia desde nuestra base en Flores. Un departamento de 2 ambientes se cotiza según el caso y una casa puede ir a consultar según el caso según el volumen. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubren todo el partido de Moreno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, cubrimos todo el partido de Moreno: Moreno centro, Cuartel V, Francisco Álvarez, La Reja y Trujui. El precio es cerrado desde el presupuesto incluyendo la distancia desde CABA."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo acceden a Moreno desde CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El acceso principal es por la Autopista del Oeste (Autopista Ricardo Balbín). Desde nuestra base en Flores, el acceso al Acceso Oeste es muy directo. El tiempo estimado hasta Moreno centro es de 30–40 minutos según el tráfico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Moreno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana y media, dado que Moreno está más alejado de nuestra base y la logística de la jornada requiere más planificación. Para fin de mes o sábados, 2 semanas de anticipación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen guardamuebles para mudanzas en Moreno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Nuestro depósito en Flores, accesible desde Moreno por la Autopista del Oeste, puede servir como almacenamiento intermedio. Consultá disponibilidad y tarifas sin cargo."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Moreno</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Moreno es uno de los partidos más extensos del oeste del Gran Buenos Aires, con una población en crecimiento y zonas muy diversas: desde el centro urbano hasta zonas residenciales como Francisco Álvarez y La Reja, y barrios más rurales en Cuartel V. Su acceso principal desde CABA es la Autopista del Oeste, que conecta directamente con nuestra base en Flores. En Marino Mudanzas realizamos mudanzas en todo el partido con personal propio, equipo propio y precio cerrado desde el presupuesto.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Moreno</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Moreno centro</strong> — zona urbana con edificios y alta actividad comercial. Buena accesibilidad vehicular por las avenidas principales.</li>
              <li><strong>Francisco Álvarez</strong> — localidad residencial en crecimiento con casas de familia y buen acceso desde la autopista.</li>
              <li><strong>La Reja</strong> — barrio con casas de familia y calles amplias. Tranquilo y con buen acceso vehicular.</li>
              <li><strong>Cuartel V</strong> — zona más alejada del partido con casas de familia y lotes. Se requiere más planificación logística.</li>
              <li><strong>Trujui</strong> — localidad con casas de familia y buen acceso desde la autopista.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Moreno?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Traslado de muebles de jardín y elementos de exterior</li>
              <li>Camión del tamaño adecuado al volumen y la zona</li>
              <li>Guardamuebles disponible en Flores para mudanzas en etapas</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Localidades de Moreno que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Moreno centro</strong> — zona urbana con edificios y comercios</li>
              <li><strong>Francisco Álvarez</strong> — residencial en crecimiento con buen acceso</li>
              <li><strong>La Reja</strong> — casas de familia con calles amplias</li>
              <li><strong>Cuartel V</strong> — zona rural y semiurbana</li>
              <li><strong>Trujui</strong> — localidad residencial con acceso desde autopista</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Moreno</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Moreno?</h3>
            <p>Un 2 ambientes se cotiza según el caso y una casa a consultar según el caso según el volumen. El precio incluye la distancia desde nuestra base y es cerrado desde el presupuesto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cubren todo el partido de Moreno?</h3>
            <p>Sí, todo: Moreno centro, Francisco Álvarez, La Reja, Cuartel V y Trujui. Precio cerrado incluyendo la distancia.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo acceden a Moreno desde CABA?</h3>
            <p>Por la Autopista del Oeste. Desde nuestra base en Flores el acceso es directo. Aproximadamente 30–40 minutos a Moreno centro según el tráfico.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana y media. Para fin de mes o sábados, 2 semanas. La mayor distancia requiere más planificación logística.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen guardamuebles para mudanzas en Moreno?</h3>
            <p>Sí. Nuestro depósito en Flores está accesible desde Moreno por la autopista. Consultá disponibilidad y tarifas sin cargo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos la localidad, el tipo de propiedad y el piso. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-moron" className="text-gold hover:underline text-sm">Morón</Link>
              <Link href="/blog/mudanzas-merlo" className="text-gold hover:underline text-sm">Merlo</Link>
              <Link href="/blog/mudanzas-marcos-paz" className="text-gold hover:underline text-sm">Marcos Paz</Link>
              <Link href="/blog/mudanzas-general-rodriguez" className="text-gold hover:underline text-sm">General Rodríguez</Link>
              <Link href="/blog/mudanzas-flores" className="text-gold hover:underline text-sm">Flores</Link>
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
