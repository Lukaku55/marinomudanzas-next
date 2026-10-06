"use client";
import { useEffect, useState } from "react";
import { estadoAtencion } from "@/lib/cerebro";

/** Indicador en vivo: ¿estamos atendiendo ahora? (hora de Buenos Aires). */
export default function EstadoAtencion({
  className = "",
  tonoClaro = false,
}: {
  className?: string;
  /** true sobre fondos claros (texto verde oscuro), false sobre fondos oscuros. */
  tonoClaro?: boolean;
}) {
  const [estado, setEstado] = useState<ReturnType<typeof estadoAtencion> | null>(null);

  useEffect(() => {
    const actualizar = () => setEstado(estadoAtencion());
    actualizar();
    const id = setInterval(actualizar, 60_000);
    return () => clearInterval(id);
  }, []);

  // En el servidor no sabemos la hora del visitante: reservamos el espacio.
  if (!estado) return <p className={`h-5 ${className}`} aria-hidden="true" />;

  return (
    <p className={`flex items-center gap-2 text-sm ${className}`} role="status">
      <span className="relative flex h-2.5 w-2.5">
        {estado.abierto && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
        )}
        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${estado.abierto ? "bg-green-500" : "bg-zinc-500"}`} />
      </span>
      <span className={estado.abierto ? (tonoClaro ? "text-green-700" : "text-green-400") : tonoClaro ? "text-muted-foreground" : "text-primary-foreground/70"}>
        {estado.texto}
      </span>
    </p>
  );
}
