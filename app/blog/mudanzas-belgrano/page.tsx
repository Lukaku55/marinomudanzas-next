import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Belgrano Buenos Aires | Marino Mudanzas",
  description: "Mudanzas en Belgrano con más de 80 años de experiencia. Belgrano R, C y Chico. Conocemos cada edificio del barrio. Embalaje incluido y presupuesto sin cargo. ¡Llamános!",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Belgrano Buenos Aires | Marino Mudanzas",
  "description": "Servicio de mudanzas en Belgrano, Buenos Aires. Especialistas en Belgrano R, C y Chico. Más de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-belgrano",
  "author": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "url": "https://www.mudanzasmarino.com.ar"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png"
    }
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="article-main">
        <article className="article-shell container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="article-back">← Volver al blog</Link>
          <h1 className="article-title">Mudanzas en Belgrano</h1>
          <div className="article-body">
            <p>Belgrano es uno de los barrios más elegantes y exclusivos de Buenos Aires, con una gran variedad de edificios de alta categoría, casas de gran porte y departamentos de lujo. En Marino Mudanzas llevamos más de 80 años realizando mudanzas en Belgrano R, Belgrano C y Belgrano Chico, con experiencia en el manejo de muebles de alto valor y objetos delicados.</p>

            <h2 className="article-h2">Particularidades de las mudanzas en Belgrano</h2>
            <p>Belgrano presenta características únicas que requieren experiencia especializada. Sus avenidas principales como Cabildo y Juramento tienen mucho tráfico y restricciones de carga, mientras que las calles internas de Belgrano Chico son angostas y arboladas. Muchos edificios de Belgrano R tienen porteros eléctricos y normas estrictas de consorcio que coordinamos previamente.</p>

            <h2 className="article-h2">Zonas de Belgrano que cubrimos</h2>
            <ul className="article-list">
              <li><strong>Belgrano R</strong> — casas de gran porte y edificios residenciales de lujo</li>
              <li><strong>Belgrano C</strong> — zona comercial con alta densidad de edificios</li>
              <li><strong>Belgrano Chico</strong> — embajadas, residencias y casas históricas</li>
              <li><strong>Núñez límite</strong> — zona de transición cerca del río</li>
              <li><strong>Colegiales límite</strong> — barrio bohemio con mucha rotación</li>
            </ul>

            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas en Belgrano</h2>

            <h3 className="article-h3">¿Coordinan con los encargados de edificios en Belgrano?</h3>
            <p>Sí, coordinamos previamente con los encargados de edificios para respetar los horarios permitidos y los requisitos del consorcio. Muchos edificios de Belgrano tienen normas estrictas que conocemos de antemano.</p>

            <h3 className="article-h3">¿Tienen experiencia en mudanzas de casas grandes en Belgrano?</h3>
            <p>Sí, contamos con camiónes de distintos tamaños y personal especializado para mudanzas de casas de gran porte en Belgrano Chico y Belgrano R, incluyendo el desmontaje y montaje de muebles a medida.</p>

            <h3 className="article-h3">¿Hacen mudanzas internacionales desde Belgrano?</h3>
            <p>Realizamos mudanzas al interior del país y países limítrofes. Para mudanzas internacionales podemos asesorarte sobre los trámites necesarios.</p>

            <h2 className="article-h2">Barrios cercanos donde también operamos</h2>
            <p>Si tu mudanza involucra barrios limítrofes a Belgrano, también cubrimos:</p>
            <ul className="article-list">
              <li><a href="/blog/mudanzas-palermo" className="text-gold hover:underline">Mudanzas en Palermo</a></li>
              <li><a href="/blog/mudanzas-nunez" className="text-gold hover:underline">Mudanzas en Núñez</a></li>
              <li><a href="/blog/mudanzas-colegiales" className="text-gold hover:underline">Mudanzas en Colegiales</a></li>
              <li><a href="/blog/mudanzas-saavedra" className="text-gold hover:underline">Mudanzas en Saavedra</a></li>
              <li><a href="/blog/mudanzas-villa-urquiza" className="text-gold hover:underline">Mudanzas en Villa Urquiza</a></li>
            </ul>

            <h2 className="article-h2">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactános por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="article-cta">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-shimmer">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="btn-navy">Llamános: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
