import Link from "next/link";

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
    <section className="py-16 md:py-20 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Nuestros Trabajos
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Más de 80 años mudando familias y empresas en Buenos Aires. Cada foto es un trabajo real realizado por nuestro equipo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {photos.map((photo, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-xl bg-muted shadow-sm">
              <img
                src={`https://drive.google.com/thumbnail?id=${photo.id}&sz=w600`}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 bg-gold text-navy font-body font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Ver todos los trabajos →
          </Link>
        </div>
      </div>
    </section>
  );
}
