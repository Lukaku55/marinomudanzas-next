import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanza de Casa Completa Buenos Aires | Marino Mudanzas",
  description: "¿Cuánto cuesta mudar una casa completa en Buenos Aires? Qué incluye, cuánto personal y camiones se necesitan. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanza de Casa Completa Buenos Aires", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-casa-completa-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanza de Casa Completa Buenos Aires | Marino Mudanzas",
  "description": "¿Cuánto cuesta mudar una casa completa en Buenos Aires? Qué incluye, cuánto personal y camiones se necesitan. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-casa-completa-buenos-aires",
  "datePublished": "2026-07-21",
  "dateModified": "2026-07-21",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-casa-completa-buenos-aires" },
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
      "name": "¿Cuánto cuesta mudar una casa completa en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de casa completa en Buenos Aires varía mucho según la cantidad de ambientes y objetos. Una casa de 3-4 ambientes ronda los $380.000–$600.000. Casas grandes de 5 o más ambientes con jardín, depósito y cochera pueden superar los $700.000. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántas personas se necesitan para mudar una casa completa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En general, una mudanza de casa completa requiere entre 4 y 6 operarios. Casas grandes con mucho volumen pueden necesitar más personal. El objetivo es siempre completar la mudanza en una jornada para minimizar la interrupción en el cliente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede mudar una casa completa en un día?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende del volumen. La mayoría de las casas de 3-4 ambientes se mudan en un día completo (8-10 horas). Casas grandes de 5 o más ambientes con mucho volumen pueden requerir dos días o un equipo mayor. Lo planificamos en el presupuesto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántos camiones se necesitan para una casa completa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para una casa de 3-4 ambientes suele alcanzar un camión grande (30-40 m³). Casas con mucho volumen, jardín con muebles de exterior y depósito pueden requerir dos camiones. Lo definimos en la visita previa de presupuesto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Incluyen el traslado de muebles de jardín y parrilla?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Los muebles de jardín, parrillas, macetas grandes y objetos de exterior están incluidos en el presupuesto cerrado. Es importante mencionarlos al pedir el presupuesto para que el equipo llegue preparado con el embalaje adecuado."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanza de Casa Completa en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Mudar una casa completa es un operativo de mayor escala que una mudanza de departamento: más ambientes, más muebles, objetos de exterior, depósito, cochera y a veces jardín con parrilla. La diferencia no es solo de volumen sino también de planificación: hay que coordinar el embalaje de más cosas, el desarmado de más muebles y el armado en destino, todo en una jornada. En Marino Mudanzas hacemos mudanzas de casas completas en CABA y GBA con equipo propio y precio cerrado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué tiene una mudanza de casa completa?</h2>
            <p>Más allá de los ambientes principales, una casa suele tener elementos que no hay en un departamento:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Jardín</strong> — muebles de exterior, parrilla fija o portátil, macetas grandes, herramientas</li>
              <li><strong>Depósito o lavadero</strong> — lavarropas, secarropas, cajas acumuladas, herramientas</li>
              <li><strong>Cochera</strong> — bicicletas, artículos de limpieza, objetos varios</li>
              <li><strong>Más dormitorios</strong> — cada dormitorio extra suma placares, camas y mesas de luz</li>
              <li><strong>Estudio o biblioteca</strong> — muebles de madera pesados y muchas cajas de libros</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuánto cuesta mudar una casa completa?</h2>
            <p>Los rangos orientativos para casas en Buenos Aires:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Casa de 3-4 ambientes</strong> — $380.000–$600.000 según el volumen y la distancia</li>
              <li><strong>Casa de 5 ambientes o más</strong> — desde $600.000, dependiendo del volumen y el equipo necesario</li>
              <li><strong>Casa en country o zona GBA</strong> — se suma la distancia desde nuestra base en Flores. Para el norte del GBA (Tigre, Pilar, San Isidro) el precio incluye el traslado.</li>
            </ul>
            <p>El precio es cerrado desde el presupuesto. No hay costos adicionales el día de la mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuánto tiempo lleva mudar una casa completa?</h2>
            <p>Una casa de 3-4 ambientes bien organizada puede mudarse en 8-10 horas (jornada completa). Los factores que más alargan el operativo:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Volumen de muebles y cajas (especialmente libros, ropa y cocina)</li>
              <li>Cantidad de muebles para desarmar y armar (placares de pared, camas articuladas)</li>
              <li>Acceso en origen y destino (escaleras, cocheras angostas, jardines)</li>
              <li>Distancia entre origen y destino</li>
            </ul>
            <p>Casas grandes de 5 ambientes o más con mucho volumen pueden requerir dos días o un equipo ampliado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal</strong> — 4 a 6 operarios según el volumen de la casa</li>
              <li><strong>Desarmado y armado</strong> — todos los muebles que requieran herramienta</li>
              <li><strong>Embalaje</strong> — frágiles, vajilla, cuadros, espejos y televisores</li>
              <li><strong>Traslado de muebles de jardín</strong> — parrilla, muebles de exterior, macetas</li>
              <li><strong>Camión del tamaño adecuado</strong> — o dos camiones si el volumen lo requiere</li>
              <li><strong>Precio cerrado</strong> — sin costos adicionales el día de la mudanza</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo planificar bien la mudanza de una casa</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Reservar con 2-3 semanas de anticipación</strong> — las mudanzas de casas completas requieren más coordinación y los turnos se ocupan antes</li>
              <li><strong>Hacer una lista de objetos grandes</strong> — parrilla, bici, lavarropas, muebles de jardín. Mencionarlos todos al pedir el presupuesto</li>
              <li><strong>Empacar libros, ropa y objetos pequeños antes</strong> — todo lo que puedas empacar antes del día reduce el tiempo del operativo</li>
              <li><strong>Desconectar heladera y lavarropas la noche anterior</strong> — la heladera necesita al menos 8 horas sin corriente antes de moverla</li>
              <li><strong>Coordinar acceso en destino</strong> — tener llave y acceso libre en la nueva casa desde temprano</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas de casas completas</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta mudar una casa completa en Buenos Aires?</h3>
            <p>Una casa de 3-4 ambientes ronda los $380.000–$600.000. Casas grandes de 5 o más ambientes pueden superar los $700.000. Precio cerrado desde el presupuesto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuántas personas se necesitan?</h3>
            <p>Entre 4 y 6 operarios según el volumen. El objetivo es completar la mudanza en una jornada.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Se puede mudar en un día?</h3>
            <p>La mayoría de las casas de 3-4 ambientes sí. Las más grandes pueden requerir dos días o equipo ampliado. Lo planificamos en el presupuesto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuántos camiones se necesitan?</h3>
            <p>Para una casa de 3-4 ambientes, generalmente un camión grande alcanza. Con más volumen usamos dos camiones. Lo definimos en el presupuesto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Incluyen traslado de muebles de jardín y parrilla?</h3>
            <p>Sí. Muebles de jardín, parrilla, macetas y objetos de exterior incluidos. Mencionarlos al pedir el presupuesto para llegar preparados.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Pedí tu presupuesto sin cargo</h2>
            <p>Contanos la cantidad de ambientes, si hay jardín o depósito y la zona. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También podría interesarte</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-3-ambientes-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de 3 ambientes</Link>
              <Link href="/blog/mudanzas-pilar" className="text-gold hover:underline text-sm">Mudanzas en Pilar</Link>
              <Link href="/blog/mudanzas-tigre" className="text-gold hover:underline text-sm">Mudanzas en Tigre</Link>
              <Link href="/blog/mudanzas-san-isidro" className="text-gold hover:underline text-sm">Mudanzas en San Isidro</Link>
              <Link href="/blog/mudanzas-vicente-lopez" className="text-gold hover:underline text-sm">Mudanzas en Vicente López</Link>
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
