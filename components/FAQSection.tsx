"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <p className="sr-only">Preguntas frecuentes sobre mudanzas en Buenos Aires, fletes en CABA y servicios de guardamuebles de Marino Mudanzas.</p>
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Todo lo que necesitás saber sobre nuestros servicios de{" "}
            <strong className="text-foreground">Mudanzas en CABA</strong> y{" "}
            <strong className="text-foreground">Fletes</strong>
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-border">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between py-5 font-body text-left text-foreground text-base md:text-lg font-semibold hover:text-gold transition-colors"
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {/* Content always in DOM, collapsed via max-height */}
                <div
                  className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "1000px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                  aria-hidden={!isOpen}
                >
                  <div className="pb-4 font-body text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
