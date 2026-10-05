import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas en Zárate GBA | Marino Mudanzas Buenos Aires",
  description: "Mudanzas en Zárate con más de 80 años de experiencia. Ciudad industrial del norte del GBA. Embalaje incluido y presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="article-main">
        <article className="article-shell container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="article-back">← Volver al blog</Link>
          <h1 className="article-title">Mudanzas en Zárate</h1>
          <div className="article-body">
            <p>Zárate es una ciudad industrial y portuaria del norte del Gran Buenos Aires, a orillas del Río Paraná. Con una importante actividad industrial y una población numerosa, es un destino frecuente para mudanzas de trabajadores y familias que se relocalizan en la zona norte del GBA. En Marino Mudanzas realizamos mudanzas en Zárate con más de 80 años de experiencia.</p>

            <h2 className="article-h2">Características de las mudanzas en Zárate</h2>
            <p>Zárate tiene una fisonomía mixta — zonas industriales cerca del puerto y barrios residenciales tranquilos en el interior. La Autopista Panamericana y el Acceso Norte conectan eficientemente la ciudad con Buenos Aires en aproximadamente una hora.</p>
            <ul className="article-list">
              <li>Ciudad industrial con importante demanda de mudanzas corporativas</li>
              <li>Barrios residenciales tranquilos en el interior de la ciudad</li>
              <li>Conexión por Autopista Panamericana y Acceso Norte</li>
              <li>Aproximadamente 90 km desde Buenos Aires</li>
            </ul>

            <h2 className="article-h2">Nuestro servicio de mudanzas en Zárate</h2>
            <ul className="article-list">
              <li><strong>Embalaje profesional incluido:</strong> protegemos cada mueble con mantas acolchadas y film stretch.</li>
              <li><strong>Desarmado y armado de muebles:</strong> camas, placards, bibliotecas y todo lo necesario sin cargo adicional.</li>
              <li><strong>Seguro de carga:</strong> tus pertenencias están cubiertas durante todo el traslado.</li>
              <li><strong>Flota propia:</strong> camiónes de distintos tamaños para adaptarnos a cada mudanza.</li>
              <li><strong>Coordinación completa:</strong> nos encargamos de todos los detalles logísticos del traslado.</li>
            </ul>

            <h2 className="article-h2">Cobertura en Zárate</h2>
            <p>Cubrimos todo el partido de Zárate incluyendo Zárate Centro, Lima y todas las localidades del partido.</p>

            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas en Zárate</h2>

            <h3 className="article-h3">¿Con cuánta anticipación tengo que reservar?</h3>
            <p>Recomendamos reservar con al menos 15 días de anticipación. Para mudanzas a fin de mes lo ideal es reservar con 3 semanas.</p>

            <h3 className="article-h3">¿El precio incluye la descarga en Zárate?</h3>
            <p>Sí, el presupuesto incluye carga en origen y descarga en destino. No hay costos ocultos ni cargos adicionales por distancia.</p>

            <h3 className="article-h3">¿Trabajan los sábados?</h3>
            <p>Sí, trabajamos de lunes a sábado de 8 a 18hs.</p>

            <h2 className="article-h2">Contactános para tu mudanza en Zárate</h2>
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
