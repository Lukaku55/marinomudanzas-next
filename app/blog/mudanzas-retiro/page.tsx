import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Retiro Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Retiro: Torres del Bajo, edificios con consorcios estrictos y zona de alta restricción de tráfico. Precio cerrado. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Retiro", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-retiro" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Retiro Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Retiro: Torres del Bajo, edificios con consorcios estrictos y zona de alta restricción de tráfico. Precio cerrado.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-retiro",
  "datePublished": "2026-07-21",
  "dateModified": "2026-07-21",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-retiro" },
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
      "name": "¿Cuánto cuesta una mudanza en Retiro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Retiro se cotiza según el caso. Las Torres del Bajo y los edificios premium con consorcios estrictos pueden tener un costo algo mayor por los tiempos de coordinación previa. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo manejan los consorcios estrictos de Retiro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los edificios premium de Retiro y las Torres del Bajo tienen consorcios con reglas específicas: horarios de mudanza restringidos, uso exclusivo del montacargas, protección de hall y ascensores, y a veces depósito de garantía. Coordinamos todo con el encargado con anticipación para cumplir cada requisito."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es difícil estacionar el camión en Retiro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La zona de la terminal de Retiro y Av. del Libertador tienen restricciones de carga y mucho tráfico. Coordinamos el horario de llegada para los momentos de menor congestión y usamos el vehículo adecuado a cada calle. Las calles internas del barrio tienen mejor acceso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Retiro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para edificios con consorcios que asignan turnos de montacargas, 10–15 días. Los edificios premium de Retiro suelen tener restricciones horarias estrictas para mudanzas y el turno de montacargas hay que solicitarlo con anticipación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de oficinas en Retiro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Retiro concentra muchas oficinas y empresas. Realizamos mudanzas comerciales incluyendo traslado de mobiliario de oficina, archivos y equipamiento, coordinando fuera de horario laboral o en fin de semana para no interrumpir la actividad del negocio."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Retiro</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Retiro es uno de los barrios más céntricos de Buenos Aires, con una convivencia muy marcada entre las Torres del Bajo con sus edificios premium, el barrio histórico con casas y departamentos más antiguos, y la zona de la terminal que concentra mucho tráfico y actividad comercial. Las mudanzas en Retiro requieren coordinación precisa: consorcios con reglas estrictas, horarios de montacargas asignados, y restricciones de carga en las arterias principales. En Marino Mudanzas conocemos bien estas particularidades.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Retiro</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Torres del Bajo y edificios premium</strong> — consorcios con reglas específicas: horarios de mudanza restringidos, uso exclusivo del montacargas, protección obligatoria del hall. Coordinamos todo con anticipación.</li>
              <li><strong>Zona de la terminal de Retiro</strong> — alto tráfico y restricciones de carga en Av. Ramos Mejía y las calles aledañas. Coordinamos el horario para minimizar demoras.</li>
              <li><strong>Av. del Libertador y zona norte</strong> — edificios residenciales con buenos accesos pero restricciones de carga en la arteria principal. Las calles internas tienen mejor acceso.</li>
              <li><strong>Barrio histórico de Retiro</strong> — casas y departamentos más antiguos con mejor accesibilidad pero en algunos casos sin ascensor o con ascensores pequeños.</li>
              <li><strong>Oficinas y empresas</strong> — Retiro concentra muchas sedes corporativas. Mudanzas comerciales coordinadas fuera de horario laboral.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Retiro?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Coordinación previa con el consorcio y reserva del turno de montacargas</li>
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado a la calle y el edificio</li>
              <li>Coordinación de horario para evitar el tráfico de la terminal</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Retiro que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Torres del Bajo</strong> — edificios premium con consorcios exigentes y montacargas asignado</li>
              <li><strong>Barrio Parque</strong> — zona residencial tranquila con casas y edificios de mejor acceso</li>
              <li><strong>Av. del Libertador</strong> — eje de alto tráfico con edificios de departamentos</li>
              <li><strong>Zona de la terminal</strong> — área de oficinas y hoteles con restricciones de carga</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Retiro</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Retiro?</h3>
            <p>Un 2 ambientes se cotiza según el caso. Los edificios premium con consorcios estrictos pueden tener un costo algo mayor por los tiempos de coordinación previa, contemplado desde el presupuesto cerrado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo manejan los consorcios estrictos?</h3>
            <p>Coordinamos con anticipación el turno de montacargas, la protección de hall y los requisitos de cada edificio. Todo queda claro antes del día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Es difícil estacionar el camión en Retiro?</h3>
            <p>La zona de la terminal y Av. del Libertador tienen mucho tráfico. Coordinamos el horario y el vehículo adecuado. Las calles internas del barrio tienen mejor acceso.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para edificios con turno de montacargas, 10–15 días para coordinar con el consorcio.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de oficinas en Retiro?</h3>
            <p>Sí. Traslado de mobiliario de oficina, archivos y equipamiento. Podemos coordinar fuera de horario laboral o en fin de semana.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el piso y si hay consorcio estricto. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-recoleta" className="text-gold hover:underline text-sm">Recoleta</Link>
              <Link href="/blog/mudanzas-palermo" className="text-gold hover:underline text-sm">Palermo</Link>
              <Link href="/blog/mudanzas-san-nicolas" className="text-gold hover:underline text-sm">San Nicolás</Link>
              <Link href="/blog/mudanzas-montserrat" className="text-gold hover:underline text-sm">Montserrat</Link>
              <Link href="/blog/mudanzas-constitucion" className="text-gold hover:underline text-sm">Constitución</Link>
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
