import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Galería de Trabajos | Fotos Reales de Mudanzas | Marino Mudanzas",
  description: "Fotos reales de mudanzas realizadas por Marino Mudanzas en Buenos Aires. Más de 80 años de experiencia en mudanzas residenciales y corporativas en CABA y GBA.",
};

const photos = [
  { id: "189wPD6qSqkSUhyxkL6akxu6rdjYBnBrN", alt: "Mudanza residencial en departamento de Buenos Aires - Marino Mudanzas" },
  { id: "1xVstLN5nSwrpl1V5cTw5Dwo4iuHym8cK", alt: "Traslado de muebles y cajas en mudanza CABA - Marino Mudanzas" },
  { id: "1X2Oh9eiLrZp9QxGelR746CTqcdWDkNBX", alt: "Embalaje profesional de muebles para mudanza Buenos Aires - Marino Mudanzas" },
  { id: "1zpnccYgXtBH3QTShNt7ZLXnmbPOLL39_", alt: "Carga de camión de mudanzas en Buenos Aires - Marino Mudanzas" },
  { id: "1A2O2P7h3TVbKs7eRUppfgxNjg14JLuhH", alt: "Equipo de operarios de mudanzas profesionales - Marino Mudanzas" },
  { id: "17SEQT5OC4j24B1lVf6DboFUBHVf7QF14", alt: "Mudanza de casa completa en CABA - Marino Mudanzas" },
  { id: "1lEF8drraz3Csjoj1KQUh3_8ssbUcg_kr", alt: "Traslado de electrodomésticos en mudanza Buenos Aires - Marino Mudanzas" },
  { id: "1twbaXLSDd8Xo141ozAValpzNImUw30X8", alt: "Mudanza en edificio residencial de Buenos Aires - Marino Mudanzas" },
  { id: "16uvs4tRsGO2m5vu_w5b1iBUlwYMjHFMP", alt: "Operarios cargando muebles en camión de mudanzas - Marino Mudanzas" },
];

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Galería de Trabajos - Marino Mudanzas",
  "description": "Fotos reales de mudanzas realizadas por Marino Mudanzas en Buenos Aires. Más de 80 años de experiencia.",
  "url": "https://www.mudanzasmarino.com.ar/galeria",
  "author": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "url": "https://www.mudanzasmarino.com.ar"
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">

          <div className="text-center mb-12">
            <Link href="/" className="font-body text-gold hover:underline text-sm mb-6 inline-block">
              ← Volver al inicio
            </Link>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Galería de Trabajos
            </h1>
            <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
              Más de 80 años mudando familias y empresas en Buenos Aires. Estas son algunas de las mudanzas realizadas por nuestro equipo en CABA y GBA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <a
                key={i}
                href={`https://drive.google.com/file/d/${photo.id}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block aspect-square overflow-hidden rounded-xl bg-muted shadow-sm hover:shadow-xl transition-all duration-300"
                title={photo.alt}
              >
                <img
                  src={`https://drive.google.com/thumbnail?id=${photo.id}&sz=w800`}
                  alt={photo.alt}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </a>
            ))}
          </div>

          <div className="bg-muted rounded-xl p-8 mt-16 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-3">
              ¿Querés que hagamos tu mudanza?
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              Pedí un presupuesto sin cargo. Trabajamos de lunes a sábado de 8 a 18hs en toda CABA y GBA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5491154507435"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Pedí presupuesto por WhatsApp
              </a>
              <a
                href="tel:+541146111818"
                className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Llamanos: 4611-1818
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="font-body text-muted-foreground text-sm mb-4">¿Necesitás más información?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/mudanzas-residenciales" className="font-body text-gold hover:underline text-sm font-medium">Mudanzas residenciales</Link>
              <Link href="/mudanzas-oficinas" className="font-body text-gold hover:underline text-sm font-medium">Mudanzas de oficinas</Link>
              <Link href="/guardamuebles" className="font-body text-gold hover:underline text-sm font-medium">Guardamuebles</Link>
              <Link href="/blog" className="font-body text-gold hover:underline text-sm font-medium">Blog de consejos</Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
