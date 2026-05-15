import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas en Villa Pueyrredón Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Villa Pueyrredón con más de 80 años de experiencia. Conocemos cada edificio del barrio. Embalaje incluido, seguro de carga y presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Villa Pueyrredón</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Villa Pueyrredón es un barrio residencial y familiar del noroeste de la Ciudad Autónoma de Buenos Aires. Limítrofe con Paternal, Villa del Parque y Saavedra, es un barrio de casas bajas, edificios de mediana altura y calles arboladas que mantienen un perfil tranquilo y apacible. En Marino Mudanzas realizamos mudanzas en Villa Pueyrredón con más de 80 años de experiencia en CABA.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Características de las mudanzas en Villa Pueyrredón</h2>
            <p>Villa Pueyrredón tiene una fisonomía predominantemente horizontal — casas bajas con jardín, algunos edificios de 4 a 6 pisos y muy pocos edificios de gran altura. Las calles son amplias y arboladas, lo que fácilita el estacionamiento de camiónes y las maniobras de carga y descarga.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Predominio de casas bajas con jardín y accesos amplios</li>
              <li>Calles arboladas y tranquilas — ideal para operativos de mudanza</li>
              <li>Edificios de mediana altura muchos sin ascensor</li>
              <li>Zona residencial con poco tráfico pesado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Nuestro servicio de mudanzas en Villa Pueyrredón</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Embalaje profesional incluido:</strong> protegemos cada mueble con mantas acolchadas y film stretch.</li>
              <li><strong>Desarmado y armado de muebles:</strong> camas, placards, bibliotecas y todo lo necesario sin cargo adicional.</li>
              <li><strong>Mudanzas por soga:</strong> para muebles que no entran por escalera en edificios sin ascensor.</li>
              <li><strong>Coordinación con el consorcio:</strong> nos encargamos de los permisos y horarios del edificio.</li>
              <li><strong>Seguro de carga:</strong> tus pertenencias están cubiertas durante todo el traslado.</li>
              <li><strong>Flota propia:</strong> camiónes de distintos tamaños para adaptarnos a cada mudanza.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Villa Pueyrredón donde operamos</h2>
            <p>Cubrimos todo el barrio de Villa Pueyrredón y las zonas limítrofes. Las calles más frecuentes donde trabajamos incluyen Av. Triunvirato, Av. de los Incas, Av. Álvarez Thomas, Olazábal, Arregui y todo el interior del barrio incluyendo los límites con Paternal, Villa del Parque y Saavedra.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Villa Pueyrredón</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas de casas con jardín en Villa Pueyrredón?</h3>
            <p>Sí, tenemos amplia experiencia en mudanzas de casas de familia. Coordinamos el acceso por el frente o lateral según la disposición de la propiedad para fácilitar la carga de muebles voluminosos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación tengo que reservar?</h3>
            <p>Recomendamos reservar con al menos 10 a 15 días de anticipación. Para mudanzas a fin de mes lo ideal es reservar con 3 semanas.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿También hacen mudanzas desde Villa Pueyrredón hacia otros barrios o el GBA?</h3>
            <p>Sí, cubrimos mudanzas desde y hacia cualquier barrio de CABA y todo el Gran Buenos Aires. También realizamos mudanzas al interior del país.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Trabajan los sábados?</h3>
            <p>Sí, trabajamos de lunes a sábado de 8 a 18hs.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Contactános para tu mudanza en Villa Pueyrredón</h2>
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
