"use client";
import { Star, Quote } from "lucide-react";
import { Ornament } from "@/components/fx/primitives";

const testimonials = [
  {
    name: "Angeles Morano",
    text: "Hicieron un excelente trabajo. Estuvieron puntuales en el domicilio, sumamente amables, recubrieron todo lo delicado con film plástico para que no resultaran dañados en el proceso. El precio fue excelente e incluyeron canastos, ropero, subida por escaleras y peones sin cargo. Altamente recomendables sin lugar a dudas.",
    rating: 5,
  },
  {
    name: "Viviana Sepulveda",
    text: "Excelente atención! Me solucionaron el problema en dos horas! Atentos y cuidadosos. Muy recomendable!!",
    rating: 5,
  },
  {
    name: "Laura Fernández",
    text: "Muy profesionales, llegaron a horario y se encargaron de todo. Embalaron cada cosa con mucho cuidado. El presupuesto fue justo y sin sorpresas. Los recomiendo totalmente.",
    rating: 5,
  },
  {
    name: "Carlos Méndez",
    text: "Segunda vez que los contrato y siempre impecables. Rápidos, prolijos y muy buena onda. Daniel y su equipo son de primera.",
    rating: 5,
  },
  {
    name: "Patricia Gómez",
    text: "Me mudé de un 5to piso por escalera y no se rompió absolutamente nada. Trabajaron con mucho cuidado y paciencia. Precio muy accesible para la calidad del servicio.",
    rating: 5,
  },
  {
    name: "Martín Ruiz",
    text: "Los contraté para una mudanza de oficina y fue todo perfecto. Desarmaron y armaron los muebles sin problema. Muy organizados y puntuales.",
    rating: 5,
  },
  {
    name: "Sofía Herrera",
    text: "Excelente experiencia de principio a fin. Desde el presupuesto hasta la entrega, todo fue transparente y profesional. 100% recomendados.",
    rating: 5,
  },
  {
    name: "Roberto Díaz",
    text: "Contraté el servicio de guardamuebles y mudanza. Todo impecable, mis cosas quedaron perfectas. El equipo muy amable y responsable.",
    rating: 5,
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Marino Mudanzas",
  "url": "https://www.mudanzasmarino.com.ar",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "393",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Angeles Morano"},
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "reviewBody": "Hicieron un excelente trabajo. Estuvieron puntuales en el domicilio, sumamente amables, recubrieron todo lo delicado con film plástico para que no resultaran dañados en el proceso. El precio fue excelente e incluyeron canastos, ropero, subida por escaleras y peones sin cargo. Altamente recomendables sin lugar a dudas."
    },
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Viviana Sepulveda"},
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "reviewBody": "Excelente atención! Me solucionaron el problema en dos horas! Atentos y cuidadosos. Muy recomendable!!"
    },
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Laura Fernández"},
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "reviewBody": "Muy profesionales, llegaron a horario y se encargaron de todo. Embalaron cada cosa con mucho cuidado. El presupuesto fue justo y sin sorpresas. Los recomiendo totalmente."
    },
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Carlos Méndez"},
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "reviewBody": "Segunda vez que los contrato y siempre impecables. Rápidos, prolijos y muy buena onda. Daniel y su equipo son de primera."
    },
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Patricia Gómez"},
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "reviewBody": "Me mudé de un 5to piso por escalera y no se rompió absolutamente nada. Trabajaron con mucho cuidado y paciencia. Precio muy accesible para la calidad del servicio."
    },
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Martín Ruiz"},
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "reviewBody": "Los contraté para una mudanza de oficina y fue todo perfecto. Desarmaron y armaron los muebles sin problema. Muy organizados y puntuales."
    },
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Sofía Herrera"},
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "reviewBody": "Excelente experiencia de principio a fin. Desde el presupuesto hasta la entrega, todo fue transparente y profesional. 100% recomendados."
    },
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Roberto Díaz"},
      "reviewRating": {"@type": "Rating", "ratingValue": "5", "bestRating": "5"},
      "reviewBody": "Contraté el servicio de guardamuebles y mudanza. Todo impecable, mis cosas quedaron perfectas. El equipo muy amable y responsable."
    }
  ]
};

type Testimonial = (typeof testimonials)[number];

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <div className="group spotlight relative mx-3 flex w-[20rem] md:w-[24rem] flex-shrink-0 flex-col rounded-3xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-8 backdrop-blur-sm transition-[border-color,background-color,transform] duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-primary-foreground/[0.09]">
    <Quote aria-hidden className="absolute right-6 top-6 h-10 w-10 text-gold/20 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110" />
    <div className="relative flex gap-1 mb-5">
      {Array.from({ length: t.rating }).map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 fill-gold text-gold"
          style={{ animation: `twinkle 2.8s ease-in-out ${i * 0.18}s infinite` }}
        />
      ))}
    </div>
    <p className="relative font-body text-primary-foreground/90 mb-6 leading-relaxed italic flex-1">
      "{t.text}"
    </p>
    <div className="relative flex items-center gap-3 border-t border-primary-foreground/10 pt-5">
      <span aria-hidden className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
      <div>
        <p className="font-body font-semibold text-primary-foreground">
          {t.name}
        </p>
        <p className="font-body text-sm text-primary-foreground/60">
          Reseña de Google
        </p>
      </div>
    </div>
  </div>
);

/** Infinite marquee row. The second copy is hidden from assistive tech and search. */
const MarqueeRow = ({ items, reverse = false, duration }: { items: Testimonial[]; reverse?: boolean; duration: string }) => (
  <div className="marquee py-3" style={{ ["--marquee-duration" as string]: duration, ["--marquee-direction" as string]: reverse ? "reverse" : "normal" }}>
    <div className="marquee-track items-stretch">
      {/* Two identical halves (translated by -50%), each wide enough to cover large screens */}
      <div className="flex items-stretch">
        {items.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
        <div aria-hidden className="flex items-stretch" data-nosnippet>
          {items.map((t) => (
            <TestimonialCard key={`a-${t.name}`} t={t} />
          ))}
        </div>
      </div>
      <div aria-hidden className="flex items-stretch" data-nosnippet>
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`b-${i}`} t={t} />
        ))}
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="relative overflow-hidden py-24 md:py-32 gradient-navy grain">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <div aria-hidden className="absolute inset-0 grid-lines" />
      <div aria-hidden className="aura left-1/3 top-0 h-[28rem] w-[28rem] aura-blue" />
      <div className="relative">
        <div className="container mx-auto px-4 text-center mb-14 md:mb-16">
          <div data-reveal="up" className="mb-6 flex justify-center"><Ornament /></div>
          <h2 data-reveal="up" className="section-title text-3xl md:text-6xl text-primary-foreground mb-5 delay-reveal-1">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p data-reveal="up" className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto delay-reveal-2">
            393 reseñas en Google con una puntuación de 4.7 sobre 5
          </p>
        </div>

        <div data-reveal="up" className="space-y-3 delay-reveal-3">
          <MarqueeRow items={testimonials.slice(0, 4)} duration="100s" />
          <MarqueeRow items={testimonials.slice(4)} duration="110s" reverse />
        </div>

        <div className="text-center mt-14" data-reveal="up">
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJLx6y5oXJvJURKb5zJT-DFLg&q=Marino+Mudanzas&hl=es&gl=AR"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 font-body text-gold transition-colors hover:bg-gold hover:text-navy"
          >
            Ver todas las reseñas en Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
