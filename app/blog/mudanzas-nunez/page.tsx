import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Núñez Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Núñez: torres modernas frente al río, casas con jardín y buen acceso para camiones. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Núñez", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-nunez" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Núñez Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Núñez: torres modernas frente al río, casas con jardín y buen acceso para camiones. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-nunez",
  "datePublished": "2026-07-13",
  "dateModified": "2026-07-13",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-nunez" },
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
      "name": "¿Cómo es el acceso para camiones en Núñez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Núñez tiene buena accesibilidad en general. Las torres frente al río sobre Av. del Libertador tienen espacios de carga bien señalizados. La zona de casas alrededor del Club River tiene calles amplias. El sector más cercano a Belgrano puede tener más tráfico en horas pico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Núñez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en torre moderna ronda los $150.000–$250.000. Una casa con jardín puede ir desde $300.000 según el volumen. Las torres de lujo suelen tener normas de consorcio más estrictas que pueden influir en el tiempo. Pedí presupuesto sin cargo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo manejan las normas de consorcio en las torres de Núñez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las torres frente al río tienen consorcios con reglas estrictas: horarios fijos, ascensor de servicio obligatorio, papeles de autorización. Coordinamos todo previamente con el encargado para que la mudanza no tenga demoras ni inconvenientes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Núñez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos reservar con al menos una semana de anticipación. Para mudanzas en torres con consorcio estricto, conviene consultar antes los horarios permitidos y reservar con 10–15 días para asegurar el turno del ascensor de servicio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan los sábados en Núñez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, trabajamos de lunes a sábado de 8 a 18hs. Para edificios con consorcio es importante verificar que permitan mudanzas los sábados, ya que algunos edificios de Núñez tienen restricciones los fines de semana."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Núñez</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Núñez es el barrio más al norte de CABA, con una mezcla única entre torres residenciales modernas frente al Río de la Plata, casas con jardín alrededor del Club Atlético River Plate y una conexión directa con Belgrano. Es un barrio con muy buena accesibilidad para camiones, pero con consorcios exigentes en los edificios de mayor categoría. En Marino Mudanzas realizamos mudanzas en Núñez con la coordinación y experiencia que cada tipo de propiedad requiere.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Núñez</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Torres frente al río</strong> — los edificios sobre Av. del Libertador y Av. Figueroa Alcorta tienen ascensores de servicio, espacios de carga designados y consorcios con reglas claras. Coordinamos todo previamente.</li>
              <li><strong>Casas con jardín</strong> — la zona interna alrededor de River tiene casas de familia con buen acceso directo desde la vereda, lo que facilita la carga de muebles grandes.</li>
              <li><strong>Buen acceso vehicular</strong> — las avenidas principales de Núñez permiten el ingreso de camiones sin los problemas de tráfico que se ven en barrios más céntricos.</li>
              <li><strong>Consorcios exigentes</strong> — los edificios de lujo de la zona tienen reglas estrictas de horario y documentación. Nos ocupamos de conseguir las autorizaciones necesarias.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Núñez?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles de gran porte</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Coordinación previa con el consorcio o encargado del edificio</li>
              <li>Traslado de muebles de jardín y elementos de exterior</li>
              <li>Camión del tamaño adecuado al volumen</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Núñez que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Núñez costero</strong> — torres residenciales sobre Av. del Libertador y frente al río, zona de mayor categoría del barrio</li>
              <li><strong>Núñez interior</strong> — casas de familia y PHs alrededor del estadio Monumental, zona tranquila con buen acceso</li>
              <li><strong>Límite Belgrano</strong> — zona de transición con edificios modernos y buena conectividad</li>
              <li><strong>Av. Cabildo</strong> — eje comercial con departamentos en alquiler y alta rotación</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Núñez</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo es el acceso para camiones en Núñez?</h3>
            <p>Muy bueno en general. Las torres sobre Av. del Libertador tienen espacios de carga bien señalizados. La zona de casas tiene calles amplias. El sector más cercano a Belgrano puede tener más tráfico en horas pico.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Núñez?</h3>
            <p>Un 2 ambientes en torre moderna ronda los $150.000–$250.000. Una casa con jardín puede ir desde $300.000 según el volumen. Pedí presupuesto sin cargo para tu caso específico.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo manejan las normas de consorcio en las torres de Núñez?</h3>
            <p>Coordinamos con el encargado previamente: horarios, ascensor de servicio, papeles de autorización. Todo queda acordado antes del día de la mudanza para que no haya demoras.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para torres con consorcio estricto, 10–15 días para asegurar el turno del ascensor de servicio y los permisos necesarios.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trabajan los sábados en Núñez?</h3>
            <p>Sí, de lunes a sábado de 8 a 18hs. Verificamos antes si el edificio permite mudanzas en sábado, ya que algunos tienen restricciones de fin de semana.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Belgrano</Link>
              <Link href="/blog/mudanzas-saavedra" className="text-gold hover:underline text-sm">Saavedra</Link>
              <Link href="/blog/mudanzas-villa-urquiza" className="text-gold hover:underline text-sm">Villa Urquiza</Link>
              <Link href="/blog/mudanzas-colegiales" className="text-gold hover:underline text-sm">Colegiales</Link>
              <Link href="/blog/mudanzas-recoleta" className="text-gold hover:underline text-sm">Recoleta</Link>
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
