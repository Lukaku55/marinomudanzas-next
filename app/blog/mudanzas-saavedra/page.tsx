import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Saavedra Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Saavedra: casas con jardín, buena accesibilidad para camiones y zona tranquila del norte de CABA. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Saavedra", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-saavedra" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Saavedra Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Saavedra: casas con jardín, buena accesibilidad para camiones y zona tranquila del norte de CABA. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-saavedra",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-saavedra" },
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
      "name": "¿Cómo es el acceso para camiones en Saavedra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Saavedra tiene muy buen acceso vehicular. Las avenidas principales como Av. Balbín, Av. García del Río y Av. Cabildo permiten el ingreso de camiones de todos los tamaños sin los problemas de tráfico de los barrios más céntricos. Las calles internas son amplias y arboladas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Saavedra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una casa con jardín en Saavedra puede ir a consultar según el caso según el volumen. Un departamento de 2 ambientes se cotiza según el caso. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza. Pedí el tuyo sin cargo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de casas grandes con mucho volumen en Saavedra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es justamente lo más frecuente en Saavedra. Las casas del barrio suelen ser amplias, con dos plantas, jardín y garaje. Contamos con camiones de mayor capacidad y el personal necesario para este tipo de mudanzas. El presupuesto se ajusta al volumen real."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Saavedra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Saavedra tiene menos rotación que barrios más céntricos porque es zona de propietarios más que de inquilinos, pero para fin de mes o sábados conviene reservar con 10–15 días de anticipación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan los sábados en Saavedra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, trabajamos de lunes a sábado de 8 a 18hs. Para casas en edificios con consorcio, verificamos antes si permiten mudanzas en sábado y coordinamos el turno necesario."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Saavedra</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Saavedra es uno de los barrios más tranquilos y residenciales del norte de Buenos Aires. Sus calles arboladas, las casas amplias con jardín y la baja densidad de tráfico lo convierten en uno de los barrios más cómodos para operar con camiones de mudanza. Sin embargo, el volumen de las casas exige personal y vehículos de mayor capacidad que en un típico departamento céntrico. En Marino Mudanzas realizamos mudanzas en Saavedra con la flota y el equipo adecuados para cada caso.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Saavedra</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Casas con jardín y garaje</strong> — la tipología predominante del barrio. Suelen tener dos plantas, muchos muebles de exterior y un volumen mayor al de un departamento promedio.</li>
              <li><strong>Excelente accesibilidad vehicular</strong> — las avenidas principales permiten el ingreso de camiones grandes sin restricciones de tráfico significativas.</li>
              <li><strong>Zona de propietarios</strong> — Saavedra tiene menor rotación de inquilinos que otros barrios. Las mudanzas suelen ser de familias completas con mayor volumen acumulado.</li>
              <li><strong>Edificios de departamentos en Av. Cabildo</strong> — el corredor de Cabildo tiene edificios modernos con buenas instalaciones de carga y ascensores amplios.</li>
              <li><strong>PHs y casas de dos plantas</strong> — requieren personal extra para escalera pero el acceso exterior suele ser cómodo.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Saavedra?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles de gran porte (roperos, camas dobles, bibliotecas)</li>
              <li>Embalaje de objetos frágiles, vajilla, cuadros y espejos</li>
              <li>Traslado de muebles de jardín y elementos de exterior</li>
              <li>Camión del tamaño adecuado al volumen real</li>
              <li>Personal suficiente para mudanzas de casas de dos plantas</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Saavedra que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Saavedra interior</strong> — zona de casas de familia entre Av. Balbín y Av. García del Río, el corazón residencial del barrio</li>
              <li><strong>Av. Cabildo</strong> — eje comercial con edificios de departamentos y buena conectividad</li>
              <li><strong>Límite Núñez</strong> — zona de transición con casas y PHs de fácil acceso</li>
              <li><strong>Límite Villa Pueyrredón</strong> — calles amplias con casas de gran porte</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Saavedra</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo es el acceso para camiones en Saavedra?</h3>
            <p>Muy bueno. Las avenidas principales permiten camiones de todos los tamaños y las calles internas son amplias. Es uno de los barrios con mejor logística de acceso de toda CABA.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Saavedra?</h3>
            <p>Una casa con jardín puede ir a consultar según el caso según el volumen. Un departamento de 2 ambientes se cotiza según el caso. Precio cerrado desde el presupuesto, sin costos adicionales el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de casas grandes con mucho volumen?</h3>
            <p>Sí, es lo más frecuente en Saavedra. Contamos con camiones de mayor capacidad y el personal necesario para casas de dos plantas con jardín. El presupuesto se ajusta al volumen real.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Saavedra tiene menos rotación que barrios más céntricos, pero para fin de mes o sábados conviene reservar con 10–15 días de anticipación.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trabajan los sábados en Saavedra?</h3>
            <p>Sí, de lunes a sábado de 8 a 18hs. Para edificios con consorcio verificamos antes si permiten mudanzas en sábado y coordinamos el turno correspondiente.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-nunez" className="text-gold hover:underline text-sm">Núñez</Link>
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Belgrano</Link>
              <Link href="/blog/mudanzas-villa-urquiza" className="text-gold hover:underline text-sm">Villa Urquiza</Link>
              <Link href="/blog/mudanzas-villa-pueyrredon" className="text-gold hover:underline text-sm">Villa Pueyrredón</Link>
              <Link href="/blog/mudanzas-colegiales" className="text-gold hover:underline text-sm">Colegiales</Link>
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
