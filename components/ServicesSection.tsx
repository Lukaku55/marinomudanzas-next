import { Truck, Package, Shield, Clock, Home, Building, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Helmet } from "react-helmet-async";
import { Ornament } from "@/components/fx/primitives";

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
    description: "Disponible para mudanzas al interior del país, documentación sensible de bancos o empresas y equipos informáticos.",
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

// Bento layout: column span on large screens + dark "featured" variant
const layout = [
  { span: "lg:col-span-4", dark: true },
  { span: "lg:col-span-2", dark: false },
  { span: "lg:col-span-2", dark: false },
  { span: "lg:col-span-4", dark: true },
  { span: "lg:col-span-3", dark: false },
  { span: "lg:col-span-3", dark: false },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="relative overflow-hidden py-24 md:py-32 bg-secondary">
      <Helmet>
        <meta name="description" content="Servicios de mudanzas residenciales, comerciales, embalaje profesional, guardamuebles y fletes puntuales en Buenos Aires." />
      </Helmet>
      <div aria-hidden className="aura -left-40 top-20 h-96 w-96 bg-gold/15" />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <div data-reveal="up" className="mb-6 flex justify-center"><Ornament /></div>
          <h2 data-reveal="up" className="section-title text-3xl md:text-6xl text-foreground mb-5 delay-reveal-1">
            Nuestros Servicios
          </h2>
          <p data-reveal="up" className="font-body text-muted-foreground text-lg max-w-xl mx-auto delay-reveal-2">
            Soluciones completas para cada tipo de mudanza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6" data-reveal-stagger="90">
          {services.map((service, index) => {
            const { span, dark } = layout[index];
            return (
              <div
                key={index}
                data-reveal="up"
                className={`${span} group spotlight relative overflow-hidden rounded-3xl p-8 md:p-10 border transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 ${
                  dark
                    ? "bg-navy border-white/10 text-primary-foreground shadow-[0_30px_60px_-30px_hsl(var(--navy)/0.8)] hover:border-gold/40"
                    : "bg-card border-border shadow-sm hover:shadow-[0_30px_60px_-30px_hsl(var(--navy)/0.35)] hover:border-gold/40"
                }`}
              >
                {dark && <div aria-hidden className="absolute inset-0 grid-lines opacity-50" />}
                {/* Oversized watermark icon */}
                <service.icon
                  aria-hidden
                  strokeWidth={0.75}
                  className={`pointer-events-none absolute -right-6 -bottom-6 h-44 w-44 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-6 group-hover:scale-110 ${
                    dark ? "text-gold/15" : "text-navy/[0.06]"
                  }`}
                />
                <div className="relative z-[1]">
                  <div
                    className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-[background-color,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[8deg] group-hover:scale-105 ${
                      dark ? "bg-white/5 border border-gold/30 group-hover:bg-gold" : "bg-navy group-hover:bg-gold"
                    }`}
                    role="img"
                    aria-label={`Ícono de ${service.title} - Personal de mudanzas trabajando`}
                  >
                    <span aria-hidden className="absolute inset-0 rounded-2xl border border-gold/0 transition-all duration-700 group-hover:-inset-2 group-hover:border-gold/40" />
                    <service.icon className={`w-7 h-7 transition-colors ${dark ? "text-gold group-hover:text-navy" : "text-primary-foreground"}`} />
                  </div>
                  <h3 className={`font-display text-xl md:text-2xl font-semibold mb-3 ${dark ? "text-primary-foreground" : "text-foreground"}`}>
                    {service.title}
                  </h3>
                  <p className={`font-body leading-relaxed max-w-md ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {service.description}
                  </p>
                  {service.href && (
                    <Link
                      href={service.href}
                      className="group/link mt-6 inline-flex items-center gap-2 text-gold font-semibold"
                    >
                      <span className="link-line">Ver más</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 transition-all duration-500 group-hover/link:bg-gold group-hover/link:text-navy group-hover/link:translate-x-1">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
