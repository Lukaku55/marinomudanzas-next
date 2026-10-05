import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas en Floresta Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Floresta con más de 80 años de experiencia. Barrio vecino a Flores, nuestro lugar de origen. Embalaje incluido y presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="article-main">
        <article className="article-shell container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="article-back">← Volver al blog</Link>
          <h1 className="article-title">Mudanzas en Floresta</h1>
          <div className="article-body">
            <p>Floresta es un barrio residencial del oeste de la Ciudad Autónoma de Buenos Aires, vecino a Flores, nuestro barrio de origen desde 1950. Con calles arboladas, casas de familia y edificios de mediana altura, es un barrio que conocemos muy bien. En Marino Mudanzas realizamos mudanzas en Floresta con más de 80 años de experiencia en CABA.</p>

            <h2 className="article-h2">Características de las mudanzas en Floresta</h2>
            <p>Floresta tiene una fisonomía similar a la de Flores — predominio de casas bajas con jardín y edificios de 4 a 6 pisos. Las calles son tranquilas y arboladas, lo que fácilita mucho las operaciónes de mudanza. Es uno de los barrios donde más trabajamos dada nuestra cercanía.</p>
            <ul className="article-list">
              <li>Barrio vecino a Flores — zona que conocemos mejor que nadie</li>
              <li>Predominio de casas bajas con jardín y accesos amplios</li>
              <li>Calles tranquilas y arboladas — ideal para mudanzas</li>
              <li>Edificios de mediana altura muchos con ascensor</li>
            </ul>

            <h2 className="article-h2">Nuestro servicio de mudanzas en Floresta</h2>
            <ul className="article-list">
              <li><strong>Embalaje profesional incluido:</strong> protegemos cada mueble con mantas acolchadas y film stretch.</li>
              <li><strong>Desarmado y armado de muebles:</strong> camas, placards, bibliotecas y todo lo necesario sin cargo adicional.</li>
              <li><strong>Mudanzas por soga:</strong> para muebles que no entran por escalera en edificios sin ascensor.</li>
              <li><strong>Coordinación con el consorcio:</strong> nos encargamos de los permisos y horarios del edificio.</li>
              <li><strong>Seguro de carga:</strong> tus pertenencias están cubiertas durante todo el traslado.</li>
              <li><strong>Flota propia:</strong> camiónes de distintos tamaños para adaptarnos a cada mudanza.</li>
            </ul>

            <h2 className="article-h2">Zonas de Floresta donde operamos</h2>
            <p>Cubrimos todo el barrio de Floresta y las zonas limítrofes incluyendo Flores, Vélez Sársfield y Monte Castro. Las calles más frecuentes donde trabajamos incluyen Av. Rivadavia, Av. Nazca, Av. Gaona y todo el interior del barrio.</p>

            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas en Floresta</h2>

            <h3 className="article-h3">¿Con cuánta anticipación tengo que reservar?</h3>
            <p>Recomendamos reservar con al menos 10 a 15 días de anticipación. Para mudanzas a fin de mes lo ideal es reservar con 3 semanas.</p>

            <h3 className="article-h3">¿También hacen mudanzas desde Floresta hacia otros barrios o el GBA?</h3>
            <p>Sí, cubrimos mudanzas desde y hacia cualquier barrio de CABA y todo el Gran Buenos Aires. También realizamos mudanzas al interior del país.</p>

            <h3 className="article-h3">¿Trabajan los sábados?</h3>
            <p>Sí, trabajamos de lunes a sábado de 8 a 18hs.</p>

            <h2 className="article-h2">Barrios cercanos donde también operamos</h2>
            <p>Si tu mudanza involucra barrios limítrofes, también cubrimos:</p>
            <ul className="article-list">
              <li><a href="/blog/mudanzas-flores" className="text-gold hover:underline">Mudanzas en Flores</a></li>
              <li><a href="/blog/mudanzas-villa-devoto" className="text-gold hover:underline">Mudanzas en Villa Devoto</a></li>
              <li><a href="/blog/mudanzas-monte-castro" className="text-gold hover:underline">Mudanzas en Monte Castro</a></li>
              <li><a href="/blog/mudanzas-villa-santa-rita" className="text-gold hover:underline">Mudanzas en Villa Santa Rita</a></li>
              <li><a href="/blog/mudanzas-villa-luro" className="text-gold hover:underline">Mudanzas en Villa Luro</a></li>
            </ul>

            <h2 className="article-h2">Contactanos para tu mudanza en Floresta</h2>
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
