"use client";
import { usePathname } from "next/navigation";
import { WhatsappLogo } from "@phosphor-icons/react";
import { textos } from "@/content/textos";
import { idiomaDeRuta } from "@/content/idioma";

/** Botón de WhatsApp siempre visible, en todas las páginas. En celular queda arriba de la barra de presupuesto. */
export default function WhatsAppFloat() {
  const t = textos(idiomaDeRuta(usePathname()));
  return (
    <a
      href={t.whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.ui.whatsappEscribir}
      className="fixed bottom-[88px] right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#1c6b3c] text-white shadow-[0_10px_30px_-8px_rgb(11_23_40/0.55)] transition-[transform,background-color] duration-200 hover:bg-[#15532e] active:scale-95 md:bottom-5 md:right-5"
    >
      <WhatsappLogo size={30} weight="fill" aria-hidden="true" />
    </a>
  );
}
