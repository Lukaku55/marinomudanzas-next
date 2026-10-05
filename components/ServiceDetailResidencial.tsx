"use client";
import { Home } from "lucide-react";
import { ServiceDetailCard } from "@/components/ServiceStack";

const ServiceDetailResidencial = () => {
  return (
    <ServiceDetailCard
      id="mudanzas-residenciales"
      index={0}
      icon={Home}
      title="Mudanzas Residenciales en CABA y GBA"
      text="Trasladamos tu hogar con el mayor cuidado profesional. Embalaje incluido con mantas y film stretch, desarmado y armado de muebles y coordinacion con encargados de edificios."
      href="/mudanzas-residenciales"
    />
  );
};

export default ServiceDetailResidencial;
