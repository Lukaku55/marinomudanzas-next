import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Vélez Sársfield Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Vélez Sársfield: barrio del oeste de CABA con casas de familia y buen acceso vehicular. Atención en días de partido. Precio cerrado → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Vélez Sársfield", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-velez-sarsfield" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Vélez Sársfield Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Vélez Sársfield: barrio del oeste de CABA con casas de familia y buen acceso vehicular. Atención especial en días de partido. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-velez-sarsfield",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-velez-sarsfield" },
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
      "name": "¿Cuánto cuesta una mudanza en Vélez Sársfield?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes en Vélez Sársfield ronda los $140.000–$220.000. Una casa de familia puede ir desde $210.000 según el volumen. El precio es siempre cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de propiedades hay en Vélez Sársfield?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El barrio tiene predominio de casas de familia, muchas con jardín y garaje. También hay edificios bajos de 3 a 5 pisos en sus avenidas principales, Perito Moreno y Segurola. Es un barrio consolidado y tranquilo, con baja rotación y mucha estabilidad residencial."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es fácil el acceso para el camión en Vélez Sársfield?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Las calles internas del barrio son tranquilas y permiten estacionar el camión directamente frente a la propiedad sin inconvenientes. Av. Perito Moreno y Av. Segurola son los ejes de acceso, amplios y con buena circulación. No hay restricciones de carga especiales en el barrio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Los días de partido de Vélez afectan las mudanzas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Los días de partido en el estadio José Amalfitani, cercano al barrio, pueden generar restricciones de tránsito y cortes de calle en las inmediaciones. Recomendamos consultar el fixture antes de elegir la fecha de la mudanza. Si ya tenés el turno pactado, coordinaremos el acceso por las calles alternativas disponibles."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye el servicio de mudanzas en Vélez Sársfield?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El servicio incluye desarmado y armado de muebles, embalaje de objetos frágiles, traslado de muebles de jardín y exterior, selección del vehículo adecuado al tipo de propiedad, y precio cerrado desde el presupuesto sin cargo. No cobramos extras el día de la mudanza salvo condiciones no declaradas al momento de presupuestar."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Vélez Sársfield</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Vélez Sársfield es un barrio tranquilo del oeste de Buenos Aires, conocido por el estadio del club homónimo y por sus calles residenciales con predominio de casas de familia. Con Av. Perito Moreno y Av. Segurola como ejes principales, el barrio tiene buen acceso vehicular y calles internas sin los congestionamientos de las zonas más céntricas. Un detalle a considerar: los días de partido en el estadio José Amalfitani pueden generar restricciones de tránsito en las inmediaciones. En Marino Mudanzas lo contemplamos al planificar cada mudanza en el barrio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Vélez Sársfield</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Predominio de casas de familia</strong> — muchas con jardín, garaje y patio. Buen acceso para muebles de gran tamaño sin las complicaciones de consorcios ni ascensores.</li>
              <li><strong>Edificios bajos sobre avenidas</strong> — en Perito Moreno y Segurola hay edificios de 3 a 5 pisos, algunos con ascensor. Coordinamos el acceso y el uso de áreas comunes con anticipación.</li>
              <li><strong>Calles tranquilas con buen acceso vehicular</strong> — tráfico reducido que permite estacionar el camión directamente frente a la propiedad en la mayoría de los casos.</li>
              <li><strong>Días de partido: restricciones de tránsito</strong> — cuando hay partido en el estadio José Amalfitani, la zona puede tener cortes y desvíos. Verificamos el fixture antes de confirmar la fecha de la mudanza.</li>
              <li><strong>Barrio consolidado y tranquilo</strong> — baja rotación residencial con propietarios estables. La demanda de mudanzas es moderada y permite más flexibilidad en la elección de fechas.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Vélez Sársfield?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Traslado de muebles de jardín, parrillas y objetos de exterior</li>
              <li>Vehículo del tamaño adecuado a la propiedad</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
              <li>Coordinación de fecha considerando el calendario de partidos</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Vélez Sársfield</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Vélez Sársfield?</h3>
            <p>Un departamento de 2 ambientes ronda los $140.000–$220.000. Una casa de familia puede ir desde $210.000 según el volumen. El precio es siempre cerrado desde el presupuesto, sin costos adicionales el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué tipo de propiedades hay en el barrio?</h3>
            <p>Predominio de casas de familia con jardín y garaje. También hay edificios bajos de 3 a 5 pisos en las avenidas principales. Barrio consolidado y tranquilo con baja rotación residencial.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Es fácil el acceso para el camión?</h3>
            <p>Sí. Calles internas tranquilas que permiten estacionar directamente frente a la propiedad. Av. Perito Moreno y Av. Segurola tienen buena circulación. No hay restricciones de carga especiales en el barrio.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Los días de partido afectan las mudanzas?</h3>
            <p>Sí. Los partidos en el estadio José Amalfitani pueden generar cortes y desvíos en las inmediaciones. Recomendamos verificar el fixture antes de elegir la fecha. Si el turno ya está pactado, coordinaremos el acceso por las calles alternativas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué incluye el servicio?</h3>
            <p>Desarmado y armado de muebles, embalaje de frágiles, traslado de objetos de jardín y exterior, vehículo adecuado al tipo de propiedad y precio cerrado desde el presupuesto sin cargo. Sin extras el día de la mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad y a dónde te mudás. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-liniers" className="text-gold hover:underline text-sm">Liniers</Link>
              <Link href="/blog/mudanzas-mataderos" className="text-gold hover:underline text-sm">Mataderos</Link>
              <Link href="/blog/mudanzas-floresta" className="text-gold hover:underline text-sm">Floresta</Link>
              <Link href="/blog/mudanzas-monte-castro" className="text-gold hover:underline text-sm">Monte Castro</Link>
              <Link href="/blog/mudanzas-parque-avellaneda" className="text-gold hover:underline text-sm">Parque Avellaneda</Link>
              <Link href="/blog/mudanzas-villa-luro" className="text-gold hover:underline text-sm">Villa Luro</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
