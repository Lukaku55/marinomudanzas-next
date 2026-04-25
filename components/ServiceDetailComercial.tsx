import { Phone, MessageCircle, CheckCircle, ShieldCheck } from "lucide-react";

const benefits = [
  "Planificación logística para minimizar el tiempo de inactividad",
  "Traslado de mobiliario, equipos informáticos y archivos",
  "Servicio en horarios especiales: noches, fines de semana y feriados",
  "Embalaje especializado para equipos electrónicos y documentación",
  "Coordinación con administración del edificio y seguridad",
  "Seguros de carga para equipamiento de alto valor",
  "Desarme y rearme de estaciones de trabajo y divisorias",
  "Servicio de reciclaje y descarte de mobiliario en desuso",
];

const ServiceDetailComercial = () => {
  return (
    <section id="mudanzas-comerciales" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
            Mudanzas de Oficinas y Empresas en Buenos Aires
          </h2>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            En <strong className="text-foreground">Marino Mudanzas</strong>, entendemos que el traslado de una oficina o empresa requiere una planificación meticulosa para evitar interrupciones en la operación del negocio. Con más de 80 años de experiencia, hemos gestionado la mudanza de cientos de empresas en Buenos Aires, desde pequeños estudios profesionales hasta grandes corporaciones con múltiples pisos de oficinas. Nuestro objetivo es que tu empresa retome su actividad normal en el menor tiempo posible.
          </p>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            Nuestro proceso comienza con una reunión de relevamiento donde evaluamos el volumen de mobiliario, la cantidad de puestos de trabajo, los equipos informáticos, archivos físicos y cualquier elemento especial que requiera cuidado adicional. A partir de esta evaluación, elaboramos un cronograma detallado que puede incluir mudanzas por etapas, traslados nocturnos o durante fines de semana, para que el impacto en la productividad de tu empresa sea mínimo.
          </p>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            Contamos con equipos especializados en el desarme y rearme de estaciones de trabajo, divisorias modulares, estanterías y muebles de archivo. Nuestro personal está capacitado para manipular equipos informáticos, servidores, impresoras y cableado estructurado con los protocolos de seguridad adecuados. Utilizamos etiquetado sistemático para que cada elemento llegue exactamente al lugar asignado en la nueva ubicación.
          </p>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
            También ofrecemos servicio de descarte y reciclaje de mobiliario en desuso, ayudando a tu empresa a optimizar el espacio en las nuevas instalaciones. Ya sea que te mudes dentro del microcentro, a Puerto Madero, al corredor norte del GBA o a cualquier punto de Capital Federal, en Marino Mudanzas hacemos que la transición sea rápida, segura y organizada. Solicitá tu presupuesto corporativo sin cargo.
          </p>

          <div className="bg-background rounded-xl p-8 mb-10">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-gold" />
              Ventajas de nuestro servicio empresarial
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-body text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20solicitar%20un%20presupuesto%20de%20mudanza%20comercial%20sin%20cargo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[hsl(142,70%,35%)] text-primary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Pedí tu presupuesto gratis
            </a>
            <a
              href="tel:+541146111818"
              className="flex items-center gap-3 bg-navy text-primary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Llamanos: 4611-1818
            </a>
          </div>
        </div>
      </div>


      <div className="mt-12 border-t border-border pt-8">
        <h3 className="font-display text-xl font-semibold text-foreground mb-6">También te puede interesar</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/mudanzas-residenciales" className="block bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-gold transition-all group"><h4 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-1">Mudanzas Residenciales</h4><p className="font-body text-sm text-muted-foreground">Traslado de casas y departamentos en CABA y GBA</p></a>
          <a href="/guardamuebles" className="block bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-gold transition-all group"><h4 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-1">Guardamuebles</h4><p className="font-body text-sm text-muted-foreground">Almacenaje seguro y monitoreado 24hs en Flores</p></a>
          <a href="/mudanzas-interior" className="block bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-gold transition-all group"><h4 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-1">Mudanzas al Interior</h4><p className="font-body text-sm text-muted-foreground">Larga distancia a todo el pais y paises limitrofes</p></a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailComercial;
