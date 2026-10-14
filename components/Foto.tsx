import Image from "next/image";
import type { Foto as FotoT } from "@/content/site";

/* Next genera la foto en AVIF o WebP y al ancho que pide cada pantalla. */
export default function Foto({ foto, sizes = "100vw", className = "", prioridad = false }: { foto: FotoT; sizes?: string; className?: string; prioridad?: boolean }) {
  return <Image src={foto.src} alt={foto.alt} width={foto.ancho} height={foto.alto} sizes={sizes} priority={prioridad} className={className} />;
}
