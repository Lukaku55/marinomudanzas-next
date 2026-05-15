import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas en Versalles Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Versalles con más de 80 años de experiencia. Uno de los barrios más exclusivos del oeste de CABA. Embalaje incluido y presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Versalles</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Versalles es uno de los barrios más exclusivos y tranquilos del oeste de la Ciudad Autónoma de Buenos Aires. Con sus calles sinuosas y arboladas, casas de familia de alto nivel y un perfil muy residencial, es un barrio particular que requiere experiencia y cuidado especial. En Marino Mudanzas realizamos mudanzas en Versalles con más de 80 años de experiencia en CABA.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Características de las mudanzas en Versalles</h2>
            <p>Versalles tiene una fisonomía única en Buenos Aires — sus calles curvas y sinuosas, el predominio de casas con jardín de alto nivel y la tranquilidad del barrio hacen que las mudanzas requieran una planificación especial para el acceso de los camiónes.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Calles sinuosas y arboladas — planificación especial de acceso</li>
              <li>Predominio de casas de familia de alto nivel con jardín</li>
              <li>Uno de los barrios más tranquilos y exclusivos del oeste</li>
              <li>Experiencia en manejo de mobiliario de alto valor</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Nuestro servicio de mudanzas en Versalles</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Embalaje profesional incluido:</strong> protegemos cada mueble con mantas acolchadas y film stretch.</li>
              <li><strong>Desarmado y armado de muebles:</strong> camas, placards, bibliotecas y todo lo necesario sin cargo adicional.</li>
              <li><strong>Seguro de carga:</strong> tus pertenencias están cubiertas durante todo el traslado.</li>
              <li><strong>Flota propia:</strong> camiónes de distintos tamaños para adaptarnos a cada mudanza.</li>
              <li><strong>Coordinación completa:</strong> nos encargamos de todos los detalles logísticos del traslado.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cobertura en Versalles</h2>
            <p>Cubrimos todo el barrio de Versalles y las zonas limítrofes incluyendo Monte Castro y Villa Real. Las calles más frecuentes donde trabajamos incluyen Av. Rivadavia, Av. Segurola y las características calles curvas del interior del barrio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Versalles</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación tengo que reservar?</h3>
            <p>Recomendamos reservar con al menos 15 días de anticipación. Para mudanzas a fin de mes lo ideal es reservar con 3 semanas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿El precio incluye la descarga en Versalles?</h3>
            <p>Sí, el presupuesto incluye carga en origen y descarga en destino. No hay costos ocultos ni cargos adicionales por distancia.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trabajan los sábados?</h3>
            <p>Sí, trabajamos de lunes a sábado de 8 a 18hs.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Contactános para tu mudanza en Versalles</h2>
            <p>Pedí tu presupuesto sin cargo hoy. Respondemos de inmediato por WhatsApp o teléfono.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">WhatsApp: 11-5450-7435</a>
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
