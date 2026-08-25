import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Martínez San Isidro | Marino Mudanzas",
  description: "Mudanzas en Martínez, San Isidro: casas grandes con jardín, countries y barrios privados. Coordinamos el acceso. Precio cerrado. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Martínez", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-martinez-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Martínez San Isidro | Marino Mudanzas",
  "description": "Mudanzas en Martínez, San Isidro: casas grandes con jardín, countries y barrios privados. Coordinamos el acceso. Precio cerrado. Presupuesto sin cargo.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-martinez-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-martinez-buenos-aires" },
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
      "name": "¿Cuánto cuesta una mudanza en Martínez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una casa grande en Martínez puede ir desde $350.000 hasta $600.000 según el volumen y la cantidad de ambientes. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza. Pedí tu presupuesto sin cargo llamando al 4611-1818."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto se tarda en llegar desde CABA a Martínez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entre 30 y 40 minutos sin tráfico por Acceso Norte (Panamericana). El tiempo real puede variar según el horario y las condiciones de tránsito. El traslado desde o hacia CABA está incluido en el precio cerrado, sin cargos adicionales por distancia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Pueden ingresar a barrios privados y countries en Martínez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Coordinamos el acceso previamente con la administración o seguridad de cada barrio privado o country: datos del personal, patente del vehículo y turno asignado para la mudanza. Todo queda acordado antes del día para no tener demoras en el ingreso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de propiedades predominan en Martínez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Martínez es mayoritariamente una zona de casas con jardín y pileta, incluyendo chacras, residencias tipo country y el Barrio San Isidro Club. También hay algunas propiedades de departamentos cerca de la estación de tren, pero la tipología dominante es la casa individual de gran porte."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto personal se necesita para una mudanza de casa grande en Martínez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para una casa grande en Martínez generalmente se requieren entre 4 y 5 operarios, dependiendo del volumen y la cantidad de muebles a desarmar. El presupuesto sin cargo que te entregamos incluye la cantidad de personal necesaria para hacer el trabajo correctamente."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Martínez</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Martínez es una de las localidades más exclusivas del partido de San Isidro, en el norte del Gran Buenos Aires. Se caracteriza por sus casas grandes con jardín y pileta, barrios privados, chacras y residencias tipo country. Las mudanzas en Martínez son de alto volumen —muchos muebles y ambientes— y requieren coordinación previa cuando hay acceso controlado. En Marino Mudanzas tenemos amplia experiencia en la zona.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Martínez</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Casas grandes con jardín</strong> — la tipología dominante en Martínez es la casa individual de gran porte. Muchas tienen pileta, quincho, jardín amplio y muebles de exterior que también se trasladan.</li>
              <li><strong>Barrio San Isidro Club y countries</strong> — Martínez concentra una gran cantidad de urbanizaciones privadas del norte del GBA. Coordinamos el acceso con documentación y turno acordado de antemano.</li>
              <li><strong>Chacras y residencias tipo campo</strong> — propiedades de gran superficie con mucho contenido: equipos de jardín, muebles de campo, ropa de clima y enseres especiales.</li>
              <li><strong>Muebles de calidad</strong> — las propiedades de Martínez tienen generalmente muebles de diseño o de alta gama que requieren embalaje especial con mantas y film.</li>
              <li><strong>Acceso rápido por Acceso Norte</strong> — la Panamericana permite llegar desde CABA en 30 a 40 minutos en condiciones normales de tránsito.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Martínez</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Martínez?</h3>
            <p>Una casa grande puede ir desde $350.000 hasta $600.000 según el volumen. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza. Pedí tu presupuesto sin cargo llamando al 4611-1818.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto se tarda en llegar desde CABA a Martínez?</h3>
            <p>Entre 30 y 40 minutos sin tráfico por Acceso Norte. El traslado desde o hacia CABA está incluido en el precio cerrado, sin cargos adicionales por distancia.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden ingresar a barrios privados y countries?</h3>
            <p>Sí. Coordinamos el acceso previamente: datos del personal, patente del vehículo y turno asignado. Todo acordado antes del día para no tener demoras en el ingreso.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué tipo de propiedades predominan en Martínez?</h3>
            <p>Mayoritariamente casas con jardín y pileta, chacras, residencias tipo country y el Barrio San Isidro Club. También hay algunas propiedades de departamentos cerca de la estación de tren.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto personal se necesita para una casa grande?</h3>
            <p>Para una casa grande en Martínez generalmente se necesitan entre 4 y 5 operarios, según el volumen y los muebles a desarmar. El presupuesto sin cargo incluye la cantidad de personal necesaria.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-san-isidro" className="text-gold hover:underline text-sm">San Isidro</Link>
              <Link href="/blog/mudanzas-beccar-buenos-aires" className="text-gold hover:underline text-sm">Béccar</Link>
              <Link href="/blog/mudanzas-olivos-buenos-aires" className="text-gold hover:underline text-sm">Olivos</Link>
              <Link href="/blog/mudanzas-tigre" className="text-gold hover:underline text-sm">Tigre</Link>
              <Link href="/blog/mudanzas-vicente-lopez" className="text-gold hover:underline text-sm">Vicente López</Link>
              <Link href="/blog/mudanzas-nordelta-buenos-aires" className="text-gold hover:underline text-sm">Nordelta</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
