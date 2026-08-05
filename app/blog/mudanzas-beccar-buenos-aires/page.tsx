import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Béccar San Isidro | Marino Mudanzas",
  description: "Mudanzas en Béccar, San Isidro: zona residencial tranquila con casas de jardín y buen acceso en camión. Precio cerrado. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Béccar", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-beccar-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Béccar San Isidro | Marino Mudanzas",
  "description": "Mudanzas en Béccar, San Isidro: zona residencial tranquila con casas de jardín y buen acceso en camión. Precio cerrado. Presupuesto sin cargo.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-beccar-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-beccar-buenos-aires" },
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
      "name": "¿Cuánto cuesta una mudanza en Béccar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una casa en Béccar puede ir desde $280.000 hasta $480.000 según el volumen y la cantidad de ambientes. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza. Pedí tu presupuesto sin cargo llamando al 4611-1818."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubrís Béccar con el servicio de mudanzas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, Béccar es una zona habitual de trabajo. La cubrimos de forma regular junto a San Isidro, Martínez y Acassuso. El traslado desde o hacia CABA está incluido en el precio cerrado del presupuesto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de propiedades hay en Béccar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Béccar es mayoritariamente una zona de casas con jardín de mediano y gran porte. También hay algunos edificios de baja altura cerca de la estación de tren. Es un barrio de familias establecidas con baja rotación locativa, lo que significa mudanzas espaciadas pero de mayor volumen."
      }
    },
    {
      "@type": "Question",
      "name": "¿El camión puede acceder bien a las calles de Béccar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Béccar tiene calles amplias y buen acceso vehicular para camiones de mudanza. No suele presentar las restricciones de acceso que tienen otros barrios del norte del GBA. Esto facilita la operación y reduce los tiempos de carga y descarga."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto personal se necesita para una mudanza en Béccar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende del tamaño de la propiedad. Para una casa de 3 a 4 ambientes con jardín, generalmente se trabaja con 3 a 4 operarios. Para propiedades más grandes, podemos asignar más personal. El presupuesto sin cargo incluye la cantidad de personal adecuada."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Béccar</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Béccar es una localidad del partido de San Isidro ubicada entre Martínez y San Isidro centro. Es una zona muy tranquila y residencial, habitada mayoritariamente por familias establecidas con baja rotación de alquileres. Las mudanzas en Béccar son, en general, de mayor volumen —casas con jardín de varios ambientes— y requieren camiones de mayor capacidad y personal experimentado. En Marino Mudanzas cubrimos Béccar de forma regular.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Características de las mudanzas en Béccar</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Casas con jardín (tipología dominante)</strong> — la gran mayoría de las propiedades en Béccar son casas individuales de mediano y gran porte con jardín. Muchas tienen quincho, pileta y muebles de exterior que también se trasladan.</li>
              <li><strong>Buen acceso vehicular</strong> — las calles de Béccar son amplias y permiten el acceso cómodo de camiones de mudanza sin las restricciones que presentan otras zonas del norte del GBA.</li>
              <li><strong>Acceso por Acceso Norte o Av. del Libertador</strong> — dos opciones de ingreso desde CABA que permiten llegar en 30 a 40 minutos en condiciones normales de tránsito.</li>
              <li><strong>Edificios cerca de la estación</strong> — algunos edificios de baja altura cerca de la estación Béccar del tren Mitre. Coordinamos con la administración para el uso del ascensor de servicio y los horarios permitidos.</li>
              <li><strong>Familias establecidas</strong> — la baja rotación significa que las mudanzas son menos frecuentes pero de mayor complejidad: muebles acumulados durante años, mayores volúmenes y mayor cuidado requerido.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Béccar</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Béccar?</h3>
            <p>Una casa puede ir desde $280.000 hasta $480.000 según el volumen. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza. Pedí tu presupuesto sin cargo llamando al 4611-1818.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cubrís Béccar con el servicio de mudanzas?</h3>
            <p>Sí, Béccar es una zona habitual de trabajo. La cubrimos regularmente junto a San Isidro, Martínez y Acassuso. El traslado desde o hacia CABA está incluido en el precio cerrado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué tipo de propiedades hay en Béccar?</h3>
            <p>Mayoritariamente casas con jardín de mediano y gran porte. También hay algunos edificios de baja altura cerca de la estación. Es un barrio de familias establecidas con baja rotación locativa.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿El camión puede acceder bien a las calles de Béccar?</h3>
            <p>Sí. Béccar tiene calles amplias y buen acceso vehicular para camiones de mudanza. No presenta las restricciones de acceso de otros barrios del norte del GBA, lo que facilita la operación y reduce los tiempos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto personal se necesita para una mudanza en Béccar?</h3>
            <p>Para una casa de 3 a 4 ambientes con jardín, generalmente 3 a 4 operarios. Para propiedades más grandes, asignamos más personal. El presupuesto sin cargo incluye la cantidad adecuada para el trabajo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-san-isidro" className="text-gold hover:underline text-sm">San Isidro</Link>
              <Link href="/blog/mudanzas-martinez-buenos-aires" className="text-gold hover:underline text-sm">Martínez</Link>
              <Link href="/blog/mudanzas-olivos-buenos-aires" className="text-gold hover:underline text-sm">Olivos</Link>
              <Link href="/blog/mudanzas-vicente-lopez" className="text-gold hover:underline text-sm">Vicente López</Link>
              <Link href="/blog/mudanzas-tigre" className="text-gold hover:underline text-sm">Tigre</Link>
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
