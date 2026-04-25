"use client";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

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

const TestimonialsSection = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="testimonios" className="py-20 md:py-28 gradient-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto">
            338 reseñas en Google con una puntuación de 4.7 sobre 5
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplayPlugin.current]}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/15 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-gold text-gold"
                        />
                      ))}
                    </div>
                    <p className="font-body text-primary-foreground/90 mb-6 leading-relaxed italic flex-1">
                      "{t.text}"
                    </p>
                    <div>
                      <p className="font-body font-semibold text-primary-foreground">
                        {t.name}
                      </p>
                      <p className="font-body text-sm text-primary-foreground/60">
                        Reseña de Google
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious style={{border: "1px solid rgba(255,255,255,0.3)", color: "white"}} />
            <CarouselNext style={{border: "1px solid rgba(255,255,255,0.3)", color: "white"}} />
          </Carousel>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJLx6y5oXJvJURKb5zJT-DFLg&q=Marino+Mudanzas&hl=es&gl=AR"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-gold hover:text-gold-light transition-colors underline underline-offset-4"
          >
            Ver todas las reseñas en Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
