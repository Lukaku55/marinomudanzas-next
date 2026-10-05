import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas en Villa Santa Rita Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Villa Santa Rita con más de 80 años de experiencia. Embalaje incluido, seguro de carga y presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="article-main">
        <article className="article-shell container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="article-back">← Volver al blog</Link>
          <h1 className="article-title">Mudanzas en Villa Santa Rita</h1>
          <div className="article-body">
            <p>Villa Santa Rita es un barrio tranquilo y residencial del oeste de la Ciudad Autónoma de Buenos Aires. Limítrofe con Floresta, Monte Castro y Villa del Parque, es un barrio de casas bajas y edificios de mediana altura con un perfil familiar muy marcado. En Marino Mudanzas realizamos mudanzas en Villa Santa Rita con más de 80 años de experiencia en CABA.</p>

            <h2 className="article-h2">Características de las mudanzas en Villa Santa Rita</h2>
            <p>Villa Santa Rita tiene una fisonomía predominantemente horizontal con casas de familia, algunos edificios de 4 a 6 pisos y calles tranquilas con poco tráfico. Es un barrio donde las mudanzas se pueden organizar con comodidad gracias al amplio espacio disponible para los camiónes.</p>
            <ul className="article-list">
              <li>Predominio de casas bajas con jardín y accesos amplios</li>
              <li>Calles tranquilas con bajo tráfico — fácilita la carga y descarga</li>
              <li>Edificios de mediana altura sin ascensor en su mayoría</li>
              <li>Barrio limítrofe con Floresta y Monte Castro</li>
            </ul>

            <h2 className="article-h2">Nuestro servicio de mudanzas en Villa Santa Rita</h2>
            <ul className="article-list">
              <li><strong>Embalaje profesional incluido:</strong> protegemos cada mueble con mantas acolchadas y film stretch.</li>
              <li><strong>Desarmado y armado de muebles:</strong> camas, placards, bibliotecas y todo lo necesario sin cargo adicional.</li>
              <li><strong>Mudanzas por soga:</strong> para muebles que no entran por escalera en edificios sin ascensor.</li>
              <li><strong>Coordinación con el consorcio:</strong> nos encargamos de los permisos y horarios del edificio.</li>
              <li><strong>Seguro de carga:</strong> tus pertenencias están cubiertas durante todo el traslado.</li>
              <li><strong>Flota propia:</strong> camiónes de distintos tamaños para adaptarnos a cada mudanza.</li>
            </ul>

            <h2 className="article-h2">Zonas de Villa Santa Rita donde operamos</h2>
            <p>Cubrimos todo el barrio de Villa Santa Rita y las zonas limítrofes. Las calles más frecuentes donde trabajamos incluyen Av. Rivadavia, Av. Nazca, Av. San Martín y todo el interior del barrio.</p>

            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas en Villa Santa Rita</h2>

            <h3 className="article-h3">¿Con cuánta anticipación tengo que reservar?</h3>
            <p>Recomendamos reservar con al menos 10 a 15 días de anticipación. Para mudanzas a fin de mes lo ideal es reservar con 3 semanas.</p>

            <h3 className="article-h3">¿También hacen mudanzas desde Villa Santa Rita hacia otros barrios o el GBA?</h3>
            <p>Sí, cubrimos mudanzas desde y hacia cualquier barrio de CABA y todo el Gran Buenos Aires. También realizamos mudanzas al interior del país.</p>

            <h3 className="article-h3">¿Trabajan los sábados?</h3>
            <p>Sí, trabajamos de lunes a sábado de 8 a 18hs.</p>

            <h2 className="article-h2">Contactános para tu mudanza en Villa Santa Rita</h2>
            <p>Pedí tu presupuesto sin cargo hoy. Respondemos de inmediato por WhatsApp o teléfono.</p>
            <div className="article-cta">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-shimmer">WhatsApp: 11-5450-7435</a>
              <a href="tel:+541146111818" className="btn-navy">Llamános: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
