"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Número que "cuenta" hasta su valor al aparecer en pantalla.
 * El HTML del servidor ya trae el valor final (SEO y sin JS).
 */
export default function Contador({
  valor,
  prefijo = "",
  sufijo = "",
  decimales = 0,
  duracion = 1400,
  className,
}: {
  valor: number;
  prefijo?: string;
  sufijo?: string;
  decimales?: number;
  duracion?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [actual, setActual] = useState(valor);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const inicio = performance.now();
        const paso = (t: number) => {
          const p = Math.min(1, (t - inicio) / duracion);
          const suave = 1 - Math.pow(1 - p, 3);
          setActual(valor * suave);
          if (p < 1) raf = requestAnimationFrame(paso);
        };
        setActual(0);
        raf = requestAnimationFrame(paso);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [valor, duracion]);

  const texto = actual.toLocaleString("es-AR", {
    minimumFractionDigits: decimales,
    maximumFractionDigits: decimales,
  });

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefijo}
      {texto}
      {sufijo}
    </span>
  );
}
