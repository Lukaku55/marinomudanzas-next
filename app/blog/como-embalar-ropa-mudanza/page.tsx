import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Embalar la Ropa para una Mudanza | Marino Mudanzas",
  description: "Tres métodos para embalar ropa en una mudanza: cajas estándar, cajas para ropa colgada y bolsas. Qué no hacer y cuántas cajas necesitás. Buenos Aires.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Cómo Embalar la Ropa para una Mudanza", "item": "https://www.mudanzasmarino.com.ar/blog/como-embalar-ropa-mudanza" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo Embalar la Ropa para una Mudanza | Marino Mudanzas",
  "description": "Tres métodos para embalar ropa en una mudanza: cajas estándar, cajas para ropa colgada y bolsas. Qué no hacer y cuántas cajas necesitás.",
  "url": "https://www.mudanzasmarino.com.ar/blog/como-embalar-ropa-mudanza",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/como-embalar-ropa-mudanza" },
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
      "name": "¿El servicio de Marino Mudanzas incluye el embalaje de ropa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El embalaje básico de ropa está incluido en el servicio. Si necesitás un servicio premium de embalajista que embale toda la ropa antes del día de la mudanza, consultanos para coordinarlo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo llevar trajes y vestidos sin arrugarlos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lo ideal son las cajas de ropa colgada (wardrobe boxes): tenés una barra interna donde colgás las perchas directamente y la ropa llega sin arrugas. Si no tenés acceso a esas cajas, podés usar bolsas de tela largas y colgarlas en el interior del camión."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es mejor doblar o colgar la ropa para la mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende del tipo de prenda. La ropa casual, de temporada y la que no se arruga con facilidad va bien doblada en cajas estándar. Los trajes, vestidos de fiesta y abrigos de calidad conviene transportarlos colgados en cajas especiales o en bolsas de tela."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántas cajas necesito para la ropa de un dormitorio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En promedio, entre 3 y 5 cajas estándar para la ropa doblada de un dormitorio típico, más 1 o 2 bolsas grandes para mantas, almohadas y ropa de cama. Si hay mucha ropa de temporada guardada, sumá 1 o 2 cajas más."
      }
    },
    {
      "@type": "Question",
      "name": "¿Marino Mudanzas consigue cajas de ropa colgada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consultanos con anticipación. Según la disponibilidad, podemos orientarte sobre dónde conseguirlas o incluirlas en el servicio. Avisanos al momento de coordinar el presupuesto."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Cómo Embalar la Ropa para una Mudanza</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>La ropa es uno de los volúmenes más grandes en cualquier mudanza y también uno de los que más tiempo lleva embalar si no se sabe cómo hacerlo. La buena noticia es que no hay misterio: con el método correcto según el tipo de prenda, llegás al nuevo lugar con todo en orden y sin arrugas innecesarias.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Tres métodos según el tipo de ropa</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Método 1: Cajas estándar (ropa doblada)</h3>
            <p>Ideal para ropa de temporada, ropa casual y prendas que no se arrugan fácilmente (jeans, remeras, sweaters). El procedimiento:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Doblá la ropa por tipo de prenda (pantalones juntos, remeras juntas, etc.)</li>
              <li>Usá papel tissue para envolver prendas delicadas o de seda dentro de la caja</li>
              <li>No comprimas demasiado: una caja muy apretada puede arrugar todo y es más difícil de cargar</li>
              <li>Las cajas de ropa no deben superar los 15 kg — fácil de cargar sin riesgo de que se rompa el fondo</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Método 2: Cajas para ropa colgada (wardrobe boxes)</h3>
            <p>La mejor opción para trajes, vestidos de fiesta, abrigos y cualquier prenda que no debería doblarse. Estas cajas tienen una barra interna donde colgás las perchas directamente, tal como estaban en el placard. Ventajas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Las prendas llegan sin arrugas al nuevo lugar</li>
              <li>No necesitás doblar ni descolgar — sacás las prendas del placard y las pasás directo a la caja</li>
              <li>Al llegar, las pasás directo al nuevo placard</li>
            </ul>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Método 3: Bolsas grandes (ropa de cama y voluminosa)</h3>
            <p>Para mantas, almohadas, acolchados, edredones y ropa de cama en general, las bolsas grandes de tela o las bolsas de consorcio resistentes son la opción más práctica. Son livianas y se acomodan fácilmente en los espacios que quedan libres en el camión.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Consejos para organizar el embalaje de ropa</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Agrupar por persona o habitación</strong> — una caja por persona facilita mucho el desembalaje en el nuevo lugar</li>
              <li><strong>Etiquetar bien cada caja</strong> — "Ropa verano Lucas", "Ropa invierno dormitorio principal", etc.</li>
              <li><strong>La ropa fuera de temporada va al fondo</strong> — lo que no vas a necesitar en los próximos meses podés embalarlo primero</li>
              <li><strong>Aprovechá el viaje para donar</strong> — la mudanza es el momento ideal para deshacerte de la ropa que no usás</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Qué NO hacer al embalar ropa</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>No guardar ropa húmeda</strong> — el encierro en cajas o bolsas favorece la aparición de hongos y olor a humedad</li>
              <li><strong>No mezclar ropa con productos de limpieza</strong> — las cajas de ropa van separadas de cualquier producto con olor o líquidos</li>
              <li><strong>No armar cajas demasiado pesadas</strong> — más de 15-18 kg y el fondo de la caja puede ceder durante la carga</li>
              <li><strong>No dejar las cajas sin etiquetar</strong> — después es imposible encontrar la ropa que necesitás el primer día</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>
            <p>El embalaje básico de ropa está incluido. Si necesitás un servicio premium de embalajista que lo haga todo antes del día de la mudanza, consultanos para coordinarlo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre embalaje de ropa</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿El servicio incluye el embalaje de ropa?</h3>
            <p>Sí. El embalaje básico de ropa está incluido. Para un servicio premium de embalajista previo al día de la mudanza, consultanos para coordinarlo.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo llevar trajes y vestidos sin arrugarlos?</h3>
            <p>Lo ideal son las cajas de ropa colgada (wardrobe boxes): tienen una barra interna donde colgás las perchas directamente. Si no, usá bolsas de tela largas y colgarlas en el interior del camión.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Es mejor doblar o colgar?</h3>
            <p>Depende de la prenda. La ropa casual va bien doblada en cajas estándar. Los trajes, vestidos y abrigos de calidad convienen transportarlos colgados.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuántas cajas necesito para la ropa de un dormitorio?</h3>
            <p>Entre 3 y 5 cajas estándar para la ropa doblada, más 1 o 2 bolsas para mantas, almohadas y ropa de cama. Con mucha ropa fuera de temporada, sumá 1 o 2 cajas más.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Marino Mudanzas consigue cajas de ropa colgada?</h3>
            <p>Consultanos con anticipación. Según la disponibilidad podemos orientarte sobre dónde conseguirlas o incluirlas en el servicio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/como-embalar-muebles-mudanza" className="text-gold hover:underline text-sm">Cómo embalar muebles</Link>
              <Link href="/blog/que-incluye-una-mudanza" className="text-gold hover:underline text-sm">Qué incluye una mudanza</Link>
              <Link href="/blog/como-armar-cajas-mudanza" className="text-gold hover:underline text-sm">Cómo armar cajas</Link>
              <Link href="/blog/checklist-mudanza" className="text-gold hover:underline text-sm">Checklist de mudanza</Link>
              <Link href="/blog/cuanto-tarda-una-mudanza-buenos-aires" className="text-gold hover:underline text-sm">¿Cuánto tarda una mudanza?</Link>
              <Link href="/blog/mudanzas-3-ambientes-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de 3 ambientes</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
