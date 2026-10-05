import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas en Villa Real Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Villa Real con más de 80 años de experiencia. Barrio tranquilo del oeste de CABA. Embalaje incluido, seguro de carga y presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="article-main">
        <article className="article-shell container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="article-back">← Volver al blog</Link>
          <h1 className="article-title">Mudanzas en Villa Real</h1>
          <div className="article-body">
            <p>Villa Real es un barrio tranquilo y residencial del oeste de la Ciudad Autónoma de Buenos Aires. Limítrofe con Versalles, Monte Castro y Floresta, es un barrio de casas bajas con jardín y calles arboladas donde la vida de barrio es muy presente. En Marino Mudanzas realizamos mudanzas en Villa Real con más de 80 años de experiencia en CABA.</p>

            <h2 className="article-h2">Características de las mudanzas en Villa Real</h2>
            <p>Villa Real tiene una fisonomía predominantemente horizontal con casas de familia con jardín. Es uno de los barrios más tranquilos del oeste de CABA, con muy poco tráfico y amplias veredas que fácilitan las operaciónes de mudanza.</p>
            <ul className="article-list">
              <li>Predominio de casas bajas con jardín</li>
              <li>Calles muy tranquilas con muy poco tráfico</li>
              <li>Barrio limítrofe con Versalles y Monte Castro</li>
              <li>Ideal para mudanzas de casas de familia</li>
            </ul>

            <h2 className="article-h2">Nuestro servicio de mudanzas en Villa Real</h2>
            <ul className="article-list">
              <li><strong>Embalaje profesional incluido:</strong> protegemos cada mueble con mantas acolchadas y film stretch.</li>
              <li><strong>Desarmado y armado de muebles:</strong> camas, placards, bibliotecas y todo lo necesario sin cargo adicional.</li>
              <li><strong>Seguro de carga:</strong> tus pertenencias están cubiertas durante todo el traslado.</li>
              <li><strong>Flota propia:</strong> camiónes de distintos tamaños para adaptarnos a cada mudanza.</li>
              <li><strong>Coordinación completa:</strong> nos encargamos de todos los detalles logísticos del traslado.</li>
            </ul>

            <h2 className="article-h2">Cobertura en Villa Real</h2>
            <p>Cubrimos todo el barrio de Villa Real y las zonas limítrofes. Las calles más frecuentes donde trabajamos incluyen Av. Rivadavia, Av. Gaona, Av. Segurola y todo el interior del barrio.</p>

            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas en Villa Real</h2>

            <h3 className="article-h3">¿Con cuánta anticipación tengo que reservar?</h3>
            <p>Recomendamos reservar con al menos 15 días de anticipación. Para mudanzas a fin de mes lo ideal es reservar con 3 semanas.</p>

            <h3 className="article-h3">¿El precio incluye la descarga en Villa Real?</h3>
            <p>Sí, el presupuesto incluye carga en origen y descarga en destino. No hay costos ocultos ni cargos adicionales por distancia.</p>

            <h3 className="article-h3">¿Trabajan los sábados?</h3>
            <p>Sí, trabajamos de lunes a sábado de 8 a 18hs.</p>

            <h2 className="article-h2">Contactános para tu mudanza en Villa Real</h2>
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
