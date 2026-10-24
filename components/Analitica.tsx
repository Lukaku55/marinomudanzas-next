"use client";
import Script from "next/script";
import { useEffect } from "react";

/** Google Analytics 4 de mudanzasmarino.com.ar (propiedad creada el 2026-10-24 en la cuenta "Lucas"). */
export const GA_ID = "G-PH6PV26G9T";

type Gtag = (...args: unknown[]) => void;
/** Registra un evento en Analytics si el script ya cargó; si no, no hace nada. */
export const evento = (nombre: string, datos: Record<string, string> = {}) =>
  (window as Window & { gtag?: Gtag }).gtag?.("event", nombre, datos);

/**
 * Carga Analytics después de que la página es interactiva (no frena la carga)
 * y mide los contactos: clics a WhatsApp y a los teléfonos. Las vistas de
 * página, incluido el cambio entre páginas, las mide GA4 solo.
 */
export default function Analitica() {
  useEffect(() => {
    const alClic = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      if (href.includes("wa.me/")) evento("contact", { method: "whatsapp" });
      else if (href.startsWith("tel:")) evento("contact", { method: "telefono" });
    };
    document.addEventListener("click", alClic);
    return () => document.removeEventListener("click", alClic);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
