import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Nueva Pompeya Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Nueva Pompeya: barrio obrero del sur con casas bajas y calles tranquilas. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Nueva Pompeya", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-nueva-pompeya" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Nueva Pompeya Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Nueva Pompeya: barrio obrero del sur con casas bajas y calles tranquilas. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-nueva-pompeya",
  "datePublished": "2026-07-21",
  "dateModified": "2026-07-21",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-nueva-pompeya" },
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
      "name": "¿Cuánto cuesta una mudanza en Nueva Pompeya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Nueva Pompeya ronda los $130.000–$220.000. Una casa de familia puede ir desde $200.000 según el volumen. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es fácil el acceso vehicular en Nueva Pompeya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Nueva Pompeya tiene calles tranquilas en el interior del barrio y buenas avenidas de acceso como Av. Sáenz, Av. Amancio Alcorta y Av. Corrales. El barrio tiene poco tráfico pesado y permite el ingreso de camiones de distintos tamaños sin mayores inconvenientes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de casas bajas en Nueva Pompeya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. La tipología predominante del barrio es la casa baja con jardín o el edificio de 3-4 pisos. Tenemos experiencia en mudanzas de este tipo de propiedades, incluyendo el traslado de muebles de jardín y objetos de gran tamaño."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Nueva Pompeya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Nueva Pompeya tiene rotación de inquilinos constante, especialmente cerca de Av. Sáenz, y los turnos de fin de mes se llenan rápido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubren las zonas límite de Nueva Pompeya con otros barrios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Cubrimos toda Nueva Pompeya incluyendo los límites con Parque Chacabuco, Boedo, Villa Soldati y Barracas. Si la propiedad está en la zona de borde entre dos barrios, igual queda cubierta por el precio cerrado del presupuesto."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Nueva Pompeya</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Nueva Pompeya es un barrio tradicional del sur de Buenos Aires, con una identidad muy arraigada en el tejido obrero de principios del siglo XX. Predominan las casas bajas con jardín, los edificios de 3 a 4 pisos y las calles tranquilas que facilitan las operaciones de mudanza. En Marino Mudanzas conocemos bien el barrio: las avenidas de acceso, las calles más angostas del interior y los particularidades de cada zona.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Nueva Pompeya</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Casas bajas con jardín</strong> — la tipología más frecuente del barrio. Buen acceso para muebles de gran tamaño y traslado de objetos de exterior.</li>
              <li><strong>Edificios de 3-4 pisos</strong> — muchos sin ascensor, especialmente en construcciones de los años 50-60. Personal especializado en subida por escalera.</li>
              <li><strong>Calles tranquilas</strong> — el interior del barrio tiene poco tráfico y buen acceso para camiones de distintos tamaños.</li>
              <li><strong>Avenidas principales</strong> — Av. Sáenz, Av. Amancio Alcorta y Av. Corrales son los ejes de acceso principales con buen flujo vehicular.</li>
              <li><strong>Rotación de inquilinos</strong> — hay demanda constante de mudanzas en la zona, especialmente a fin de mes.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Nueva Pompeya?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Elevación por soga para muebles que no pasan por escalera</li>
              <li>Traslado de muebles de jardín y objetos de exterior</li>
              <li>Vehículo del tamaño adecuado a la propiedad y la calle</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Nueva Pompeya que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Av. Sáenz</strong> — eje comercial con edificios de departamentos y alta rotación</li>
              <li><strong>Av. Amancio Alcorta</strong> — límite sur del barrio con casas y buen acceso</li>
              <li><strong>Interior del barrio</strong> — calles tranquilas con casas bajas y edificios de poca altura</li>
              <li><strong>Límite con Parque Chacabuco y Boedo</strong> — zona de transición cubierta por el mismo presupuesto</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Nueva Pompeya</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Nueva Pompeya?</h3>
            <p>Un 2 ambientes ronda los $130.000–$220.000. Una casa de familia puede ir desde $200.000 según el volumen. Precio cerrado desde el presupuesto, sin sorpresas el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Es fácil el acceso vehicular en el barrio?</h3>
            <p>Sí. Las calles internas son tranquilas y las avenidas de acceso son amplias. Podemos ingresar con camiones de distintos tamaños sin mayores inconvenientes.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de casas bajas en Nueva Pompeya?</h3>
            <p>Sí, es la tipología más frecuente del barrio. Tenemos experiencia en traslado de muebles de jardín y objetos de gran tamaño desde casas con acceso frontal o lateral.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. Los turnos de fin de mes se llenan rápido.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cubren los límites con barrios vecinos?</h3>
            <p>Sí. Toda Nueva Pompeya incluyendo los bordes con Parque Chacabuco, Boedo, Villa Soldati y Barracas. El precio cerrado cubre toda la zona.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-parque-chacabuco" className="text-gold hover:underline text-sm">Parque Chacabuco</Link>
              <Link href="/blog/mudanzas-boedo" className="text-gold hover:underline text-sm">Boedo</Link>
              <Link href="/blog/mudanzas-barracas" className="text-gold hover:underline text-sm">Barracas</Link>
              <Link href="/blog/mudanzas-parque-patricios" className="text-gold hover:underline text-sm">Parque Patricios</Link>
              <Link href="/blog/mudanzas-caballito" className="text-gold hover:underline text-sm">Caballito</Link>
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
