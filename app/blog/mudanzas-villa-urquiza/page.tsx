import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Villa Urquiza Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Villa Urquiza, Buenos Aires. Barrio residencial del norte de CABA. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Villa Urquiza Buenos Aires | Marino Mudanzas",
  "description": "Servicio de mudanzas en Villa Urquiza, Buenos Aires. Barrio residencial del norte de CABA. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-villa-urquiza",
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
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Villa Urquiza</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Villa Urquiza es uno de los barrios mas tranquilos y residenciales del norte de Buenos Aires. Con casas de gran porte y edificios modernos, las mudanzas en Villa Urquiza requieren experiencia y equipamiento adecuado. En Marino Mudanzas contamos con flota propia y personal capacitado para cualquier tipo de traslado en el barrio.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Villa Urquiza</h2>
            <p>Villa Urquiza tiene calles arboladas y tranquilas que facilitan el traslado. Sus casas de familia suelen ser amplias, con jardines y garajes. Los edificios modernos tienen buenos ascensores y espacios de carga. La Avenida Triunvirato es el corredor principal del barrio.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Villa Urquiza que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Villa Urquiza Centro</strong> — zona comercial alrededor de Triunvirato</li>
              <li><strong>Villa Urquiza Norte</strong> — zona residencial con casas de familia</li>
              <li><strong>Parque Saavedra limite</strong> — zona verde con casas amplias</li>
              <li><strong>Villa Pueyrredon limite</strong> — barrio de transicion tranquilo</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Villa Urquiza</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas de casas grandes en Villa Urquiza?</h3>
            <p>Si, contamos con camiones de distintos tamanos para mudanzas de casas grandes en Villa Urquiza, incluyendo el desmontaje y montaje de muebles a medida.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Pueden mover autos o motos durante la mudanza en Villa Urquiza?</h3>
            <p>No trasladamos vehiculos, pero podemos coordinar el traslado de todos los demas bienes del hogar con total seguridad.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicita tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o telefono y te damos un presupuesto sin cargo y sin compromiso. Trabajamos de lunes a sabado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedi tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
