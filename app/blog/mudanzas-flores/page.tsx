import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Flores Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Flores, nuestro barrio de origen desde 1950. Base en Av. Juan B. Alberdi 2968. Guardamuebles propio. Más de 80 años de experiencia. Tel 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Flores", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-flores" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Flores Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Flores, nuestro barrio de origen desde 1950. Base en Av. Juan B. Alberdi 2968. Guardamuebles propio. Más de 80 años de experiencia. Tel 4611-1818.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-flores",
  "datePublished": "2026-04-22",
  "dateModified": "2026-06-29",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-flores" },
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
      "name": "¿Tienen guardamuebles en Flores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Nuestro depósito de guardamuebles está ubicado en Av. Juan Bautista Alberdi 2968, en Flores. Ofrecemos espacios individuales, seguros, limpios y monitoreados las 24hs. Podés almacenar desde cajas sueltas hasta el contenido completo de un departamento."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tardan en llegar a Flores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al tener nuestra base operativa en el barrio, podemos estar en cualquier punto de Flores en muy poco tiempo. Esto nos permite ser muy puntuales con los horarios acordados, incluso en mudanzas de urgencia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas dentro del mismo barrio en Flores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, realizamos mudanzas dentro del mismo barrio, incluso entre calles cercanas o de una cuadra a otra. No existe distancia mínima para nuestro servicio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Pueden combinar la mudanza con guardamuebles temporario en Flores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrecemos un servicio combinado muy práctico: trasladamos tus muebles directamente a nuestro depósito si tu nuevo hogar aún no está listo. Cuando llegue el momento, los llevamos a destino sin costo adicional de retiro."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Flores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El costo depende de la cantidad de ambientes y el volumen de muebles. Como operamos desde Flores, los costos son menores que con empresas que vienen desde otros barrios. Pedí tu presupuesto sin cargo por WhatsApp."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Flores</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Flores es nuestro barrio de origen. Desde 1950, Marino Mudanzas tiene su base de operaciones en Av. Juan Bautista Alberdi 2968, a pocas cuadras del corazón del barrio. Conocemos cada calle, cada esquina y cada consorcio de Flores como ninguna otra empresa de mudanzas de Buenos Aires. Si necesitás mudarte en Flores — o desde o hacia Flores — somos la opción más cercana, más ágil y con más historia del barrio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">La ventaja de mudarse con la empresa del barrio</h2>
            <p>Tener la base operativa en Flores no es solo un dato sentimental: tiene ventajas concretas para vos como cliente.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Llegamos más rápido</strong> — el camión no viene desde otro barrio. Salimos desde Alberdi y en minutos estamos en tu puerta.</li>
              <li><strong>Mejor puntualidad</strong> — sin tráfico de larga distancia, los horarios se cumplen con más facilidad.</li>
              <li><strong>Guardamuebles a metros</strong> — si necesitás almacenar algo, nuestro depósito está en el mismo barrio. Combinamos mudanza y guardamuebles sin complicaciones.</li>
              <li><strong>Conocemos los edificios</strong> — sabemos qué consorcios tienen horarios restringidos, qué calles tienen restricción de camiones y dónde es más fácil hacer la operación.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Flores?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, cuadros y vajilla</li>
              <li>Traslado cuidadoso de electrodomésticos y equipos electrónicos</li>
              <li>Camión adecuado al volumen de la mudanza</li>
              <li>Opción de guardamuebles en nuestro depósito propio en Flores</li>
              <li>Presupuesto sin cargo y sin compromiso</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Flores que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Flores centro</strong> — zona comercial de Rivadavia y Nazca, con edificios de departamentos y alta rotación</li>
              <li><strong>Floresta</strong> — barrio residencial tranquilo con casas de familia y poca circulación de camiones</li>
              <li><strong>Villa Luro</strong> — zona de transición con demanda creciente y buena accesibilidad</li>
              <li><strong>Límite Parque Chacabuco</strong> — zona verde con casas amplias y mudanzas frecuentes</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Flores</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen guardamuebles en Flores?</h3>
            <p>Sí. Nuestro depósito está en Av. Juan Bautista Alberdi 2968, en Flores. Ofrecemos espacios individuales, seguros, limpios y monitoreados las 24hs. Podés almacenar desde cajas sueltas hasta el contenido completo de un departamento.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tiempo tardan en llegar a Flores?</h3>
            <p>Al tener nuestra base operativa en el barrio, podemos estar en cualquier punto de Flores en muy poco tiempo. Esto nos permite ser muy puntuales, incluso en mudanzas de urgencia.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas dentro del mismo barrio en Flores?</h3>
            <p>Sí, realizamos mudanzas dentro del mismo barrio, incluso entre calles cercanas. No existe distancia mínima para nuestro servicio.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden combinar la mudanza con guardamuebles temporario en Flores?</h3>
            <p>Sí, ofrecemos un servicio combinado muy práctico: trasladamos tus muebles directamente a nuestro depósito si tu nuevo hogar aún no está listo. Cuando llegue el momento, los llevamos a destino sin costo adicional de retiro.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Flores?</h3>
            <p>El costo depende de la cantidad de ambientes y el volumen de muebles. Como operamos desde Flores, los costos son menores que con empresas que vienen desde otros barrios. Pedí tu presupuesto sin cargo por WhatsApp.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-caballito" className="text-gold hover:underline text-sm">Caballito</Link>
              <Link href="/blog/mudanzas-boedo" className="text-gold hover:underline text-sm">Boedo</Link>
              <Link href="/blog/mudanzas-almagro" className="text-gold hover:underline text-sm">Almagro</Link>
              <Link href="/blog/mudanzas-liniers" className="text-gold hover:underline text-sm">Liniers</Link>
              <Link href="/guardamuebles" className="text-gold hover:underline text-sm">Guardamuebles</Link>
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
