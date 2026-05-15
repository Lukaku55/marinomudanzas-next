import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¿Qué Incluye un Servicio de Mudanza? | Marino Mudanzas",
  description: "Todo lo que incluye un servicio de mudanza profesional en Buenos Aires. Embalaje, carga, transporte, descarga y más. Marino Mudanzas explica cada detalle.",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "¿Qué Incluye un Servicio de Mudanza? | Marino Mudanzas",
  "description": "Todo lo que incluye un servicio de mudanza profesional en Buenos Aires. Embalaje, carga, transporte, descarga y más. Marino Mudanzas explica cada detalle.",
  "url": "https://www.mudanzasmarino.com.ar/blog/que-incluye-una-mudanza",
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
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">¿Qué Incluye un Servicio de Mudanza Profesional?</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Cuando contratás una empresa de mudanzas profesional como Marino Mudanzas, recibís mucho más que un camión y personas que cargan cajas. En esta guía te explicamos todo lo que está incluido en nuestro servicio para que sepas exactamente qué esperar el día de tu mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Visita previa o evaluación telefónica</h2>
            <p>Antes de la mudanza, realizamos una visita a tu domicilio o una evaluación telefónica detallada para dimensionar correctamente el volumen de tus pertenencias. Esto nos permite asignarte el camión adecuado, la cantidad de operarios necesaria y darte un presupuesto justo sin sorpresas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Embalaje incluido</h2>
            <p>Nuestro servicio incluye el embalaje básico de todos los muebles con mantas acolchadas y film stretch. Esto protege las superficies de rasguños y golpes durante el traslado. Para objetos frágiles como cristalería, loza y obras de arte, ofrecemos un servicio de embalaje premium adicional con materiales especiales.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Desarmado y armado de muebles</h2>
            <p>Desarmamos todos los muebles que sea necesario para fácilitar su traslado — placares, camas, bibliotecas, escritorios — y los volvemos a armar en el nuevo hogar. Nuestros operarios están capacitados para manejar muebles de todo tipo, incluyendo muebles a medida y sistemas de placares.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Carga y transporte</h2>
            <p>Contamos con una flota propia de camiónes de distintos tamaños, desde utilitarios para mudanzas pequeñas hasta camiónes de gran capacidad para casas completas. Todos nuestros vehículos están en perfectas condiciones y cuentan con el equipamiento necesario para proteger tus pertenencias durante el viaje.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Descarga y ubicación en el nuevo hogar</h2>
            <p>Al llegar al destino, nuestro equipo descarga todos los muebles y los ubica en el lugar que indiques. No te dejamos todo apilado en el centro del living — trabajamos junto a vos para que cada mueble quede donde lo necesitás.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Coordinación con el consorcio</h2>
            <p>Nos encargamos de coordinar con los encargados de los edificios de origen y destino para respetar los horarios permitidos de carga y descarga, gestionar el uso del ascensor de servicio y cumplir con las normas del consorcio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Seguro de carga</h2>
            <p>Todos nuestros servicios incluyen un seguro de carga que cubre tus pertenencias durante todo el proceso de mudanza. Si necesitás una cobertura adicional para objetos de alto valor, podemos coordinar un seguro especial.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué no está incluido en el servicio básico?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Embalaje premium de objetos frágiles (tiene costo adicional)</li>
              <li>Servicio de guardamuebles (se contrata por separado)</li>
              <li>Conexión o desconexión de electrodomésticos que requieran un técnico</li>
              <li>Traslado de mascotas o plantas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactános por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamános: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
