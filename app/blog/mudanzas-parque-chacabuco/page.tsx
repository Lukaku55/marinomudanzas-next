import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas en Parque Chacabuco Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Parque Chacabuco con más de 80 años de experiencia. Conocemos cada edificio del barrio. Embalaje incluido, seguro de carga y presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Parque Chacabuco</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Parque Chacabuco es un barrio tranquilo y familiar del sur de la Ciudad Autónoma de Buenos Aires. Ubicado entre Caballito, Boedo y Nueva Pompeya, es un barrio predominantemente residencial con casas de familia, edificios de mediana altura y amplias avenidas. En Marino Mudanzas realizamos mudanzas en Parque Chacabuco con más de 80 años de experiencia en CABA.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Características de las mudanzas en Parque Chacabuco</h2>
            <p>Parque Chacabuco tiene una fisonomía particular — predominan las casas bajas y los edificios de 4 a 6 pisos, muchos de los cuales fueron construidos en las décadas del 50 y 60 y no cuentan con ascensor. El barrio limita con el Parque Chacabuco propiamente dicho, lo que genera calles tranquilas y poco tráfico en muchas zonas, facilitando la carga y descarga.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Predominio de casas de familia con jardín y accesos amplios</li>
              <li>Edificios de mediana altura muchos sin ascensor</li>
              <li>Calles tranquilas con poco tráfico — ideal para operativos de mudanza</li>
              <li>Avenidas principales anchas como Asamblea, Directorio y Rivadavia</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Nuestro servicio de mudanzas en Parque Chacabuco</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Embalaje profesional incluido:</strong> protegemos cada mueble con mantas acolchadas y film stretch.</li>
              <li><strong>Desarmado y armado de muebles:</strong> camas, placards, bibliotecas y todo lo necesario sin cargo adicional.</li>
              <li><strong>Mudanzas por soga:</strong> para muebles que no entran por escalera en edificios sin ascensor.</li>
              <li><strong>Coordinación con el consorcio:</strong> nos encargamos de los permisos y horarios del edificio.</li>
              <li><strong>Seguro de carga:</strong> tus pertenencias están cubiertas durante todo el traslado.</li>
              <li><strong>Flota propia:</strong> camiones de distintos tamaños para adaptarnos a cada mudanza.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Parque Chacabuco donde operamos</h2>
            <p>Cubrimos todo el barrio de Parque Chacabuco y las zonas limítrofes. Las calles más frecuentes donde trabajamos incluyen Av. Asamblea, Av. Directorio, Av. Rivadavia, Pedro Echagüe, Lacarra, Eva Perón y todo el interior del barrio incluyendo los límites con Caballito, Boedo y Nueva Pompeya.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Parque Chacabuco</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de casas con jardín en Parque Chacabuco?</h3>
            <p>Sí, tenemos amplia experiencia en mudanzas de casas de familia con jardín. Coordinamos el acceso por el frente o lateral según la disposición de la propiedad para facilitar la carga de muebles voluminosos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación tengo que reservar?</h3>
            <p>Recomendamos reservar con al menos 10 a 15 días de anticipación. Para mudanzas a fin de mes lo ideal es reservar con 3 semanas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿También hacen mudanzas desde Parque Chacabuco hacia otros barrios o el GBA?</h3>
            <p>Sí, cubrimos mudanzas desde y hacia cualquier barrio de CABA y todo el Gran Buenos Aires. También realizamos mudanzas al interior del país.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trabajan los sábados?</h3>
            <p>Sí, trabajamos de lunes a sábado de 8 a 18hs.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Contactanos para tu mudanza en Parque Chacabuco</h2>
            <p>Pedí tu presupuesto sin cargo hoy. Respondemos de inmediato por WhatsApp o teléfono.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">WhatsApp: 11-5450-7435</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
