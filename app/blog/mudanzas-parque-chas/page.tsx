import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Parque Chas Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Parque Chas: el barrio de calles circulares de CABA. Conocemos cada calle del laberinto. Solo casas de los años 40. Precio cerrado → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Parque Chas", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-parque-chas" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Parque Chas Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Parque Chas: el barrio de calles circulares de CABA. Conocemos cada calle del laberinto. Solo casas de los años 40. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-parque-chas",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-parque-chas" },
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
      "name": "¿Por qué es difícil llegar a Parque Chas con GPS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parque Chas tiene un trazado urbano único en Buenos Aires: sus calles son circulares, con un diseño radial similar a una telaraña. Los GPS frecuentemente no interpretan correctamente la disposición de las calles o guían por rutas imposibles. Muchos repartidores y transportistas se pierden. Nuestros choferes conocen el barrio de memoria y llegan sin inconvenientes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipo de viviendas hay en Parque Chas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parque Chas tiene un predominio casi total de casas unifamiliares de los años 40. No hay edificios de departamentos ni torres. Las casas suelen ser de planta baja con patio o jardín, lo que simplifica enormemente el traslado de muebles grandes: no hay ascensores, consorcios ni restricciones de horario."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Parque Chas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al tratarse casi exclusivamente de casas de familia —muchas de tamaño mediano a grande—, las mudanzas en Parque Chas tienen un volumen mayor que el promedio. El costo se cotiza según el caso según el contenido de la casa. El precio es cerrado desde el presupuesto, sin sorpresas el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿El camión puede entrar a las calles angostas de Parque Chas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, aunque requiere planificación. Las calles del barrio son angostas y curvas, y no todos los vehículos pueden circular fácilmente. Seleccionamos el camión del tamaño adecuado según la calle de acceso relevada previamente. En casos donde la calle es muy angosta, usamos un camión más pequeño o hacemos el traslado en dos viajes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Parque Chas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Con 7 días de anticipación es suficiente en la mayoría de los casos. Parque Chas tiene rotación baja —es un barrio de propietarios— por lo que hay más disponibilidad que en barrios con alta rotación de inquilinos. Igualmente, para los sábados o fines de mes recomendamos reservar con 10 a 15 días."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Parque Chas</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Parque Chas es el barrio más singular de Buenos Aires: sus calles tienen un trazado circular y radial —como una telaraña— único en toda la ciudad. Las calles llevan nombres de países y ciudades del mundo, son angostas, curvas y se repiten en distintos anillos de manera que resultan imposibles de navegar para quien no las conoce. El GPS falla con frecuencia. Predominan las casas unifamiliares de los años 40, sin edificios de departamentos. Barrio tranquilo, con casi nada de tráfico y propietarios que lo habitan hace décadas. Nosotros conocemos cada calle.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Parque Chas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Calles circulares que confunden al GPS</strong> — el trazado radial del barrio hace que los sistemas de navegación fallen o guíen por rutas imposibles. Nuestros choferes conocen el barrio de memoria y llegan al domicilio sin inconvenientes.</li>
              <li><strong>Calles angostas con nombres de ciudades del mundo</strong> — Madrid, Londres, Berlín, Tokio: las calles del barrio tienen nombres de ciudades y son estrechas y curvas. Seleccionamos el camión del tamaño correcto según la calle de acceso.</li>
              <li><strong>Solo casas unifamiliares de los años 40</strong> — no hay edificios de departamentos en el barrio. Todas las mudanzas son de casas, sin consorcios, sin ascensores ni turnos de montacargas. El acceso es siempre directo desde la vereda.</li>
              <li><strong>Barrio muy tranquilo, casi sin tráfico</strong> — la baja circulación facilita estacionar el camión y trabajar sin presiones de tiempo ni interferencia de otros vehículos.</li>
              <li><strong>Casas de tamaño mediano a grande</strong> — muchas propiedades tienen patio, jardín y dependencias de servicio. Coordinamos el vaciado completo en una sola jornada con el personal y el vehículo adecuados.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Parque Chas?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Traslado de muebles de jardín, parrillas y objetos de exterior</li>
              <li>Selección del vehículo adecuado según el ancho de la calle de acceso</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
              <li>Choferes con conocimiento detallado de las calles circulares del barrio</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Parque Chas</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Por qué es difícil llegar a Parque Chas con GPS?</h3>
            <p>El trazado circular y radial del barrio confunde a los sistemas de navegación, que frecuentemente guían por rutas imposibles o sin salida. Nuestros choferes conocen el barrio de memoria y llegan al domicilio sin inconvenientes, independientemente de lo que indique el GPS.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué tipo de viviendas hay en Parque Chas?</h3>
            <p>Casi exclusivamente casas unifamiliares de los años 40. No hay edificios de departamentos. Las casas suelen tener patio o jardín, lo que simplifica el traslado: sin ascensor, sin consorcio, sin restricciones de horario.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Parque Chas?</h3>
            <p>Al tratarse de casas de familia de tamaño mediano a grande, el costo se cotiza según el caso según el contenido. El precio es siempre cerrado desde el presupuesto, sin sorpresas el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿El camión puede entrar a las calles angostas?</h3>
            <p>Sí, con planificación previa. Seleccionamos el camión adecuado según la calle de acceso relevada con anticipación. En casos de calles muy angostas usamos un vehículo más chico o realizamos el traslado en dos viajes.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>7 días es suficiente en la mayoría de los casos. El barrio tiene baja rotación de propietarios, lo que da más flexibilidad. Para sábados o fin de mes, reservar con 10 a 15 días.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad y a dónde te mudás. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-saavedra" className="text-gold hover:underline text-sm">Saavedra</Link>
              <Link href="/blog/mudanzas-villa-urquiza" className="text-gold hover:underline text-sm">Villa Urquiza</Link>
              <Link href="/blog/mudanzas-villa-ortuzar" className="text-gold hover:underline text-sm">Villa Ortúzar</Link>
              <Link href="/blog/mudanzas-paternal" className="text-gold hover:underline text-sm">Paternal</Link>
              <Link href="/blog/mudanzas-coghlan" className="text-gold hover:underline text-sm">Coghlan</Link>
              <Link href="/blog/mudanzas-chacarita" className="text-gold hover:underline text-sm">Chacarita</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
