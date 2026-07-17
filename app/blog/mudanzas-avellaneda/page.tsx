import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Avellaneda GBA | Marino Mudanzas",
  description: "Mudanzas en Avellaneda: zona sur del GBA, primer partido después de CABA. Conocemos las rutas de acceso y la regulación de carga. Precio cerrado. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Avellaneda", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-avellaneda" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Avellaneda GBA | Marino Mudanzas",
  "description": "Mudanzas en Avellaneda: zona sur del GBA, primer partido después de CABA. Conocemos las rutas de acceso y la regulación de carga.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-avellaneda",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-avellaneda" },
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
      "name": "¿Cuánto cuesta una mudanza en Avellaneda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Avellaneda ronda los $170.000–$270.000. Una casa puede ir desde $280.000 según el volumen. El precio es cerrado desde el presupuesto e incluye el traslado desde o hacia CABA, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo es el acceso para camiones en Avellaneda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El acceso desde CABA se hace por Puente Pueyrredón o Autopista Buenos Aires-La Plata. Las avenidas principales como Av. Mitre tienen restricciones de carga que coordinamos previamente. Las calles internas del partido tienen buen acceso para camiones de distintos tamaños."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de Avellaneda a CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es una de las rutas más frecuentes del sur. El traslado entre Avellaneda y cualquier barrio de CABA está incluido en el precio cerrado del presupuesto, sin costos adicionales por distancia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Avellaneda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Avellaneda tiene alta rotación de inquilinos especialmente en Crucecita y los edificios sobre Av. Mitre."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan los sábados en Avellaneda?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, de lunes a sábado de 8 a 18hs. Para edificios con consorcio verificamos si permiten mudanzas en sábado y coordinamos el turno correspondiente."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Avellaneda</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Avellaneda es el primer partido del sur del GBA, pegado a la Ciudad de Buenos Aires por el Puente Pueyrredón. Su mezcla de zona industrial reconvertida, residencial en Crucecita y Villa Domínico, y una importante actividad comercial en Av. Mitre genera una demanda variada de mudanzas. En Marino Mudanzas realizamos mudanzas en todo Avellaneda con conocimiento de las rutas de acceso y la regulación de carga de la zona.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Avellaneda</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Avellaneda centro y Crucecita</strong> — zona con edificios de departamentos y alta rotación. Acceso por Av. Mitre con restricciones de carga en horarios pico que coordinamos previamente.</li>
              <li><strong>Villa Domínico</strong> — zona residencial con casas de familia y calles más tranquilas. Buen acceso vehicular.</li>
              <li><strong>Sarandí</strong> — barrio residencial con acceso directo desde CABA por la autopista Buenos Aires-La Plata.</li>
              <li><strong>Zona reconvertida</strong> — galpones y espacios industriales transformados en viviendas o locales. Accesos amplios pero con lógística especial.</li>
              <li><strong>Cruce desde CABA</strong> — coordinamos para evitar el tráfico en hora pico del Puente Pueyrredón y elegimos el acceso más eficiente según la dirección.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Avellaneda?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Coordinación de horario para evitar restricciones de carga</li>
              <li>Camión del tamaño adecuado al volumen y la dirección</li>
              <li>Traslado entre Avellaneda y CABA con precio cerrado</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Avellaneda que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Avellaneda centro y Crucecita</strong> — zona con mayor rotación y demanda de mudanzas</li>
              <li><strong>Villa Domínico</strong> — zona residencial con casas y mejor acceso vehicular</li>
              <li><strong>Sarandí</strong> — residencial con acceso directo por autopista</li>
              <li><strong>Piñeyro</strong> — barrio tranquilo con casas de familia</li>
              <li><strong>Gerli</strong> — zona de transición hacia Lanús, igualmente cubierta</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Avellaneda</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Avellaneda?</h3>
            <p>Un 2 ambientes ronda los $170.000–$270.000. Una casa puede ir desde $280.000 según el volumen. Precio cerrado que incluye el traslado desde o hacia CABA.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo es el acceso para camiones?</h3>
            <p>Desde CABA por Puente Pueyrredón o la autopista. En Av. Mitre hay restricciones de carga que coordinamos. Las calles internas tienen buen acceso.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de Avellaneda a CABA?</h3>
            <p>Sí, es una de las rutas más frecuentes del sur. El traslado está incluido en el precio cerrado, sin costos adicionales por distancia.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. Crucecita y el centro tienen alta rotación de inquilinos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trabajan los sábados en Avellaneda?</h3>
            <p>Sí, de lunes a sábado de 8 a 18hs. Para edificios con consorcio verificamos si permiten mudanzas en sábado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos la zona, el tipo de propiedad y el piso. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-lanus" className="text-gold hover:underline text-sm">Lanús</Link>
              <Link href="/blog/mudanzas-quilmes" className="text-gold hover:underline text-sm">Quilmes</Link>
              <Link href="/blog/mudanzas-lomas-de-zamora" className="text-gold hover:underline text-sm">Lomas de Zamora</Link>
              <Link href="/blog/mudanzas-boca" className="text-gold hover:underline text-sm">La Boca</Link>
              <Link href="/blog/mudanzas-barracas" className="text-gold hover:underline text-sm">Barracas</Link>
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
