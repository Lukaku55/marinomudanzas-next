import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanza de Monoambiente en Buenos Aires | Marino Mudanzas",
  description: "¿Cuánto cuesta mudar un monoambiente en Buenos Aires? Tiempos, personal y qué incluye. Precio cerrado y presupuesto sin cargo. Llamanos: 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanza de Monoambiente en Buenos Aires", "item": "https://www.mudanzasmarino.com.ar/blog/mudanza-monoambiente-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanza de Monoambiente en Buenos Aires | Marino Mudanzas",
  "description": "¿Cuánto cuesta mudar un monoambiente en Buenos Aires? Tiempos, personal y qué incluye. Precio cerrado y presupuesto sin cargo.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanza-monoambiente-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanza-monoambiente-buenos-aires" },
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
      "name": "¿Cuánto cuesta una mudanza de monoambiente en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de monoambiente en Buenos Aires se cotiza según el caso. El precio varía según el piso, si hay ascensor y la distancia entre origen y destino. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda una mudanza de monoambiente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de monoambiente tarda entre 2 y 3 horas en promedio. Si hay escaleras sin ascensor o muchas cajas, puede extenderse algo más, pero rara vez supera las 4 horas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es mejor pedir un flete o una mudanza completa para un monoambiente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si tenés muebles grandes (placard, cama, heladera) y varias cajas, una mudanza completa con operarios sale mejor: incluye carga, descarga, desarmado y armado de muebles, y embalaje de frágiles. Un flete básico te deja toda la carga a vos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué hago con los muebles que no entran en el nuevo departamento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Podemos trasladarlos a un guardamuebles o dejarlos en el lugar que indiques. También podemos orientarte sobre guardamuebles en Buenos Aires si lo necesitás."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar la mudanza de un monoambiente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Con 5 a 7 días de anticipación es suficiente en la mayoría de los casos. Para mudanzas en sábados o a fin de mes conviene reservar con al menos 10 días de anticipo."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanza de Monoambiente en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>El monoambiente es la mudanza más ágil y accesible: pocas cosas, poco tiempo y sin necesidad de un camión grande. Aun así, mover un placard, una cama, la heladera y quince cajas de cosas requiere organización y, sobre todo, personal con experiencia para hacerlo sin roturas ni dolores de espalda. En Marino Mudanzas realizamos mudanzas de monoambiente todos los días en CABA y GBA con precio cerrado y presupuesto sin cargo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué suele tener un monoambiente?</h2>
            <p>El mobiliario típico de un monoambiente incluye:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cama de 1 plaza o 2 plazas</strong> — a veces con cajones bajo la cama</li>
              <li><strong>Placard</strong> — la pieza más voluminosa y la que más tiempo lleva desarmar</li>
              <li><strong>Mesa chica con 2 sillas</strong> — living-comedor integrado</li>
              <li><strong>Mueble de TV</strong> — con o sin rack</li>
              <li><strong>Microondas y heladera pequeña o mediana</strong></li>
              <li><strong>Ropa y cajas</strong> — entre 10 y 20 cajas de ropa, libros, vajilla y objetos varios</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuánto cuesta y cuánto tarda?</h2>
            <p>Una mudanza de monoambiente en Buenos Aires tiene un costo de <strong>a consultar</strong>. El precio varía según el piso (con o sin ascensor), la cantidad de muebles y la distancia entre origen y destino.</p>
            <p>En cuanto al tiempo, la mayoría de los monoambientes se completan en <strong>2 a 3 horas</strong>. El operativo incluye 2 operarios más el conductor y un utilitario o camioneta según el volumen.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Flete o mudanza completa para un monoambiente?</h2>
            <p>Muchas personas dudan entre pedir un flete básico o una mudanza completa. La diferencia es clara:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Flete básico</strong> — vehículo y chofer, vos cargás y descargás todo. Más barato, pero el esfuerzo es tuyo y el riesgo de rotura también.</li>
              <li><strong>Mudanza completa</strong> — operarios que cargan, descargan, desarman y arman los muebles, y embalan los objetos frágiles. Precio cerrado desde el presupuesto.</li>
            </ul>
            <p>Si tenés muebles grandes y varias cajas, una mudanza completa con embalaje sale mejor que pedir ayuda a amigos: los profesionales son más rápidos, cuidan mejor los muebles y no terminás pidiendo favores.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Consejos para organizar la mudanza del monoambiente</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Empezá a embalar ropa y libros con 2 o 3 días de anticipo</strong> — reduce el tiempo del operativo y el costo total</li>
              <li><strong>Etiquetá cada caja con el contenido</strong> — te ahorra horas al acomodar en el nuevo lugar</li>
              <li><strong>Desconectá la heladera la noche anterior</strong> — necesita al menos 8 horas sin corriente antes de moverla</li>
              <li><strong>Avisá al consorcio</strong> — muchos edificios tienen horarios de mudanza y requieren reserva de ascensor</li>
              <li><strong>Reservá con anticipación</strong> — especialmente para sábados y fin de mes</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas de monoambiente</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza de monoambiente en Buenos Aires?</h3>
            <p>Entre a consultar y a consultar según el piso, el ascensor y la cantidad de muebles. El precio es cerrado desde el presupuesto, sin sorpresas el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tarda una mudanza de monoambiente?</h3>
            <p>Entre 2 y 3 horas en la mayoría de los casos. Con escalera sin ascensor o muchas cajas puede llegar a 4 horas, pero rara vez más.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Es mejor pedir un flete o una mudanza completa?</h3>
            <p>Si tenés muebles grandes y muchas cajas, una mudanza completa con operarios sale mejor: ellos cargan, desarman, arman y embalan. Un flete básico te deja toda la carga a vos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué hago con muebles que no entran en el nuevo departamento?</h3>
            <p>Podemos trasladarlos a un guardamuebles o al destino que indiques. Si necesitás orientación sobre guardamuebles en Buenos Aires, consultanos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Con 5 a 7 días es suficiente en la mayoría de los casos. Para sábados y fin de mes reservá con al menos 10 días de anticipo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-departamento-2-ambientes-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de 2 ambientes</Link>
              <Link href="/blog/como-mudarse-solo-buenos-aires" className="text-gold hover:underline text-sm">Cómo mudarse solo</Link>
              <Link href="/blog/primer-departamento-buenos-aires" className="text-gold hover:underline text-sm">Primer departamento</Link>
              <Link href="/blog/checklist-mudanza" className="text-gold hover:underline text-sm">Checklist de mudanza</Link>
              <Link href="/blog/fletes-buenos-aires" className="text-gold hover:underline text-sm">Fletes en Buenos Aires</Link>
              <Link href="/blog/mudanzas-express-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas express</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
