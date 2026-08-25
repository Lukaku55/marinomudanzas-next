import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Haedo Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Haedo, partido de Morón. Acceso por Av. Rivadavia o autopista del Oeste. Precio cerrado para casas y edificios. Presupuesto sin cargo: 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Haedo", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-haedo-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Haedo Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Haedo, partido de Morón. Acceso por Av. Rivadavia o autopista del Oeste. Precio cerrado para casas y edificios.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-haedo-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-haedo-buenos-aires" },
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
      "name": "¿Cuánto cuesta una mudanza en Haedo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Haedo ronda los $130.000–$210.000. El precio final varía según el piso, si hay ascensor y la cantidad de muebles. El precio es cerrado desde el presupuesto: sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo lleva ir desde CABA hasta Haedo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entre 25 y 35 minutos desde CABA. El acceso principal es por Av. Rivadavia o por la Autopista del Oeste (A1). Desde nuestra base en Flores, Haedo es un destino muy accesible. Coordinamos la ruta más eficiente según el horario."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de propiedades hay en Haedo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Haedo tiene un mix de casas de familia y edificios residenciales de varios pisos. El centro comercial activo concentra muchos edificios con alta rotación de alquileres. Contamos con vehículos de todos los tamaños para adaptarnos a cada tipo de propiedad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubren Haedo y las localidades vecinas del partido de Morón?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Cubrimos Haedo, Morón centro y El Palomar con precio cerrado en toda la zona. También operamos en el resto del GBA oeste, incluyendo Hurlingham y Merlo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Haedo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para mudanzas de fin de mes o sábados, recomendamos reservar con 10 a 15 días de anticipación. Haedo tiene alta rotación de inquilinos y los turnos de fin de mes se completan rápido."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Haedo</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Haedo es una localidad del partido de Morón, en el GBA oeste, con una identidad propia y un centro comercial muy activo. Bien conectada con CABA por el Tren Sarmiento y por Av. Rivadavia, es una zona de clase media con alta rotación de alquileres y demanda constante de mudanzas. El mix de casas de familia y edificios residenciales requiere vehículos y operarios adaptados a distintos escenarios. En Marino Mudanzas realizamos mudanzas en Haedo desde hace décadas, accediendo por Av. Rivadavia o la Autopista del Oeste (A1) desde nuestra base en Flores.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Haedo</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Centro comercial y edificios</strong> — la zona céntrica concentra edificios de varios pisos con alta rotación de inquilinos. Coordinamos con el encargado y el uso del montacargas.</li>
              <li><strong>Casas de familia</strong> — las zonas más alejadas del centro tienen casas con garaje o cochera. Contamos con camiones de todos los tamaños para adaptarnos.</li>
              <li><strong>Tren Sarmiento y Av. Rivadavia</strong> — la excelente conectividad de Haedo hace que muchas familias jóvenes se muden aquí desde CABA, generando alta demanda en ambas direcciones.</li>
              <li><strong>Acceso ágil desde CABA</strong> — por Av. Rivadavia o la Autopista del Oeste (A1) el tiempo de traslado es de 25 a 35 minutos en condiciones normales.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Haedo</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Haedo?</h3>
            <p>Un departamento de 2 ambientes ronda los $130.000–$210.000. El precio varía según el piso, el ascensor y el volumen de muebles. El precio es cerrado desde el presupuesto: sin sorpresas el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tiempo lleva ir desde CABA hasta Haedo?</h3>
            <p>Entre 25 y 35 minutos por Av. Rivadavia o la Autopista del Oeste (A1). Desde nuestra base en Flores el acceso es directo. Coordinamos la ruta más eficiente para cada caso.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué tipo de propiedades hay en Haedo?</h3>
            <p>Un mix de casas de familia y edificios residenciales de varios pisos. Tenemos vehículos y personal adecuado para cada tipo de propiedad, con o sin ascensor.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cubren Haedo y las localidades vecinas?</h3>
            <p>Sí. Cubrimos Haedo, Morón centro y El Palomar, con precio cerrado en toda la zona del partido de Morón.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10 a 15 días. La alta rotación de alquileres hace que los turnos de fin de mes se completen rápidamente.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-moron" className="text-gold hover:underline text-sm">Mudanzas en Morón</Link>
              <Link href="/blog/mudanzas-san-martin" className="text-gold hover:underline text-sm">Mudanzas en San Martín</Link>
              <Link href="/blog/mudanzas-la-matanza" className="text-gold hover:underline text-sm">Mudanzas en La Matanza</Link>
              <Link href="/blog/mudanzas-ramos-mejia-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas en Ramos Mejía</Link>
              <Link href="/blog/mudanzas-tres-de-febrero" className="text-gold hover:underline text-sm">Mudanzas en Tres de Febrero</Link>
              <Link href="/blog/mudanzas-villa-ballester-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas en Villa Ballester</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
