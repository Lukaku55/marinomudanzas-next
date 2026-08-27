import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en San Isidro GBA | Marino Mudanzas",
  description: "Mudanzas en San Isidro: Beccar, Martínez, Acassuso y barrios privados. Coordinación previa con countries y precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en San Isidro", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-isidro" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en San Isidro GBA | Marino Mudanzas",
  "description": "Mudanzas en San Isidro: Beccar, Martínez, Acassuso y barrios privados. Coordinación previa con countries y precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-isidro",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-isidro" },
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
      "name": "¿Pueden ingresar a countries y barrios privados en San Isidro y Martínez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Coordinamos el acceso previamente con la administración de cada country o barrio privado: documentación del personal, datos del vehículo y el turno asignado para la mudanza. Todo queda acordado antes del día para no tener demoras en el ingreso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en San Isidro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una casa de gran porte en San Isidro, Beccar o Martínez puede ir a consultar según el caso según el volumen. Un departamento de 2 ambientes se cotiza según el caso. El precio es cerrado desde el presupuesto e incluye el traslado desde o hacia CABA, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Manejan muebles de alto valor o antigüedades en San Isidro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las propiedades de San Isidro y sus alrededores suelen tener muebles de alto valor y antigüedades. Embalamos con materiales especiales, mantas acolchadas y film stretch para garantizar que lleguen en perfectas condiciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en San Isidro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos 10–15 días para mudanzas en countries o barrios privados, ya que requieren gestión de permisos de ingreso. Para casas o departamentos comunes, una semana es suficiente. Para mudanzas a fin de mes reservar con 15 días de anticipación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas entre San Isidro y CABA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es una de las rutas más frecuentes que realizamos. El traslado entre San Isidro y cualquier barrio de CABA está incluido en el precio cerrado del presupuesto, sin costos adicionales por distancia."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en San Isidro</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>San Isidro es uno de los partidos más exclusivos del norte del Gran Buenos Aires, con una gran variedad de tipologías: casas históricas en el casco céntrico, residencias de gran porte en Beccar y Acassuso, y una importante concentración de countries y barrios privados en la zona de Martínez. En Marino Mudanzas realizamos mudanzas en todo el partido con la coordinación y el equipamiento que cada tipo de propiedad requiere.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en San Isidro</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Countries y barrios privados</strong> — la zona de Martínez concentra la mayor cantidad de urbanizaciones privadas del norte del GBA. Coordinamos el acceso con documentación del personal y datos del vehículo antes del día de la mudanza.</li>
              <li><strong>Casas históricas en el casco céntrico</strong> — San Isidro centro tiene propiedades de época con pisos de madera, escaleras angostas y muebles de alto valor. Embalamos con materiales especiales.</li>
              <li><strong>Residencias en Beccar y Acassuso</strong> — grandes propiedades con jardín, piscina y múltiples ambientes. Se requieren camiones de mayor capacidad y personal abundante.</li>
              <li><strong>Departamentos en Boulogne</strong> — zona de transición con edificios de departamentos y mejor accesibilidad vehicular.</li>
              <li><strong>Restricciones de acceso</strong> — Av. del Libertador tiene restricciones de carga en algunos tramos. Coordinamos el horario para evitar demoras.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en San Isidro?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Coordinación previa con administración de countries y barrios privados</li>
              <li>Desarmado y armado de muebles de gran porte</li>
              <li>Embalaje especial para muebles de alto valor y antigüedades</li>
              <li>Traslado de muebles de jardín y elementos de exterior</li>
              <li>Camión del tamaño adecuado al volumen de la propiedad</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Localidades de San Isidro que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>San Isidro centro</strong> — casco histórico con casas coloniales y departamentos sobre Av. del Libertador</li>
              <li><strong>Beccar</strong> — zona residencial premium con grandes propiedades y buen acceso</li>
              <li><strong>Martínez</strong> — mayor concentración de countries y barrios privados del partido</li>
              <li><strong>Acassuso</strong> — barrio tranquilo cerca del río con propiedades de alto valor</li>
              <li><strong>Boulogne</strong> — zona con mayor accesibilidad y departamentos en alquiler</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en San Isidro</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden ingresar a countries y barrios privados?</h3>
            <p>Sí. Coordinamos el acceso previamente: documentación del personal, datos del vehículo y turno asignado. Todo acordado antes del día para no tener demoras en el ingreso.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en San Isidro?</h3>
            <p>Una casa de gran porte puede ir a consultar según el caso según el volumen. Un 2 ambientes se cotiza según el caso. El precio es cerrado e incluye el traslado desde o hacia CABA.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Manejan muebles de alto valor o antigüedades?</h3>
            <p>Sí. Embalamos con materiales especiales, mantas acolchadas y film stretch. Para piezas muy delicadas también coordinamos embalaje con caja de madera.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Para countries o barrios privados, 10–15 días para gestionar permisos de ingreso. Para casas y departamentos, al menos una semana.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas entre San Isidro y CABA?</h3>
            <p>Sí, es una de las rutas más frecuentes. El traslado está incluido en el precio cerrado, sin costos adicionales por distancia.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, si es country y el volumen aproximado. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en zonas cercanas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-vicente-lopez" className="text-gold hover:underline text-sm">Vicente López</Link>
              <Link href="/blog/mudanzas-tigre" className="text-gold hover:underline text-sm">Tigre</Link>
              <Link href="/blog/mudanzas-san-fernando" className="text-gold hover:underline text-sm">San Fernando</Link>
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Belgrano</Link>
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
}
