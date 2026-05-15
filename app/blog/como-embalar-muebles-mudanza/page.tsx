import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Embalar Muebles para una Mudanza | Guía Completa | Marino Mudanzas",
  description: "Guía completa para embalar muebles y objetos frágiles antes de una mudanza. Consejos profesionales de Marino Mudanzas con más de 80 años de experiencia.",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo Embalar Muebles para una Mudanza | Guía Completa | Marino Mudanzas",
  "description": "Guía completa para embalar muebles y objetos frágiles antes de una mudanza. Consejos profesionales de Marino Mudanzas con más de 80 años de experiencia.",
  "url": "https://www.mudanzasmarino.com.ar/blog/como-embalar-muebles-mudanza",
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Cómo Embalar Muebles para una Mudanza</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>El embalaje correcto es uno de los factores más importantes para que tus muebles y pertenencias lleguen en perfectas condiciones al nuevo hogar. En Marino Mudanzas llevamos más de 80 años perfeccionando nuestras técnicas de embalaje. En esta guía te compartimos los consejos más importantes.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Materiales de embalaje que necesitás</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cajas de cartón reforzado</strong> — de distintos tamaños según el contenido</li>
              <li><strong>Film stretch</strong> — para envolver muebles y protegerlos de golpes y humedad</li>
              <li><strong>Mantas de mudanza</strong> — para proteger superficies delicadas</li>
              <li><strong>Papel de embalaje o papel de diario</strong> — para envolver objetos frágiles</li>
              <li><strong>Cinta de embalaje resistente</strong> — para sellar cajas</li>
              <li><strong>Marcador permanente</strong> — para etiquetar cada caja</li>
              <li><strong>Esquineros de cartón</strong> — para proteger bordes de muebles</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo embalar muebles grandes</h2>
            <p>Los muebles grandes como armarios, cómodas y bibliotecas requieren un proceso específico. Primero vaciá completamente los cajones y puertas. Luego envolvé cada pieza con film stretch o mantas de mudanza, prestando especial atención a las esquinas y bordes. Si el mueble se puede desarmar, hacelo — transportar piezas individuales es mucho más seguro que mover el mueble completo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo embalar objetos frágiles</h2>
            <p>La cristalería, la loza y los objetos decorativos son los más propensos a romperse durante una mudanza. Envolvé cada pieza individualmente con papel de embalaje o papel de diario, asegurándote de que no queden espacios vacíos en la caja. Usá papel arrugado como relleno entre los objetos. Siempre marcá las cajas como "FRÁGIL" con letras grandes.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo embalar electrodomésticos</h2>
            <p>Si conservás las cajas originales de los electrodomésticos, úsalas. Si no, envolvé cada electrodoméstico con film stretch y colocalo en una caja del tamaño adecuado con suficiente material de relleno alrededor. Desconectá y limpiá la heladera al menos 24 horas antes de la mudanza para que se descongele completamente.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Consejos para embalar libros y ropa</h2>
            <p>Los libros son muy pesados — usá cajas pequeñas para no exceder los 15 kg por caja. La ropa se puede transportar en cajas o en bolsas resistentes. Una técnica práctica es dejar la ropa colgada en el placard y cubrirla con una bolsa de residuos grande con un agujero para los ganchos — llegará al nuevo hogar lista para colgar.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Errores comunes al embalar</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sobrecargar las cajas — el peso ideal por caja es entre 10 y 15 kg</li>
              <li>No etiquetar las cajas con su contenido y cuarto de destino</li>
              <li>Mezclar objetos frágiles con objetos pesados en la misma caja</li>
              <li>No usar suficiente material de relleno en las cajas</li>
              <li>Dejar espacios vacíos en las cajas que permitan que los objetos se muevan</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Preferís que lo hagamos nosotros?</h2>
            <p>En Marino Mudanzas ofrecemos servicio de embalaje profesional con materiales de primera calidad. Nuestro equipo se encarga de todo el proceso de embalaje, desde los muebles más grandes hasta los objetos más delicados. Consultanos por nuestro servicio de embalaje premium.</p>

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
