import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Preparar los Electrodomésticos para una Mudanza | Marino Mudanzas",
  description: "Guía paso a paso para desconectar y preparar heladera, lavarropas, lavavajillas, TV y más antes de tu mudanza. Consejos de expertos para evitar roturas.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Cómo Preparar los Electrodomésticos para una Mudanza</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Los electrodomésticos son algunos de los elementos más delicados y costosos de una mudanza. Una preparación incorrecta puede terminar en roturas, pérdidas de agua o daños en otros objetos. En Marino Mudanzas te explicamos cómo preparar cada electrodoméstico para que llegue en perfectas condiciones a tu nuevo hogar.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Heladera y freezer</h2>
            <p>La heladera requiere la preparación más anticipada de todos los electrodomésticos. Seguí estos pasos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>24 a 48 horas antes:</strong> desenchufala y dejá la puerta abierta para que se descongele completamente. Nunca transportes una heladera con hielo o humedad adentro.</li>
              <li>Retirá todos los alimentos y cajones internos. Los cajones y estantes de vidrio viajan por separado, envueltos en papel de burbujas.</li>
              <li>Limpiá y secá el interior completamente antes de cerrar la puerta.</li>
              <li>Asegurá la puerta con cinta de papel para que no se abra durante el traslado.</li>
              <li><strong>Al llegar:</strong> esperá al menos 4 horas antes de enchufar para que los gases del compresor se asienten.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Lavarropas</h2>
            <p>El lavarropas es el electrodoméstico que más se daña si no se prepara correctamente. El tambor puede golpear contra la carcasa y romper el eje durante el transporte.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desconectá las mangueras de entrada y salida de agua con al menos 12 horas de anticipación para que drenen bien.</li>
              <li><strong>Pernos de transporte:</strong> la mayoría de los lavarropas vienen con pernos de transporte originales. Si los tenés, colocálos antes de mover el equipo. Si no los tenés, consultá con el técnico o fabricante.</li>
              <li>Dejá el tambor vacío y la puerta de portilla levemente abierta para que ventile.</li>
              <li>Enrollá las mangueras y asegurálas al cuerpo del equipo con cinta.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Lavavajillas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Retirá toda la vajilla y los cestos internos.</li>
              <li>Desconectá las mangueras de agua y dejá drenar.</li>
              <li>Limpiá y secá el interior para evitar malos olores.</li>
              <li>Asegurá la puerta con cinta de papel.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Televisor y equipos de audio</h2>
            <p>Los televisores modernos son frágiles a pesar de su tamaño. Lo ideal es conservar la caja original con el foam de protección.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Si tenés la caja original, usala. Si no, envolvé la pantalla con papel de burbujas y luego con frazada o manta acolchada.</li>
              <li>Nunca apoyés el televisor sobre la pantalla — siempre de canto o de espaldas.</li>
              <li>Los cables y controles van en una bolsa rotulada aparte.</li>
              <li>Desconectá todos los accesorios (decodificador, consolas, barras de sonido) con anticipación.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Microondas y horno eléctrico</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Retirá el plato giratorio del microondas y envolvélo por separado.</li>
              <li>Limpiá el interior y asegurá la puerta con cinta de papel.</li>
              <li>Envolvé el exterior con papel de burbujas o mantas.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Aire acondicionado</h2>
            <p>El desmontaje de los splits requiere un técnico habilitado, ya que implica manipular gases refrigerantes. No intentes desmontarlo vos mismo.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contratá un técnico de aire acondicionado para el desmontaje y el remontaje en el nuevo domicilio.</li>
              <li>Si vas a mover la unidad exterior, informale al técnico para que haga el vaciado correcto del gas.</li>
              <li>La unidad interior viaja sin el soporte de pared — el técnico debe reinstalarlo en destino.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Computadoras y electrónica</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hacé un backup de toda la información antes de la mudanza.</li>
              <li>Las computadoras de escritorio viajan mejor con el disco rígido desmontado si son equipos muy valiosos.</li>
              <li>Las notebooks van en su mochila o funda, nunca sueltas en una caja.</li>
              <li>Rotulá todos los cables con cinta de colores o stickers para facilitar la reconexión.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cocina a gas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>La desconexión del gas <strong>debe hacerla un gasista matriculado</strong>. No desconectes la cocina vos mismo.</li>
              <li>Retirá las parrillas y quemadores y embalálos por separado.</li>
              <li>En destino, la reconexión también debe hacerla un gasista.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Consejos generales</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fotografiá el estado de cada electrodoméstico antes de la mudanza como registro.</li>
              <li>Rotulá cada caja o envoltorio con el nombre del electrodoméstico y el ambiente de destino.</li>
              <li>Informale a los operarios de mudanza qué piezas son frágiles para que las manipulen con precaución.</li>
              <li>Los electrodomésticos viajan siempre parados, nunca acostados (salvo indicación del fabricante).</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>En Marino Mudanzas nos encargamos de la protección y el traslado de tus electrodomésticos con mantas acolchadas y film stretch. Contactanos para coordinar tu mudanza.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamános: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
