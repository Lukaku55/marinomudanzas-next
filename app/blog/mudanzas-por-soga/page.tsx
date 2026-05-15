import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas por Soga en Buenos Aires | Marino Mudanzas",
  description: "Especialistas en mudanzas por soga en Buenos Aires. Subimos y bajamos muebles por el exterior cuando no entran por ascensor o escalera. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas por Soga en Buenos Aires | Marino Mudanzas",
  "description": "Especialistas en mudanzas por soga en Buenos Aires. Subimos y bajamos muebles por el exterior cuando no entran por ascensor o escalera. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-por-soga",
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
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas por Soga en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Las mudanzas por soga son una solución especializada para mover muebles de gran tamano que no pueden subir o bajar por el ascensor o la escalera de un edificio. En Marino Mudanzas somos especialistas en este tipo de servicio, con más de 80 años de experiencia y el equipamiento adecuado para realizarlo con total seguridad.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Que es una mudanza por soga?</h2>
            <p>Una mudanza por soga consiste en elevar o descender muebles por el exterior de un edificio usando cuerdas y poleas especiales. Este metodo se utiliza cuando los muebles son demasiado grandes para pasar por el ascensor, cuando las escaleras son muy angostas o empinadas, o cuando es necesario ingresar muebles por una ventana o balcon.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cuando se necesita una mudanza por soga?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sofas de gran tamano que no pasan por el ascensor</li>
              <li>Camas matrimoniales o king size en pisos altos</li>
              <li>Armarios y placares de gran porte</li>
              <li>Pianos verticales o de cola</li>
              <li>Muebles de comedor con sillas y mesa incluidas</li>
              <li>Cajas fuertes y elementos de gran peso</li>
              <li>Mudanzas en edificios sin ascensor</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Como realizamos las mudanzas por soga</h2>
            <p>Nuestro equipo especializado evalua previamente el acceso al edificio y el recorrido que deben hacer los muebles. Utilizamos sogas de alta resistencia, poleas y sistemas de seguridad certificados. Siempre coordinamos con el consorcio del edificio y solicitamos los permisos necesarios para ocupar la via publica durante la maniobra.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">En que barrios hacemos mudanzas por soga</h2>
            <p>Realizamos mudanzas por soga en toda la Ciudad de Buenos Aires y el Gran Buenos Aires. Los barrios con mayor demanda de este servicio son Palermo Soho, San Telmo, Recoleta, Almagro y Caballito, donde abundan los edificios antiguos sin ascensor o con ascensores pequenos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas por soga</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Es segura una mudanza por soga?</h3>
            <p>Si, cuando la realiza personal capacitado con el equipamiento adecuado. En Marino Mudanzas contamos con operarios especializados y seguros de carga que cubren cualquier eventualidad durante el traslado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Necesitan permiso del consorcio para hacer una mudanza por soga?</h3>
            <p>En la mayoria de los casos si. Nosotros nos encargamos de coordinar con el encargado del edificio y gestionar los permisos necesarios para ocupar la vereda durante la maniobra.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Cuanto tiempo tarda una mudanza por soga?</h3>
            <p>Depende de la cantidad de muebles y los pisos involucrados. En promedio, subir o bajar un mueble grande por soga lleva entre 30 y 60 minutos por pieza, incluyendo la preparacion y el aseguramiento.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Tienen seguro para mudanzas por soga?</h3>
            <p>Si, todos nuestros servicios de mudanza, incluidas las mudanzas por soga, estan cubiertos por un seguro de carga que protege tus pertenencias durante todo el proceso.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactános por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sabado de 8 a 18hs.</p>
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
