import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Caballito Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Caballito con más de 80 años de experiencia. El barrio más céntrico de CABA. Embalaje incluido, escaleras sin ascensor y presupuesto sin cargo. Tel 4611-1818.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas en Caballito", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-caballito" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Caballito Buenos Aires",
  "description": "Servicio de mudanzas en Caballito, el barrio más céntrico de CABA. Más de 80 años de experiencia.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-caballito",
  "datePublished": "2026-04-22",
  "dateModified": "2026-06-29",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-caballito" },
  "author": { "@type": "Organization", "name": "Marino Mudanzas", "url": "https://www.mudanzasmarino.com.ar" },
  "publisher": { "@type": "Organization", "name": "Marino Mudanzas", "logo": { "@type": "ImageObject", "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png" } }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Pueden subir muebles grandes por escalera en Caballito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, nuestro equipo está capacitado para subir muebles por escalera o por soga en edificios sin ascensor o con ascensores pequeños, algo muy común en los edificios de los años 60 y 70 en Caballito."
      }
    },
    {
      "@type": "Question",
      "name": "¿Gestionan el permiso de carga en Avenida Rivadavia, Caballito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, conocemos los horarios permitidos para carga y descarga en Av. Rivadavia y sus alrededores. Coordinamos la mudanza para aprovechar los horarios habilitados y evitar problemas con el tráfico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar a fin de mes en Caballito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para mudanzas a fin de mes en Caballito recomendamos reservar con al menos 3 semanas de anticipación. Es la fecha más demandada del mes y la disponibilidad se llena rápido en el barrio más céntrico de CABA."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Caballito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El precio depende del volumen, el piso y si hay escalera sin ascensor. Un monoambiente en Caballito suele resolverse entre $80.000 y $150.000. Un 3 ambientes puede costar entre $200.000 y $380.000. El presupuesto es sin cargo y sin compromiso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajan los sábados en Caballito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, trabajamos de lunes a sábado de 8 a 18hs. Para mudanzas en sábado recomendamos reservar con al menos 15 días de anticipación para asegurar disponibilidad."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Caballito</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Caballito es el barrio más céntrico de Buenos Aires y uno de los de mayor demanda de mudanzas de toda la ciudad, con más de 180.000 habitantes y una alta rotación de inquilinos. En Marino Mudanzas llevamos décadas realizando mudanzas en Caballito con conocimiento preciso de cada restricción de tráfico, edificio sin ascensor y norma de consorcio del barrio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Caballito</h2>
            <p>Caballito tiene una alta densidad de edificios construidos entre los años 60 y 90, muchos de los cuales tienen ascensores pequeños o directamente carecen de ascensor. Esto es uno de los factores más importantes para cotizar una mudanza en el barrio: un séptimo piso sin ascensor requiere más personal y más tiempo que el mismo volumen en un edificio moderno.</p>
            <p>Avenida Rivadavia, que atraviesa el barrio de punta a punta, tiene restricciones de carga en horario pico. El estacionamiento de camiones en las calles internas también puede ser limitado. Nuestro equipo conoce todos estos detalles y los planifica con anticipación para que el día de la mudanza todo fluya sin imprevistos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanza en Caballito?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Embalaje profesional incluido:</strong> mantas acolchadas y film stretch para todos los muebles.</li>
              <li><strong>Desarmado y armado:</strong> camas, placards y bibliotecas sin cargo adicional.</li>
              <li><strong>Mudanzas por escalera o soga:</strong> para edificios sin ascensor o con ascensor chico.</li>
              <li><strong>Coordinación con encargado y consorcio:</strong> horarios, reserva de ascensor y documentación.</li>
              <li><strong>Flota propia:</strong> camiones de distintos tamaños según el volumen.</li>
              <li><strong>Presupuesto cerrado por escrito:</strong> sin sorpresas el día del traslado.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Caballito que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Caballito Norte</strong> — edificios modernos cerca de Rivadavia y Medrano</li>
              <li><strong>Caballito Sur</strong> — casas y PHs cerca del Parque Rivadavia</li>
              <li><strong>Primera Junta</strong> — zona comercial con mucha rotación de inquilinos</li>
              <li><strong>Acoyte</strong> — zona residencial tranquila con mezcla de casas y edificios</li>
              <li><strong>Flores / Almagro / Boedo límite</strong> — barrios limítrofes de alta demanda</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Caballito</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden subir muebles grandes por escalera?</h3>
            <p>Sí. Nuestro equipo está capacitado para subir muebles por escalera o por soga. Los edificios sin ascensor son muy comunes en Caballito y tenemos amplia experiencia en esta situación.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Gestionan el permiso de carga en Rivadavia?</h3>
            <p>Sí. Conocemos los horarios permitidos en Av. Rivadavia y sus alrededores, y planificamos la mudanza para aprovechar los horarios habilitados y evitar contratiempos con el tráfico.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación reservar a fin de mes?</h3>
            <p>Para mudanzas a fin de mes en Caballito: al menos 3 semanas. Es la fecha más demandada y la disponibilidad se llena rápido en el barrio más céntrico de CABA.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trabajan los sábados?</h3>
            <p>Sí, trabajamos de lunes a sábado de 8 a 18hs. Para sábados recomendamos reservar con 15 días de anticipación para asegurar disponibilidad.</p>

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
              <Link href="/blog/mudanzas-flores" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas en Flores</Link>
              <Link href="/blog/mudanzas-almagro" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas en Almagro</Link>
              <Link href="/blog/mudanzas-boedo" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas en Boedo</Link>
              <Link href="/blog/mudanzas-villa-crespo" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas en Villa Crespo</Link>
              <Link href="/mudanzas-residenciales" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Servicio de mudanzas residenciales</Link>
              <Link href="/blog/mudanzas-fin-de-mes" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas a fin de mes en Buenos Aires</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};
