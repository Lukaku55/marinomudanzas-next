import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Villa Ortúzar Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Villa Ortúzar: barrio residencial tranquilo entre Chacarita y Colegiales. Casas bajas y buen acceso vehicular. Precio cerrado. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Villa Ortúzar", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-ortuzar" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Villa Ortúzar Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Villa Ortúzar: barrio residencial tranquilo entre Chacarita y Colegiales. Casas bajas y buen acceso vehicular. Precio cerrado.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-ortuzar",
  "datePublished": "2026-07-21",
  "dateModified": "2026-07-21",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-ortuzar" },
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
      "name": "¿Cuánto cuesta una mudanza en Villa Ortúzar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Villa Ortúzar ronda los $130.000–$220.000. Una casa de familia puede ir desde $190.000 según el volumen. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de casas bajas en Villa Ortúzar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las casas bajas con jardín son la tipología más frecuente del barrio. Coordinamos el acceso por frente o lateral según la disposición de la propiedad, y trasladamos muebles de jardín y objetos de exterior incluidos en el presupuesto cerrado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es fácil el acceso vehicular en Villa Ortúzar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las calles de Villa Ortúzar son relativamente tranquilas y arboladas. Las avenidas Forest, Triunvirato y Chorroarín permiten el acceso de camiones de distintos tamaños. Las calles internas son más angostas pero tienen poco tráfico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Villa Ortúzar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Villa Ortúzar tiene menos rotación de inquilinos que barrios más céntricos, pero los turnos de fin de mes igual se llenan."
      }
    },
    {
      "@type": "Question",
      "name": "¿Manejan los edificios sin ascensor de Villa Ortúzar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Los edificios de 3-5 pisos sin ascensor son frecuentes en el barrio. Contamos con personal especializado en subida por escalera y elevación por soga para muebles que no pasan. Todo queda contemplado en el presupuesto cerrado."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Villa Ortúzar</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Villa Ortúzar es un barrio residencial y tranquilo del norte de Buenos Aires, ubicado entre Chacarita y Colegiales. Con calles arboladas, casas bajas y un perfil familiar muy marcado, es un barrio donde las mudanzas se desarrollan en condiciones favorables: poco tráfico, buenas calles de acceso y vecinos acostumbrados al ritmo tranquilo de barrio. En Marino Mudanzas trabajamos frecuentemente en Villa Ortúzar y conocemos bien sus calles.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Villa Ortúzar</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Casas bajas con jardín</strong> — la tipología dominante del barrio. Buen acceso para muebles de gran tamaño desde frente o lateral.</li>
              <li><strong>Edificios de 3-5 pisos</strong> — muchos sin ascensor en construcciones antiguas. Personal especializado en subida por escalera.</li>
              <li><strong>Calles arboladas y tranquilas</strong> — poco tráfico en el interior del barrio, lo que facilita el estacionamiento y las maniobras de carga.</li>
              <li><strong>Calles internas angostas</strong> — algunas calles del sector más antiguo son más angostas. Evaluamos el vehículo adecuado para cada caso.</li>
              <li><strong>Barrio familiar estable</strong> — perfil de propietarios de larga data con mudanzas de mayor volumen pero menos frecuentes que en zonas de alquiler.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Villa Ortúzar?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Traslado de muebles de jardín y objetos de exterior</li>
              <li>Elevación por soga para muebles que no pasan por escalera</li>
              <li>Vehículo del tamaño adecuado a la calle y la propiedad</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Villa Ortúzar que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zona central</strong> — casas bajas y edificios de poca altura con calles tranquilas y arboladas</li>
              <li><strong>Av. Forest</strong> — eje del barrio con acceso desde Chacarita y Colegiales</li>
              <li><strong>Chorroarín</strong> — arteria principal que conecta el barrio con Villa Urquiza</li>
              <li><strong>Límite con Chacarita y Colegiales</strong> — zonas de transición cubiertas por el mismo presupuesto</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Villa Ortúzar</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Villa Ortúzar?</h3>
            <p>Un 2 ambientes ronda los $130.000–$220.000. Una casa de familia puede ir desde $190.000 según el volumen. Precio cerrado desde el presupuesto, sin sorpresas el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de casas bajas en el barrio?</h3>
            <p>Sí, es la tipología más frecuente. Acceso por frente o lateral, traslado de muebles de jardín incluido en el presupuesto cerrado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Es fácil el acceso vehicular?</h3>
            <p>Sí. Las avenidas Forest, Triunvirato y Chorroarín permiten camiones de distintos tamaños. Las calles internas tienen poco tráfico y facilitan el estacionamiento.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. Los turnos de fin de mes se llenan incluso en barrios tranquilos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Manejan edificios sin ascensor?</h3>
            <p>Sí. Personal especializado en subida por escalera y elevación por soga. Todo contemplado en el presupuesto cerrado antes del día de la mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos si es casa o departamento, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-chacarita" className="text-gold hover:underline text-sm">Chacarita</Link>
              <Link href="/blog/mudanzas-colegiales" className="text-gold hover:underline text-sm">Colegiales</Link>
              <Link href="/blog/mudanzas-paternal" className="text-gold hover:underline text-sm">Paternal</Link>
              <Link href="/blog/mudanzas-villa-urquiza" className="text-gold hover:underline text-sm">Villa Urquiza</Link>
              <Link href="/blog/mudanzas-saavedra" className="text-gold hover:underline text-sm">Saavedra</Link>
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
