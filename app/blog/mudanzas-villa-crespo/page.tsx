import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Villa Crespo Buenos Aires | Marino Mudanzas",
  description: "Villa Crespo: el barrio que más crece en CABA. PHs recicladas, lofts y edificios nuevos. Precio cerrado sin sorpresas. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Villa Crespo", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-crespo" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Villa Crespo Buenos Aires | Marino Mudanzas",
  "description": "Villa Crespo: el barrio que más crece en CABA. PHs recicladas, lofts y edificios nuevos. Precio cerrado sin sorpresas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-crespo",
  "datePublished": "2026-07-13",
  "dateModified": "2026-07-13",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-crespo" },
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
      "name": "¿Cuánto cuesta una mudanza en Villa Crespo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento de 2 ambientes ronda los $150.000–$250.000. Una PH reciclada o loft puede ir desde $200.000 dependiendo del volumen y el tipo de acceso. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo manejan las PHs recicladas y lofts de Villa Crespo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las PHs recicladas y lofts de Villa Crespo suelen tener acceso por escaleras internas, techos altos y espacios abiertos que facilitan la entrada de muebles. Sin embargo, las escaleras suelen ser empinadas. Evaluamos el acceso previamente para planificar la mudanza sin sorpresas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es difícil estacionar el camión en Villa Crespo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La zona comercial de Av. Corrientes y Thames puede tener restricciones de estacionamiento. En las calles internas el acceso es más fácil. Coordinamos el horario de llegada para minimizar problemas de estacionamiento y evitar las horas de mayor tráfico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Villa Crespo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al menos una semana. Para fin de mes o sábados, 10–15 días. Villa Crespo tiene una de las tasas de rotación de inquilinos más altas de CABA por su oferta de PHs y departamentos en alquiler, especialmente a fin de mes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas comerciales en Villa Crespo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Villa Crespo tiene muchos locales, estudios creativos y showrooms. Realizamos mudanzas comerciales incluyendo el traslado de equipamiento, mobiliario de oficina y mercadería."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Villa Crespo</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Villa Crespo es hoy uno de los barrios con mayor crecimiento y rotación de inquilinos de CABA. La explosión de PHs recicladas, lofts industriales y edificios nuevos sobre Av. Corrientes y Thames trajo consigo una demanda constante de mudanzas de todo tipo. En Marino Mudanzas llevamos décadas trabajando en el barrio y conocemos bien las particularidades de cada tipo de propiedad.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo son las mudanzas en Villa Crespo</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>PHs recicladas</strong> — antiguas casas de planta baja convertidas en PHs modernas. Suelen tener techos altos que facilitan el movimiento de muebles grandes, pero escaleras empinadas hacia la planta alta.</li>
              <li><strong>Lofts industriales</strong> — espacios amplios y abiertos, generalmente en planta baja o primer piso. El acceso suele ser cómodo pero el volumen de muebles puede ser grande.</li>
              <li><strong>Edificios nuevos</strong> — buenas instalaciones con ascensor, pasillo de servicio y espacios de carga. Lo más sencillo de los tres tipos.</li>
              <li><strong>Alta rotación</strong> — Villa Crespo tiene una de las tasas más altas de cambio de inquilinos de CABA. Los turnos a fin de mes se llenan rápido.</li>
              <li><strong>Zona comercial activa</strong> — el corredor de Av. Corrientes y Thames puede tener tráfico y restricciones de estacionamiento. Coordinamos el horario de llegada para evitar demoras.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en Villa Crespo?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles (placares, camas, escritorios)</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Manejo de muebles en PHs con escalera interna y lofts</li>
              <li>Traslado de equipamiento comercial y de locales</li>
              <li>Vehículo del tamaño adecuado al volumen y a la calle</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Villa Crespo que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Corredor Thames</strong> — zona de mayor crecimiento con PHs recicladas y locales de diseño</li>
              <li><strong>Av. Corrientes</strong> — eje comercial con departamentos en alquiler y alta rotación de inquilinos</li>
              <li><strong>Zona Triunvirato</strong> — sector más residencial con casas y edificios de menor altura</li>
              <li><strong>Límite Palermo</strong> — zona de transición con edificios nuevos y buena accesibilidad</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Villa Crespo</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Villa Crespo?</h3>
            <p>Un 2 ambientes ronda los $150.000–$250.000. Una PH reciclada o loft puede ir desde $200.000 según el volumen y el acceso. Precio cerrado desde el presupuesto, sin costos adicionales.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo manejan las PHs recicladas y lofts?</h3>
            <p>Evaluamos el acceso previamente. Las escaleras empinadas de las PHs requieren coordinación extra, pero los espacios abiertos de los lofts facilitan el movimiento. Siempre sabemos con qué nos vamos a encontrar antes del día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Es difícil estacionar el camión en Villa Crespo?</h3>
            <p>En la zona comercial puede haber restricciones. En las calles internas el acceso es más fácil. Coordinamos el horario de llegada para minimizar esos problemas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos una semana. Para fin de mes o sábados, 10–15 días. Villa Crespo tiene alta rotación y los turnos se llenan rápido a fin de mes.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas comerciales en Villa Crespo?</h3>
            <p>Sí. Locales, estudios creativos y showrooms. Traslado de equipamiento, mobiliario de oficina y mercadería con precio cerrado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el tipo de propiedad, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-palermo" className="text-gold hover:underline text-sm">Palermo</Link>
              <Link href="/blog/mudanzas-almagro" className="text-gold hover:underline text-sm">Almagro</Link>
              <Link href="/blog/mudanzas-caballito" className="text-gold hover:underline text-sm">Caballito</Link>
              <Link href="/blog/mudanzas-colegiales" className="text-gold hover:underline text-sm">Colegiales</Link>
              <Link href="/blog/mudanzas-flores" className="text-gold hover:underline text-sm">Flores</Link>
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
