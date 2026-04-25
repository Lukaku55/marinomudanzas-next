import { Phone, MessageCircle, CheckCircle, ShieldCheck } from "lucide-react";

const benefits = [
  "Servicio exclusivo: tu mudanza viaja sola, sin cargas parciales",
  "Camiones cerrados de gran porte con suspensión reforzada",
  "Embalaje premium para viajes de larga distancia",
  "Seguro de carga con cobertura nacional e internacional",
  "Coordinación de logística puerta a puerta",
  "Seguimiento del envío durante todo el recorrido",
  "Experiencia en rutas nacionales y cruces fronterizos",
  "Presupuesto cerrado sin costos ocultos por peajes o combustible",
];

const ServiceDetailInterior = () => {
  return (
    <section id="mudanzas-interior" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
            Mudanzas al Interior del País y Países Limítrofes
          </h2>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            Si tu próxima mudanza implica trasladarte fuera de Buenos Aires, en <strong className="text-foreground">Marino Mudanzas</strong> contamos con más de 80 años de experiencia realizando mudanzas al interior de Argentina y a países limítrofes como Uruguay, Chile, Paraguay y Brasil. Nuestro servicio de larga distancia es 100% exclusivo: tu mudanza viaja sola en un camión dedicado, sin compartir espacio con otras cargas. Esto garantiza mayor seguridad, menos manipulación y tiempos de entrega más predecibles.
          </p>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            Realizamos mudanzas a todas las provincias argentinas: Córdoba, Santa Fe, Mendoza, Tucumán, Salta, Neuquén, Bariloche, Mar del Plata, Rosario, y cualquier punto del país. Nuestros camiones cerrados de gran porte cuentan con suspensión reforzada para proteger tus pertenencias en rutas de largo recorrido. El embalaje para mudanzas al interior es premium: reforzamos cada pieza con materiales especiales que absorben impactos y vibraciones propias de los viajes por ruta.
          </p>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            El proceso incluye un relevamiento previo para dimensionar correctamente la operación, embalaje profesional en origen, carga con equipos hidráulicos cuando es necesario, transporte con seguimiento y descarga en destino con armado de muebles. Para mudanzas internacionales, gestionamos la documentación aduanera y coordinamos con agentes en el país de destino para que el cruce de frontera sea ágil y sin complicaciones.
          </p>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
            Nuestros presupuestos para mudanzas al interior son cerrados: incluyen todos los costos de peajes, combustible, personal y seguros, sin sorpresas al momento de la entrega. Trabajamos con un seguro de carga que cubre el valor total de tus pertenencias durante todo el recorrido. Contactanos para coordinar tu mudanza al interior y recibí un presupuesto detallado sin cargo.
          </p>

          <div className="bg-background rounded-xl p-8 mb-10">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-gold" />
              Ventajas de nuestro servicio de larga distancia
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
              href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20consultar%20por%20una%20mudanza%20al%20interior%20del%20pa%C3%ADs"
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
          <a href="/mudanzas-oficinas" className="block bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-gold transition-all group"><h4 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-1">Mudanzas de Oficinas</h4><p className="font-body text-sm text-muted-foreground">Traslado profesional de empresas y oficinas en CABA y GBA</p></a>
          <a href="/guardamuebles" className="block bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-gold transition-all group"><h4 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-1">Guardamuebles</h4><p className="font-body text-sm text-muted-foreground">Almacenaje seguro y monitoreado 24hs en Flores</p></a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailInterior;
