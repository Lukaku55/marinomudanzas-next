import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en San Telmo Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en San Telmo con más de 80 años de experiencia. Especialistas en casas históricas, antigüedades y calles adoquinadas. Presupuesto sin cargo. Tel 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en San Telmo", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-telmo" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en San Telmo Buenos Aires | Marino Mudanzas",
  "description": "Mudanzas en San Telmo con más de 80 años de experiencia. Especialistas en casas históricas, antigüedades y calles adoquinadas. Presupuesto sin cargo. Tel 4611-1818.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-telmo",
  "datePublished": "2026-04-22",
  "dateModified": "2026-06-29",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-telmo" },
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
      "name": "¿Pueden mover antigüedades y muebles de época en San Telmo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Somos especialistas en el traslado de muebles antiguos, obras de arte y objetos de colección. Usamos materiales de embalaje especiales — papel de seda, mantas acolchadas, espumas — para proteger cada pieza durante el traslado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Pueden trabajar en las calles adoquinadas de San Telmo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Nuestros camiones están preparados para circular por las calles adoquinadas de San Telmo. Evaluamos previamente la mejor ruta de acceso para cada dirección, especialmente en las calles más angostas como Defensa, Bolívar y Chacabuco."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hay restricciones para mudanzas en San Telmo los domingos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Los domingos, la Feria de San Telmo restringe el acceso vehicular a varias calles de la zona, especialmente Defensa entre Plaza de Mayo y Parque Lezama. Recomendamos programar mudanzas en San Telmo de lunes a sábado para evitar estas restricciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en San Telmo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El costo depende del volumen y del tipo de propiedad. Las casas chorizo y conventillos de San Telmo suelen tener características que requieren más tiempo (umbrales angostos, escaleras de caracol, techos altos). Pedí un presupuesto sin cargo para tu caso específico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo es trabajar en las casas históricas de San Telmo sin ascensor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mayoría de las propiedades históricas de San Telmo no tienen ascensor. Trabajamos con escaleras empinadas, umbrales angostos y techos altos con experiencia. En casos donde los muebles no pueden pasar por la escalera, utilizamos soga desde las ventanas o patios internos."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en San Telmo</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>San Telmo es el barrio más antiguo de Buenos Aires y uno de los más exigentes para hacer una mudanza. Sus casas chorizo del siglo XIX, conventillos, calles adoquinadas y la Feria dominical que corta el tráfico crean un escenario que requiere experiencia real y planificación muy cuidadosa. En Marino Mudanzas llevamos décadas trabajando en San Telmo y conocemos cada rincón y cada restricción del barrio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Por qué San Telmo es el barrio más desafiante para mudanzas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Casas históricas sin ascensor</strong> — la gran mayoría de las propiedades de San Telmo son del siglo XIX y principios del XX. No tienen ascensor, tienen escaleras empinadas y umbrales angostos que complican el paso de muebles grandes.</li>
              <li><strong>Calles adoquinadas</strong> — Defensa, Bolívar, Chacabuco y otras calles adoquinadas generan vibración durante el traslado. Aseguramos cada objeto para que el movimiento no cause daños.</li>
              <li><strong>Casas chorizo y conventillos</strong> — la planta baja larga y angosta de las casas chorizo, con pasillos de 1 metro de ancho, requiere mucha coordinación para sacar muebles de tamaño normal.</li>
              <li><strong>Restricción dominical</strong> — la Feria de San Telmo los domingos cierra Defensa entre Plaza de Mayo y Parque Lezama. Programamos siempre mudanzas de lunes a sábado para evitar este problema.</li>
              <li><strong>Alto valor de los objetos</strong> — muchas propiedades de San Telmo tienen antigüedades, obras de arte y colecciones de alto valor que requieren embalaje especial y máximo cuidado.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanzas en San Telmo?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Embalaje especializado para antigüedades, obras de arte y objetos frágiles</li>
              <li>Manejo de muebles de madera antigua con técnicas de protección específicas</li>
              <li>Evaluación previa del acceso para calles angostas y casas históricas</li>
              <li>Mudanza por soga cuando los muebles no salen por la escalera o el pasillo</li>
              <li>Vehículo del tamaño adecuado para cada calle</li>
              <li>Presupuesto sin cargo y precio cerrado sin sorpresas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de San Telmo que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>San Telmo histórico</strong> — casas chorizo y conventillos del siglo XIX, la zona más exigente del barrio</li>
              <li><strong>Corredor Defensa</strong> — calle peatonal con alta rotación de inquilinos y locales</li>
              <li><strong>Parque Lezama</strong> — zona verde con casas de familia de gran porte y buena accesibilidad</li>
              <li><strong>Límite Montserrat</strong> — zona de transición más cerca del microcentro, con edificios de apartamentos</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en San Telmo</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden mover antigüedades y muebles de época en San Telmo?</h3>
            <p>Sí. Somos especialistas en el traslado de muebles antiguos, obras de arte y objetos de colección. Usamos papel de seda, mantas acolchadas y espumas para proteger cada pieza durante el traslado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden trabajar en las calles adoquinadas de San Telmo?</h3>
            <p>Sí. Nuestros camiones están preparados para las calles adoquinadas y evaluamos la mejor ruta de acceso para cada dirección, especialmente en calles como Defensa, Bolívar y Chacabuco.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hay restricciones para mudanzas en San Telmo los domingos?</h3>
            <p>Sí. La Feria de San Telmo los domingos restringe el acceso vehicular a varias calles. Recomendamos programar mudanzas de lunes a sábado para evitar estas restricciones.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en San Telmo?</h3>
            <p>Las propiedades históricas de San Telmo suelen requerir más tiempo (umbrales angostos, escaleras de caracol, techos altos). El costo se evalúa caso a caso. Pedí un presupuesto sin cargo para tu dirección específica.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo trabajan en casas sin ascensor en San Telmo?</h3>
            <p>La mayoría de las propiedades históricas de San Telmo no tienen ascensor. Trabajamos con escaleras empinadas y pasillos angostos con experiencia. En casos donde los muebles no pasan por la escalera, usamos soga desde las ventanas o patios internos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También hacemos mudanzas en barrios cercanos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-boedo" className="text-gold hover:underline text-sm">Boedo</Link>
              <Link href="/blog/mudanzas-almagro" className="text-gold hover:underline text-sm">Almagro</Link>
              <Link href="/blog/mudanzas-montserrat" className="text-gold hover:underline text-sm">Montserrat</Link>
              <Link href="/blog/mudanzas-recoleta" className="text-gold hover:underline text-sm">Recoleta</Link>
              <Link href="/blog/mudanzas-por-soga" className="text-gold hover:underline text-sm">Mudanzas por soga</Link>
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
