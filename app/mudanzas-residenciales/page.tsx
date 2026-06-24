import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas Residenciales en Buenos Aires | Marino Mudanzas",
  description: "Mudanzas de casas y departamentos en Buenos Aires. Embalaje incluido y más de 80 años de experiencia. ¡Pedí tu presupuesto sin cargo hoy! Tel 4611-1818",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mudanzas Residenciales en CABA y GBA",
  "description": "Servicio profesional de mudanzas residenciales en Buenos Aires con más de 80 años de experiencia.",
  "url": "https://www.mudanzasmarino.com.ar/mudanzas-residenciales",
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
      "name": "¿Con cuánta anticipación tengo que reservar una mudanza residencial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos reservar con al menos 15 días de anticipación, especialmente a fin de mes que es la fecha más demandada. Para mudanzas grandes o en temporada alta, lo ideal es reservar con 3 semanas."
      }
    },
    {
      "@type": "Question",
      "name": "¿El embalaje de los contenidos está incluido en la mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El embalaje de muebles con mantas y film está siempre incluido. El embalaje de contenidos — cristalería, vajilla, libros, objetos frágiles — es un servicio adicional donde un embalador va a tu domicilio 48 horas antes de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si tengo muebles muy grandes que no entran por el ascensor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Somos especialistas en mudanzas por soga. Elevamos y descendemos muebles por el exterior del edificio con técnicas profesionales y seguras. Consultanos el caso específico para evaluar la mejor solución."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hacen mudanzas residenciales los sábados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, trabajamos de lunes a sábado de 8 a 18hs. Los domingos no prestamos servicio salvo situaciones excepcionales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ofrecen seguro de carga?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El seguro de carga está disponible para mudanzas al interior del país, traslados de documentación sensible de bancos o empresas y equipos informáticos. Para mudanzas locales en CABA y GBA, consultanos sobre las opciones de cobertura disponibles."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al inicio</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas Residenciales en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>En Marino Mudanzas nos especializamos en mudanzas residenciales en Buenos Aires desde 1950. Trasladamos casas, departamentos, PHs y estudios en toda la Ciudad Autónoma de Buenos Aires y el Gran Buenos Aires con un servicio profesional, puntual y sin sorpresas. Cada mudanza es única y la tratamos como tal.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanza residencial?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Embalaje profesional incluido:</strong> protegemos todos los muebles con mantas acolchadas y film stretch para evitar golpes y rayones durante el traslado.</li>
              <li><strong>Desarmado y armado de muebles:</strong> nuestro equipo desarma y arma camas, placard, bibliotecas y todo lo que sea necesario sin cargo adicional.</li>
              <li><strong>Coordinación con el consorcio:</strong> nos encargamos de coordinar el uso del ascensor, los horarios permitidos y la documentación que requiera el edificio.</li>
              <li><strong>Seguro de carga:</strong> disponible para mudanzas al interior del país, traslados de documentación sensible de bancos o empresas y equipos informáticos. Consultanos si tu mudanza lo requiere.</li>
              <li><strong>Entrega de canastos y cajas:</strong> te entregamos los materiales con anticipación para que puedas empacar con tranquilidad.</li>
              <li><strong>Flota propia:</strong> contamos con camiones propios de distintos tamaños para adaptarnos al volumen de cada mudanza.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Tipos de mudanzas residenciales que realizamos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mudanzas de monoambientes y departamentos pequeños:</strong> rápidas y eficientes, generalmente se resuelven en medio día.</li>
              <li><strong>Mudanzas de departamentos de 2 y 3 ambientes:</strong> el servicio más demandado en CABA, con amplia experiencia en edificios con y sin ascensor.</li>
              <li><strong>Mudanzas de casas y PHs:</strong> traslados de mayor volumen con coordinación de varios camiones si es necesario.</li>
              <li><strong>Mudanzas por soga:</strong> cuando los muebles no entran por ascensor o escalera, utilizamos técnicas de elevación exterior con soga y aparejos.</li>
              <li><strong>Mudanzas express:</strong> servicio urgente para situaciones imprevistas con la mínima anticipación posible.</li>
              <li><strong>Mudanzas con guardamuebles:</strong> combinamos el traslado con almacenaje temporal en nuestras instalaciones en Flores.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cobertura en CABA y GBA</h2>
            <p>Realizamos mudanzas residenciales en todos los barrios de la Ciudad Autónoma de Buenos Aires — Palermo, Belgrano, Caballito, Recoleta, Almagro, Flores, Villa Urquiza, San Telmo, Boedo, Villa Crespo, Colegiales, Núñez, Saavedra, Liniers, Mataderos, Villa Devoto y todos los demás barrios de CABA.</p>
            <p>También cubrimos el Gran Buenos Aires: Vicente López, San Isidro, Tigre, Morón, La Matanza, Avellaneda, Quilmes, Lanús, San Fernando, Pilar, Hurlingham y más partidos del GBA.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cómo funciona el proceso?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>1. Pedís el presupuesto:</strong> nos contactás por WhatsApp o teléfono y te hacemos un presupuesto detallado sin cargo y sin compromiso.</li>
              <li><strong>2. Coordinamos la fecha:</strong> elegís la fecha y el horario que mejor te convenga, y te confirmamos la disponibilidad.</li>
              <li><strong>3. Entregamos los materiales:</strong> te llevamos cajas y canastos con anticipación para que puedas organizar el embalaje.</li>
              <li><strong>4. Día de la mudanza:</strong> nuestro equipo llega puntual, protege los muebles, carga el camión y realiza el traslado.</li>
              <li><strong>5. Instalación en destino:</strong> descargamos, subimos los muebles y armamos todo en tu nuevo hogar.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas residenciales</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación tengo que reservar?</h3>
            <p>Recomendamos reservar con al menos 15 días de anticipación, especialmente a fin de mes que es la fecha más demandada. Para mudanzas grandes o en temporada alta, lo ideal es reservar con 3 semanas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿El embalaje de los contenidos está incluido?</h3>
            <p>El embalaje de muebles con mantas y film está siempre incluido. El embalaje de contenidos — cristalería, vajilla, libros, objetos frágiles — es un servicio adicional donde un embalador va a tu domicilio 48 horas antes de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué pasa si tengo muebles muy grandes que no entran por el ascensor?</h3>
            <p>Somos especialistas en mudanzas por soga. Elevamos y descendemos muebles por el exterior del edificio con técnicas profesionales y seguras. Consultanos el caso específico para evaluar la mejor solución.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas los sábados?</h3>
            <p>Sí, trabajamos de lunes a sábado de 8 a 18hs. Los domingos no prestamos servicio salvo situaciones excepcionales.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Ofrecen seguro de carga?</h3>
            <p>Sí. El seguro de carga está disponible para mudanzas al interior del país, traslados de documentación sensible de bancos o empresas y equipos informáticos. Para mudanzas locales en CABA y GBA, consultanos sobre las opciones de cobertura disponibles.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Pedí tu presupuesto sin cargo</h2>
            <p>Contactanos hoy y recibí un presupuesto detallado para tu mudanza residencial. Sin compromiso y con respuesta inmediata.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">WhatsApp: 11-5450-7435</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Guías útiles para tu mudanza</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/checklist-mudanza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Checklist de mudanza completo</Link>
              <Link href="/blog/como-embalar-muebles-mudanza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Cómo embalar muebles correctamente</Link>
              <Link href="/blog/mudanzas-edificios-buenos-aires" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas en edificios de Buenos Aires</Link>
              <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">¿Cuánto cuesta una mudanza?</Link>
              <Link href="/blog/mudanzas-por-soga" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas por soga en Buenos Aires</Link>
              <Link href="/blog/como-armar-cajas-mudanza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Cómo armar cajas para mudanza</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
