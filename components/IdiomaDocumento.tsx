"use client";
import { useEffect } from "react";

/**
 * El layout raíz declara español. En /en se corrige el idioma del documento
 * (lectores de pantalla, traductores, corrector) y se restablece al salir.
 */
export default function IdiomaDocumento({ lang }: { lang: string }) {
  useEffect(() => {
    const antes = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => { document.documentElement.lang = antes; };
  }, [lang]);
  return <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(lang)}` }} />;
}
