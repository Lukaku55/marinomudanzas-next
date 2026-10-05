"use client";
import { Building2 } from "lucide-react";
import { ServiceDetailCard } from "@/components/ServiceStack";

const ServiceDetailComercial = () => {
  return (
    <ServiceDetailCard
      id="mudanzas-comerciales"
      index={1}
      icon={Building2}
      title="Mudanzas de Oficinas y Empresas"
      text="Minimizamos el tiempo de inactividad de tu negocio. Planificamos cada detalle del traslado, trabajamos fuera del horario laboral si es necesario y contamos con experiencia en edificios corporativos de toda CABA."
      href="/mudanzas-oficinas"
    />
  );
};

export default ServiceDetailComercial;
