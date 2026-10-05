import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

const contactLink =
  "group flex items-center gap-3 font-body text-primary-foreground/60 hover:text-gold transition-colors text-sm";
const iconWrap =
  "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10 group-hover:rotate-[360deg]";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-navy-dark py-20 grain">
      {/* Animated gold line across the top */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(var(--gold)), hsl(var(--gold-light)), transparent)",
          backgroundSize: "50% 100%",
          backgroundRepeat: "no-repeat",
          animation: "sweep-line 6s ease-in-out infinite",
        }}
      />
      <div aria-hidden className="aura -left-40 -top-40 h-[28rem] w-[28rem] aura-blue" />
      <img
        aria-hidden
        alt=""
        src="/logo-mm.webp"
        loading="lazy"
        className="pointer-events-none absolute -bottom-40 -right-32 w-[30rem] select-none opacity-[0.04] animate-spin-slow"
        style={{ animationDuration: "90s" }}
      />

      <div className="container relative mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12" data-reveal-stagger="120">
          {/* Brand */}
          <div data-reveal="up">
            <div className="group flex items-center gap-3 mb-5">
              <img src="/logo-mm.webp" alt="Logo de Marino Mudanzas - Empresa de fletes y mudanzas en CABA" className="h-12 w-12 rounded-full bg-background p-1 transition-transform duration-700 group-hover:rotate-[360deg]" loading="lazy" />
              <span className="font-display text-xl font-bold text-primary-foreground">Marino Mudanzas</span>
            </div>
            <p className="font-body text-primary-foreground/60 leading-relaxed">
              <strong className="text-gold">Más de 80 años de experiencia</strong> como tu aliado de confianza para mudanzas residenciales y comerciales en Buenos Aires y alrededores.
            </p>
            <p className="font-body text-primary-foreground/50 text-sm mt-3 leading-relaxed">
              Brindamos servicio de mudanzas profesionales en Flores, Caballito, Palermo, Belgrano, Recoleta y todo Buenos Aires.
            </p>
          </div>

          {/* Links */}
          <div data-reveal="up">
            <h3 className="font-display text-lg font-semibold text-primary-foreground mb-5">Enlaces</h3>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Inicio", href: "/#inicio" },
                { label: "Servicios", href: "/#servicios" },
                { label: "Nosotros", href: "/#nosotros" },
                { label: "Zonas", href: "/#zonas-cobertura" },
                { label: "Testimonios", href: "/#testimonios" },
                { label: "Blog", href: "/blog" },
                { label: "Contacto", href: "/#contacto" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 font-body text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                >
                  <span aria-hidden className="diamond h-1.5 w-1.5 scale-0 transition-transform duration-300 group-hover:scale-100" />
                  <span className="-ml-3.5 transition-[margin] duration-300 group-hover:ml-0">{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div data-reveal="up">
            <h3 className="font-display text-lg font-semibold text-primary-foreground mb-5">Contacto</h3>
            <div className="flex flex-col gap-3">
              <h4 className="font-body text-xs font-semibold text-gold/80 uppercase tracking-[0.2em]">Teléfonos</h4>
              <a href="tel:+541146111818" className={contactLink}>
                <span className={iconWrap}><Phone className="w-4 h-4 flex-shrink-0" /></span>
                4611-1818
              </a>
              <a href="tel:+541146131818" className={contactLink}>
                <span className={iconWrap}><Phone className="w-4 h-4 flex-shrink-0" /></span>
                4613-1818
              </a>
              <a href="tel:+541146371818" className={contactLink}>
                <span className={iconWrap}><Phone className="w-4 h-4 flex-shrink-0" /></span>
                4637-1818
              </a>
              <h4 className="font-body text-xs font-semibold text-gold/80 uppercase tracking-[0.2em] mt-2">WhatsApp</h4>
              <a
                href="https://wa.me/5491154507435"
                target="_blank"
                rel="noopener noreferrer"
                className={contactLink}
              >
                <span className={iconWrap}><MessageCircle className="w-4 h-4 flex-shrink-0" /></span>
                11-5450-7435
              </a>
            </div>
          </div>

          {/* Info */}
          <div data-reveal="up">
            <h3 className="font-display text-lg font-semibold text-primary-foreground mb-5">Información</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 font-body text-primary-foreground/60 text-sm">
                <span className={iconWrap.replace("group-hover:rotate-[360deg]", "")}><MapPin className="w-4 h-4 flex-shrink-0" /></span>
                <span className="pt-1.5">Av. Juan Bautista Alberdi 2968, Flores, Buenos Aires</span>
              </div>
              <div className="flex items-start gap-3 font-body text-primary-foreground/60 text-sm">
                <span className={iconWrap.replace("group-hover:rotate-[360deg]", "")}><Clock className="w-4 h-4 flex-shrink-0" /></span>
                <span className="pt-1.5">Lunes a Sábados de 08:00 a 18:00</span>
              </div>
              <a
                href="https://www.instagram.com/marino_mudanzas"
                target="_blank"
                rel="noopener noreferrer"
                className="link-line w-fit font-body text-primary-foreground/60 hover:text-gold transition-colors text-sm mt-2"
              >
                @marino_mudanzas
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-16 pt-8 text-center" data-reveal="up">
          <p className="font-body text-sm text-primary-foreground/40">
            © Marino Mudanzas 2026 — Empresa de mudanzas en Buenos Aires desde 1950. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
