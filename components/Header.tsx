"use client";
import { useState, useRef, useEffect } from "react";
import { Phone, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";

const serviciosMenu = [
  { label: "Mudanzas Residenciales", href: "/mudanzas-residenciales" },
  { label: "Mudanzas Comerciales", href: "/mudanzas-oficinas" },
  { label: "Guardamuebles", href: "/guardamuebles" },
  { label: "Mudanzas al Interior", href: "/mudanzas-interior" },
];

const navLinkClass =
  "group relative py-2 text-primary-foreground/80 hover:text-gold transition-colors font-body text-[13px] uppercase tracking-[0.18em]";

const Underline = () => (
  <span
    aria-hidden
    className="absolute -bottom-0.5 left-1/2 h-px w-full -translate-x-1/2 scale-x-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
  />
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 480 && y > prev && !menuOpen);
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServiciosOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServiciosOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    const lenis = window.__lenis;
    if (menuOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const navLinks = [
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Zonas", href: "/#zonas-cobertura" },
    { label: "Testimonios", href: "/#testimonios" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/#contacto" },
  ];

  const solid = scrolled || menuOpen;

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[transform,background-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        hidden ? "-translate-y-full" : ""
      } ${
        solid
          ? "bg-navy/85 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* Gold hairline that appears once the header turns solid */}
      <span
        aria-hidden
        className={`absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-transparent via-gold/60 to-transparent transition-transform duration-700 ${
          solid ? "scale-x-100" : "scale-x-0"
        }`}
      />
      <div
        className={`container mx-auto flex items-center justify-between px-4 transition-[padding] duration-500 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <a href="/#inicio" className="group flex items-center gap-3">
          <span className="relative block rounded-full">
            <span
              aria-hidden
              className="absolute -inset-1 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: "conic-gradient(from 0deg, transparent, hsl(var(--gold)), transparent 60%)",
                animation: "spin-slow 3s linear infinite",
              }}
            />
            <img
              src="/logo-marino-nuevo.png"
              alt="Logo de Marino Mudanzas"
              className="relative h-12 w-12 rounded-full bg-background p-1 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[360deg]"
            />
          </span>
          <span className="font-display text-2xl font-bold text-primary-foreground tracking-wide hidden sm:inline transition-colors group-hover:text-gold-light">
            Marino Mudanzas
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          <a href="/#inicio" className={navLinkClass}>
            Inicio
            <Underline />
          </a>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServiciosOpen(!serviciosOpen)}
              className={`${navLinkClass} flex items-center gap-1`}
              aria-expanded={serviciosOpen}
            >
              Servicios
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-500 ${serviciosOpen ? "rotate-180" : ""}`}
              />
              <Underline />
            </button>
            <AnimatePresence>
              {serviciosOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-1/2 mt-4 w-64 -translate-x-1/2 origin-top overflow-hidden rounded-2xl border border-gold/20 bg-navy/95 p-2 shadow-2xl backdrop-blur-xl z-50"
                >
                  {serviciosMenu.map((item, i) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setServiciosOpen(false)}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i + 0.05, duration: 0.4 }}
                      className="group/item flex items-center gap-3 rounded-xl px-4 py-3 text-primary-foreground/80 hover:text-gold hover:bg-white/5 transition-colors font-body text-sm"
                    >
                      <span className="diamond scale-0 transition-transform duration-300 group-hover/item:scale-100" />
                      <span className="-ml-5 transition-[margin] duration-300 group-hover/item:ml-0">{item.label}</span>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
              <Underline />
            </a>
          ))}
        </nav>

        <span data-magnetic="0.3" className="hidden md:inline-flex transition-transform duration-300 ease-out">
          <a
            href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20cotizar%20una%20mudanza"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold btn-shimmer !px-5 !py-2.5 text-sm"
          >
            <Phone className="w-4 h-4 relative z-[2]" />
            <span className="relative z-[2]">Cotizá Gratis</span>
          </a>
        </span>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-primary-foreground"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition-transform duration-500 ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-5 rounded bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-0.5 w-5 rounded bg-current transition-transform duration-500 ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

    </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 92% 40px)" }}
            animate={{ clipPath: "circle(150% at 92% 40px)" }}
            exit={{ clipPath: "circle(0% at 92% 40px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 z-40 overflow-y-auto bg-navy-dark grain"
            data-lenis-prevent
          >
            <div aria-hidden className="aura -right-20 top-20 h-72 w-72 aura-blue" />
            <nav className="relative flex min-h-full flex-col justify-center gap-6 px-8 pb-12 pt-28">
              <div>
                <button
                  onClick={() => setServiciosOpen(!serviciosOpen)}
                  className="flex items-center gap-2 text-primary-foreground hover:text-gold transition-colors font-display text-3xl w-full"
                  aria-expanded={serviciosOpen}
                >
                  Servicios
                  <ChevronDown className={`w-6 h-6 transition-transform duration-500 ml-1 ${serviciosOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {serviciosOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 ml-1 flex flex-col gap-3 border-l border-gold/30 pl-4">
                        {serviciosMenu.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={() => {
                              setMenuOpen(false);
                              setServiciosOpen(false);
                            }}
                            className="text-gold font-body text-base"
                          >
                            {"→"} {item.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-primary-foreground hover:text-gold transition-colors font-display text-3xl"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20cotizar%20una%20mudanza"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="btn-gold btn-shimmer mt-4"
              >
                <Phone className="w-4 h-4 relative z-[2]" />
                <span className="relative z-[2]">Cotizá Gratis</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
