import { Truck, Package, Shield, Clock, Home, Building, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Helmet } from "react-helmet-async";

const services = [
  {
    icon: Truck,
    title: "Mudanzas Residenciales",
    description: "Trasladamos tu hogar completo con el mayor cuidado. Embalaje, carga, transporte y descarga profesional.",
    href: "/mudanzas-residenciales",
  },
  {
    icon: Building,
    title: "Mudanzas Comerciales",
    description: "Oficinas, locales y empresas. Minimizamos el tiempo de inactividad de tu negocio.",
    href: "/mudanzas-oficinas",
  },
  {
    icon: Package,
    title: "Embalaje Profesional",
    description: "Materiales de primera calidad para proteger cada uno de tus objetos durante el traslado.",
  },
  {
    icon: Shield,
    title: "Seguro de Carga",
    description: "Tus pertenencias están aseguradas durante todo el proceso de mudanza.",
  },
  {
    icon: Clock,
    title: "Servicio Puntual",
    description: "Cumplimos con los horarios acordados. Tu tiempo es valioso para nosotros.",
  },
  {
    icon: Home,
    title: "Guardamuebles",
    description: "Almacenamiento seguro y climatizado para tus pertenencias el tiempo que necesites.",
    href: "/guardamuebles",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-secondary">
      <Helmet>
        <meta name="description" content="Servicios de mudanzas residenciales, comerciales, embalaje profesional, seguro de carga, guardamuebles y fletes puntuales en Buenos Aires." />
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Soluciones completas para cada tipo de mudanza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow border border-border group"
            >
              <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-5 group-hover:bg-gold transition-colors" role="img" aria-label={`Ícono de ${service.title} - Personal de mudanzas trabajando`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              {service.href && (
                <Link href={service.href} className="mt-4 inline-flex items-center gap-2 text-gold font-semibold hover:underline">
                  Ver más <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
