import { MOSTRAR_PENDIENTES } from "@/content/site";

/** Marca visible de contenido provisional. Se apaga desde content/site.ts. */
export default function Pendiente({ children = "A confirmar", className = "" }: { children?: React.ReactNode; className?: string }) {
  if (!MOSTRAR_PENDIENTES) return null;
  return (
    <span className={`inline-flex items-center rounded-[4px] border border-dashed border-current px-2 py-0.5 text-xs font-medium opacity-80 ${className}`}>
      {children}
    </span>
  );
}
