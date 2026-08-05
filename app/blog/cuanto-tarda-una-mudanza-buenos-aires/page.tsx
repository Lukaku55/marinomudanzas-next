import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¿Cuánto Tarda una Mudanza en Buenos Aires? | Marino Mudanzas",
  description: "Tiempos reales por tamaño de mudanza: monoambiente 2-3hs, 2 amb 3-5hs, 3 amb 5-7hs, casa completa 1-2 días. Qué acelera o demora una mudanza en CABA y GBA.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "¿Cuánto Tarda una Mudanza en Buenos Aires?", "item": "https://www.mudanzasmarino.com.ar/blog/cuanto-tarda-una-mudanza-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "¿Cuánto Tarda una Mudanza en Buenos Aires? | Marino Mudanzas",
  "description": "Tiempos reales por tamaño de mudanza: monoambiente 2-3hs, 2 amb 3-5hs, 3 amb 5-7hs, casa completa 1-2 días. Qué acelera o demora una mudanza en CABA y GBA.",
  "url": "https://www.mudanzasmarino.com.ar/blog/cuanto-tarda-una-mudanza-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/cuanto-tarda-una-mudanza-buenos-aires" },
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
      "name": "¿Cuánto tarda una mudanza de 2 ambientes en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de 2 ambientes tarda entre 3 y 5 horas en promedio. Si hay escalera sin ascensor, muchos muebles o la distancia entre origen y destino es larga, puede extenderse hasta 6 horas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede hacer una mudanza en un solo día?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Hasta un departamento de 3 o 4 ambientes puede mudarse en un solo día siempre que no haya complicaciones de acceso o de gran volumen. Una casa completa con mucho mobiliario puede requerir dos jornadas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si la mudanza lleva más tiempo del estimado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Con Marino Mudanzas el precio es cerrado desde el presupuesto. Si la mudanza lleva más tiempo del estimado por causas operativas, no te cobramos extra. El precio acordado es el que pagás."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuándo conviene empezar a embalar antes de la mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lo ideal es empezar a embalar ropa, libros y objetos fuera de temporada entre 3 y 5 días antes. Eso reduce significativamente el tiempo del operativo el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo hacer que la mudanza sea más rápida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Embalá vos mismo la ropa y los libros antes de la fecha, tené todo listo para cargar el día del operativo, coordiná el acceso al edificio con anticipación y asegurate de tener estacionamiento reservado cerca de la entrada."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">¿Cuánto Tarda una Mudanza en Buenos Aires?</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Una de las preguntas más frecuentes antes de una mudanza es cuánto tiempo va a llevar el operativo. La respuesta depende del tamaño del departamento o casa, el piso, el ascensor y cuánto embalaje previo hiciste. Llevamos más de 70 años haciendo mudanzas en Buenos Aires y acá te compartimos los tiempos reales que manejamos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Tiempos estimados por tamaño de mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Monoambiente / estudio</strong> — 2 a 3 horas</li>
              <li><strong>2 ambientes</strong> — 3 a 5 horas</li>
              <li><strong>3 ambientes</strong> — 5 a 7 horas</li>
              <li><strong>4 ambientes</strong> — 7 a 10 horas o 2 jornadas</li>
              <li><strong>Casa completa</strong> — 1 a 2 días</li>
            </ul>
            <p>Estos tiempos contemplan el cargado, el viaje y el descargado con armado de muebles en destino. El embalaje de frágiles (vajilla, cuadros, espejos) ya está incluido en la jornada.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cómo se calcula el tiempo de una mudanza?</h2>
            <p>El tiempo de una mudanza se estima a partir de tres variables principales: el volumen de bienes, las condiciones de acceso (piso, ascensor, pasillo) y la distancia entre el origen y el destino. Cuando hacemos el presupuesto sin cargo, evaluamos todos estos factores y te damos una estimación realista del tiempo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Factores que aumentan el tiempo</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pisos sin ascensor</strong> — cada piso sin ascensor suma aproximadamente 1 hora al operativo</li>
              <li><strong>Mudanza por soga</strong> — cuando el mueble no baja por escalera ni ascensor, se trabaja por la ventana, lo que suma entre 1 y 2 horas</li>
              <li><strong>Embalaje de vajilla, cuadros y objetos frágiles</strong> — especialmente si hay mucha cantidad</li>
              <li><strong>Edificios con horarios de consorcio</strong> — si hay ventanas de tiempo acotadas para usar el montacargas</li>
              <li><strong>Distancia larga entre origen y destino</strong> — viajes de más de 40 minutos impactan en el tiempo total</li>
              <li><strong>Lluvia</strong> — obliga a tomar precauciones adicionales para proteger los muebles</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Factores que reducen el tiempo</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Embalaje propio previo</strong> — si embalás la ropa y los libros antes, el operativo arranca más rápido</li>
              <li><strong>Planta baja o primer piso</strong> — sin escaleras, el ritmo de carga y descarga es mucho más veloz</li>
              <li><strong>Ascensor amplio</strong> — permite subir y bajar muebles grandes sin necesidad de desarmarlos del todo</li>
              <li><strong>Estacionamiento fácil</strong> — el camión cerca de la entrada reduce el tiempo de acarreo</li>
              <li><strong>Pocos muebles para desarmar</strong> — los placares de piso a techo y camas con cajones son los que más tiempo llevan</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre tiempos de mudanza</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tarda una mudanza de 2 ambientes en Buenos Aires?</h3>
            <p>Entre 3 y 5 horas en promedio. Con escalera sin ascensor, mucho mobiliario o larga distancia puede llegar a 6 horas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Se puede hacer en un solo día?</h3>
            <p>Sí. Hasta un 3 o 4 ambientes puede resolverse en una sola jornada. Una casa completa con mucho volumen puede requerir dos días.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué pasa si la mudanza lleva más tiempo del estimado?</h3>
            <p>El precio es cerrado. Si el operativo se extiende por causas propias del trabajo, no te cobramos extra. El precio acordado en el presupuesto es el que pagás.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuándo conviene empezar a embalar?</h3>
            <p>Ropa, libros y objetos fuera de temporada podés embalarlos con 3 a 5 días de anticipo. Eso reduce el tiempo del operativo el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo puedo hacer que la mudanza sea más rápida?</h3>
            <p>Embalá vos mismo la ropa y los libros antes de la fecha. Eso solo puede recortar entre 30 minutos y 1 hora del operativo, según el volumen.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="text-gold hover:underline text-sm">¿Cuánto cuesta una mudanza?</Link>
              <Link href="/blog/mudanza-monoambiente-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de monoambiente</Link>
              <Link href="/blog/mudanzas-departamento-2-ambientes-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de 2 ambientes</Link>
              <Link href="/blog/mudanzas-3-ambientes-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de 3 ambientes</Link>
              <Link href="/blog/mudanzas-casa-completa-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de casa completa</Link>
              <Link href="/blog/mudanzas-con-y-sin-ascensor" className="text-gold hover:underline text-sm">Mudanzas con y sin ascensor</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
