import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Almagro Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Almagro con más de 80 años de experiencia. Especialistas en edificios de los años 40-50 y calles angostas. Presupuesto sin cargo. Tel 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Almagro", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-almagro" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Almagro Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en Almagro con más de 80 años de experiencia. Especialistas en edificios de los años 40-50 y calles angostas. Presupuesto sin cargo. Tel 4611-1818.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-almagro",
  "datePublished": "2026-04-22",
  "dateModified": "2026-06-29",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-almagro" },
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
      "name": "¿Hacen mudanzas de locales y estudios en Almagro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, realizamos mudanzas comerciales en Almagro, incluyendo el traslado de equipamiento de estudio, mobiliario de oficina y mercadería."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es difícil el acceso para camiones de mudanza en Almagro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Algunas calles de Almagro como Medrano, Salguero y Bulnes son angostas y dificultan el acceso de camiones grandes. También el tráfico sobre Corrientes y Rivadavia es intenso. Evaluamos previamente el mejor punto de carga según la dirección específica."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas de estudios y locales comerciales en Almagro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, realizamos mudanzas comerciales en Almagro, incluyendo el traslado de equipamiento de estudio, mobiliario de oficina, instrumentos musicales y mercadería."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Almagro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El costo depende del volumen, el piso y si hay ascensor. Un 2 ambientes en edificio con ascensor ronda los $150.000–$250.000. Sin ascensor puede ser más, dependiendo del piso. Pedí un presupuesto sin cargo para tu caso específico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Almagro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos reservar con al menos una semana de anticipación. Para mudanzas a fin de mes o sábados, conviene hacerlo con 10–15 días. Almagro tiene mucha rotación residencial y los turnos se llenan rápido en esas fechas."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Almagro</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Almagro es uno de los barrios más densos y activos de CABA: gran concentración de edificios de departamentos de los años 40 y 50, alta rotación de inquilinos y una mezcla de calles angostas y avenidas con mucho tráfico. En Marino Mudanzas llevamos más de 80 años realizando mudanzas en Almagro y conocemos cada particularidad del barrio, desde los ascensores más pequeños hasta los mejores horarios para evitar el tráfico de Corrientes.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Desafíos típicos de las mudanzas en Almagro</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Calles angostas</strong> — Medrano, Salguero, Bulnes y muchas calles internas no permiten camiones grandes. Usamos el vehículo del tamaño adecuado para cada dirección.</li>
              <li><strong>Edificios de los años 40-50</strong> — ascensores pequeños, escaleras empinadas y pasillos angostos son la norma. Sabemos qué muebles pasan parados y cuáles requieren inclinarlos o usar la escalera.</li>
              <li><strong>Tráfico en horas pico</strong> — la proximidad con la Av. Corrientes y Rivadavia genera tráfico intenso. Planificamos el horario de llegada para evitar demoras.</li>
              <li><strong>Estacionamiento difícil</strong> — en las zonas más comerciales de Almagro, estacionar el camión requiere coordinación. Solicitamos el espacio con anticipación cuando es necesario.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Almagro?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Traslado de equipamiento de estudio y locales comerciales</li>
              <li>Camión del tamaño adecuado a cada calle y volumen</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Almagro que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Almagro Norte</strong> — zona de edificios modernos cerca de Av. Corrientes, alta rotación</li>
              <li><strong>Almagro Sur</strong> — zona de casas y PHs cerca de Rivadavia, más tranquila</li>
              <li><strong>Corredor Medrano</strong> — eje comercial con mucha demanda de mudanzas</li>
              <li><strong>Castro Barros</strong> — zona residencial tranquila con buenos accesos</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Almagro</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de locales y estudios en Almagro?</h3>
            <p>Sí, realizamos mudanzas comerciales incluyendo el traslado de equipamiento de estudio, mobiliario de oficina y mercadería.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Es difícil el acceso para camiones de mudanza en Almagro?</h3>
            <p>Algunas calles como Medrano, Salguero y Bulnes son angostas. El tráfico sobre Corrientes y Rivadavia también suma complicaciones. Evaluamos el mejor punto de carga según la dirección específica y el horario más conveniente.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de estudios y locales comerciales en Almagro?</h3>
            <p>Sí, realizamos mudanzas comerciales incluyendo el traslado de equipamiento de estudio, instrumentos musicales, mobiliario de oficina y mercadería.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Almagro?</h3>
            <p>Un 2 ambientes con ascensor ronda los $150.000–$250.000. Sin ascensor puede ser más según el piso. Pedí un presupuesto sin cargo para tu caso específico por WhatsApp.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar una mudanza en Almagro?</h3>
            <p>Recomendamos reservar con al menos una semana. Para fin de mes o sábados, 10–15 días. Almagro tiene mucha rotación y los turnos se llenan rápido en esas fechas.</p>

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
              <Link href="/blog/mudanzas-flores" className="text-gold hover:underline text-sm">Flores</Link>
              <Link href="/blog/mudanzas-palermo" className="text-gold hover:underline text-sm">Palermo</Link>
              <Link href="/blog/mudanzas-oficinas-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas de oficinas</Link>
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
