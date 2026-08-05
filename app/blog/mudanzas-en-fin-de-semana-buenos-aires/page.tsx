import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Fin de Semana en Buenos Aires | Marino Mudanzas",
  description: "¿Se puede mudar un sábado o domingo en Buenos Aires? Ventajas, mitos, restricciones de consorcio y cómo reservar. Precio cerrado, presupuesto sin cargo: 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Fin de Semana en Buenos Aires", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-en-fin-de-semana-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Fin de Semana en Buenos Aires | Marino Mudanzas",
  "description": "¿Se puede mudar un sábado o domingo en Buenos Aires? Ventajas, mitos, restricciones de consorcio y cómo reservar. Precio cerrado, presupuesto sin cargo.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-en-fin-de-semana-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-en-fin-de-semana-buenos-aires" },
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
      "name": "¿Marino Mudanzas trabaja los sábados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Trabajamos los sábados de 8 a 18hs con el mismo servicio completo que de lunes a viernes. Los sábados son el día más demandado, así que conviene reservar con al menos 2 semanas de anticipación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hay mudanzas los domingos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los domingos son casos especiales. Consultanos con anticipación según tu situación particular. Muchos consorcios además restringen las mudanzas los domingos, así que es importante verificar el reglamento de tu edificio."
      }
    },
    {
      "@type": "Question",
      "name": "¿El precio sube los fines de semana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. El precio es el mismo de lunes a sábado. No aplicamos recargo por día de semana. El precio cerrado que te damos en el presupuesto es el que pagás, sin importar el día."
      }
    },
    {
      "@type": "Question",
      "name": "¿Los consorcios permiten mudanzas los sábados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mayoría de los consorcios de CABA permiten mudanzas los sábados en horario acotado (generalmente de 8 a 13hs o de 9 a 14hs). Conviene consultar el reglamento de tu edificio antes de confirmar la fecha."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en fin de semana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos reservar con al menos 2 semanas de anticipación para los sábados. Son los días más solicitados y los turnos se completan rápido, especialmente a fin de mes."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Fin de Semana en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Mudarse un sábado o un domingo es una opción muy buscada en Buenos Aires: no hace falta pedir día libre en el trabajo, las calles tienen menos tráfico y hay más tiempo para acomodar todo en el nuevo lugar. En Marino Mudanzas trabajamos los sábados con el mismo servicio completo que cualquier día de la semana.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Ventajas de mudarse en fin de semana</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Menos tráfico</strong> — especialmente los domingos, las calles están más libres y el camión llega más rápido a destino</li>
              <li><strong>Más fácil estacionar el camión</strong> — sin el tránsito laboral de la semana, encontrar espacio frente al edificio es más sencillo</li>
              <li><strong>No perdés días de trabajo</strong> — podés estar presente durante toda la mudanza sin pedir licencia</li>
              <li><strong>Más tiempo para acomodar</strong> — con el fin de semana por delante, tenés más margen para ordenar el nuevo hogar</li>
              <li><strong>Coordinación más fácil con familia o amigos</strong> — quienes te quieran ayudar también están disponibles</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Mitos sobre las mudanzas en fin de semana</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>"Los fines de semana son más caros"</strong> — FALSO. El precio es el mismo de lunes a sábado. No aplicamos recargo por día de semana.</li>
              <li><strong>"Las empresas de mudanzas no trabajan los sábados"</strong> — FALSO. Trabajamos los sábados de 8 a 18hs con servicio completo.</li>
              <li><strong>"El consorcio siempre lo prohíbe"</strong> — FALSO en la mayoría de los casos. La mayoría de los edificios permiten mudanzas los sábados en horario acotado.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Lo que sí tenés que tener en cuenta</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Algunos consorcios restringen los domingos</strong> — verificá el reglamento de tu edificio antes de confirmar la fecha. Los domingos son más restrictivos que los sábados.</li>
              <li><strong>Los sábados son muy demandados</strong> — especialmente los sábados de fin de mes. Reservá con al menos 2 semanas de anticipo para asegurarte el turno.</li>
              <li><strong>Coordinar el uso del montacargas</strong> — si el edificio tiene montacargas, muchos consorcios requieren reserva previa incluso los sábados.</li>
              <li><strong>Horario del consorcio</strong> — verificá hasta qué hora permite el consorcio el ingreso del camión (en muchos edificios el límite es las 13 o las 14hs los sábados).</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en fin de semana</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Marino Mudanzas trabaja los sábados?</h3>
            <p>Sí, de 8 a 18hs con el mismo servicio completo que cualquier día de semana. Los sábados son los más solicitados, así que reservá con anticipación.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hay mudanzas los domingos?</h3>
            <p>Los domingos son casos especiales. Consultanos según tu situación. Además, muchos consorcios restringen las mudanzas los domingos, así que verificá el reglamento de tu edificio.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿El precio sube los fines de semana?</h3>
            <p>No. El precio es el mismo de lunes a sábado. El precio cerrado del presupuesto es el que pagás, sin importar el día.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Los consorcios permiten mudanzas los sábados?</h3>
            <p>La mayoría sí, en horario acotado (generalmente de 8 a 13 o 14hs). Conviene consultar el reglamento de tu edificio antes de confirmar la fecha.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos 2 semanas para los sábados. Los turnos se completan rápido, especialmente los sábados de fin de mes.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-fin-de-mes" className="text-gold hover:underline text-sm">Mudanzas a fin de mes</Link>
              <Link href="/blog/cuando-es-mejor-mudarse-buenos-aires" className="text-gold hover:underline text-sm">¿Cuándo es mejor mudarse?</Link>
              <Link href="/blog/mudanzas-urgentes-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas urgentes</Link>
              <Link href="/blog/mudanzas-edificios-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas en edificios</Link>
              <Link href="/blog/mudanzas-palermo" className="text-gold hover:underline text-sm">Mudanzas en Palermo</Link>
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Mudanzas en Belgrano</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
