"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { List, Translate, X } from "@phosphor-icons/react";
import { EMPRESA } from "@/content/site";
import { textos } from "@/content/textos";
import { idiomaDeRuta, portada, type Idioma } from "@/content/idioma";

/** Lleva a la portada en el otro idioma (el blog y las páginas internas están en español). */
function SelectorIdioma({ idioma, className = "" }: { idioma: Idioma; className?: string }) {
  const t = textos(idioma);
  const otro: Idioma = idioma === "en" ? "es" : "en";
  return (
    <a href={portada(otro)} hrefLang={otro} lang={otro} title={t.ui.cambiarAria} className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-[4px] px-2.5 text-[0.9rem] font-semibold ${className}`}>
      <Translate size={18} aria-hidden="true" />
      <span aria-hidden="true" className="min-[1100px]:hidden">{t.ui.cambiarCorto}</span>
      <span className="sr-only min-[1100px]:not-sr-only">{t.ui.cambiarA}</span>
    </a>
  );
}

export default function Header() {
  // Solo la portada tiene foto oscura detrás; en el resto va sólido desde el inicio.
  const ruta = usePathname();
  const siempreSolido = ruta !== "/" && ruta !== "/en";
  const idioma = idiomaDeRuta(ruta);
  const t = textos(idioma);
  const { nav: NAV, cta: CTA } = t;
  const { scrollY } = useScroll();
  const [solido, setSolido] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const reducir = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (y) => setSolido(y > 40));

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [abierto]);

  const claro = siempreSolido || solido || abierto;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-300 ${
        claro ? "bg-paper/95 text-ink shadow-[0_1px_0_var(--line)] backdrop-blur" : "on-dark bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1320px] items-center justify-between gap-6 px-5 md:px-8">
        <Link href={portada(idioma)} className="flex items-center gap-3" onClick={() => setAbierto(false)}>
          <Image src={EMPRESA.logo} alt="" width={44} height={44} priority className="h-11 w-11 rounded-full bg-white object-contain p-0.5" />
          <span className="display whitespace-nowrap text-[1.1rem] leading-none min-[680px]:max-lg:sr-only">{EMPRESA.nombre}</span>
        </Link>

        <nav aria-label={t.ui.menuPrincipal} className="hidden min-[680px]:block">
          <ul className="flex items-center gap-5 text-[0.9rem] font-medium lg:gap-7 lg:text-[0.95rem]">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} hrefLang={item.hrefLang} className="relative py-2 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-[var(--ease-out)] hover:after:scale-x-100">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <SelectorIdioma idioma={idioma} className="hover:bg-current/10" />
          <div className="hidden sm:block">
            <a href={CTA.href} className="btn btn-primario" aria-label={CTA.label}>
              <span className="lg:hidden">{t.ui.presupuestoCorto}</span>
              <span className="hidden lg:inline">{CTA.label}</span>
            </a>
          </div>
          <button
            type="button"
            className="-mr-2 grid h-12 w-12 place-items-center min-[680px]:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? t.ui.cerrarMenu : t.ui.abrirMenu}
            onClick={() => setAbierto((v) => !v)}
          >
            {abierto ? <X size={26} /> : <List size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {abierto && (
          <motion.div
            id="menu-movil"
            className="absolute inset-x-0 top-[var(--header-h)] h-[calc(100dvh-var(--header-h))] overflow-y-auto bg-paper px-5 pb-10 pt-6 min-[680px]:hidden"
            initial={reducir ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={reducir ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          >
            <nav aria-label={t.ui.menuMovil}>
              <ul className="divide-y divide-line border-y border-line">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reducir ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <Link href={item.href} hrefLang={item.hrefLang} onClick={() => setAbierto(false)} className="display flex min-h-[64px] items-center text-[1.75rem]">
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <a href={CTA.href} onClick={() => setAbierto(false)} className="btn btn-primario mt-8 w-full">
              {CTA.label}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
