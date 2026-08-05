import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanza de 4 Ambientes en Buenos Aires | Marino Mudanzas",
  description: "¿Cuánto cuesta mudar un departamento de 4 ambientes en Buenos Aires? Personal, camiones, tiempo y consejos. Precio cerrado. Presupuesto sin cargo: 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanza de 4 Ambientes en Buenos Aires", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-departamento-4-ambientes-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanza de 4 Ambientes en Buenos Aires | Marino Mudanzas",
  "description": "¿Cuánto cuesta mudar un departamento de 4 ambientes en Buenos Aires? Personal, camiones, tiempo y consejos. Precio cerrado.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-departamento-4-ambientes-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-departamento-4-ambientes-buenos-aires" },
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
      "name": "¿Cuánto cuesta una mudanza de 4 ambientes en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de 4 ambientes en Buenos Aires ronda los $350.000–$550.000. El precio varía según el barrio, el piso, si hay ascensor, la cantidad de muebles y si se requiere embalaje especial. El precio es cerrado desde el presupuesto: sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede hacer la mudanza de un 4 ambientes en un solo día?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En general sí, con 4 a 5 operarios. Sin embargo, cuando hay mucho volumen, objetos muy grandes o escaleras complicadas, puede requerir dos jornadas o dos camiones. Lo evaluamos al presupuestar y te informamos antes del día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántos camiones se necesitan para mudar un 4 ambientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En la mayoría de los casos alcanza con un camión grande (furgón de 30 m³ o más). Cuando el volumen es muy alto —muchos muebles de gran porte, biblioteca extensa, mucha ropa— usamos dos camiones medianos o hacemos dos viajes. Lo definimos en el presupuesto."
      }
    },
    {
      "@type": "Question",
      "name": "¿El embalaje de vajilla está incluido en el precio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El embalaje básico de objetos frágiles, vajilla y cuadros está incluido en el precio cerrado. El desarmado y armado de muebles (placares, camas, escritorios) también está incluido. No hay costos adicionales por materiales de embalaje básicos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo reducir el tiempo y el costo de la mudanza de 4 ambientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mejor forma es embalar con anticipación la ropa, los libros y los objetos de cocina que no se usan todos los días. Tener las cajas listas puede ahorrar 2 a 3 horas de trabajo el día de la mudanza, lo que se traduce en un costo menor."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanza de 4 Ambientes en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Una mudanza de 4 ambientes es de las más completas y exigentes del mercado residencial. Con 2 o 3 dormitorios, living grande, comedor, cocina equipada y en muchos casos un estudio o escritorio, el volumen de muebles, ropa, vajilla y cajas puede superar con creces lo que cualquier familia calculó de antemano. En Marino Mudanzas hacemos mudanzas de 4 ambientes todos los días en Buenos Aires y sabemos exactamente qué personal, vehículo y tiempo requiere cada caso.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué tiene un departamento de 4 ambientes?</h2>
            <p>Un 4 ambientes típico incluye living-comedor, 2 a 3 dormitorios, cocina, baño y en muchos casos un estudio o escritorio. El mobiliario habitual es:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Living-comedor</strong> — sillones, mesa grande con sillas, mueble de TV, biblioteca, alfombras, cuadros</li>
              <li><strong>Dormitorio principal</strong> — cama matrimonial, placar de pared completo, mesa de luz, cómoda, espejo</li>
              <li><strong>Dormitorios secundarios</strong> — camas simples o marineras, placares, escritorios, sillas</li>
              <li><strong>Estudio o escritorio</strong> — escritorio, silla, estantería, libros, computadora y accesorios</li>
              <li><strong>Cocina</strong> — heladera, lavarropas, microondas, vajilla completa, cajas de cocina</li>
              <li><strong>Extras frecuentes</strong> — colchones adicionales, sillas de escritorio, cajas de libros, ropa en bolsas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuánto cuesta una mudanza de 4 ambientes?</h2>
            <p>El rango orientativo para una mudanza de 4 ambientes en CABA es de <strong>$350.000–$550.000</strong>. El precio final varía según:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Barrio y distancia</strong> — mudanzas dentro de CABA, hacia el GBA o viceversa tienen costos distintos</li>
              <li><strong>Piso y ascensor</strong> — pisos altos sin ascensor o escaleras angostas aumentan el tiempo y el costo</li>
              <li><strong>Cantidad de muebles</strong> — un 4 ambientes con mucho volumen puede requerir dos camiones o dos jornadas</li>
              <li><strong>Embalaje adicional</strong> — el embalaje básico está incluido; si se necesita embalaje especial o más materiales, se especifica en el presupuesto</li>
            </ul>
            <p>El precio es cerrado desde el presupuesto. No hay costos adicionales el día de la mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Personal y tiempo necesarios</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal</strong> — 4 a 5 operarios especializados más el conductor</li>
              <li><strong>Tiempo estimado</strong> — entre 7 y 10 horas en la mayoría de los casos</li>
              <li><strong>Posibilidad de 2 jornadas</strong> — cuando hay mucho volumen, objetos grandes o escaleras complicadas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuándo conviene hacer la mudanza de 4 ambientes en 2 días?</h2>
            <p>Hay situaciones en las que dividir la mudanza en dos jornadas es la mejor decisión:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mucho embalaje pendiente</strong> — si hay una gran cantidad de objetos sin empacar que los operarios deberán hacer el mismo día, puede ser necesario un segundo turno.</li>
              <li><strong>Objetos de gran porte</strong> — muebles muy voluminosos o pesados que requieren más tiempo de maniobra.</li>
              <li><strong>Escaleras complicadas</strong> — pisos altos sin ascensor con escaleras estrechas aumentan considerablemente el tiempo de carga y descarga.</li>
            </ul>
            <p>En todos los casos, lo definimos en el presupuesto y te avisamos antes del día de la mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Tip para ahorrar tiempo y dinero</h2>
            <p>Embalar la ropa, los libros y los objetos de cocina que no usás todos los días <strong>con anticipación</strong> puede ahorrar 2 a 3 horas de trabajo el día de la mudanza. Eso se traduce directamente en un costo menor. Las cajas que el cliente prepara antes son menos tiempo de operario en el domicilio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas de 4 ambientes</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza de 4 ambientes en Buenos Aires?</h3>
            <p>Entre $350.000 y $550.000 según el barrio, el piso, el ascensor y el volumen. El precio es cerrado desde el presupuesto: sin sorpresas el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Se puede hacer en un solo día?</h3>
            <p>En general sí, con 4 a 5 operarios. Cuando hay mucho volumen u objetos grandes, puede requerir dos jornadas o dos camiones. Lo evaluamos al presupuestar.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuántos camiones se necesitan?</h3>
            <p>En la mayoría de los casos, un camión grande (furgón de 30 m³ o más). Con mucho volumen, usamos dos camiones medianos o hacemos dos viajes. Lo definimos en el presupuesto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿El embalaje de vajilla está incluido?</h3>
            <p>Sí. El embalaje básico de frágiles, vajilla y cuadros está incluido en el precio cerrado. El desarmado y armado de muebles también.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo puedo reducir el tiempo y el costo?</h3>
            <p>Embalando con anticipación la ropa, los libros y los objetos de cocina que no usás todos los días. Tener las cajas listas puede ahorrar 2 a 3 horas de trabajo el día de la mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-3-ambientes-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de 3 ambientes</Link>
              <Link href="/blog/mudanzas-casa-completa-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de casa completa</Link>
              <Link href="/blog/mudanzas-departamento-2-ambientes-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de 2 ambientes</Link>
              <Link href="/blog/cuanto-tarda-una-mudanza-buenos-aires" className="text-gold hover:underline text-sm">¿Cuánto tarda una mudanza?</Link>
              <Link href="/blog/mudanzas-con-y-sin-ascensor" className="text-gold hover:underline text-sm">Mudanzas con y sin ascensor</Link>
              <Link href="/blog/como-embalar-muebles-mudanza" className="text-gold hover:underline text-sm">Cómo embalar muebles</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
