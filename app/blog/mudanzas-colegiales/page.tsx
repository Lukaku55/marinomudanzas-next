import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Colegiales Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Colegiales, Buenos Aires. Barrio bohemio y tranquilo. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Colegiales</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Colegiales es un barrio bohemio y tranquilo ubicado entre Palermo y Belgrano, con una gran cantidad de casas bajas, PHs y edificios de baja altura. Su ambiente artistico y su creciente oferta gastronomica lo convierten en uno de los barrios mas buscados por jovenes profesionales. En Marino Mudanzas tenemos amplia experiencia en mudanzas en Colegiales.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Colegiales</h2>
            <p>Colegiales tiene calles angostas y arboladas que dan un caracter muy particular al barrio. Sus casas bajas y PHs suelen tener escaleras empinadas y espacios reducidos. La zona de la via del ferrocarril divide el barrio en dos sectores con caracteristicas distintas.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Colegiales que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Colegiales Norte</strong> — zona de PHs y casas bajas cerca de Belgrano</li>
              <li><strong>Colegiales Sur</strong> — zona de transicion con Palermo muy demandada</li>
              <li><strong>Federico Lacroze</strong> — corredor comercial con alta rotacion</li>
              <li><strong>Virrey Loreto</strong> — zona residencial tipica del barrio</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Colegiales</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Pueden mover muebles en casas bajas con escaleras angostas en Colegiales?</h3>
            <p>Si, tenemos experiencia en mudanzas en casas bajas y PHs con escaleras angostas, usando tecnicas especiales para mover muebles de gran tamano.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas de estudios de artistas en Colegiales?</h3>
            <p>Si, tenemos experiencia en el traslado de equipamiento artistico, obras de arte y materiales de estudio con el mayor cuidado.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicita tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o telefono y te damos un presupuesto sin cargo y sin compromiso. Trabajamos de lunes a sabado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedi tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
