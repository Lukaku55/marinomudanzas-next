import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en San Telmo Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en San Telmo, Buenos Aires. Especialistas en casas historicas y antiguedades. Mas de 80 años de experiencia. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en San Telmo Buenos Aires | Marino Mudanzas",
  "description": "Servicio de mudanzas en San Telmo, Buenos Aires. Especialistas en casas historicas y antiguedades. Mas de 80 años de experiencia. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-san-telmo",
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
          <Link href="/blog" className="article-back">Volver al blog</Link>
          <h1 className="article-title">Mudanzas en San Telmo</h1>
          <div className="article-body">
            <p>San Telmo es el barrio mas antiguo de Buenos Aires, con casas chorizo, conventillos y edificios del siglo XIX. Su adoquinado historico y sus calles angostas hacen que cada mudanza sea un desafio logistico particular. En Marino Mudanzas tenemos decadas de experiencia en este barrio tan especial.</p>
            <h2 className="article-h2">Particularidades de las mudanzas en San Telmo</h2>
            <p>Las calles adoquinadas de San Telmo como Defensa, Bolivar y Chile requieren camiónes con buena suspension. Muchas casas historicas tienen umbrales angostos, escaleras de caracol y techos altos. Los domingos, la Feria de San Telmo restringe el acceso vehicular a varias calles.</p>
            <h2 className="article-h2">Zonas de San Telmo que cubrimos</h2>
            <ul className="article-list">
              <li><strong>San Telmo historico</strong> — casas chorizo y conventillos del siglo XIX</li>
              <li><strong>Defensa</strong> — calle peatonal con alta rotacion de inquilinos</li>
              <li><strong>Parque Lezama</strong> — zona verde con casas de familia amplias</li>
              <li><strong>Montserrat limite</strong> — zona de transicion cerca del microcentro</li>
            </ul>
            <h2 className="article-h2">Preguntas frecuentes sobre mudanzas en San Telmo</h2>
            <h3 className="article-h3">Pueden mover antiguedades y muebles de epoca en San Telmo?</h3>
            <p>Si, somos especialistas en el traslado de muebles antiguos y objetos de coleccion, usando materiales de embalaje especiales para proteger cada pieza.</p>
            <h3 className="article-h3">Trabajan en calles adoquinadas de San Telmo?</h3>
            <p>Si, nuestros camiónes estan preparados para transitar por las calles adoquinadas de San Telmo sin danar los objetos transportados.</p>
            <h2 className="article-h2">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactános por WhatsApp o teléfono y te damos un presupuesto sin cargo y sin compromiso. Trabajamos de lunes a sabado de 8 a 18hs.</p>
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
