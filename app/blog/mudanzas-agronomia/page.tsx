import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas en Agronomía Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Agronomía con más de 80 años de experiencia. Conocemos cada edificio del barrio. Embalaje incluido, seguro de carga y presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Agronomía</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Agronomía es uno de los barrios más pequeños y tranquilos de la Ciudad Autónoma de Buenos Aires. Ubicado en el noroeste de CABA, limítrofe con Paternal, Villa del Parque y Villa Pueyrredón, es un barrio predominantemente residencial con casas bajas, amplios espacios verdes y una atmósfera de barrio de los de antes. En Marino Mudanzas realizamos mudanzas en Agronomía con más de 80 años de experiencia en CABA.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Características de las mudanzas en Agronomía</h2>
            <p>Agronomía es uno de los barrios más tranquilos de CABA para operar una mudanza. Sus calles amplias, el bajo tráfico y el predominio de casas bajas fácilitan mucho la logística. Es un barrio donde raramente hay problemas de acceso o estacionamiento para los camiónes.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Predominio absoluto de casas bajas con jardín</li>
              <li>Calles muy tranquilas con muy poco tráfico</li>
              <li>Amplio espacio para estacionamiento de camiónes</li>
              <li>Pocos edificios en altura — mayoría planta baja y primer piso</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Nuestro servicio de mudanzas en Agronomía</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Embalaje profesional incluido:</strong> protegemos cada mueble con mantas acolchadas y film stretch.</li>
              <li><strong>Desarmado y armado de muebles:</strong> camas, placards, bibliotecas y todo lo necesario sin cargo adicional.</li>
              <li><strong>Mudanzas por soga:</strong> para los casos donde los muebles no entran por accesos estándar.</li>
              <li><strong>Seguro de carga:</strong> tus pertenencias están cubiertas durante todo el traslado.</li>
              <li><strong>Flota propia:</strong> camiónes de distintos tamaños para adaptarnos a cada mudanza.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Agronomía donde operamos</h2>
            <p>Cubrimos todo el barrio de Agronomía y las zonas limítrofes. Las calles más frecuentes donde trabajamos incluyen Av. San Martín, Av. de los Constituyentes, Av. Chorroarín, Av. Álvarez Thomas y todo el interior del barrio incluyendo los límites con Paternal, Villa del Parque y Villa Pueyrredón.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Agronomía</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de casas con jardín en Agronomía?</h3>
            <p>Sí, es el tipo de mudanza más frecuente en el barrio. Coordinamos el acceso por el frente o lateral según la disposición de la propiedad para fácilitar la carga de muebles voluminosos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación tengo que reservar?</h3>
            <p>Recomendamos reservar con al menos 10 a 15 días de anticipación. Para mudanzas a fin de mes lo ideal es reservar con 3 semanas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿También hacen mudanzas desde Agronomía hacia otros barrios o el GBA?</h3>
            <p>Sí, cubrimos mudanzas desde y hacia cualquier barrio de CABA y todo el Gran Buenos Aires. También realizamos mudanzas al interior del país.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trabajan los sábados?</h3>
            <p>Sí, trabajamos de lunes a sábado de 8 a 18hs.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Barrios cercanos donde también operamos</h2>
            <p>Si tu mudanza involucra barrios limítrofes, también cubrimos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="/blog/mudanzas-paternal" className="text-gold hover:underline">Mudanzas en Paternal</a></li>
              <li><a href="/blog/mudanzas-villa-del-parque" className="text-gold hover:underline">Mudanzas en Villa del Parque</a></li>
              <li><a href="/blog/mudanzas-villa-pueyrredon" className="text-gold hover:underline">Mudanzas en Villa Pueyrredón</a></li>
              <li><a href="/blog/mudanzas-villa-general-mitre" className="text-gold hover:underline">Mudanzas en Villa General Mitre</a></li>
              <li><a href="/blog/mudanzas-chacarita" className="text-gold hover:underline">Mudanzas en Chacarita</a></li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Contactános para tu mudanza en Agronomía</h2>
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
