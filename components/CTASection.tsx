import { Phone, MessageCircle, Truck } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 bg-navy-dark grain">
      {/* Concentric rings pulsing outward from the center */}
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 -ml-[18rem] -mt-[18rem] h-[36rem] w-[36rem] rounded-full border border-gold/20"
            style={{ animation: `ping-ring 8s cubic-bezier(0,0,0.2,1) ${i * 2}s infinite` }}
          />
        ))}
      </div>
      <div aria-hidden className="aura left-1/2 top-1/2 -ml-[13rem] -mt-[13rem] h-[26rem] w-[26rem] aura-blue" />

      <div className="container relative mx-auto px-4 text-center">
        <h2 data-reveal="up" className="section-title text-3xl md:text-6xl text-primary-foreground mb-6">
          ¿Listo Para Tu <span className="text-gold-shine">Mudanza?</span>
        </h2>
        <p data-reveal="up" className="font-body text-primary-foreground/75 text-lg max-w-2xl mx-auto mb-12 delay-reveal-1">
          Contactanos hoy y recibí tu presupuesto sin cargo.
          Estamos disponibles para atenderte y resolver todas tus consultas.
        </p>

        <div data-reveal="up" className="flex flex-col sm:flex-row items-center justify-center gap-4 delay-reveal-2">
          <span data-magnetic="0.25" className="inline-flex transition-transform duration-300 ease-out">
            <a
              href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20cotizar%20una%20mudanza"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp btn-shimmer !px-9 !py-4 text-lg font-bold"
            >
              <MessageCircle className="relative z-[2] w-6 h-6" />
              <span className="relative z-[2]">WhatsApp: 11-5450-7435</span>
            </a>
          </span>
          <span data-magnetic="0.25" className="inline-flex transition-transform duration-300 ease-out">
            <a href="tel:+541146111818" className="btn-ghost !px-9 !py-4 text-lg font-bold">
              <Phone className="w-6 h-6" />
              Llamar: 4611-1818
            </a>
          </span>
        </div>
      </div>

      {/* Road with a truck driving across in a loop */}
      <div aria-hidden className="absolute inset-x-0 bottom-10 h-10">
        <div
          className="absolute inset-x-0 top-1/2 h-px opacity-40"
          style={{
            backgroundImage: "linear-gradient(90deg, hsl(var(--gold)) 50%, transparent 50%)",
            backgroundSize: "32px 1px",
            animation: "road 1.2s linear infinite",
          }}
        />
        <div className="absolute top-0 h-10" style={{ animation: "drive 16s linear infinite" }}>
          <Truck className="h-8 w-8 text-gold" strokeWidth={1.5} style={{ animation: "bob 0.6s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
