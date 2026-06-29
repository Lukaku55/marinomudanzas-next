import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Boedo Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Boedo con más de 80 años de experiencia. Barrio tradicional, casas con jardín y edificios de los 60. Presupuesto sin cargo. Tel 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Boedo", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-boedo" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Boedo Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Boedo con más de 80 años de experiencia. Barrio tradicional, casas con jardín y edificios de los 60. Presupuesto sin cargo. Tel 4611-1818.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-boedo",
  "datePublished": "2026-04-22",
  "dateModified": "2026-06-29",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-boedo" },
  "author": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "url": "https://www.mudanzasmarino.com.ar"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png"
    }
  }
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de casas con jardín en Boedo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Tenemos experiencia en mudanzas de casas con jardín, incluyendo el traslado de muebles de exterior, parrillas, equipos de riego y elementos de jardín. Todo se embala correctamente para evitar daños durante el traslado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan los sábados en Boedo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, trabajamos de lunes a sábado de 8 a 18hs. Para mudanzas en sábado recomendamos coordinar con al menos una semana de anticipación, ya que son los días con mayor demanda."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tan fácil es el acceso en Boedo para camiones de mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Boedo tiene avenidas amplias como San Juan y Av. Boedo que facilitan el acceso de camiones. Las calles internas son más angostas pero accesibles. Evaluamos el mejor punto de carga y descarga según cada dirección para optimizar los tiempos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Boedo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El costo depende de la cantidad de ambientes, el volumen de muebles y si es casa o departamento. Ofrecemos presupuesto sin cargo vía WhatsApp o teléfono. El precio final no tiene sorpresas el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Boedo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos reservar con al menos 5 días de anticipación. Para mudanzas de fin de mes o sábados, conviene coordinar con 10 días para asegurar disponibilidad en la fecha que necesitás."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Boedo</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Boedo es uno de los barrios más tradicionales de Buenos Aires, con una identidad propia marcada por su historia tanguera y su ambiente familiar. Casas de familia con jardín, edificios de los años 60 con buenos ascensores y avenidas amplias como San Juan y Boedo hacen de este barrio un lugar relativamente accesible para mudanzas. Marino Mudanzas tiene décadas de experiencia trabajando en Boedo, y conocemos cada rincón del barrio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Boedo</h2>
            <p>Boedo tiene características favorables para las mudanzas: sus avenidas principales son amplias y permiten estacionar camiones sin complicaciones. Los edificios son en su mayoría de los años 60 y 70, con ascensores de tamaño estándar y pasillos accesibles. Las casas de familia tienen entradas amplias con jardín o garaje, lo que facilita el traslado de muebles grandes.</p>
            <p>Sin embargo, algunas calles internas son angostas y en las zonas más residenciales puede haber autos mal estacionados que dificultan el acceso. Planificamos el mejor punto de carga y descarga para cada dirección antes del día de la mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Boedo?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, mesas)</li>
              <li>Embalaje de objetos frágiles, vajilla y electrodomésticos</li>
              <li>Traslado de muebles de jardín, parrillas y elementos de exterior</li>
              <li>Camión del tamaño adecuado al volumen de tu mudanza</li>
              <li>Personal experimentado y con buena predisposición</li>
              <li>Presupuesto sin cargo, sin compromiso y sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Boedo que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Boedo Centro</strong> — zona comercial con cafés y bares tradicionales sobre Av. Boedo</li>
              <li><strong>Corredor San Juan</strong> — avenida principal con edificios de departamentos y alta demanda</li>
              <li><strong>Inclán y alrededores</strong> — zona residencial tranquila con casas de familia</li>
              <li><strong>Límite Nueva Pompeya</strong> — zona de transición al sur con casas amplias</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Boedo</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de casas con jardín en Boedo?</h3>
            <p>Sí. Tenemos experiencia en mudanzas de casas con jardín, incluyendo el traslado de muebles de exterior, parrillas, equipos de riego y elementos de jardín. Todo se embala correctamente para evitar daños durante el traslado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trabajan los sábados en Boedo?</h3>
            <p>Sí, trabajamos de lunes a sábado de 8 a 18hs. Para mudanzas en sábado recomendamos coordinar con al menos una semana de anticipación, ya que son los días con mayor demanda.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué tan fácil es el acceso en Boedo para camiones de mudanza?</h3>
            <p>Boedo tiene avenidas amplias como San Juan y Av. Boedo que facilitan el acceso. Las calles internas son más angostas pero accesibles. Evaluamos el mejor punto de carga y descarga según cada dirección para optimizar los tiempos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Boedo?</h3>
            <p>El costo depende de la cantidad de ambientes, el volumen de muebles y si es casa o departamento. Ofrecemos presupuesto sin cargo vía WhatsApp o teléfono. El precio final no tiene sorpresas el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar una mudanza en Boedo?</h3>
            <p>Recomendamos reservar con al menos 5 días de anticipación. Para mudanzas de fin de mes o sábados, conviene coordinar con 10 días para asegurar disponibilidad en la fecha que necesitás.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-caballito" className="text-gold hover:underline text-sm">Caballito</Link>
              <Link href="/blog/mudanzas-almagro" className="text-gold hover:underline text-sm">Almagro</Link>
              <Link href="/blog/mudanzas-flores" className="text-gold hover:underline text-sm">Flores</Link>
              <Link href="/blog/mudanzas-san-telmo" className="text-gold hover:underline text-sm">San Telmo</Link>
              <Link href="/blog/mudanzas-fin-de-mes" className="text-gold hover:underline text-sm">Mudanzas de fin de mes</Link>
              <Link href="/mudanzas-residenciales" className="text-gold hover:underline text-sm">Mudanzas residenciales</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};
