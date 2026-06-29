import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Recoleta Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Recoleta con más de 80 años de experiencia. Especialistas en edificios de época, pisos de mármol y antigüedades. Presupuesto sin cargo. Tel 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Recoleta", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-recoleta" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Recoleta Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Recoleta con más de 80 años de experiencia. Especialistas en edificios de época, pisos de mármol y antigüedades. Presupuesto sin cargo. Tel 4611-1818.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-recoleta",
  "datePublished": "2026-04-22",
  "dateModified": "2026-06-29",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-recoleta" },
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
      "name": "¿Tienen experiencia en mudanzas de antigüedades y obras de arte en Recoleta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Contamos con personal capacitado en el manejo de muebles de alto valor, antigüedades y obras de arte. Utilizamos materiales de embalaje profesionales: papel de seda, espumas, mantas acolchadas y cajas especiales para cada pieza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo protegen los pisos de mármol y paredes de los edificios históricos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Colocamos protectores especiales de goma y telas acolchadas sobre pisos de mármol, madera y materiales delicados. También protegemos las paredes y el interior de los ascensores de época antes de comenzar la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Pueden trabajar en horarios restringidos de consorcio en Recoleta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Coordinamos previamente con el encargado del edificio para conocer los horarios permitidos de carga y descarga. En Recoleta muchos consorcios tienen ventanas horarias acotadas y nosotros nos adaptamos sin inconvenientes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Recoleta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El costo depende del volumen de muebles, la cantidad de ambientes, el piso y si se requiere soga o montacargas. Ofrecemos presupuesto sin cargo vía WhatsApp o teléfono. El presupuesto es detallado y sin sorpresas el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación debo reservar una mudanza en Recoleta?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos reservar con al menos una semana de anticipación. En temporada alta (diciembre–enero y julio) conviene hacerlo con dos semanas. Cuanto antes quede coordinado con el consorcio, más tranquila sale la mudanza."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Recoleta</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>En Recoleta, cada mudanza es un desafío de precisión: edificios de principios del siglo XX con ascensores de época, pisos de mármol que requieren protección milimétrica y consorcios con reglamentos estrictos. Marino Mudanzas lleva más de 80 años trabajando en el barrio y conoce cada detalle de ese entorno. Si buscás una empresa de mudanzas en Recoleta que cuide tus pertenencias como si fueran propias, estás en el lugar correcto.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Por qué Recoleta exige una empresa especializada</h2>
            <p>Recoleta no es un barrio para improvisar. Sus edificios históricos de Alvear, Quintana y Posadas presentan características que muy pocas empresas saben manejar:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ascensores pequeños de época</strong> — muchos tienen puertas de reja y cabinas angostas que no admiten muebles grandes. Planificamos con anticipación qué piezas suben por ascensor y cuáles requieren soga o escalera.</li>
              <li><strong>Pisos y escaleras de mármol</strong> — cualquier golpe o marca puede costar fortunas en reparaciones. Cubrimos cada superficie con materiales de protección antes de mover el primer mueble.</li>
              <li><strong>Normas de consorcio muy estrictas</strong> — horarios de mudanza acotados, obligación de presentar seguros, restricción de acceso por ciertas entradas. Coordinamos todo antes del día.</li>
              <li><strong>Permisos de carga en la vía pública</strong> — calles como Alvear y Libertador requieren autorización para estacionar camiones. Gestionamos los permisos correspondientes.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Recoleta?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles complejos (placares, camas, escritorios)</li>
              <li>Embalaje profesional de objetos frágiles, vajilla y cuadros</li>
              <li>Protección de pisos de mármol, madera y alfombras durante toda la operación</li>
              <li>Cobertura especial para antigüedades, obras de arte y objetos de colección</li>
              <li>Coordinación previa con el encargado del edificio</li>
              <li>Camión adecuado al volumen de la mudanza</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Recoleta que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Recoleta histórica</strong> — zona del cementerio, edificios de principios del siglo XX</li>
              <li><strong>Barrio Parque</strong> — casas y residencias de gran porte con jardines</li>
              <li><strong>Corredor Alvear</strong> — zona de hoteles cinco estrellas, embajadas y edificios premium</li>
              <li><strong>Límite Santa Fe</strong> — zona de alta rotación residencial con edificios más modernos</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Recoleta</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen experiencia en mudanzas de antigüedades y obras de arte en Recoleta?</h3>
            <p>Sí. Contamos con personal capacitado en el manejo de muebles de alto valor, antigüedades y obras de arte. Utilizamos materiales de embalaje profesionales: papel de seda, espumas, mantas acolchadas y cajas especiales para cada pieza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo protegen los pisos de mármol y paredes de los edificios históricos?</h3>
            <p>Colocamos protectores especiales de goma y telas acolchadas sobre pisos de mármol, madera y materiales delicados. También protegemos las paredes y el interior de los ascensores de época antes de comenzar la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden trabajar en horarios restringidos de consorcio en Recoleta?</h3>
            <p>Sí. Coordinamos previamente con el encargado del edificio para conocer los horarios permitidos de carga y descarga. En Recoleta muchos consorcios tienen ventanas horarias acotadas y nosotros nos adaptamos sin inconvenientes.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Recoleta?</h3>
            <p>El costo depende del volumen de muebles, la cantidad de ambientes, el piso y si se requiere soga o montacargas. Ofrecemos presupuesto sin cargo vía WhatsApp o teléfono. El presupuesto es detallado y sin sorpresas el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación debo reservar una mudanza en Recoleta?</h3>
            <p>Recomendamos reservar con al menos una semana de anticipación. En temporada alta (diciembre–enero y julio) conviene hacerlo con dos semanas. Cuanto antes quede coordinado con el consorcio, más tranquila sale la mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-palermo" className="text-gold hover:underline text-sm">Palermo</Link>
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Belgrano</Link>
              <Link href="/blog/mudanzas-caballito" className="text-gold hover:underline text-sm">Caballito</Link>
              <Link href="/blog/mudanzas-san-telmo" className="text-gold hover:underline text-sm">San Telmo</Link>
              <Link href="/blog/mudanzas-almagro" className="text-gold hover:underline text-sm">Almagro</Link>
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
