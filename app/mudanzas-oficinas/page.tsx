import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas de Oficinas en Buenos Aires | Marino Mudanzas",
  description: "Mudanzas corporativas y de oficinas en CABA y GBA. Minimizamos el tiempo de inactividad de tu empresa. Más de 80 años de experiencia. Tel 4611-1818",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Mudanzas de Oficinas en Buenos Aires",
  "description": "Servicio profesional de mudanzas corporativas y de oficinas en CABA y GBA.",
  "url": "https://www.mudanzasmarino.com.ar/mudanzas-oficinas",
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
      "name": "¿Pueden trabajar de noche o los fines de semana para mudanzas de oficinas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Para mudanzas corporativas nos adaptamos al horario que mejor le convenga a tu empresa para minimizar el impacto en la operación. Consultanos para coordinar el horario ideal."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo lleva una mudanza de oficina?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende del tamaño. Un estudio profesional pequeño puede mudarse en medio día. Una oficina mediana de 20 personas suele llevar entre 1 y 2 días. Oficinas grandes o multipisos pueden requerir varios días de trabajo planificado por etapas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Manejan equipos de tecnología delicados en mudanzas corporativas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, tenemos experiencia en el traslado de computadoras, servidores, monitores y equipamiento técnico con embalaje especializado. Recomendamos hacer backup de toda la información antes de la mudanza como medida de precaución adicional."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que coordinar una mudanza de oficina?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para mudanzas corporativas recomendamos contactarnos con al menos 3 a 4 semanas de anticipación para poder hacer el relevamiento, preparar el presupuesto y planificar la logística correctamente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trasladan archivos y documentación confidencial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, trasladamos archivos y documentación con total confidencialidad y orden para que todo llegue exactamente donde tiene que estar. Nuestro personal firma acuerdos de confidencialidad cuando el cliente lo requiere."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas de Oficinas en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Mudarse de oficina es una operación que requiere planificación detallada para minimizar el tiempo de inactividad de tu empresa. En Marino Mudanzas realizamos mudanzas corporativas en Buenos Aires con más de 80 años de experiencia, trabajando con empresas de todos los tamaños — desde estudios profesionales hasta grandes corporaciones con múltiples pisos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio de mudanza de oficinas?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Planificación previa detallada:</strong> visitamos tu oficina antes de la mudanza para relevar el volumen, planificar la logística y coordinar los tiempos.</li>
              <li><strong>Traslado de mobiliario de oficina:</strong> escritorios, sillas, armarios, estanterías, muebles de recepción y todo el equipamiento de trabajo.</li>
              <li><strong>Manejo de equipos tecnológicos:</strong> computadoras, monitores, impresoras y servidores con el mayor cuidado y embalaje especializado.</li>
              <li><strong>Traslado de archivos y documentación:</strong> con total confidencialidad y orden para que todo llegue exactamente donde tiene que estar.</li>
              <li><strong>Desarmado y armado de mobiliario:</strong> muebles modulares, mamparas divisorias y todo lo que requiera desmontaje.</li>
              <li><strong>Trabajo fuera del horario laboral:</strong> podemos trabajar de noche o los fines de semana para no interrumpir la operación de tu empresa.</li>
              <li><strong>Seguro de carga:</strong> todo el equipamiento de tu empresa está asegurado durante el traslado.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Tipos de mudanzas corporativas que realizamos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Estudios profesionales:</strong> contadores, abogados, arquitectos y otros profesionales con volumen reducido y alta sensibilidad de documentación.</li>
              <li><strong>Oficinas medianas:</strong> empresas de 10 a 50 personas con coordinación de múltiples áreas y equipamiento variado.</li>
              <li><strong>Grandes corporaciones:</strong> mudanzas de múltiples pisos o edificios completos con planificación por etapas.</li>
              <li><strong>Locales comerciales:</strong> traslado de mobiliario, equipamiento y mercadería de locales en CABA y GBA.</li>
              <li><strong>Mudanzas de depósitos:</strong> traslado de stock, estanterías y equipamiento industrial con camiones de gran porte.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Empresas que confiaron en nosotros</h2>
            <p>A lo largo de más de 80 años hemos realizado mudanzas corporativas para empresas e instituciones como Coca-Cola, Banco Comafi, Banco Ciudad, Aeropuerto 2000, la Embajada de Qatar y la Embajada de Francia, entre muchas otras. Cada proyecto fue encarado con la misma profesionalidad y atención al detalle.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cómo planificamos tu mudanza de oficina?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>1. Visita de relevamiento:</strong> un coordinador visita tu oficina para evaluar el volumen y definir la logística.</li>
              <li><strong>2. Presupuesto detallado:</strong> te enviamos un presupuesto itemizado con todos los costos sin sorpresas.</li>
              <li><strong>3. Planificación de la mudanza:</strong> definimos el cronograma, los recursos necesarios y los responsables de cada área.</li>
              <li><strong>4. Ejecución:</strong> nuestro equipo trabaja de forma ordenada y eficiente, respetando los tiempos acordados.</li>
              <li><strong>5. Instalación en destino:</strong> armamos el mobiliario y dejamos cada cosa en su lugar según el plano de la nueva oficina.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas de oficinas</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden trabajar de noche o los fines de semana?</h3>
            <p>Sí. Para mudanzas corporativas nos adaptamos al horario que mejor le convenga a tu empresa para minimizar el impacto en la operación. Consultanos para coordinar el horario ideal.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tiempo lleva una mudanza de oficina?</h3>
            <p>Depende del tamaño. Un estudio profesional pequeño puede mudarse en medio día. Una oficina mediana de 20 personas suele llevar entre 1 y 2 días. Oficinas grandes o multipisos pueden requerir varios días de trabajo planificado por etapas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Manejan equipos de tecnología delicados?</h3>
            <p>Sí, tenemos experiencia en el traslado de computadoras, servidores, monitores y equipamiento técnico con embalaje especializado. Recomendamos hacer backup de toda la información antes de la mudanza como medida de precaución adicional.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que coordinar?</h3>
            <p>Para mudanzas corporativas recomendamos contactarnos con al menos 3 a 4 semanas de anticipación para poder hacer el relevamiento, preparar el presupuesto y planificar la logística correctamente.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trasladan archivos y documentación confidencial?</h3>
            <p>Sí, trasladamos archivos y documentación con total confidencialidad y orden. Nuestro personal firma acuerdos de confidencialidad cuando el cliente lo requiere.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Pedí tu presupuesto corporativo</h2>
            <p>Contactanos hoy para coordinar una visita de relevamiento sin cargo. Te preparamos un presupuesto detallado adaptado a las necesidades de tu empresa.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">WhatsApp: 11-5450-7435</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Artículos relacionados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/mudanzas-oficinas-buenos-aires" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas de oficinas en Buenos Aires</Link>
              <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">¿Cuánto cuesta una mudanza?</Link>
              <Link href="/blog/que-incluye-una-mudanza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">¿Qué incluye un servicio de mudanza?</Link>
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
