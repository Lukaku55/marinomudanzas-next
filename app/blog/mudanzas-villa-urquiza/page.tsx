import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Villa Urquiza Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Villa Urquiza con más de 80 años de experiencia. Casas de gran porte, calles arboladas y buena accesibilidad. Presupuesto sin cargo. Tel 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Villa Urquiza", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-urquiza" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Villa Urquiza Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Villa Urquiza con más de 80 años de experiencia. Casas de gran porte, calles arboladas y buena accesibilidad. Presupuesto sin cargo. Tel 4611-1818.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-urquiza",
  "datePublished": "2026-04-22",
  "dateModified": "2026-06-29",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-urquiza" },
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
      "name": "¿Hacen mudanzas de casas grandes en Villa Urquiza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Villa Urquiza tiene muchas casas de gran porte con jardín y garaje. Contamos con camiones de distintos tamaños para adaptarnos al volumen de cada mudanza, incluyendo el desarmado y armado de muebles de grandes dimensiones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo es el acceso en Villa Urquiza para camiones de mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Villa Urquiza es uno de los barrios con mejor accesibilidad de CABA. Sus calles arboladas son amplias y tranquilas, y la Av. Triunvirato permite buena circulación de camiones. El estacionamiento suele ser más fácil que en barrios del centro."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Villa Urquiza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos reservar con al menos una semana de anticipación. Para mudanzas de casas grandes o a fin de mes, lo ideal es hacerlo con 10–15 días para asegurar disponibilidad de camión del tamaño adecuado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Villa Urquiza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un 2 ambientes ronda los $150.000–$250.000. Una casa de 3 ambientes con jardín puede ir desde $300.000 en adelante dependiendo del volumen. Pedí un presupuesto sin cargo para tu caso específico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan los sábados en Villa Urquiza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, trabajamos de lunes a sábado de 8 a 18hs. Para mudanzas en sábado recomendamos coordinar con al menos una semana de anticipación, especialmente para mudanzas de casas grandes que requieren camiones de mayor porte."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Villa Urquiza</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Villa Urquiza es uno de los barrios más tranquilos y residenciales del norte de CABA, con casas de gran porte, calles arboladas y un ritmo de vida más pausado que el resto de la ciudad. Esa tranquilidad también se traslada a las mudanzas: buen acceso para camiones, calles amplias y edificios modernos bien equipados. En Marino Mudanzas realizamos mudanzas en Villa Urquiza con la misma experiencia y profesionalismo de siempre.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Villa Urquiza</h2>
            <p>Villa Urquiza es uno de los barrios más cómodos para hacer mudanzas en CABA. Sus características lo diferencian positivamente de otros barrios:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Calles arboladas y amplias</strong> — la mayoría de las calles residenciales permiten fácil acceso y estacionamiento de camiones medianos y grandes.</li>
              <li><strong>Casas con jardín y garaje</strong> — muchas propiedades tienen acceso directo desde la vereda, lo que facilita enormemente la carga y descarga de muebles grandes.</li>
              <li><strong>Edificios modernos</strong> — los edificios más nuevos del barrio tienen buenos ascensores, pasillos amplios y espacios de carga bien diseñados.</li>
              <li><strong>Bajo tráfico</strong> — excepto la Av. Triunvirato en hora pico, el barrio es tranquilo y los tiempos de la mudanza se respetan mejor que en zonas más congestionadas.</li>
            </ul>
            <p>El principal desafío en Villa Urquiza son las <strong>mudanzas de casas grandes</strong>: mucho volumen, muebles de gran porte y a veces varias plantas. Para estas mudanzas asignamos el camión del tamaño adecuado y el personal necesario.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Villa Urquiza?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles de gran porte (placares, camas, bibliotecas)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Traslado de muebles de jardín, parrillas y elementos de exterior</li>
              <li>Camión del tamaño adecuado al volumen (incluyendo camiones grandes para casas)</li>
              <li>Personal suficiente para mudanzas de múltiples plantas</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Villa Urquiza que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Villa Urquiza Centro</strong> — zona comercial alrededor de Av. Triunvirato, con edificios de departamentos y comercios</li>
              <li><strong>Villa Urquiza Norte</strong> — zona residencial de casas de familia, la más tranquila y con mejores accesos</li>
              <li><strong>Límite Parque Saavedra</strong> — zona verde con casas amplias y buen acceso vehicular</li>
              <li><strong>Límite Villa Pueyrredón</strong> — zona de transición tranquila hacia el oeste</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Villa Urquiza</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de casas grandes en Villa Urquiza?</h3>
            <p>Sí. Contamos con camiones de distintos tamaños para mudanzas de casas grandes, incluyendo el desarmado y armado de muebles de grandes dimensiones y el traslado de muebles de jardín y parrillas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo es el acceso en Villa Urquiza para camiones de mudanza?</h3>
            <p>Villa Urquiza es uno de los barrios con mejor accesibilidad de CABA. Sus calles arboladas son amplias y tranquilas, y el estacionamiento suele ser más fácil que en barrios del centro.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar una mudanza en Villa Urquiza?</h3>
            <p>Al menos una semana. Para mudanzas de casas grandes o a fin de mes, 10–15 días para asegurar disponibilidad del camión del tamaño correcto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Villa Urquiza?</h3>
            <p>Un 2 ambientes ronda los $150.000–$250.000. Una casa de 3 ambientes con jardín puede ir desde $300.000 según el volumen. Pedí un presupuesto sin cargo para tu caso específico.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trabajan los sábados en Villa Urquiza?</h3>
            <p>Sí, de lunes a sábado de 8 a 18hs. Para sábados recomendamos reservar con al menos una semana de anticipación, especialmente para casas grandes.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Belgrano</Link>
              <Link href="/blog/mudanzas-saavedra" className="text-gold hover:underline text-sm">Saavedra</Link>
              <Link href="/blog/mudanzas-nunez" className="text-gold hover:underline text-sm">Núñez</Link>
              <Link href="/blog/mudanzas-colegiales" className="text-gold hover:underline text-sm">Colegiales</Link>
              <Link href="/blog/mudanzas-villa-pueyrredon" className="text-gold hover:underline text-sm">Villa Pueyrredón</Link>
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
