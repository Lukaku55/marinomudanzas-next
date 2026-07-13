import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Colegiales Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Colegiales: calles angostas, PHs con escalera y edificios de los 60. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Colegiales", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-colegiales" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Colegiales Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Colegiales: calles angostas, PHs con escalera y edificios de los 60. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-colegiales",
  "datePublished": "2026-07-13",
  "dateModified": "2026-07-13",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-colegiales" },
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
      "name": "¿Es difícil el acceso para camiones en Colegiales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Colegiales tiene calles internas angostas y mucho arbolado. Usamos el vehículo adecuado para cada dirección: camioneta en calles estrechas, camión mediano en las avenidas. Evaluamos el acceso previamente para no tener sorpresas el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Colegiales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes ronda los $150.000–$250.000. Una PH o casa puede ir desde $250.000 dependiendo del volumen y las plantas. Pedí un presupuesto sin cargo para tu caso específico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan en las PHs de Colegiales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las PHs de Colegiales suelen tener escaleras internas empinadas y acceso por terraza. Tenemos experiencia en este tipo de propiedades y sabemos cómo manejar muebles grandes en espacios reducidos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Colegiales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos reservar con al menos una semana de anticipación. Para fin de mes o sábados, 10–15 días. Colegiales tiene alta rotación de inquilinos y los turnos se llenan rápido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de casas y PHs en Colegiales además de departamentos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Realizamos mudanzas de todo tipo de propiedades en Colegiales: departamentos en edificios, PHs con escalera interna, casas de planta baja y casas de dos plantas. El presupuesto se ajusta al tipo de propiedad y el volumen."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Colegiales</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Colegiales es uno de los barrios con más personalidad del norte de CABA: una mezcla de casas bajas de principios del siglo XX, PHs con jardín y edificios de departamentos de los años 60. Sus calles angostas y el abundante arbolado lo hacen un barrio tranquilo para vivir, pero requieren planificación extra para los camiones de mudanza. En Marino Mudanzas conocemos cada rincón de Colegiales y sabemos cómo movernos en él.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Características de las mudanzas en Colegiales</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Calles angostas y arboladas</strong> — muchas calles internas tienen árboles grandes que reducen el espacio disponible. Seleccionamos el vehículo adecuado para cada dirección.</li>
              <li><strong>PHs con escalera interna</strong> — una de las características más comunes del barrio. Las PHs suelen tener acceso por escalera empinada y techos tipo mansarda que limitan el paso de muebles grandes.</li>
              <li><strong>Casas de dos plantas</strong> — la zona de casas bajas tiene muchas propiedades de 2 plantas. Trabajamos con el personal necesario para este tipo de mudanzas.</li>
              <li><strong>Edificios de los años 60</strong> — ascensores pequeños y pasillos angostos. Sabemos qué entra parado y qué hay que inclinar o subir por escalera.</li>
              <li><strong>Alta rotación de inquilinos</strong> — especialmente en la zona de Av. Córdoba y Juan B. Justo, con muchos departamentos en alquiler.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Colegiales?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Manejo de muebles en PHs con escaleras empinadas</li>
              <li>Vehículo del tamaño adecuado a cada calle y propiedad</li>
              <li>Coordinación con el consorcio o el encargado del edificio</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Colegiales que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Colegiales histórico</strong> — zona de casas bajas y PHs entre Av. Córdoba y Av. Forest, con calles angostas y mucho arbolado</li>
              <li><strong>Corredor Av. Córdoba</strong> — edificios de departamentos con alta rotación de inquilinos</li>
              <li><strong>Juan B. Justo</strong> — zona de transición entre Colegiales y Palermo, con buen acceso vehicular</li>
              <li><strong>Límite Chacarita</strong> — zona tranquila con casas de dos plantas y buen acceso para camiones medianos</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Colegiales</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Es difícil el acceso para camiones en Colegiales?</h3>
            <p>Algunas calles internas son angostas y el arbolado reduce el espacio. Usamos el vehículo adecuado para cada dirección — camioneta en calles estrechas, camión en las avenidas principales.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Colegiales?</h3>
            <p>Un 2 ambientes ronda los $150.000–$250.000. Una PH o casa puede ir desde $250.000 según el volumen y las plantas. Pedí presupuesto sin cargo para tu dirección específica.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trabajan en las PHs de Colegiales?</h3>
            <p>Sí. Tenemos experiencia en PHs con escalera interna empinada y acceso por terraza. Sabemos cómo manejar muebles grandes en este tipo de propiedades.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. El barrio tiene alta rotación y los turnos se llenan rápido a fin de mes.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de casas y PHs además de departamentos?</h3>
            <p>Sí, todo tipo de propiedades: departamentos, PHs, casas de planta baja y casas de dos plantas. El presupuesto se ajusta al tipo y el volumen real.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-palermo" className="text-gold hover:underline text-sm">Palermo</Link>
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Belgrano</Link>
              <Link href="/blog/mudanzas-villa-urquiza" className="text-gold hover:underline text-sm">Villa Urquiza</Link>
              <Link href="/blog/mudanzas-chacarita" className="text-gold hover:underline text-sm">Chacarita</Link>
              <Link href="/blog/mudanzas-nunez" className="text-gold hover:underline text-sm">Núñez</Link>
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
