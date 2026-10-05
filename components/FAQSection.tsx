"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Ornament } from "@/components/fx/primitives";

const barrios = [
  "Palermo", "Belgrano", "Caballito", "Recoleta", "Almagro",
  "Balvanera", "Villa Urquiza", "Flores", "Puerto Madero",
];

const gbaZonas = ["Zona Norte", "Zona Sur", "Zona Oeste"];

const faqs = [
  {
    question: "¿Con cuánta antelación recomendamos coordinar el servicio?",
    answer: (
      <p>
        Te recomendamos coordinar tu mudanza con al menos 15 a 20 días de anticipación.
        Esto nos permite garantizar disponibilidad de personal y vehículos, especialmente
        durante los períodos de mayor demanda como fin de mes y cambio de temporada.
      </p>
    ),
  },
  {
    question: "¿Realizan mudanzas por soga o altura?",
    answer: (
      <p>
        Sí, somos especialistas en movimientos por soga para muebles de gran tamaño que no
        caben en el ascensor o escalera.
      </p>
    ),
  },
  {
    question: "¿Qué zonas cubren?",
    answer: (
      <div>
        <p className="mb-4">
          Realizamos <strong className="text-foreground">mudanzas y fletes en toda la Ciudad
          Autónoma de Buenos Aires (CABA)</strong> y el{" "}
          <strong className="text-foreground">Gran Buenos Aires (GBA)</strong>, con base
          en el barrio de Flores.
        </p>
        <p className="mb-3 text-sm font-semibold text-foreground">Barrios de CABA:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {barrios.map((barrio) => (
            <span
              key={barrio}
              className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full"
            >
              {barrio}
            </span>
          ))}
        </div>
        <p className="mb-3 text-sm font-semibold text-foreground">Gran Buenos Aires:</p>
        <div className="flex flex-wrap gap-2">
          {gbaZonas.map((zona) => (
            <span
              key={zona}
              className="bg-accent/20 text-foreground text-sm px-3 py-1 rounded-full"
            >
              {zona}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    question: "¿Brindan servicio de embalaje?",
    answer: (
      <div>
        <p className="mb-3">
          <strong className="text-foreground">Tradicional (Incluido):</strong> Protección de muebles con mantas y/o film stretch para un traslado seguro.
        </p>
        <p>
          <strong className="text-foreground">Adicional (Contenidos):</strong> Servicio premium donde un embalador asiste al domicilio 48hs antes para embalar cristalería, loza, vajilla, libros y objetos delicados.
        </p>
      </div>
    ),
  },
  {
    question: "¿Qué formas de pago aceptan?",
    answer: (
      <p>
        Aceptamos efectivo, transferencia bancaria y tarjetas de crédito/débito. También
        trabajamos con Mercado Pago; consultanos por los costos de financiación.
      </p>
    ),
  },
  {
    question: "¿Con qué anticipación entregan las cajas o canastos?",
    answer: (
      <div>
        <p className="mb-3">
          Realizamos la entrega de materiales con hasta una semana de antelación para que tengas
          tiempo suficiente de organizar y realizar el embalaje con tranquilidad.
        </p>
        <p>
          Las cajas son descartables, por lo que el cliente puede disponer de ellas tras el uso.
          Los canastos deben ser devueltos la semana posterior al servicio en horario a combinar.
        </p>
      </div>
    ),
  },
  {
    question: "¿Hacen mudanzas al interior del país?",
    answer: (
      <div>
        <p className="mb-3">
          Sí, realizamos traslados y mudanzas de larga distancia a diferentes puntos del
          interior del país. Consultanos por tu destino específico para brindarte un
          presupuesto detallado.
        </p>
        <p className="font-semibold text-foreground">
          Importante: Para traslados al interior del país, realizamos únicamente mudanzas exclusivas.
          No realizamos cargas parciales ni servicios de expreso.
        </p>
      </div>
    ),
  },
  {
    question: "¿Cuentan con servicio de guardamuebles?",
    answer: (
      <p>
        Sí, ofrecemos espacios seguros, limpios y monitoreados para el almacenaje de tus
        pertenencias por tiempo corto o prolongado, con la misma garantía de cuidado que
        nuestras mudanzas.
      </p>
    ),
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden py-24 md:py-32 bg-background">
      <div className="container relative mx-auto px-4">
        <p className="sr-only">Preguntas frecuentes sobre mudanzas en Buenos Aires, fletes en CABA y servicios de guardamuebles de Marino Mudanzas.</p>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="text-center lg:sticky lg:top-32 lg:self-start lg:text-left">
            <div data-reveal="up" className="mb-6"><Ornament /></div>
            <h2 data-reveal="up" className="section-title text-3xl md:text-6xl text-foreground mb-5 delay-reveal-1">
              Preguntas Frecuentes
            </h2>
            <p data-reveal="up" className="font-body text-muted-foreground text-lg delay-reveal-2">
              Todo lo que necesitás saber sobre nuestros servicios de{" "}
              <strong className="text-foreground">Mudanzas en CABA</strong> y{" "}
              <strong className="text-foreground">Fletes</strong>
            </p>
          </div>

          <div data-reveal-stagger="70">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  data-reveal="up"
                  className={`group relative mb-3 overflow-hidden rounded-2xl border transition-[border-color,background-color,box-shadow] duration-500 ${
                    isOpen
                      ? "border-gold/50 bg-card shadow-[0_24px_50px_-30px_hsl(var(--navy)/0.4)]"
                      : "border-border bg-card hover:border-gold/30"
                  }`}
                >
                  {/* Gold accent bar for the open item */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-0 h-full w-1 origin-top bg-gradient-to-b from-gold to-gold-light transition-transform duration-500 ${
                      isOpen ? "scale-y-100" : "scale-y-0"
                    }`}
                  />
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`flex w-full items-center justify-between gap-4 px-6 py-5 font-body text-left text-base md:text-lg font-semibold transition-colors ${
                      isOpen ? "text-gold" : "text-foreground hover:text-gold"
                    }`}
                    aria-expanded={isOpen}
                  >
                    {faq.question}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isOpen ? "rotate-45 border-gold bg-gold text-navy" : "border-border group-hover:border-gold/50"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  {/* Content always in DOM, collapsed via grid rows */}
                  <div
                    className="grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                    }}
                    aria-hidden={!isOpen}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 font-body text-muted-foreground text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
