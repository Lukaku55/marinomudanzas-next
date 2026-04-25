import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-navy-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-mm.webp" alt="Logo de Marino Mudanzas - Empresa de fletes y mudanzas en CABA" className="h-12 w-12 rounded-full bg-background p-1" loading="lazy" />
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
          <div>
            <h3 className="font-display text-lg font-semibold text-primary-foreground mb-4">Enlaces</h3>
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
                  className="font-body text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-primary-foreground mb-4">Contacto</h3>
            <div className="flex flex-col gap-3">
              <h4 className="font-body text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider">Teléfonos</h4>
              <a href="tel:+541146111818" className="flex items-center gap-3 font-body text-primary-foreground/60 hover:text-gold transition-colors text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                4611-1818
              </a>
              <a href="tel:+541146131818" className="flex items-center gap-3 font-body text-primary-foreground/60 hover:text-gold transition-colors text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                4613-1818
              </a>
              <a href="tel:+541146371818" className="flex items-center gap-3 font-body text-primary-foreground/60 hover:text-gold transition-colors text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                4637-1818
              </a>
              <h4 className="font-body text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider mt-2">WhatsApp</h4>
              <a
                href="https://wa.me/5491154507435"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-primary-foreground/60 hover:text-gold transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                11-5450-7435
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-display text-lg font-semibold text-primary-foreground mb-4">Información</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 font-body text-primary-foreground/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Av. Juan Bautista Alberdi 2968, Flores, Buenos Aires
              </div>
              <div className="flex items-start gap-3 font-body text-primary-foreground/60 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Lunes a Sábados de 08:00 a 18:00
              </div>
              <a
                href="https://www.instagram.com/marino_mudanzas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-primary-foreground/60 hover:text-gold transition-colors text-sm mt-2"
              >
                
                @marino_mudanzas
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-sm text-primary-foreground/40">
            © Marino Mudanzas 2025 — Empresa de mudanzas en Buenos Aires desde 1950. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
