"use client";
import { useEffect, useRef } from "react";

/*
 * Entrada al aparecer en pantalla, hecha con CSS y un único observador compartido
 * (más liviano que animar cada bloque con JavaScript). "cortina" descubre
 * imágenes con clip-path. Los estilos están en globals.css (.revelar).
 */
let observador: IntersectionObserver | null = null;
const observar = (el: Element) => {
  observador ??= new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visto");
      observador?.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });
  observador.observe(el);
  return () => observador?.unobserve(el);
};

export default function Reveal({
  children, modo = "sube", demora = 0, className = "", as: Tag = "div",
}: { children: React.ReactNode; modo?: "sube" | "cortina"; demora?: number; className?: string; as?: "div" | "li" | "figure" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    (window as Window & { __revelar?: boolean }).__revelar = true;
    return ref.current ? observar(ref.current) : undefined;
  }, []);
  const estilo = demora ? ({ "--demora": `${demora}s` } as React.CSSProperties) : undefined;
  return (
    <Tag ref={ref as React.Ref<never>} className={`revelar revelar--${modo} ${className}`} style={estilo}>
      {modo === "cortina" ? <div className="revelar__cortina h-full w-full">{children}</div> : children}
    </Tag>
  );
}
