import { Phone, MessageCircle, CheckCircle, Home, ShieldCheck, Package } from "lucide-react";

const benefits = [
  "Embalaje profesional con mantas, film stretch y cajas reforzadas",
  "Personal capacitado para manipular muebles delicados y electrodomésticos",
  "Camiones de distintos tamaños adaptados a departamentos y casas",
  "Servicio de armado y desarmado de muebles incluido",
  "Coordinación con encargados de edificios y consorcios",
  "Seguro de carga durante todo el traslado",
  "Puntualidad garantizada: llegamos en el horario acordado",
  "Presupuesto sin cargo y sin compromiso",
];

const ServiceDetailResidencial = () => {
  return (
    <section id="mudanzas-residenciales" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
            Mudanzas Residenciales en CABA y GBA
          </h2>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            En <strong className="text-foreground">Marino Mudanzas</strong>, llevamos más de 80 años ayudando a familias de Buenos Aires a trasladarse de forma segura y sin estrés. Nuestro servicio de mudanzas residenciales está diseñado para cubrir cada etapa del proceso: desde la planificación y el embalaje profesional hasta la carga, el transporte y la descarga en tu nuevo hogar. Ya sea que te mudes de un departamento de un ambiente en Palermo o de una casa de tres pisos en Belgrano, contamos con la experiencia y los recursos para hacerlo de manera impecable.
          </p>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            Sabemos que cada mudanza es única. Por eso, nuestro equipo realiza una visita previa o evaluación telefónica para dimensionar correctamente el volumen de tus pertenencias, determinar el tamaño de camión necesario y anticipar cualquier dificultad logística, como escaleras estrechas, falta de ascensor o restricciones horarias del consorcio. Esta planificación detallada nos permite ofrecerte un presupuesto justo, sin sorpresas ni costos ocultos.
          </p>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            Nuestros operarios están especialmente entrenados para manipular muebles de alto valor, electrodomésticos pesados, objetos frágiles como cristalería y obras de arte, y todo tipo de enseres personales. Utilizamos materiales de embalaje de primera calidad —mantas acolchadas, film stretch, cajas de cartón corrugado y esquineros— para garantizar que cada pieza llegue en perfectas condiciones. Además, ofrecemos servicio de armado y desarmado de muebles, para que no tengas que preocuparte por nada.
          </p>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
            Cubrimos toda la Ciudad Autónoma de Buenos Aires y el Gran Buenos Aires, incluyendo zonas como Flores, Caballito, Recoleta, Villa Urquiza, Vicente López, San Isidro y Morón. Coordinamos con encargados de edificios y gestionamos los permisos de carga y descarga para que tu mudanza se desarrolle sin contratiempos. Pedí tu presupuesto sin cargo y descubrí por qué miles de familias nos eligen desde 1950.
          </p>

          <div className="bg-secondary rounded-xl p-8 mb-10">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-gold" />
              Beneficios de nuestro servicio residencial
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
              href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20solicitar%20un%20presupuesto%20de%20mudanza%20residencial%20sin%20cargo"
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
          <a href="/mudanzas-oficinas" className="block bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-gold transition-all group"><h4 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-1">Mudanzas de Oficinas</h4><p className="font-body text-sm text-muted-foreground">Traslado profesional de empresas y oficinas en CABA y GBA</p></a>
          <a href="/guardamuebles" className="block bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-gold transition-all group"><h4 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-1">Guardamuebles</h4><p className="font-body text-sm text-muted-foreground">Almacenaje seguro y monitoreado 24hs en Flores</p></a>
          <a href="/mudanzas-interior" className="block bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-gold transition-all group"><h4 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-1">Mudanzas al Interior</h4><p className="font-body text-sm text-muted-foreground">Larga distancia a todo el pais y paises limitrofes</p></a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailResidencial;
