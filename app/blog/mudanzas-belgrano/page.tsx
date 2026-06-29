import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Belgrano Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Belgrano con más de 80 años de experiencia. Belgrano R, C y Chico. Manejo de muebles de alto valor, coordinación con consorcios y presupuesto sin cargo. Tel 4611-1818.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Belgrano", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-belgrano" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Belgrano Buenos Aires",
  "description": "Servicio de mudanzas en Belgrano, Buenos Aires. Especialistas en Belgrano R, C y Chico. Más de 80 años de experiencia.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-belgrano",
  "datePublished": "2026-04-22",
  "dateModified": "2026-06-29",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-belgrano" },
  "author": { "@type": "Organization", "name": "Marino Mudanzas", "url": "https://www.mudanzasmarino.com.ar" },
  "publisher": { "@type": "Organization", "name": "Marino Mudanzas", "logo": { "@type": "ImageObject", "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png" } }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Coordinan con los encargados de edificios en Belgrano?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, coordinamos previamente con los encargados de edificios para respetar los horarios permitidos y los requisitos del consorcio. Muchos edificios de Belgrano tienen normas estrictas que conocemos de antemano."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen experiencia en mudanzas de casas grandes en Belgrano Chico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, contamos con camiones de distintos tamaños y personal especializado para mudanzas de casas de gran porte en Belgrano Chico y Belgrano R, incluyendo el desmontaje y montaje de muebles a medida y el manejo de objetos de alto valor."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar en Belgrano?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos reservar con al menos 15 días de anticipación. A fin de mes la demanda en Belgrano es muy alta, especialmente en la zona de Cabildo y Juramento. Para mudanzas de casas grandes en Belgrano Chico, lo ideal es 3 semanas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo lleva una mudanza en Belgrano?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un departamento chico en Belgrano C se resuelve en 3 a 4 horas. Un departamento de 3 ambientes tarda entre 5 y 8 horas. Una casa grande en Belgrano R o Belgrano Chico puede llevar un día completo o más."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Belgrano</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Belgrano es uno de los barrios más elegantes de Buenos Aires, con edificios de alta categoría, casas de gran porte y departamentos de lujo. En Marino Mudanzas llevamos más de 80 años realizando mudanzas en Belgrano R, Belgrano C y Belgrano Chico, con experiencia en el manejo de muebles de alto valor y el cumplimiento de las exigentes normas de consorcio del barrio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Belgrano</h2>
            <p>Belgrano tiene características que requieren planificación previa. Las avenidas Cabildo y Juramento concentran mucho tráfico y tienen restricciones horarias para carga y descarga. Las calles internas de Belgrano Chico son angostas y arboladas, con poco espacio de maniobra para camiones. Muchos edificios de Belgrano R tienen portería permanente, con normas estrictas de horario de mudanza y documentación requerida — conocemos cada edificio y lo coordinamos con anticipación.</p>
            <p>En Belgrano Chico predominan las casas y residencias con muebles de alto valor y en ocasiones antigüedades o arte. Nuestro personal está capacitado para el manejo cuidadoso de este tipo de objetos, con embalaje especializado y técnicas de traslado que minimizan cualquier riesgo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanza en Belgrano?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Embalaje profesional incluido:</strong> mantas acolchadas y film stretch para proteger todos los muebles.</li>
              <li><strong>Desarmado y armado de muebles:</strong> placard, camas, muebles a medida sin costo adicional.</li>
              <li><strong>Coordinación con encargado y consorcio:</strong> gestionamos horarios, reserva de ascensor y documentación.</li>
              <li><strong>Manejo de objetos de valor:</strong> embalaje reforzado para antigüedades, arte y muebles de alto valor.</li>
              <li><strong>Flota propia de distintos tamaños:</strong> desde utilitarios para mudanzas chicas hasta camiones de gran porte.</li>
              <li><strong>Presupuesto cerrado por escrito:</strong> sin cargos extra el día de la mudanza.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Belgrano que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Belgrano R</strong> — casas de gran porte y edificios residenciales de alta categoría</li>
              <li><strong>Belgrano C</strong> — zona comercial con alta densidad de edificios de departamentos</li>
              <li><strong>Belgrano Chico</strong> — embajadas, residencias y casas históricas</li>
              <li><strong>Núñez límite</strong> — zona residencial cerca del río</li>
              <li><strong>Colegiales / Villa Urquiza límite</strong> — barrios de alta rotación de inquilinos</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Belgrano</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Coordinan con los encargados de edificios en Belgrano?</h3>
            <p>Sí. Coordinamos previamente con los encargados para respetar los horarios y requisitos del consorcio. Muchos edificios de Belgrano tienen normas estrictas que conocemos de antemano para evitar contratiempos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen experiencia en mudanzas de casas grandes en Belgrano Chico?</h3>
            <p>Sí. Contamos con camiones de distintos tamaños y personal especializado para mudanzas de casas de gran porte, incluyendo el manejo de muebles de alto valor y objetos delicados.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tiempo lleva una mudanza en Belgrano?</h3>
            <p>Un departamento chico en Belgrano C: 3 a 4 horas. Un departamento de 3 ambientes: entre 5 y 8 horas. Una casa grande en Belgrano R o Chico: un día completo o más según el volumen.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Al menos 15 días. A fin de mes la demanda en Belgrano es muy alta. Para casas grandes en Belgrano Chico, lo ideal es 3 semanas de anticipación.</p>

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
              <Link href="/blog/mudanzas-palermo" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas en Palermo</Link>
              <Link href="/blog/mudanzas-nunez" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas en Núñez</Link>
              <Link href="/blog/mudanzas-colegiales" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas en Colegiales</Link>
              <Link href="/blog/mudanzas-villa-urquiza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas en Villa Urquiza</Link>
              <Link href="/mudanzas-residenciales" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Servicio de mudanzas residenciales</Link>
              <Link href="/blog/que-preguntar-antes-de-contratar-mudanza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Qué preguntar antes de contratar</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};
