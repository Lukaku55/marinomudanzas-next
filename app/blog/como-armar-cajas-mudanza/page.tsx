import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Armar Cajas para una Mudanza | Guía Completa | Marino Mudanzas",
  description: "Guia completa para armar y embalar cajas para mudanza. Tecnicas profesionales para proteger tus objetos y aprovechar el espacio. Marino Mudanzas Buenos Aires.",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Cómo Armar Cajas para una Mudanza</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Armar bien las cajas es uno de los factores más importantes para que tus pertenencias lleguen en perfectas condiciones al nuevo hogar. Una caja mal armada puede romperse durante el traslado o permitir que los objetos se muevan y se dañen. En esta guía te enseñamos las técnicas que usamos en Marino Mudanzas después de más de 80 años de experiencia.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Materiales que necesitás</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cajas de cartón resistente</strong> — de distintos tamaños según el contenido</li>
              <li><strong>Cinta de embalar ancha</strong> — al menos 48mm de ancho</li>
              <li><strong>Papel de diario o papel de embalaje</strong> — para envolver objetos</li>
              <li><strong>Marcador permanente</strong> — para etiquetar cada caja</li>
              <li><strong>Papel burbuja</strong> — para objetos muy frágiles</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo armar la base de la caja</h2>
            <p>La base es lo más importante. Cerrá el fondo con al menos 3 tiras de cinta — una en el centro y dos en los laterales. Para cajas pesadas, hacé una cruz con la cinta en el centro del fondo. Nunca uses una sola tira de cinta en el fondo porque cede fácilmente con el peso.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo distribuir el peso dentro de la caja</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Los objetos más pesados siempre van en el fondo de la caja</li>
              <li>Los objetos más livianos y frágiles van arriba</li>
              <li>No mezcles objetos muy pesados con objetos frágiles</li>
              <li>El peso ideal por caja es entre 10 y 15 kg — más que eso es difícil de manejar</li>
              <li>Llenás la caja hasta arriba para que no se aplaste con el peso de otras cajas encima</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo rellenar los espacios vacíos</h2>
            <p>Los espacios vacíos son el enemigo — permiten que los objetos se muevan y se golpeen durante el traslado. Usá papel de diario arrugado, ropa o toallas para rellenar los huecos. Nunca dejes espacios vacíos en una caja, especialmente si contiene objetos frágiles.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo embalar objetos frágiles</h2>
            <p>Cada objeto frágil debe ir envuelto individualmente en papel de diario o papel burbuja. Para cristalería, rellená el interior de las copas y vasos con papel arrugado antes de envolverlos por fuera. Colocá los objetos más frágiles de pie dentro de la caja, nunca acostados.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo etiquetar las cajas</h2>
            <p>Etiquetá cada caja en al menos dos lados con su contenido y el ambiente de destino — "Cocina - Vajilla", "Habitación - Ropa", "Living - Libros". Si la caja contiene objetos frágiles escribí "FRÁGIL" con letras grandes en todos los lados. Esto ayuda a los operarios a manipular cada caja con el cuidado adecuado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Errores comunes al armar cajas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sobrecargar las cajas — más de 15 kg es difícil de manejar y puede romperse</li>
              <li>No sellar bien el fondo — es la causa más común de que se rompa una caja</li>
              <li>Dejar espacios vacíos — los objetos se mueven y se rompen</li>
              <li>No etiquetar — después es imposible encontrar lo que necesitás</li>
              <li>Mezclar objetos de distintos ambientes en la misma caja</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Preferís que lo hagamos nosotros?</h2>
            <p>En Marino Mudanzas ofrecemos servicio de embalaje profesional — nos encargamos de armar todas las cajas con los materiales adecuados para cada tipo de objeto. Consultanos por nuestro servicio de embalaje premium.</p>
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
