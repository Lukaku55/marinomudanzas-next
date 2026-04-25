import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas con Ascensor y sin Ascensor en Buenos Aires | Marino Mudanzas",
  description: "Todo sobre mudanzas en edificios con y sin ascensor en Buenos Aires. Técnicas, costos y soluciones para cada caso. Marino Mudanzas, especialistas desde 1950.",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas con Ascensor y sin Ascensor en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>En Buenos Aires conviven miles de edificios de distintas épocas y características. Algunos tienen ascensores amplios y modernos, otros tienen ascensores pequeños de época, y muchos no tienen ascensor en absoluto. En Marino Mudanzas tenemos experiencia en todos los casos y contamos con las técnicas y el equipamiento para resolver cualquier situación.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Mudanzas en edificios con ascensor</h2>
            <p>Cuando el edificio tiene ascensor, la mudanza es más fluida pero no siempre más simple. Muchos ascensores de Buenos Aires son pequeños y no permiten el paso de muebles grandes. En estos casos evaluamos previamente qué muebles pueden subir por el ascensor y cuáles necesitan otro método. También coordinamos con el consorcio para usar el ascensor de servicio si está disponible.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Mudanzas en edificios sin ascensor</h2>
            <p>Las mudanzas sin ascensor requieren más esfuerzo físico y tiempo. Nuestros operarios están entrenados para subir y bajar muebles por escalera de forma segura y eficiente. Para muebles que no pueden subir por la escalera por su tamaño o peso, utilizamos el método de soga desde el exterior del edificio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué es una mudanza por soga?</h2>
            <p>La mudanza por soga consiste en elevar o descender muebles por el exterior del edificio usando cuerdas y poleas especiales. Este método es especialmente útil para sofás, camas, armarios y otros muebles de gran tamaño que no pueden pasar por la escalera o el ascensor. En Marino Mudanzas somos especialistas en este tipo de maniobras.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Afecta el piso al costo de la mudanza?</h2>
            <p>Sí, el piso es uno de los factores que incide en el precio de una mudanza. Una mudanza en un primer piso es más simple que una en un décimo piso sin ascensor. Durante la evaluación previa tenemos en cuenta todos estos factores para darte un presupuesto justo y transparente.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden subir una heladera a un piso alto sin ascensor?</h3>
            <p>Sí, contamos con el equipamiento y el personal capacitado para subir heladeras y otros electrodomésticos pesados a pisos altos, tanto por escalera como por soga.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Necesito pedir permiso al consorcio para una mudanza por soga?</h3>
            <p>En la mayoría de los casos sí. Nosotros nos encargamos de coordinar con el encargado del edificio y gestionar los permisos necesarios para ocupar la vereda durante la maniobra.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hay un piso máximo para hacer mudanzas por soga?</h3>
            <p>No hay un límite fijo, pero evaluamos cada caso individualmente. Contamos con el equipamiento necesario para trabajar en edificios de hasta 10 pisos.</p>

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
