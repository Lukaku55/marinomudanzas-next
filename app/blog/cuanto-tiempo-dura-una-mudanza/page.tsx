import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¿Cuánto Tiempo Dura una Mudanza? Tiempos por Tamaño | Marino Mudanzas",
  description: "Estimaciones reales de cuánto dura una mudanza según ambientes, piso y ascensor. Guía práctica para planificar tu día en Buenos Aires.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "¿Cuánto Tiempo Dura una Mudanza?", "item": "https://www.mudanzasmarino.com.ar/blog/cuanto-tiempo-dura-una-mudanza" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "¿Cuánto Tiempo Dura una Mudanza? Tiempos Reales por Tamaño de Vivienda",
  "description": "Estimaciones reales de cuánto dura una mudanza según ambientes, piso y ascensor. Guía práctica para planificar tu día en Buenos Aires.",
  "url": "https://www.mudanzasmarino.com.ar/blog/cuanto-tiempo-dura-una-mudanza",
  "datePublished": "2026-06-29",
  "dateModified": "2026-06-29",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/cuanto-tiempo-dura-una-mudanza" },
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo dura una mudanza de 2 ambientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de 2 ambientes en Buenos Aires dura entre 3 y 5 horas en condiciones normales (con ascensor, piso bajo). Si el edificio no tiene ascensor o es un piso alto, puede extenderse a 5–7 horas. El tiempo incluye carga, traslado y descarga."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda una mudanza de monoambiente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de monoambiente con ascensor disponible dura entre 1,5 y 3 horas. Sin ascensor o con escaleras largas puede tomar entre 3 y 4 horas. Tener todo embalado y listo antes de que llegue el equipo puede reducir el tiempo en un 30%."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda una mudanza de 3 ambientes o casa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de 3 ambientes dura entre 4 y 7 horas. Una casa de 3 ambientes con jardín o garaje puede tomar entre 6 y 9 horas. Depende mucho del volumen de muebles y si hay escaleras o elementos voluminosos como pianos o placares empotrados."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué factores alargan el tiempo de una mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los principales factores son: falta de ascensor (suma entre 1 y 3 horas según el piso), mudanza por soga (suma 1–2 horas para los muebles que requieren este método), distancia larga entre origen y destino, muebles muy pesados o voluminosos (piano, biblioteca), y cosas sin empacar al momento de llegar el equipo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo hacer que mi mudanza sea más rápida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tener todo embalado antes de que llegue el equipo es la forma más eficiente de reducir el tiempo. También ayuda etiquetar las cajas por ambiente, desconectar los electrodomésticos con anticipación, y liberar el acceso al ascensor o escalera para que el equipo pueda operar sin interrupciones."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">¿Cuánto Tiempo Dura una Mudanza?</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Una de las preguntas más frecuentes antes de una mudanza es cuánto tiempo va a llevar el día de la operación. La respuesta depende de varios factores — pero con 80 años de experiencia, podemos darte estimaciones muy concretas para que planifiques tu día sin sorpresas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Tiempos estimados por tipo de vivienda</h2>
            <p>Estos tiempos asumen condiciones normales: edificio con ascensor funcional, distancia corta entre origen y destino, y objetos listos para cargar.</p>

            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Tipo de vivienda</th>
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Con ascensor</th>
                    <th className="text-left py-3 font-semibold text-foreground">Sin ascensor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 pr-4">Monoambiente</td>
                    <td className="py-3 pr-4">1,5 – 3 hs</td>
                    <td className="py-3">3 – 4 hs</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">2 ambientes</td>
                    <td className="py-3 pr-4">3 – 5 hs</td>
                    <td className="py-3">5 – 7 hs</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">3 ambientes (depto)</td>
                    <td className="py-3 pr-4">4 – 7 hs</td>
                    <td className="py-3">6 – 9 hs</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Casa 3+ amb. (jardín)</td>
                    <td className="py-3 pr-4">6 – 9 hs</td>
                    <td className="py-3">7 – 10 hs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm italic mt-2">Estos son tiempos orientativos. El presupuesto final considera las particularidades de cada mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Factores que alargan el tiempo de una mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Sin ascensor o ascensor pequeño</strong> — es el factor que más tiempo agrega. Por cada piso de escalera sin ascensor, se suman entre 20 y 40 minutos al total, dependiendo del volumen.</li>
              <li><strong>Mudanza por soga</strong> — cuando los muebles no entran por la escalera ni el ascensor, se usan sogas desde la ventana o balcón. Este proceso agrega entre 1 y 2 horas según la cantidad de piezas.</li>
              <li><strong>Muebles muy pesados o grandes</strong> — pianos, bibliotecas de madera maciza, cajas fuertes o canapés de gran porte requieren más personal y más tiempo de maniobra.</li>
              <li><strong>Distancia entre origen y destino</strong> — una mudanza dentro del mismo barrio puede hacer varios viajes en camioneta. Una mudanza a GBA implica un solo viaje pero mayor tiempo de traslado.</li>
              <li><strong>Cosas sin empacar al llegar el equipo</strong> — si el equipo llega y todavía hay que terminar de embalar, ese tiempo se cobra igual.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo acelerar tu mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Embalá todo antes del día</strong> — libros, ropa, cocina, baño. Cuanto más listo esté, más rápido opera el equipo.</li>
              <li><strong>Etiquetá las cajas por ambiente</strong> — facilita la descarga en destino y evita tener que abrir todo para saber dónde va.</li>
              <li><strong>Desconectá los electrodomésticos con anticipación</strong> — heladera, lavarropas y lavavajillas necesitan tiempo para vaciarse y descongelarse. No lo dejés para el día.</li>
              <li><strong>Liberá el acceso al ascensor</strong> — coordiná con el encargado del edificio para reservar el ascensor y evitar esperas.</li>
              <li><strong>Decidí de antemano qué no llevás</strong> — los muebles que "quizás llevo" el día de la mudanza generan demoras. Decidí antes.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre el tiempo de una mudanza</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tiempo dura una mudanza de 2 ambientes?</h3>
            <p>Entre 3 y 5 horas en condiciones normales (con ascensor, piso bajo). Sin ascensor o en pisos altos puede extenderse a 5–7 horas. El tiempo incluye carga, traslado y descarga.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tarda una mudanza de monoambiente?</h3>
            <p>Entre 1,5 y 3 horas con ascensor. Sin ascensor o con escaleras largas puede tomar entre 3 y 4 horas. Tener todo embalado y listo antes de que llegue el equipo puede reducir el tiempo en hasta un 30%.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tarda una mudanza de 3 ambientes o casa?</h3>
            <p>Un 3 ambientes dura entre 4 y 7 horas. Una casa con jardín o garaje puede tomar entre 6 y 9 horas, dependiendo del volumen y de si hay elementos especiales como pianos o placares grandes.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué factores alargan más el tiempo de una mudanza?</h3>
            <p>El principal es la falta de ascensor (suma 1–3 horas). Le siguen la mudanza por soga, los muebles muy voluminosos y tener cosas sin empacar al momento de llegar el equipo.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo puedo hacer que mi mudanza sea más rápida?</h3>
            <p>Embalando todo antes de que llegue el equipo, etiquetando las cajas por ambiente, desconectando electrodomésticos con anticipación y liberando el acceso al ascensor.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Consultá tu caso específico</h2>
            <p>¿Tenés dudas sobre cuánto puede durar tu mudanza en particular? Contactanos y te damos una estimación sin cargo basada en tu situación real.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Consultá por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="text-gold hover:underline text-sm">¿Cuánto cuesta una mudanza?</Link>
              <Link href="/blog/checklist-mudanza" className="text-gold hover:underline text-sm">Checklist de mudanza</Link>
              <Link href="/blog/como-embalar-muebles-mudanza" className="text-gold hover:underline text-sm">Cómo embalar muebles</Link>
              <Link href="/blog/mudanzas-con-y-sin-ascensor" className="text-gold hover:underline text-sm">Mudanzas con y sin ascensor</Link>
              <Link href="/blog/mudanzas-por-soga" className="text-gold hover:underline text-sm">Mudanzas por soga</Link>
              <Link href="/mudanzas-residenciales" className="text-gold hover:underline text-sm">Mudanzas residenciales</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};
