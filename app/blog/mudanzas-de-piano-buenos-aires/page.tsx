import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas de Piano en Buenos Aires | Marino Mudanzas",
  description: "Especialistas en el traslado de pianos verticales y de cola en Buenos Aires. Técnicas profesionales, equipamiento especializado y más de 80 años de experiencia.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas de Piano en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>El traslado de un piano es una de las operaciones más complejas y delicadas dentro de una mudanza. Un piano vertical pesa entre 150 y 250 kg, mientras que uno de cola puede superar los 500 kg. Requieren personal especializado, equipamiento específico y una planificación cuidadosa. En Marino Mudanzas tenemos experiencia en el traslado de pianos en toda la Ciudad de Buenos Aires y el Gran Buenos Aires.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Tipos de piano y sus particularidades</h2>
            <p>Cada tipo de piano presenta desafíos distintos para su traslado:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Piano vertical (o de pared):</strong> el más común en hogares. Pesa entre 150 y 250 kg. Se puede mover parado con fajas y carros especiales.</li>
              <li><strong>Piano de media cola:</strong> pesa entre 300 y 400 kg. Requiere desmontar las patas y la tapa y transportarlo sobre su costado izquierdo.</li>
              <li><strong>Piano de cola completo:</strong> puede superar los 500 kg. Traslado muy complejo que requiere planificación detallada del recorrido.</li>
              <li><strong>Piano digital o eléctrico:</strong> mucho más liviano, pero igualmente frágil en sus partes electrónicas y la cubierta de las teclas.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Equipamiento necesario</h2>
            <p>El traslado profesional de un piano requiere herramientas específicas que una mudanza común no utiliza:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fajas ergonómicas de carga pesada</li>
              <li>Carro especializado para piano con ruedas de goma antideslizante</li>
              <li>Mantas acolchadas de gran tamaño</li>
              <li>Film stretch de alta resistencia</li>
              <li>Rampas de aluminio para desniveles</li>
              <li>Herramientas para desmontaje de patas (pianos de cola)</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">El proceso de traslado paso a paso</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Evaluación previa:</strong> visitamos el domicilio para evaluar el piano, el acceso, las escaleras y el recorrido.</li>
              <li><strong>Protección:</strong> cubrimos el piano completamente con mantas acolchadas fijadas con film stretch.</li>
              <li><strong>Desmontaje (si aplica):</strong> en pianos de cola, desmontamos las patas y la tapa antes del traslado.</li>
              <li><strong>Carga:</strong> utilizamos fajas y carro especializado para desplazarlo sin golpes ni torsiones.</li>
              <li><strong>Transporte:</strong> el piano viaja asegurado en el camión para evitar movimientos durante el trayecto.</li>
              <li><strong>Descarga y montaje:</strong> en destino rearmamos el instrumento y lo colocamos en el lugar indicado.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Escaleras, ascensores y accesos difíciles</h2>
            <p>Buenos Aires es una ciudad con muchos edificios sin ascensor y escaleras angostas. Para el traslado de pianos en estos casos contamos con varias soluciones:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Por escalera:</strong> con personal suficiente y técnica correcta podemos subir o bajar un piano vertical por escaleras estándar.</li>
              <li><strong>Por soga desde el exterior:</strong> cuando la escalera no permite el paso, elevamos el piano por la fachada del edificio con sistema de sogas y poleas.</li>
              <li><strong>Por ascensor:</strong> evaluamos previamente si el ascensor tiene las dimensiones y capacidad de carga suficientes.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Hay que afinar el piano después de la mudanza?</h2>
            <p>Sí. Cualquier traslado, aunque sea cuidadoso, puede afectar la afinación del piano por los cambios de temperatura, humedad y vibración durante el transporte. Se recomienda esperar al menos 2 semanas después de la mudanza antes de afinarlo, para que el instrumento se adapte al nuevo ambiente. Consultá con tu afinador habitual.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cuánto cuesta trasladar un piano en Buenos Aires</h2>
            <p>El precio depende de varios factores:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tipo y peso del piano</li>
              <li>Piso de origen y destino</li>
              <li>Presencia de ascensor o necesidad de soga</li>
              <li>Distancia entre los domicilios</li>
            </ul>
            <p>En Marino Mudanzas ofrecemos presupuesto sin cargo. Contactanos y te asesoramos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Trabajamos de lunes a sábado de 8 a 18hs. Consultanos por WhatsApp o teléfono para coordinar el traslado de tu piano.</p>
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
