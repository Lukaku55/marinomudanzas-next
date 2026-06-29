import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Palermo Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Palermo con más de 80 años de experiencia. Palermo Soho, Hollywood y Chico. Embalaje incluido, mudanzas por soga y presupuesto sin cargo. Tel 4611-1818.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Palermo", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-palermo" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Palermo Buenos Aires",
  "description": "Servicio de mudanzas en Palermo, Buenos Aires. Especialistas en Palermo Soho, Hollywood y Chico. Más de 80 años de experiencia.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-palermo",
  "datePublished": "2026-04-22",
  "dateModified": "2026-06-29",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-palermo" },
  "author": { "@type": "Organization", "name": "Marino Mudanzas", "url": "https://www.mudanzasmarino.com.ar" },
  "publisher": { "@type": "Organization", "name": "Marino Mudanzas", "logo": { "@type": "ImageObject", "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png" } }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Palermo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El precio depende del volumen, el piso y la distancia al destino. Un monoambiente en Palermo puede costar entre $80.000 y $150.000. Un departamento de 3 ambientes suele costar entre $200.000 y $400.000. El presupuesto detallado es sin cargo y sin compromiso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas por soga en Palermo Soho?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, somos especialistas en mudanzas por soga en Palermo. Los edificios reciclados de Palermo Soho sin ascensor y los lofts de Palermo Hollywood con muebles de gran tamaño son situaciones frecuentes que manejamos con técnica profesional."
      }
    },
    {
      "@type": "Question",
      "name": "¿Gestionan los permisos de carga y descarga en Palermo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Coordinamos con los encargados de edificio y gestionamos los permisos de carga y descarga necesarios. En calles peatonales como Thames o Gurruchaga coordinamos el horario adecuado para evitar problemas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo lleva una mudanza en Palermo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un monoambiente en Palermo tarda entre 3 y 4 horas. Un departamento de 2 o 3 ambientes suele resolverse en media jornada. Para casas grandes en Palermo Chico o Las Cañitas puede requerir todo el día o incluso dos días."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza en Palermo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos reservar con al menos 15 días de anticipación, especialmente a fin de mes que es la fecha más demandada. En Palermo la demanda es alta todo el año por la rotación constante de inquilinos."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Palermo</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Palermo es el barrio más grande de Buenos Aires y uno de los de mayor demanda de mudanzas en toda la ciudad. En Marino Mudanzas llevamos más de 80 años realizando mudanzas en Palermo Soho, Palermo Hollywood, Palermo Chico y Las Cañitas, con conocimiento preciso de sus calles angostas, edificios sin ascensor y normas de consorcio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Palermo</h2>
            <p>Palermo presenta desafíos únicos que requieren experiencia. Las calles como Thames, Gurruchaga o Fitz Roy son angostas y dificultan el acceso de camiones grandes — trabajamos con flota de distintos tamaños para adaptarnos a cada caso. Los edificios reciclados de Palermo Soho suelen no tener ascensor, lo que exige técnica profesional de escalera o elevación por soga. En Palermo Hollywood abundan lofts con techos altos y muebles de grandes dimensiones que requieren maniobras especiales.</p>
            <p>Palermo Chico, con sus casas de gran porte y embajadas, demanda un nivel de cuidado extra en el manejo de objetos de valor. Las Cañitas y el área cercana al Hipódromo mezclan departamentos modernos con casas antiguas, cada una con sus propias particularidades de acceso.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanza en Palermo?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Embalaje profesional incluido:</strong> mantas acolchadas y film stretch para todos los muebles.</li>
              <li><strong>Desarmado y armado de muebles:</strong> camas, placards, bibliotecas sin cargo adicional.</li>
              <li><strong>Coordinación con el encargado:</strong> gestionamos el acceso al ascensor y los horarios del consorcio.</li>
              <li><strong>Mudanzas por soga:</strong> para muebles que no entran por escalera o ascensor.</li>
              <li><strong>Flota propia de camiones:</strong> de distintos tamaños según el volumen de cada mudanza.</li>
              <li><strong>Presupuesto detallado por escrito:</strong> sin sorpresas el día del traslado.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Palermo que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Palermo Soho</strong> — edificios reciclados, PHs y departamentos sin ascensor</li>
              <li><strong>Palermo Hollywood</strong> — lofts, estudios y departamentos con techos altos</li>
              <li><strong>Palermo Chico</strong> — casas de gran porte, embajadas y residencias</li>
              <li><strong>Las Cañitas</strong> — departamentos y casas cerca del Hipódromo</li>
              <li><strong>Villa Crespo / Chacarita límite</strong> — zona de alta rotación de inquilinos</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Palermo</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Palermo?</h3>
            <p>El precio depende del volumen, el piso y la distancia al destino. El presupuesto es sin cargo y sin compromiso — contactanos con el detalle de tu mudanza y te respondemos rápido.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas por soga en Palermo Soho?</h3>
            <p>Sí, somos especialistas en mudanzas por soga. Los edificios reciclados sin ascensor y los lofts con muebles de gran tamaño son situaciones frecuentes que manejamos con técnica y seguridad.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Gestionan los permisos de carga?</h3>
            <p>Sí. Coordinamos con el encargado y gestionamos los permisos de carga y descarga. En calles peatonales o con restricción de tráfico, coordinamos el horario adecuado con anticipación.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tiempo lleva una mudanza en Palermo?</h3>
            <p>Un monoambiente: 3 a 4 horas. Un departamento de 2 o 3 ambientes: media jornada. Casas grandes en Palermo Chico: un día completo o más según el volumen.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos 15 días. A fin de mes la demanda es muy alta en Palermo. Para fechas de alta demanda, lo ideal es reservar con 3 semanas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Barrios cercanos donde también operamos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/mudanzas-belgrano" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas en Belgrano</Link>
              <Link href="/blog/mudanzas-villa-crespo" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas en Villa Crespo</Link>
              <Link href="/blog/mudanzas-colegiales" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas en Colegiales</Link>
              <Link href="/blog/mudanzas-recoleta" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas en Recoleta</Link>
              <Link href="/mudanzas-residenciales" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Servicio de mudanzas residenciales</Link>
              <Link href="/blog/mudanzas-por-soga" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas por soga en Buenos Aires</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};
