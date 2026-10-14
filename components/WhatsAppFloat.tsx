"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { textos } from "@/content/textos";
import { idiomaDeRuta } from "@/content/idioma";

/** Aparece después de la portada, donde ya hay botones de contacto visibles. */
export default function WhatsAppFloat() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const ruta = usePathname();
  const enPortada = ruta === "/" || ruta === "/en";
  const t = textos(idiomaDeRuta(ruta));
  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > window.innerHeight * 0.8));

  return (
    <AnimatePresence>
      {(visible || !enPortada) && (
        <motion.a
          href={t.whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.ui.whatsappEscribir}
          className="fixed bottom-5 right-5 z-40 hidden h-14 w-14 md:grid place-items-center rounded-full bg-[#1c6b3c] text-white shadow-[0_10px_30px_-8px_rgb(11_23_40/0.55)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <WhatsappLogo size={28} weight="fill" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
