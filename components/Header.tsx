"use client";
import { useState } from "react";

import { Phone, Menu, X } from "lucide-react";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  

  const navLinks = [
    { label: "Inicio", href: "/#inicio" },
    { label: "Servicios", href: "/#servicios" },
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
          <img src="/logo-mm.webp" alt="Logo de Marino Mudanzas - Empresa de mudanzas y fletes en Buenos Aires" className="h-12 w-12 rounded-full bg-background p-1" />
          <span className="font-display text-2xl font-bold text-primary-foreground tracking-wide hidden sm:inline">
            Marino Mudanzas
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
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

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-dark border-t border-navy-light">
          <nav className="flex flex-col px-4 py-4 gap-4">
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
