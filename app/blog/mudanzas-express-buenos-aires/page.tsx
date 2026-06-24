import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas Express en Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas express en Buenos Aires. Mudanzas urgentes y en el día en CABA y GBA. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas Express en Buenos Aires",
  "description": "Servicio de mudanzas express en Buenos Aires. Mudanzas urgentes coordinadas en 24 a 48 horas en CABA y GBA.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-express-buenos-aires",
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas Express en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>A veces las mudanzas no se pueden planificar con semanas de anticipación. Una situación imprevista, el vencimiento de un contrato o una oportunidad de trabajo pueden requerir una mudanza urgente. En Marino Mudanzas ofrecemos servicio de mudanzas express en Buenos Aires con más de 80 años de experiencia resolviendo situaciones de todo tipo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué es una mudanza express?</h2>
            <p>Una mudanza express es un servicio de traslado urgente que se coordina con muy poca anticipación — en algunos casos el mismo día o al día siguiente. A diferencia de una mudanza planificada, la mudanza express requiere mayor flexibilidad de ambas partes pero es perfectamente posible cuando las circunstancias lo requieren.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuándo necesitás una mudanza express?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vencimiento imprevisto de contrato de alquiler</li>
              <li>Situación de emergencia en el hogar — inundación, incendio, problemas estructurales</li>
              <li>Oportunidad laboral que requiere mudarse rápidamente</li>
              <li>Separación o divorcio con necesidad de traslado urgente</li>
              <li>Mudanza de familiar que necesita atención médica urgente</li>
              <li>Compra o alquiler de propiedad con entrega inmediata</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Con cuánta anticipación podemos coordinar?</h2>
            <p>En Marino Mudanzas hacemos lo posible para adaptarnos a tus tiempos. Para mudanzas pequeñas como monoambientes o departamentos de 2 ambientes podemos coordinar con 24 a 48 horas de anticipación. Para mudanzas más grandes necesitamos al menos 48 a 72 horas para organizar el equipo y los vehículos necesarios.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Consejos para una mudanza express exitosa</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contactanos lo antes posible — cuanto más tiempo tengamos, mejor podemos organizarnos</li>
              <li>Tené lista la mayor cantidad de cosas embaladas antes de que lleguemos</li>
              <li>Priorizá los objetos esenciales si el tiempo no alcanza para todo</li>
              <li>Coordiná con el encargado del edificio con anticipación para el uso del ascensor</li>
              <li>Tené listo el acceso a ambos domicilios</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas express</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Las mudanzas express tienen un costo adicional?</h3>
            <p>El costo de una mudanza express depende de la disponibilidad del momento. En general el precio es similar al de una mudanza planificada, aunque en períodos de alta demanda puede haber una diferencia. Consultanos directamente para obtener un presupuesto actualizado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden hacer mudanzas express los fines de semana?</h3>
            <p>Sí, trabajamos de lunes a sábado de 8 a 18hs. Para emergencias fuera de este horario consultanos — evaluamos cada caso particular.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿El seguro de carga aplica en mudanzas express?</h3>
            <p>El seguro de carga está disponible para mudanzas al interior del país, traslados de documentación sensible de bancos o empresas y equipos informáticos. Para mudanzas express locales en CABA y GBA, consultanos sobre las opciones de cobertura disponibles según tu caso.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Contactanos ahora</h2>
            <p>Para mudanzas urgentes la mejor forma de contactarnos es por WhatsApp — respondemos rápido y podemos darte una respuesta inmediata sobre disponibilidad.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">WhatsApp: 11-5450-7435</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Conocé nuestros servicios</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/mudanzas-residenciales" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas Residenciales</Link>
              <Link href="/mudanzas-oficinas" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas de Oficinas</Link>
              <Link href="/guardamuebles" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Guardamuebles</Link>
              <Link href="/mudanzas-interior" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas al Interior</Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};
