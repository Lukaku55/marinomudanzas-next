import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Montserrat Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Montserrat: edificios históricos, ascensores de reja y restricciones de tráfico en el centro de CABA. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Montserrat", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-montserrat" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Montserrat Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Montserrat: edificios históricos, ascensores de reja y restricciones de tráfico en el centro de CABA. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-montserrat",
  "datePublished": "2026-07-21",
  "dateModified": "2026-07-21",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-montserrat" },
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
      "name": "¿Cómo manejan las restricciones de tráfico en Montserrat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El centro de Buenos Aires tiene restricciones de carga y descarga por horario en muchas calles. Coordinamos el acceso del camión en los horarios permitidos y evaluamos si es necesario usar vehículo más pequeño para calles con más restricciones como Alsina, Hipólito Yrigoyen o Rivadavia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Montserrat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Montserrat ronda los $150.000–$250.000. Los edificios históricos con ascensores pequeños o sin ascensor pueden tener un costo algo mayor por el trabajo adicional de escalera. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen experiencia en edificios históricos con ascensores de reja?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Los edificios históricos de Montserrat tienen ascensores de reja con capacidades reducidas. Sabemos exactamente qué entra parado y qué hay que inclinar o subir por escalera, y lo contemplamos en el presupuesto antes del día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Montserrat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para mudanzas en edificios con consorcio que tienen horarios restringidos, 10–15 días para coordinar el turno. La zona céntrica tiene alta rotación de inquilinos especialmente en departamentos pequeños."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de oficinas en Montserrat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Montserrat concentra muchas oficinas y estudios. Realizamos mudanzas comerciales incluyendo traslado de mobiliario de oficina, archivos y equipamiento, coordinando fuera de horario laboral si es necesario."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Montserrat</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Montserrat es uno de los barrios más históricos de Buenos Aires, con edificios de principios del siglo XX alrededor de Plaza de Mayo, Congreso y Av. de Mayo. Sus calles concentran sedes de gobierno, oficinas, estudios y departamentos con características muy particulares: ascensores de reja de capacidad reducida, pasillos angostos y restricciones de tráfico por tratarse del centro cívico de CABA. En Marino Mudanzas conocemos bien cómo operar en este contexto.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Montserrat</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Edificios históricos con ascensores de reja</strong> — los edificios de principios del siglo XX tienen ascensores con capacidades reducidas. Sabemos qué entra y qué hay que subir por escalera, y lo contemplamos en el presupuesto.</li>
              <li><strong>Restricciones de tráfico en el centro</strong> — muchas calles de Montserrat tienen restricciones de carga por horario. Coordinamos el acceso del camión en los horarios permitidos y usamos vehículo más pequeño cuando la calle lo requiere.</li>
              <li><strong>Departamentos de distintos tamaños</strong> — la zona tiene desde monoambientes para estudiantes hasta departamentos amplios con vista a la Plaza. Alta rotación de inquilinos.</li>
              <li><strong>Oficinas y estudios</strong> — la concentración de actividad profesional genera mudanzas comerciales frecuentes, muchas veces fuera de horario laboral.</li>
              <li><strong>Poca disponibilidad de estacionamiento</strong> — las calles del centro no permiten dejar el camión mucho tiempo. Organizamos la carga y descarga de manera ágil.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Montserrat?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado a la calle y el edificio</li>
              <li>Coordinación de horario para evitar restricciones de tráfico</li>
              <li>Mudanzas comerciales de oficinas y estudios</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Montserrat que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Av. de Mayo</strong> — el eje principal del barrio con edificios históricos de gran porte</li>
              <li><strong>Congreso</strong> — zona de alta actividad con edificios de departamentos y oficinas</li>
              <li><strong>Plaza de Mayo</strong> — área de gobierno con departamentos históricos y sedes institucionales</li>
              <li><strong>Microcentro límite</strong> — zona de transición con edificios de oficinas reconvertidos en viviendas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Montserrat</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo manejan las restricciones de tráfico?</h3>
            <p>Coordinamos el acceso en los horarios permitidos y evaluamos qué vehículo usar para cada calle. La planificación previa evita multas y demoras el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Montserrat?</h3>
            <p>Un 2 ambientes ronda los $150.000–$250.000. Los edificios con escalera o ascensores muy pequeños pueden tener un costo adicional contemplado desde el presupuesto cerrado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen experiencia en edificios históricos con ascensores de reja?</h3>
            <p>Sí. Es una de nuestras especialidades. Sabemos qué entra parado y qué hay que inclinar o subir por escalera, y todo queda claro en el presupuesto antes del día.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para edificios con consorcios estrictos o mudanzas de oficinas fuera de horario, 10–15 días de anticipación.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de oficinas en Montserrat?</h3>
            <p>Sí. Traslado de mobiliario de oficina, archivos y equipamiento. Podemos coordinar fuera de horario laboral para no interrumpir la actividad del negocio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-san-telmo" className="text-gold hover:underline text-sm">San Telmo</Link>
              <Link href="/blog/mudanzas-balvanera" className="text-gold hover:underline text-sm">Balvanera</Link>
              <Link href="/blog/mudanzas-retiro" className="text-gold hover:underline text-sm">Retiro</Link>
              <Link href="/blog/mudanzas-constitucion" className="text-gold hover:underline text-sm">Constitución</Link>
              <Link href="/blog/mudanzas-recoleta" className="text-gold hover:underline text-sm">Recoleta</Link>
              <Link href="/mudanzas-oficinas-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas de oficinas</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
