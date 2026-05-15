import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¿Cuánto cuesta una mudanza en Buenos Aires en 2026? | Marino Mudanzas",
  description: "¿Cuánto cuesta una mudanza en Buenos Aires? Precios reales por tamaño de vivienda: monoambiente, 2 y 3 ambientes. Guía actualizada 2026. Presupuesto sin cargo al 4611-1818.",
};

import { MessageCircle, Phone } from "lucide-react";


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "¿Cuánto cuesta una mudanza en Buenos Aires en 2026? | Marino Mudanzas",
  "description": "Conocé los factores que definen el costo de una mudanza en Buenos Aires: volumen, distancia, piso, embalaje. Rangos de precios actualizados 2026. Presupuesto sin cargo.",
  "url": "https://www.mudanzasmarino.com.ar/blog/cuanto-cuesta-mudanza-buenos-aires",
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

          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            ¿Cuánto cuesta una mudanza en Buenos Aires en 2026?
          </h1>
          <time className="font-body text-muted-foreground text-sm">10 de marzo de 2026</time>

          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>
              Una de las preguntas más frecuentes que recibimos en Marino Mudanzas es: <strong className="text-foreground">"¿cuánto sale una mudanza?"</strong>. La respuesta depende de varios factores que vamos a detallar en esta guía para que puedas planificar tu presupuesto de forma realista y sin sorpresas.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Factores que determinan el precio de una mudanza</h2>

            <p>
              El costo de una mudanza en Buenos Aires no es fijo: varía según las características particulares de cada traslado. Los principales factores que influyen en el precio son:
            </p>

            <p>
              <strong className="text-foreground">1. Volumen de la mudanza:</strong> Este es el factor más determinante. Se mide en metros cúbicos y depende de la cantidad de muebles, electrodomésticos, cajas y objetos que necesités trasladar. Un monoambiente tiene un volumen promedio de 15-20 m³, mientras que un departamento de 3 ambientes puede llegar a 40-50 m³. Una casa completa puede superar los 80 m³ fácilmente.
            </p>

            <p>
              <strong className="text-foreground">2. Distancia entre origen y destino:</strong> Una mudanza dentro del mismo barrio no tiene el mismo costo que un traslado de CABA a zona norte o sur del GBA. La distancia impacta en el tiempo de viaje, el consumo de combustible y la logística general.
            </p>

            <p>
              <strong className="text-foreground">3. Piso y accesibilidad:</strong> Si vivís en un piso alto sin ascensor, el trabajo de los operarios se incrementa considerablemente. También influye si hay que hacer maniobras especiales, como subir muebles por soga desde el exterior del edificio, o si el acceso con el camión es complicado por calles angostas o restricciones del consorcio.
            </p>

            <p>
              <strong className="text-foreground">4. Servicio de embalaje:</strong> El embalaje básico (protección de muebles con mantas y film) suele estar incluido. Pero si necesitás un embalaje premium para objetos frágiles como cristalería, obras de arte o instrumentos musicales, esto tiene un costo adicional. En Marino Mudanzas ofrecemos servicio de embalaje profesional con materiales de primera calidad.
            </p>

            <p>

            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Rangos de precios orientativos en 2026</h2>

            <p>
              
            </p>

            <p>
              El precio varía según cada caso particular. Para obtener un presupuesto actualizado y sin compromiso, te recomendamos contactarnos directamente. En Marino Mudanzas te damos un precio cerrado y transparente, sin sorpresas.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cómo obtener el mejor precio para tu mudanza?</h2>

            <p>
              Nuestra recomendación es solicitar un presupuesto personalizado. En Marino Mudanzas ofrecemos presupuestos sin cargo y sin compromiso. Podemos hacer una evaluación telefónica o por WhatsApp para dimensionar tu mudanza y darte un precio cerrado, sin sorpresas. Con más de 80 años de experiencia, garantizamos transparencia en cada presupuesto.
            </p>

            <p>
              Evitá contratar servicios que no detallen qué incluyen en el precio. Un presupuesto profesional debe especificar: cantidad de operarios, tamaño del camión, materiales de embalaje incluidos, seguros y horario de trabajo estimado. Desconfiá de precios demasiado bajos que no incluyan seguro de carga.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 pt-8 border-t border-border">
            <a
              href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20solicitar%20un%20presupuesto%20de%20mudanza%20sin%20cargo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[hsl(142,70%,35%)] text-primary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Pedí tu presupuesto gratis
            </a>
            <a
              href="tel:+541146111818"
              className="flex items-center gap-3 bg-navy text-primary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Llamános: 4611-1818
            </a>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
