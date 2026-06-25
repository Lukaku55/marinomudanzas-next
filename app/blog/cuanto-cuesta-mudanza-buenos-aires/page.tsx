import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "¿Cuánto cuesta una mudanza en Buenos Aires en 2026? | Marino Mudanzas",
  description: "¿Cuánto cuesta una mudanza en Buenos Aires? Precios reales por tamaño de vivienda: monoambiente, 2 y 3 ambientes. Guía actualizada 2026. Presupuesto sin cargo al 4611-1818.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "¿Cuánto cuesta una mudanza en Buenos Aires?", "item": "https://www.mudanzasmarino.com.ar/blog/cuanto-cuesta-mudanza-buenos-aires" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "¿Cuánto cuesta una mudanza en Buenos Aires en 2026?",
  "description": "Conocé los factores que definen el costo de una mudanza en Buenos Aires: volumen, distancia, piso, embalaje. Rangos de precios actualizados 2026.",
  "datePublished": "2026-03-10",
  "dateModified": "2026-06-25",
  "url": "https://www.mudanzasmarino.com.ar/blog/cuanto-cuesta-mudanza-buenos-aires",
  "author": { "@type": "Organization", "name": "Marino Mudanzas", "url": "https://www.mudanzasmarino.com.ar" },
  "publisher": { "@type": "Organization", "name": "Marino Mudanzas", "logo": { "@type": "ImageObject", "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png" } },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/cuanto-cuesta-mudanza-buenos-aires" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza de monoambiente en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de monoambiente en Buenos Aires es la más económica. El precio depende del piso, la distancia y si hay ascensor. Para obtener un precio exacto para tu situación, pedí un presupuesto sin cargo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza de 2 ambientes en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de departamento de 2 ambientes en Buenos Aires tiene un precio que varía según el piso, la distancia entre origen y destino, y si requiere maniobras especiales como elevación por soga. Consultanos para un presupuesto personalizado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye el precio de una mudanza profesional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un presupuesto de mudanza profesional en Buenos Aires incluye: embalaje de muebles con mantas y film stretch, desarmado y armado de muebles, carga y descarga, transporte en camión propio, y coordinación con el consorcio. El embalaje de objetos frágiles y el guardamuebles son servicios adicionales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué factores encarecen el precio de una mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los factores que más encarecen una mudanza son: piso alto sin ascensor, necesidad de elevar muebles por soga, gran volumen de pertenencias, mudanza a fin de mes o sábados, distancia larga entre origen y destino, y servicio de embalaje premium de objetos frágiles."
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

          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            ¿Cuánto cuesta una mudanza en Buenos Aires en 2026?
          </h1>
          <time className="font-body text-muted-foreground text-sm">10 de marzo de 2026 · Actualizado junio 2026</time>

          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>
              El costo de una mudanza en Buenos Aires depende principalmente del volumen de pertenencias, el piso, la distancia entre origen y destino, y los servicios requeridos. Un monoambiente sin complicaciones es el traslado más económico; una casa completa con maniobras por soga y embalaje premium puede multiplicar varias veces ese valor. La única forma de obtener un precio exacto es con un presupuesto personalizado — en Marino Mudanzas lo damos sin cargo y sin compromiso.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Factores que determinan el precio de una mudanza</h2>

            <p><strong className="text-foreground">1. Volumen de la mudanza:</strong> Es el factor más determinante. Se mide en metros cúbicos y depende de la cantidad de muebles, electrodomésticos y cajas. Un monoambiente tiene un volumen promedio de 15-20 m³, un departamento de 3 ambientes puede llegar a 40-50 m³, y una casa completa puede superar los 80 m³.</p>

            <p><strong className="text-foreground">2. Distancia entre origen y destino:</strong> Una mudanza dentro del mismo barrio no tiene el mismo costo que un traslado de CABA a zona norte o sur del GBA. La distancia impacta en el tiempo de viaje y la logística general.</p>

            <p><strong className="text-foreground">3. Piso y accesibilidad:</strong> Si vivís en un piso alto sin ascensor, el trabajo de los operarios se incrementa. Si hay que elevar muebles por soga desde el exterior o el acceso con el camión es complicado por calles angostas, esto también suma al presupuesto.</p>

            <p><strong className="text-foreground">4. Servicio de embalaje:</strong> El embalaje básico de muebles con mantas y film está siempre incluido. El embalaje premium de objetos frágiles como cristalería, obras de arte o instrumentos musicales tiene un costo adicional.</p>

            <p><strong className="text-foreground">5. Fecha y horario:</strong> Mudarse a fin de mes o los sábados suele tener mayor demanda. Elegir entre semana y en los primeros 15 días del mes es más conveniente.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Factores que incrementan el costo</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Piso alto sin ascensor (mayor esfuerzo de los operarios)</li>
              <li>Muebles muy grandes que requieren elevación por soga</li>
              <li>Gran volumen de pertenencias (necesidad de camión más grande o dos viajes)</li>
              <li>Mudanza a fin de mes (mayor demanda)</li>
              <li>Embalaje premium de objetos frágiles</li>
              <li>Distancia larga entre origen y destino en GBA</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cómo obtener el mejor precio para tu mudanza?</h2>
            <p>Pedí un presupuesto personalizado. En Marino Mudanzas hacemos una evaluación telefónica o por WhatsApp para dimensionar correctamente tu mudanza y darte un precio cerrado, sin sorpresas. Con más de 80 años de experiencia, garantizamos transparencia en cada presupuesto.</p>

            <p>Un presupuesto profesional debe especificar: cantidad de operarios, tamaño del camión, materiales de embalaje incluidos y horario estimado de trabajo. Desconfiá de presupuestos muy vagos o que no detallen los servicios incluidos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre el costo de una mudanza</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué incluye el precio de una mudanza profesional?</h3>
            <p>Incluye: embalaje de muebles con mantas y film stretch, desarmado y armado de muebles, carga y descarga, transporte en camión propio, y coordinación con el consorcio. El embalaje de objetos frágiles y el guardamuebles son servicios adicionales.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué factores encarecen el precio?</h3>
            <p>Piso alto sin ascensor, necesidad de elevar muebles por soga, gran volumen de pertenencias, mudanza a fin de mes o sábados, y distancia larga entre origen y destino.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo puedo reducir el costo de mi mudanza?</h3>
            <p>Elegí una fecha entre semana y en los primeros 15 días del mes, embalá vos mismo lo que podás, descartá objetos que no necesitás, y reservá con anticipación para tener más opciones de fecha.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 pt-8 border-t border-border">
            <a
              href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20solicitar%20un%20presupuesto%20de%20mudanza%20sin%20cargo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Pedí tu presupuesto gratis
            </a>
            <a
              href="tel:+541146111818"
              className="flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Llamanos: 4611-1818
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-4">Artículos relacionados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/que-incluye-una-mudanza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">¿Qué incluye un servicio de mudanza?</Link>
              <Link href="/blog/empresa-mudanzas-confiable-buenos-aires" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Cómo elegir una empresa confiable</Link>
              <Link href="/blog/checklist-mudanza" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Checklist completo de mudanza</Link>
              <Link href="/mudanzas-residenciales" className="bg-card border border-border rounded-lg px-4 py-3 font-body text-sm font-semibold text-foreground hover:border-gold/40 hover:text-gold transition-colors">Mudanzas Residenciales</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
