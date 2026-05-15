import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas de Departamentos en Buenos Aires | Marino Mudanzas",
  description: "Especialistas en mudanzas de departamentos en Buenos Aires. Coordinamos con el consorcio, gestionamos el ascensor y resolvemos cualquier dificultad de acceso. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas de Departamentos en Buenos Aires | Marino Mudanzas",
  "description": "Especialistas en mudanzas de departamentos en Buenos Aires. Coordinamos con el consorcio, gestionamos el ascensor y resolvemos cualquier dificultad de acceso. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-departamentos-buenos-aires",
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas de Departamentos en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Las mudanzas de departamentos en Buenos Aires tienen características muy particulares que las diferencian de las mudanzas de casas. Los consorcios, los ascensores pequeños, las escaleras angostas y las restricciones de horario hacen que este tipo de mudanza requiera experiencia y planificación. En Marino Mudanzas somos especialistas en mudanzas de departamentos con más de 80 años de experiencia en CABA y GBA.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Coordinación con el consorcio</h2>
            <p>Antes de la mudanza coordinamos con el encargado del edificio para conocer los horarios permitidos de carga y descarga, el uso del ascensor de servicio y cualquier norma especial del consorcio. Muchos edificios de Buenos Aires tienen restricciones horarias estrictas que hay que respetar para evitar conflictos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Ascensores pequeños y escaleras angostas</h2>
            <p>Uno de los principales desafíos de las mudanzas de departamentos es que muchos muebles no entran en el ascensor o no pueden subir por la escalera. En estos casos utilizamos técnicas especiales como la subida por soga desde el exterior del edificio, o el desarmado completo de los muebles para que puedan pasar por espacios reducidos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Tipos de departamentos en Buenos Aires</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Monoambientes y 2 ambientes</strong> — mudanzas rápidas de 2 a 4 horas</li>
              <li><strong>Departamentos de 3 o más ambientes</strong> — requieren planificación más detallada</li>
              <li><strong>PHs</strong> — suelen tener escaleras internas que hay que considerar</li>
              <li><strong>Lofts</strong> — techos altos y espacios abiertos con muebles de gran porte</li>
              <li><strong>Departamentos en edificios históricos</strong> — requieren especial cuidado con las instalaciones</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuánto tiempo tarda una mudanza de departamento?</h2>
            <p>El tiempo depende del tamaño del departamento y la cantidad de muebles. Un monoambiente puede mudarse en 2 a 3 horas, un departamento de 2 ambientes en 3 a 5 horas, y uno de 3 ambientes o más puede llevar entre 6 y 8 horas. Estos tiempos pueden variar según el piso, el acceso y la distancia entre origen y destino.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas de departamentos</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden mover muebles que no entran en el ascensor?</h3>
            <p>Sí, somos especialistas en mudanzas por soga y en el desarmado de muebles para que pasen por espacios reducidos. Evaluamos cada caso previamente para determinar la mejor solución.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué pasa si el consorcio tiene horarios restrictivos?</h3>
            <p>Coordinamos la mudanza dentro de los horarios permitidos por el consorcio. Si los horarios son muy restrictivos, planificamos la mudanza en etapas para cumplir con todas las normas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Protegen los pisos y paredes del edificio durante la mudanza?</h3>
            <p>Sí, utilizamos protectores de pisos y esquineros para proteger las instalaciones del edificio durante toda la mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactános por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamános: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
