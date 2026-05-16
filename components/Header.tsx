"use client";
import { useState, useRef, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const serviciosMenu = [
  { label: "Mudanzas Residenciales", href: "/mudanzas-residenciales" },
  { label: "Mudanzas Comerciales", href: "/mudanzas-oficinas" },
  { label: "Guardamuebles", href: "/guardamuebles" },
  { label: "Mudanzas al Interior", href: "/mudanzas-interior" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServiciosOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Zonas", href: "/#zonas-cobertura" },
    { label: "Testimonios", href: "/#testimonios" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="/#inicio" className="flex items-center gap-3">
          <img src="/logo-marino-nuevo.png" alt="Logo de Marino Mudanzas" className="h-12 w-12 rounded-full bg-background p-1" />
          <span className="font-display text-2xl font-bold text-primary-foreground tracking-wide hidden sm:inline">
            Marino Mudanzas
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/#inicio" className="text-primary-foreground/80 hover:text-gold transition-colors font-body text-sm uppercase tracking-wider">Inicio</a>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServiciosOpen(!serviciosOpen)}
              className="flex items-center gap-1 text-primary-foreground/80 hover:text-gold transition-colors font-body text-sm uppercase tracking-wider"
            >
              Servicios
              <ChevronDown className={`w-4 h-4 transition-transform ${serviciosOpen ? "rotate-180" : ""}`} />
            </button>
            {serviciosOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-navy border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
                {serviciosMenu.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setServiciosOpen(false)}
                    className="block px-4 py-3 text-primary-foreground/80 hover:text-gold hover:bg-white/5 transition-colors font-body text-sm"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-gold transition-colors font-body text-sm uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20cotizar%20una%20mudanza"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-gold text-accent-foreground px-5 py-2.5 rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          Cotizá Gratis
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <div>
              <button
                onClick={() => setServiciosOpen(!serviciosOpen)}
                className="flex items-center gap-1 text-primary-foreground/80 hover:text-gold transition-colors font-body text-sm uppercase tracking-wider w-full"
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform ml-1 ${serviciosOpen ? "rotate-180" : ""}`} />
              </button>
              {serviciosOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {serviciosMenu.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => { setMenuOpen(false); setServiciosOpen(false); }}
                      className="text-gold font-body text-sm"
                    >
                      {"→"} {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-primary-foreground/80 hover:text-gold transition-colors font-body text-sm uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20cotizar%20una%20mudanza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold text-accent-foreground px-5 py-2.5 rounded-lg font-body font-semibold text-sm justify-center hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              Cotizá Gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
