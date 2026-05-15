import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Palermo Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Palermo con más de 80 años de experiencia. Cubrimos Palermo Soho, Hollywood y Chico. Embalaje incluido, seguro de carga y presupuesto sin cargo. ¡Llamanos!",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Palermo Buenos Aires | Marino Mudanzas",
  "description": "Servicio de mudanzas en Palermo, Buenos Aires. Especialistas en Palermo Soho, Hollywood y Chico. Más de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-palermo",
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Palermo</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Palermo es el barrio más grande de Buenos Aires y uno de los más dinámicos en cuanto a mudanzas. Con más de 300.000 habitantes y una constante rotación de inquilinos y propietarios, la demanda de mudanzas en Palermo es muy alta. En Marino Mudanzas llevamos más de 80 años realizando mudanzas en Palermo Soho, Palermo Hollywood, Palermo Chico y Las Cañitas, con conocimiento detallado de cada calle, consorcio y restricción de tráfico del barrio.</p>
            
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Palermo</h2>
            <p>Palermo presenta desafíos únicos para las mudanzas. Sus calles angostas como Thames, Gurruchaga o Fitz Roy dificultan el acceso de camiones grandes. Muchos edificios de Palermo Soho son edificios reciclados sin ascensor, lo que requiere experiencia en mudanzas por escalera o por soga. En Palermo Hollywood abundan los lofts y espacios de techo alto con muebles de grandes dimensiones que requieren maniobras especiales.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Palermo que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Palermo Soho</strong> — edificios reciclados, PHs y departamentos en planta baja</li>
              <li><strong>Palermo Hollywood</strong> — lofts, estudios y departamentos modernos</li>
              <li><strong>Palermo Chico</strong> — casas de gran porte y embajadas</li>
              <li><strong>Las Cañitas</strong> — departamentos y casas cerca del Hipódromo</li>
              <li><strong>Villa Crespo límite</strong> — zona de transición con mucha demanda</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Palermo</h2>
            
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Palermo?</h3>
            <p>El costo depende del volumen, el piso y la distancia de cada mudanza. Por eso ofrecemos presupuesto sin cargo y sin compromiso adaptado a tu situación particular.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas por soga en Palermo?</h3>
            <p>Sí, somos especialistas en mudanzas por soga en Palermo, especialmente en edificios sin ascensor de Palermo Soho y en lofts de Palermo Hollywood con muebles de gran tamaño.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Gestionan los permisos de carga en Palermo?</h3>
            <p>Sí, coordinamos con los encargados de edificios y gestionamos los permisos de carga y descarga necesarios. En calles peatonales o con restricción de tráfico coordinamos el horario adecuado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Barrios cercanos donde también operamos</h2>
            <p>Si tu mudanza involucra barrios limítrofes a Palermo, también cubrimos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="/blog/mudanzas-belgrano" className="text-gold hover:underline">Mudanzas en Belgrano</a></li>
              <li><a href="/blog/mudanzas-villa-crespo" className="text-gold hover:underline">Mudanzas en Villa Crespo</a></li>
              <li><a href="/blog/mudanzas-colegiales" className="text-gold hover:underline">Mudanzas en Colegiales</a></li>
              <li><a href="/blog/mudanzas-chacarita" className="text-gold hover:underline">Mudanzas en Chacarita</a></li>
              <li><a href="/blog/mudanzas-recoleta" className="text-gold hover:underline">Mudanzas en Recoleta</a></li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
