import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanza de 2 Ambientes en Buenos Aires: Precio y Guía | Marino Mudanzas",
  description: "¿Cuánto cuesta una mudanza de 2 ambientes en Buenos Aires? Precios orientativos a consultar, cuánto tarda, cuántos operarios y qué incluye el servicio.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanza de 2 Ambientes en Buenos Aires", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-departamento-2-ambientes-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanza de 2 Ambientes en Buenos Aires: Precio y Guía | Marino Mudanzas",
  "description": "¿Cuánto cuesta una mudanza de 2 ambientes en Buenos Aires? Precios orientativos a consultar, cuánto tarda, cuántos operarios y qué incluye el servicio.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-departamento-2-ambientes-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-departamento-2-ambientes-buenos-aires" },
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
      "name": "¿Cuánto cuesta una mudanza de 2 ambientes en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El precio orientativo para una mudanza de 2 ambientes en CABA o GBA se cotiza según el caso a a consultar. El valor final depende del barrio, el piso, si hay ascensor, la distancia entre el origen y el destino, y si se requiere embalaje adicional. En Marino Mudanzas damos un precio cerrado desde el presupuesto, sin adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda una mudanza de 2 ambientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En la mayoría de los casos, entre 3 y 5 horas. El tiempo varía según el piso (más alto tarda más), si hay ascensor o escalera, la cantidad de muebles y cajas, y la distancia entre los domicilios. Si hay mucho embalaje por hacer, puede extenderse."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántos operarios van en una mudanza de 2 ambientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generalmente 2 a 3 operarios. En pisos altos sin ascensor o cuando hay mucho volumen de muebles y cajas, puede convenir 3 operarios para optimizar el tiempo y cuidar mejor los muebles."
      }
    },
    {
      "@type": "Question",
      "name": "¿La mudanza de 2 ambientes incluye embalaje?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, incluye el embalaje básico de objetos frágiles, vajilla y cuadros. La ropa suele trasladarse en bolsas o cajas que el cliente prepara. Si necesitás un embalaje más completo de todos los objetos del departamento, lo cotizamos como servicio adicional."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo reducir el costo de una mudanza de 2 ambientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La forma más efectiva es preparar vos mismo la ropa y los libros en cajas o bolsas antes de que lleguemos. Eso reduce el tiempo de trabajo y puede bajar el precio. También ayuda mudarse a mitad de mes (no a fin de mes) y evitar pisos altos sin ascensor cuando sea posible."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanza de 2 Ambientes en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>La mudanza de un departamento de 2 ambientes es una de las más comunes en Buenos Aires, y también una de las más variables en precio y tiempo. El piso, la distancia, si hay ascensor o montacargas, y el barrio pueden hacer que el mismo volumen de muebles cueste muy distinto. En esta guía te explicamos cuánto cuesta, cuánto tarda, qué entra en el camión y qué factores influyen en el precio final.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Precio orientativo de una mudanza de 2 ambientes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Rango general</strong> — a consultar a a consultar en CABA y GBA para una mudanza estándar de 2 ambientes.</li>
              <li><strong>Barrios de alta complejidad</strong> — Puerto Madero, Recoleta, Palermo Chico o edificios con consorcios estrictos pueden superar ese rango.</li>
              <li><strong>Piso alto sin ascensor</strong> — suma tiempo y esfuerzo, lo que puede incrementar el precio un 15–25%.</li>
              <li><strong>Distancia</strong> — una mudanza dentro del mismo barrio es más barata que cruzar la ciudad o ir a GBA.</li>
              <li><strong>Fin de mes</strong> — el 30 y 31 hay más demanda; reservar con anticipación ayuda a asegurar disponibilidad al mismo precio base.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué entra en la mudanza de un 2 ambientes?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dormitorio completo</strong> — cama, placard, mesa de luz, lámpara y ropa</li>
              <li><strong>Living-comedor</strong> — sillón, mesa, sillas, mueble de TV y biblioteca</li>
              <li><strong>Cocina equipada</strong> — heladera, lavarropas, microondas, cajas con vajilla y pequeños electrodomésticos</li>
              <li><strong>Varios</strong> — cuadros, plantas, cajas con ropa y objetos personales</li>
            </ul>
            <p>Todo entra en un camión mediano de 3 a 5 toneladas. En pisos bajos o departamentos bien organizados, un solo viaje suele ser suficiente.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Comparación con otros tamaños</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Monoambiente</strong> — menor volumen, 2 operarios, 2–3 horas, precio a consultar según el caso</li>
              <li><strong>2 ambientes</strong> — volumen medio, 2–3 operarios, 3–5 horas, precio a consultar</li>
              <li><strong>3 ambientes o más</strong> — mayor volumen, 3–4 operarios, 5–8 horas o más, precio a consultar según el caso</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza de 2 ambientes en Buenos Aires?</h3>
            <p>El precio orientativo se cotiza según el caso a a consultar. El valor final depende del barrio, el piso, si hay ascensor y la distancia. En Marino damos precio cerrado desde el presupuesto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tarda una mudanza de 2 ambientes?</h3>
            <p>Entre 3 y 5 horas en la mayoría de los casos. Pisos altos sin ascensor, muchas cajas o distancias largas pueden extender ese tiempo.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuántos operarios van?</h3>
            <p>Generalmente 2 a 3. En pisos altos sin ascensor o con mucho volumen recomendamos 3 operarios para cuidar mejor los muebles y terminar en tiempo.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿La mudanza incluye embalaje?</h3>
            <p>Incluye el embalaje básico de objetos frágiles, vajilla y cuadros. La ropa y libros suelen ir en cajas que prepara el cliente. El embalaje completo de todo el departamento es un servicio adicional.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo puedo reducir el costo?</h3>
            <p>Preparar vos mismo la ropa y los libros en cajas antes de que lleguemos reduce el tiempo y puede bajar el precio. Mudarse a mitad de mes y evitar el 30/31 también ayuda con la disponibilidad.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-3-ambientes-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de 3 ambientes</Link>
              <Link href="/blog/mudanzas-casa-completa-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de casa completa</Link>
              <Link href="/blog/mudanza-monoambiente-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de monoambiente</Link>
              <Link href="/blog/mudanzas-palermo" className="text-gold hover:underline text-sm">Palermo</Link>
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Belgrano</Link>
              <Link href="/blog/mudanzas-caballito" className="text-gold hover:underline text-sm">Caballito</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
