"use client";
import { Route } from "lucide-react";
import { ServiceDetailCard } from "@/components/ServiceStack";

const ServiceDetailInterior = () => {
  return (
    <ServiceDetailCard
      id="mudanzas-interior"
      index={3}
      icon={Route}
      title="Mudanzas al Interior del País"
      text="Realizamos mudanzas exclusivas a todo el territorio argentino y paises limitrofes. Sin cargas parciales, mayor seguridad para tus pertenencias y tiempos de entrega precisos desde Buenos Aires a cualquier destino."
      href="/mudanzas-interior"
    />
  );
};

export default ServiceDetailInterior;
