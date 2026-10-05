"use client";
import { Warehouse } from "lucide-react";
import { ServiceDetailCard } from "@/components/ServiceStack";

const ServiceDetailGuardamuebles = () => {
  return (
    <ServiceDetailCard
      id="guardamuebles"
      index={2}
      icon={Warehouse}
      title="Guardamuebles Seguro en Buenos Aires"
      text="Almacenaje seguro y monitoreado 24hs en nuestras instalaciones en Flores, CABA. Espacios individuales limpios y secos para guardar tus muebles por el tiempo que necesites, con retiro y entrega a domicilio."
      href="/guardamuebles"
    />
  );
};

export default ServiceDetailGuardamuebles;
