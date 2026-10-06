import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import Image from "next/image";
import { NEGOCIO } from "@/lib/cerebro";


const Footer = () => {
  return (
    <footer className="bg-navy-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo-mm.webp" alt="Logo de Marino Mudanzas - Empresa de fletes y mudanzas en CABA" width={48} height={48} className="h-12 w-12 rounded-full bg-background p-1 object-contain" />
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
              {NEGOCIO.telefonos.map((t) => (
                <a key={t.e164} href={`tel:${t.e164}`} className="flex items-center gap-3 font-body text-primary-foreground/60 hover:text-gold transition-colors text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {t.visible}
                </a>
              ))}
              <h4 className="font-body text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider mt-2">WhatsApp</h4>
              <a
                href={`https://wa.me/${NEGOCIO.whatsapp.numero}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-primary-foreground/60 hover:text-gold transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                {NEGOCIO.whatsapp.visible}
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-display text-lg font-semibold text-primary-foreground mb-4">Información</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 font-body text-primary-foreground/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                {NEGOCIO.direccion.calle}, {NEGOCIO.direccion.barrio}, Buenos Aires
              </div>
              <div className="flex items-start gap-3 font-body text-primary-foreground/60 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Lunes a Sábados de {String(NEGOCIO.horario.abre).padStart(2, "0")}:00 a {NEGOCIO.horario.cierra}:00
              </div>
              <a
                href={NEGOCIO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-primary-foreground/60 hover:text-gold transition-colors text-sm mt-2"
              >
                @{NEGOCIO.instagram.usuario}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-sm text-primary-foreground/40">
            © Marino Mudanzas {new Date().getFullYear()} — Empresa de mudanzas en Buenos Aires desde {NEGOCIO.fundacion}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
