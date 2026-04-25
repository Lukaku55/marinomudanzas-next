import { CheckCircle } from "lucide-react";

const features = [
  "Más de 80 años de experiencia",
  "Personal capacitado y profesional",
  "Flota propia de camiones",
  "Cobertura en CABA y GBA",
  "Presupuesto sin compromiso",
  "Atención personalizada",
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
              En <strong className="text-foreground">Marino Mudanzas</strong> entendemos que cada mudanza es única. 
              Por eso ofrecemos un servicio personalizado, cuidando cada detalle 
              para que tu experiencia sea impecable de principio a fin.
              Con más de 80 años de trayectoria, somos especialistas en <strong className="text-foreground">mudanzas particulares</strong>, 
              traslados de oficinas y servicios de guardamuebles. Contamos con flota propia para <strong className="text-foreground">fletes</strong> en 
              Flores, Caballito y todo Buenos Aires. Realizamos embalajes profesionales y movimientos 
              por soga con la máxima seguridad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="font-body text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "+150.000", label: "Mudanzas Realizadas" },
              { number: "80+", label: "Años de Experiencia" },
              { number: "100%", label: "Clientes Satisfechos" },
              { number: "24hs", label: "Respuesta Inmediata" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-navy rounded-xl p-8 text-center shadow-lg"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="font-body text-sm text-primary-foreground/80 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
