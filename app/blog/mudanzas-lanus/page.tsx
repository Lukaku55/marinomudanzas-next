import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Lanús GBA | Marino Mudanzas",
  description: "Mudanzas en Lanús Este y Oeste: zona sur del GBA con fácil acceso desde CABA. Precio cerrado sin sorpresas para todo el partido. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Lanús", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-lanus" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Lanús GBA | Marino Mudanzas",
  "description": "Mudanzas en Lanús Este y Oeste: zona sur del GBA con fácil acceso desde CABA. Precio cerrado sin sorpresas para todo el partido.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-lanus",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-lanus" },
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
      "name": "¿Cuánto cuesta una mudanza en Lanús?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Lanús ronda los $170.000–$270.000. Una casa puede ir desde $280.000 según el volumen. El precio es cerrado desde el presupuesto e incluye el traslado desde o hacia CABA, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cubren tanto Lanús Este como Lanús Oeste?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, cubrimos todo el partido de Lanús: Lanús Este, Lanús Oeste, Remedios de Escalada y Monte Chingolo. El precio es cerrado desde el presupuesto sin importar la zona del partido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo acceden a Lanús desde CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El acceso desde CABA se hace por Puente Pueyrredón y Av. Hipólito Yrigoyen, o por la Autopista Buenos Aires-La Plata. Coordinamos la ruta más eficiente según la dirección de destino y el horario para evitar el tráfico del puente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Lanús?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Lanús tiene alta rotación de inquilinos especialmente en Remedios de Escalada y los edificios céntricos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de Lanús a CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es una de las rutas más frecuentes del sur del GBA. El traslado entre Lanús y cualquier barrio de CABA está incluido en el precio cerrado del presupuesto, sin costos adicionales por distancia."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Lanús</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Lanús es uno de los partidos del sur del GBA con mayor densidad residencial, ubicado entre Avellaneda y Lomas de Zamora y con acceso directo desde CABA por Av. Hipólito Yrigoyen o la Autopista Buenos Aires-La Plata. La mezcla de Lanús Este (zona más céntrica y comercial) y Lanús Oeste (más residencial) junto con Remedios de Escalada genera una demanda constante de mudanzas. En Marino Mudanzas realizamos mudanzas en todo el partido con precio cerrado y sin sorpresas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Lanús</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Lanús Este</strong> — zona más céntrica y comercial del partido con edificios de departamentos y alta rotación de inquilinos. Acceso por Av. Hipólito Yrigoyen.</li>
              <li><strong>Lanús Oeste</strong> — zona más residencial con casas de familia y edificios de menor altura. Calles amplias con buen acceso vehicular.</li>
              <li><strong>Remedios de Escalada</strong> — barrio residencial con casas de familia. Buen acceso desde la autopista.</li>
              <li><strong>Monte Chingolo</strong> — zona de casas unifamiliares en el límite sur del partido.</li>
              <li><strong>Acceso desde CABA</strong> — por Av. Hipólito Yrigoyen o la autopista Buenos Aires-La Plata. Coordinamos el horario para evitar el tráfico del Puente Pueyrredón.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Lanús?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Coordinación con el consorcio o encargado del edificio</li>
              <li>Camión del tamaño adecuado al volumen y la zona</li>
              <li>Traslado entre Lanús y CABA con precio cerrado</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Lanús que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Lanús Este</strong> — zona céntrica con mayor demanda y rotación de inquilinos</li>
              <li><strong>Lanús Oeste</strong> — zona residencial con casas y edificios de buen acceso</li>
              <li><strong>Remedios de Escalada</strong> — barrio residencial con acceso desde autopista</li>
              <li><strong>Monte Chingolo</strong> — zona de casas unifamiliares en el límite del partido</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Lanús</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Lanús?</h3>
            <p>Un 2 ambientes ronda los $170.000–$270.000. Una casa puede ir desde $280.000 según el volumen. Precio cerrado que incluye el traslado desde o hacia CABA.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cubren tanto Lanús Este como Lanús Oeste?</h3>
            <p>Sí, todo el partido: Lanús Este, Lanús Oeste, Remedios de Escalada y Monte Chingolo. Precio cerrado sin importar la zona.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo acceden a Lanús desde CABA?</h3>
            <p>Por Puente Pueyrredón y Av. Hipólito Yrigoyen, o la Autopista Buenos Aires-La Plata. Elegimos la ruta más eficiente para cada dirección.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. Lanús Este tiene alta rotación y los turnos de fin de mes se llenan rápido.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de Lanús a CABA?</h3>
            <p>Sí, una de las rutas más frecuentes del sur. El traslado a CABA está incluido en el precio cerrado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos la zona, el tipo de propiedad y el piso. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-avellaneda" className="text-gold hover:underline text-sm">Avellaneda</Link>
              <Link href="/blog/mudanzas-lomas-de-zamora" className="text-gold hover:underline text-sm">Lomas de Zamora</Link>
              <Link href="/blog/mudanzas-quilmes" className="text-gold hover:underline text-sm">Quilmes</Link>
              <Link href="/blog/mudanzas-nueva-pompeya" className="text-gold hover:underline text-sm">Nueva Pompeya</Link>
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
