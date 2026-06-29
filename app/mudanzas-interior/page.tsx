import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas al Interior del País | Marino Mudanzas Buenos Aires",
  description: "Mudanzas de larga distancia desde Buenos Aires a todo el país y países limítrofes. Mudanzas exclusivas sin cargas parciales. Seguro de carga incluido. Más de 80 años de experiencia. Tel 4611-1818",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Mudanzas al Interior del País", "item": "https://www.mudanzasmarino.com.ar/mudanzas-interior" }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mudanzas al Interior del País desde Buenos Aires",
  "description": "Servicio de mudanzas de larga distancia desde Buenos Aires a todo el país y países limítrofes. Mudanzas exclusivas sin cargas parciales, con seguro de carga incluido.",
  "url": "https://www.mudanzasmarino.com.ar/mudanzas-interior",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Marino Mudanzas",
    "url": "https://www.mudanzasmarino.com.ar",
    "telephone": "+541146111818",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Juan Bautista Alberdi 2968",
      "addressLocality": "Flores",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    }
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tarda una mudanza al interior del país desde Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende de la distancia. Rosario puede hacerse en el día. Córdoba en 1 a 2 días. Mendoza, Tucumán o Bariloche requieren 2 a 3 días contando carga, viaje y descarga en destino."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen cargas parciales al interior del país?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Solo realizamos mudanzas exclusivas al interior del país. Esto garantiza mayor seguridad, menos manipulación de tus pertenencias y tiempos de entrega más precisos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que coordinar una mudanza al interior?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para mudanzas al interior recomendamos coordinar con al menos 3 semanas de anticipación. Para destinos muy lejanos o mudanzas grandes, lo ideal es 4 semanas."
      }
    },
    {
      "@type": "Question",
      "name": "¿El precio de la mudanza al interior incluye la descarga en destino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, el presupuesto incluye carga en Buenos Aires y descarga en destino. No hay costos ocultos ni cargos adicionales por distancia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Pueden guardar mis cosas si no tengo el domicilio de destino listo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, podemos combinar la mudanza al interior con nuestro servicio de guardamuebles en Buenos Aires para que tus pertenencias estén seguras hasta que estés listo en destino."
      }
    },
    {
      "@type": "Question",
      "name": "¿El seguro de carga está incluido en las mudanzas al interior?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, todas nuestras mudanzas al interior del país incluyen seguro de carga con cobertura total durante todo el trayecto."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al inicio</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas al Interior del País desde Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Las mudanzas de larga distancia desde Buenos Aires requieren planificación especial y una empresa de confianza que garantice que tus pertenencias lleguen en perfectas condiciones. En Marino Mudanzas realizamos mudanzas exclusivas al interior del país y países limítrofes con más de 80 años de experiencia. Tu camión, tus cosas, sin mezclas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Por qué elegir mudanzas exclusivas?</h2>
            <p>A diferencia de otros servicios que combinan cargas de distintos clientes en un mismo camión, en Marino Mudanzas realizamos mudanzas exclusivas: el camión es exclusivamente para tus pertenencias. Esto garantiza mayor seguridad, menos manipulación de tus objetos, tiempos de entrega más precisos y total confidencialidad.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Destinos frecuentes desde Buenos Aires</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Córdoba</strong> — 700 km, uno de los destinos más frecuentes. Servicio en 1 día.</li>
              <li><strong>Rosario</strong> — 300 km, traslado del día. Muy demandado.</li>
              <li><strong>Mendoza</strong> — 1.000 km, requiere planificación especial y 2 días de viaje.</li>
              <li><strong>Mar del Plata</strong> — 400 km, muy demandado en temporada estival.</li>
              <li><strong>Tucumán</strong> — 1.300 km, mudanzas exclusivas con escala planificada.</li>
              <li><strong>Bariloche</strong> — 1.600 km, destino frecuente para quienes se relocalizan al sur.</li>
              <li><strong>Salta y Jujuy</strong> — más de 1.500 km, con coordinación logística especial.</li>
              <li><strong>Uruguay, Chile y Paraguay</strong> — mudanzas internacionales con gestión de documentación aduanera.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye el servicio de mudanza al interior?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Embalaje profesional completo:</strong> protegemos cada mueble y objeto para soportar el viaje de larga distancia.</li>
              <li><strong>Carga y descarga en ambos domicilios:</strong> nuestro equipo trabaja en origen y en destino.</li>
              <li><strong>Desarmado y armado de muebles:</strong> en origen y en destino sin cargo adicional.</li>
              <li><strong>Seguro de carga incluido:</strong> cobertura total durante todo el trayecto.</li>
              <li><strong>Camión exclusivo:</strong> sin cargas parciales ni paradas intermedias no planificadas.</li>
              <li><strong>Seguimiento del traslado:</strong> te mantenemos informado durante todo el viaje.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Mudanzas internacionales</h2>
            <p>Realizamos mudanzas a países limítrofes — Uruguay, Chile, Paraguay y Bolivia — con gestión de la documentación aduanera necesaria. Para mudanzas internacionales recomendamos contactarnos con al menos 4 semanas de anticipación para coordinar todos los trámites.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas al interior</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tiempo tarda una mudanza al interior?</h3>
            <p>Depende de la distancia. Rosario puede hacerse en el día. Córdoba en 1 a 2 días. Mendoza, Tucumán o Bariloche requieren 2 a 3 días contando carga, viaje y descarga en destino.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen cargas parciales al interior?</h3>
            <p>No. Solo realizamos mudanzas exclusivas al interior del país. Esto garantiza mayor seguridad y tiempos de entrega precisos para tus pertenencias.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que coordinar?</h3>
            <p>Para mudanzas al interior recomendamos coordinar con al menos 3 semanas de anticipación. Para destinos muy lejanos o mudanzas grandes, lo ideal es 4 semanas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿El precio incluye la descarga en destino?</h3>
            <p>Sí, el presupuesto incluye carga en Buenos Aires y descarga en destino. No hay costos ocultos ni cargos adicionales por distancia.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden guardar mis cosas si no tengo el domicilio de destino listo?</h3>
            <p>Sí, podemos combinar la mudanza al interior con nuestro servicio de guardamuebles en Buenos Aires para que tus pertenencias estén seguras hasta que estés listo en destino.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿El seguro de carga está incluido?</h3>
            <p>Sí, todas nuestras mudanzas al interior del país incluyen seguro de carga con cobertura total durante todo el trayecto.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Pedí tu presupuesto sin cargo</h2>
            <p>Contactanos con tu origen, destino y fecha tentativa y te preparamos un presupuesto detallado sin compromiso.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">WhatsApp: 11-5450-7435</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Artículos relacionados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/mudanzas-larga-distancia-argentina" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas de larga distancia en Argentina</Link>
              <Link href="/blog/checklist-mudanza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Checklist completo para tu mudanza</Link>
              <Link href="/guardamuebles" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Guardamuebles en Buenos Aires</Link>
              <Link href="/blog/como-embalar-muebles-mudanza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Cómo embalar muebles para larga distancia</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
