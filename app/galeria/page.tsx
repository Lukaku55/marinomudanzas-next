import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
      <main className="pb-24">
        <section className="page-hero grain pb-24 pt-36 md:pb-28 md:pt-44">
          <div aria-hidden className="absolute inset-0 grid-lines" />
          <div aria-hidden className="aura -left-24 top-10 h-96 w-96 aura-blue" />
          <div className="container relative mx-auto px-4 max-w-5xl text-center">
            <Link
              href="/"
              className="group mb-8 inline-flex items-center gap-2 font-body text-sm font-medium text-gold transition-[gap,color] duration-500 hover:gap-3 hover:text-gold-light"
              style={{ animation: "fade-up 0.9s var(--ease-out-expo) both" }}
            >
              ← Volver al inicio
            </Link>
            <h1
              className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6"
              style={{ animation: "fade-up 1s 0.1s var(--ease-out-expo) both" }}
            >
              Galería de Trabajos
            </h1>
            <p
              className="font-body text-primary-foreground/75 text-lg max-w-2xl mx-auto"
              style={{ animation: "fade-up 1s 0.25s var(--ease-out-expo) both" }}
            >
              Más de 80 años mudando familias y empresas en Buenos Aires. Estas son algunas de las mudanzas realizadas por nuestro equipo en CABA y GBA.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-6xl -mt-12 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-reveal-stagger="90">
            {photos.map((photo, i) => (
              <a
                key={i}
                href={`https://drive.google.com/file/d/${photo.id}/view`}
                target="_blank"
                rel="noopener noreferrer"
                data-reveal="clip"
                className={`group relative block overflow-hidden rounded-2xl bg-muted shadow-[0_20px_40px_-30px_hsl(var(--navy)/0.6)] ${
                  i === 0 || i === 4 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
                }`}
                title={photo.alt}
              >
                <img
                  src={`https://drive.google.com/thumbnail?id=${photo.id}&sz=w800`}
                  alt={photo.alt}
                  loading={i < 3 ? "eager" : "lazy"}
                  className="w-full h-full object-cover scale-105 transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.15]"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <span aria-hidden className="absolute inset-3 rounded-xl border border-gold/0 scale-95 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:border-gold/80" />
                <span aria-hidden className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy opacity-0 translate-y-3 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0"><ArrowUpRight className="h-5 w-5" /></span>
              </a>
            ))}
          </div>

          <div data-reveal="up" className="relative overflow-hidden rounded-[2rem] bg-navy grain p-10 md:p-14 mt-20 text-center">
            <div aria-hidden className="absolute inset-0 grid-lines" />
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -ml-48 -mt-48 h-96 w-96 rounded-full border border-gold/20 animate-ping-ring" style={{ animationDuration: "6s" }} />
            <div className="relative">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
                ¿Querés que hagamos tu mudanza?
              </h2>
              <p className="font-body text-primary-foreground/75 mb-8">
                Pedí un presupuesto sin cargo. Trabajamos de lunes a sábado de 8 a 18hs en toda CABA y GBA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5491154507435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp btn-shimmer"
                >
                  <span className="relative z-[2]">Pedí presupuesto por WhatsApp</span>
                </a>
                <a
                  href="tel:+541146111818"
                  className="btn-ghost"
                >
                  Llamanos: 4611-1818
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-border text-center" data-reveal="up">
            <p className="font-body text-muted-foreground text-sm mb-5">¿Necesitás más información?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/mudanzas-residenciales" className="article-chip">Mudanzas residenciales</Link>
              <Link href="/mudanzas-oficinas" className="article-chip">Mudanzas de oficinas</Link>
              <Link href="/guardamuebles" className="article-chip">Guardamuebles</Link>
              <Link href="/blog" className="article-chip">Blog de consejos</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
