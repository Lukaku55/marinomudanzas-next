import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas Urgentes en Buenos Aires en 24-48 Horas | Marino Mudanzas",
  description: "Necesitás mudarte con urgencia en Buenos Aires? Coordinamos mudanzas urgentes desde 24 hs. Precio cerrado, presupuesto sin cargo. Llamanos: 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas Urgentes en Buenos Aires", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-urgentes-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas Urgentes en Buenos Aires en 24-48 Horas | Marino Mudanzas",
  "description": "Necesitás mudarte con urgencia en Buenos Aires? Coordinamos mudanzas urgentes desde 24 hs. Precio cerrado, presupuesto sin cargo.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-urgentes-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-urgentes-buenos-aires" },
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
      "name": "¿En cuántas horas pueden coordinar una mudanza urgente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En muchos casos podemos coordinar una mudanza urgente desde las 24 horas de contactarnos. Dependiendo de la disponibilidad de vehículos y operarios, y de la complejidad de la mudanza, puede ser antes o requerir 48 horas. Cuanto antes nos contactes, más posibilidades hay de conseguir fecha inmediata."
      }
    },
    {
      "@type": "Question",
      "name": "¿El precio de una mudanza urgente es mayor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza urgente puede tener un adicional de entre un 15 y un 20% respecto al precio base, según la disponibilidad del momento. Siempre te damos el precio cerrado desde el presupuesto, sin cambios el día de la mudanza. Contactanos y te cotizamos enseguida."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué necesitan saber para coordinar una mudanza urgente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para darte fecha y precio lo antes posible necesitamos: la dirección de origen y destino, el tipo de propiedad (monoambiente, 2 ambientes, casa), el piso y si hay ascensor, y cuándo querés o necesitás mudarte. Con eso podemos darte una respuesta en el día."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hay horarios limitados para mudanzas urgentes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajamos de lunes a sábado de 8 a 18hs. Para mudanzas urgentes fuera de ese rango, consultanos y evaluamos según disponibilidad. Los edificios con consorcios también tienen sus propios horarios de mudanza que debemos respetar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre una mudanza urgente y una mudanza express programada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza urgente es aquella que se coordina con muy poco tiempo de aviso (menos de 48-72 horas) por una necesidad imprevista. Una mudanza express programada es una mudanza de poco volumen (pocos muebles y cajas) que se realiza en pocas horas pero se reserva con anticipación normal. Ambas las realizamos."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas Urgentes en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>A veces la mudanza no se puede planear con semanas de anticipación. Una resolución de contrato inesperada, una emergencia habitacional, un cambio de trabajo o una separación pueden obligarte a mudarte en 24 o 48 horas. En Marino Mudanzas lo sabemos y hacemos todo lo posible para darte respuesta rápida: contactanos, contanos tu situación y te decimos si podemos coordinarlo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuándo se necesita una mudanza urgente?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Resolución anticipada del contrato de alquiler</strong> — el propietario pide el inmueble con poco aviso o la negociación se rompe y hay que salir rápido.</li>
              <li><strong>Emergencia habitacional</strong> — situaciones de convivencia insostenible, daños en la propiedad u otras urgencias que no dan margen de espera.</li>
              <li><strong>Mudanza por trabajo</strong> — transferencia o inicio de empleo que requiere cambiar de domicilio con muy poco tiempo.</li>
              <li><strong>Separación o divorcio</strong> — cuando una de las partes necesita retirarse del domicilio de forma inmediata.</li>
              <li><strong>Cierre de comercio u oficina</strong> — desocupación urgente de un local o espacio comercial.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Qué se puede hacer en 24-48 horas y qué no</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Lo que sí podemos hacer en 24 hs</strong> — traslado de muebles, fletes de pocos bultos, mudanzas parciales (solo los muebles principales), traslado de cajas ya preparadas por el cliente.</li>
              <li><strong>Lo que puede no ser posible en tiempo tan corto</strong> — embalaje completo de todos los objetos del departamento (requiere más tiempo de trabajo previo), coordinación de turno de montacargas en edificios con consorcios que lo asignan con días de anticipación.</li>
              <li><strong>Solución intermedia</strong> — en casos de urgencia extrema, podemos hacer un primer viaje con lo esencial y un segundo viaje días después para el resto.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo coordinar tu mudanza urgente</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contactanos lo antes posible</strong> — cada hora que pasa reduce las opciones de disponibilidad. Escribinos por WhatsApp o llamanos.</li>
              <li><strong>Tené claro el origen y el destino</strong> — dirección completa de ambos, piso, si hay ascensor y si el edificio tiene restricciones de horario para mudanzas.</li>
              <li><strong>Describí el volumen</strong> — cuántas habitaciones, si hay muebles grandes (placares, heladera, lavarropas) y si ya tenés cajas preparadas.</li>
              <li><strong>Definí prioridades</strong> — si hay objetos que son más urgentes de llevarse primero, decínoslo para organizarlo.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿En cuántas horas pueden coordinar?</h3>
            <p>En muchos casos desde las 24 horas de contactarnos. Depende de la disponibilidad del momento y la complejidad. Cuanto antes nos escribas, más posibilidades hay.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿El precio es mayor por la urgencia?</h3>
            <p>Puede haber un adicional de 15–20% por disponibilidad urgente. Siempre te damos el precio cerrado desde el presupuesto, sin cambios el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué necesitan para coordinar rápido?</h3>
            <p>Dirección de origen y destino, tipo de propiedad, piso, si hay ascensor, y cuándo necesitás mudarte. Con eso te damos respuesta en el día.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hay horarios limitados?</h3>
            <p>Trabajamos de lunes a sábado de 8 a 18hs. Para mudanzas fuera de ese rango, consultanos y evaluamos según disponibilidad. Los consorcios también tienen sus propios horarios que respetamos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuál es la diferencia con una mudanza express?</h3>
            <p>La mudanza urgente se coordina con muy poco aviso por una necesidad imprevista. La mudanza express es de poco volumen pero se reserva con anticipación normal. Hacemos las dos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También puede interesarte</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-express-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas express</Link>
              <Link href="/blog/mudanzas-fin-de-mes" className="text-gold hover:underline text-sm">Mudanzas a fin de mes</Link>
              <Link href="/blog/cuando-es-mejor-mudarse-buenos-aires" className="text-gold hover:underline text-sm">Cuándo mudarse en BA</Link>
              <Link href="/blog/fletes-buenos-aires" className="text-gold hover:underline text-sm">Fletes en Buenos Aires</Link>
              <Link href="/blog/mudanzas-palermo" className="text-gold hover:underline text-sm">Palermo</Link>
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
