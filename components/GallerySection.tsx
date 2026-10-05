import Link from "next/link";
import { Ornament } from "@/components/fx/primitives";

const photos = [
  { id: "189wPD6qSqkSUhyxkL6akxu6rdjYBnBrN", alt: "Mudanza residencial en departamento de Buenos Aires - Marino Mudanzas" },
  { id: "1xVstLN5nSwrpl1V5cTw5Dwo4iuHym8cK", alt: "Traslado de muebles y cajas en mudanza CABA - Marino Mudanzas" },
  { id: "1X2Oh9eiLrZp9QxGelR746CTqcdWDkNBX", alt: "Embalaje profesional de muebles para mudanza Buenos Aires - Marino Mudanzas" },
  { id: "1zpnccYgXtBH3QTShNt7ZLXnmbPOLL39_", alt: "Carga de camión de mudanzas en Buenos Aires - Marino Mudanzas" },
  { id: "1A2O2P7h3TVbKs7eRUppfgxNjg14JLuhH", alt: "Equipo de operarios de mudanzas en Buenos Aires - Marino Mudanzas" },
  { id: "17SEQT5OC4j24B1lVf6DboFUBHVf7QF14", alt: "Mudanza de casa completa en Buenos Aires - Marino Mudanzas" },
];

export default function GallerySection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div data-reveal="up" className="mb-6 flex justify-center"><Ornament /></div>
          <h2 data-reveal="up" className="section-title text-3xl md:text-5xl text-foreground mb-5 delay-reveal-1">
            Nuestros Trabajos
          </h2>
          <p data-reveal="up" className="font-body text-muted-foreground text-lg max-w-2xl mx-auto delay-reveal-2">
            Más de 80 años mudando familias y empresas en Buenos Aires. Cada foto es un trabajo real realizado por nuestro equipo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto" data-reveal-stagger="110">
          {photos.map((photo, i) => (
            <div
              key={i}
              data-reveal="clip"
              className={`group relative overflow-hidden rounded-2xl bg-muted shadow-sm ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={`https://drive.google.com/thumbnail?id=${photo.id}&sz=w${i === 0 ? 1000 : 600}`}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover scale-105 transition-[transform,filter] duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.15] group-hover:saturate-[1.15]"
              />
              <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              {/* Gold frame that draws in on hover */}
              <span aria-hidden className="absolute inset-3 rounded-xl border border-gold/0 scale-95 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100 group-hover:border-gold/80" />
              <span aria-hidden className="absolute bottom-5 left-5 h-2.5 w-2.5 rotate-45 bg-gold opacity-0 translate-y-3 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-reveal="up">
          <span data-magnetic="0.2" className="inline-flex transition-transform duration-300 ease-out">
            <Link
              href="/galeria"
              className="btn-gold btn-shimmer !text-navy"
            >
              <span className="relative z-[2]">Ver todos los trabajos →</span>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
