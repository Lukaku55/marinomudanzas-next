import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas de Oficinas en San Nicolás Microcentro | Marino Mudanzas",
  description: "Mudanzas de oficinas en San Nicolás, microcentro de Buenos Aires. Manejo de restricciones de carga y horarios en zona peatonal. Precio cerrado → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en San Nicolás", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-nicolas" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas de Oficinas en San Nicolás Microcentro | Marino Mudanzas",
  "description": "Mudanzas de oficinas en San Nicolás, microcentro de Buenos Aires. Manejo de restricciones de carga y horarios en zona peatonal. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-nicolas",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-nicolas" },
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
      "name": "¿Hacen mudanzas residenciales en San Nicolás?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "San Nicolás es casi exclusivamente un barrio de oficinas, bancos, teatros y hoteles. La población residente es mínima. La gran mayoría de los trabajos que hacemos en el barrio son traslados de oficinas y comercios. Si bien también atendemos los pocos pedidos residenciales del barrio, nuestra especialidad en San Nicolás es la mudanza de oficinas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hay restricciones para estacionar el camión en el microcentro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. San Nicolás tiene restricciones severas de carga y descarga en sus zonas peatonales y semipeatonales, como Florida y Lavalle. Las calles vehiculares tienen horarios permitidos para camiones que varían según la zona. Coordinamos el acceso dentro de los horarios habilitados para evitar multas y demoras."
      }
    },
    {
      "@type": "Question",
      "name": "¿En qué horarios pueden ingresar los camiones al microcentro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los horarios de carga y descarga en la zona del microcentro generalmente se permiten antes de las 8hs o después de las 20hs para minimizar el impacto en el tráfico. Algunos edificios de oficinas tienen muelles propios que permiten operar en cualquier horario. Antes de confirmar la mudanza relevamos las restricciones específicas de la dirección."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza de oficina en San Nicolás?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El costo de una mudanza de oficina en San Nicolás depende del volumen de mobiliario, equipos y cajas de archivo, y del piso desde donde se retira. Una oficina pequeña de hasta 10 puestos puede rondar los $280.000–$450.000. Damos presupuesto sin cargo tras un relevamiento de las características del espacio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo coordinan el acceso en edificios de oficinas del microcentro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Coordinamos previamente con el encargado del edificio el uso del montacargas o ascensor de servicio, el acceso al muelle de carga o la reserva de espacio en la vía pública. En muchos edificios corporativos del microcentro hay protocolos específicos para traslados que conocemos y respetamos."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en San Nicolás (Microcentro)</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>San Nicolás es el corazón del microcentro porteño: el Obelisco, la Av. Corrientes, la Av. de Mayo, la peatonal Florida y los grandes teatros definen un barrio casi exclusivamente comercial. Los residentes son una minoría; lo que abunda son bancos, estudios jurídicos y contables, agencias, medios de comunicación y oficinas corporativas. Mudarse aquí —o desde aquí— requiere conocer las restricciones de carga de la zona, los horarios permitidos para camiones y los protocolos de acceso de los edificios. En Marino Mudanzas llevamos años operando en el microcentro.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en San Nicolás</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zona principalmente de oficinas</strong> — la gran mayoría de los trabajos en San Nicolás son traslados de oficinas, estudios profesionales, agencias y comercios. Las mudanzas residenciales son la excepción.</li>
              <li><strong>Restricciones de carga en zonas peatonales</strong> — calles como Florida y Lavalle son peatonales o semipeatonales. El acceso de camiones está prohibido o limitado a horarios muy estrictos. Coordinamos el ingreso dentro de los horarios habilitados.</li>
              <li><strong>Alto tráfico vehicular en las arterias principales</strong> — Corrientes, de Mayo, 9 de Julio y Diagonal Norte concentran el tráfico más denso de la ciudad. Planificamos la ruta y el estacionamiento con antelación.</li>
              <li><strong>Edificios corporativos con acceso controlado</strong> — muchos edificios del microcentro tienen muelles de carga propios, montacargas de servicio y protocolos de ingreso. Coordinamos previamente con los encargados.</li>
              <li><strong>Horarios fuera del pico laboral</strong> — para evitar interferir con el movimiento de empleados y clientes, muchas mudanzas de oficinas en el microcentro se realizan antes de las 8hs, después de las 20hs o en fin de semana.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en San Nicolás?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles de oficina (escritorios, sillas ejecutivas, bibliotecas)</li>
              <li>Embalaje y traslado seguro de equipos informáticos y electrónicos</li>
              <li>Traslado de archivos, cajas de documentación y material de depósito</li>
              <li>Coordinación previa con encargados y administración del edificio</li>
              <li>Vehículo del tamaño adecuado a la propiedad</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en San Nicolás</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas residenciales en San Nicolás?</h3>
            <p>San Nicolás es casi exclusivamente un barrio de oficinas. La población residente es mínima. Nuestra especialidad en el barrio es la mudanza de oficinas y comercios, aunque también atendemos los pocos pedidos residenciales que surgen.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hay restricciones para estacionar el camión en el microcentro?</h3>
            <p>Sí. Zonas peatonales y semipeatonales tienen restricciones severas. Las calles vehiculares tienen horarios permitidos para camiones según la zona. Coordinamos el acceso dentro de los horarios habilitados para evitar multas y demoras.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿En qué horarios pueden ingresar los camiones?</h3>
            <p>Generalmente antes de las 8hs o después de las 20hs en las zonas más restringidas. Algunos edificios tienen muelles propios con más flexibilidad. Relevamos las restricciones específicas de cada dirección antes de confirmar la fecha.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza de oficina en San Nicolás?</h3>
            <p>Una oficina pequeña de hasta 10 puestos puede rondar los $280.000–$450.000. El costo depende del volumen de mobiliario, equipos y cajas, y del piso desde donde se retira. Damos presupuesto sin cargo tras un relevamiento del espacio.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo coordinan el acceso en edificios corporativos?</h3>
            <p>Coordinamos previamente con el encargado el uso del montacargas o ascensor de servicio, el acceso al muelle de carga y la reserva de espacio en la vía pública. Conocemos los protocolos de los edificios más importantes del microcentro.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad y a dónde te mudás. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-retiro" className="text-gold hover:underline text-sm">Retiro</Link>
              <Link href="/blog/mudanzas-montserrat" className="text-gold hover:underline text-sm">Montserrat</Link>
              <Link href="/blog/mudanzas-balvanera" className="text-gold hover:underline text-sm">Balvanera</Link>
              <Link href="/mudanzas-oficinas" className="text-gold hover:underline text-sm">Mudanzas de oficinas</Link>
              <Link href="/blog/mudanzas-recoleta" className="text-gold hover:underline text-sm">Recoleta</Link>
              <Link href="/blog/mudanzas-palermo" className="text-gold hover:underline text-sm">Palermo</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
