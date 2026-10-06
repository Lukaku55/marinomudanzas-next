import { MessageCircle, Phone } from "lucide-react";
import { NEGOCIO, TELEFONO, TEL_HREF, whatsappUrl } from "@/lib/cerebro";
import AsistenteMudanza from "@/components/cerebro/AsistenteMudanza";
import EstadoAtencion from "@/components/vivo/EstadoAtencion";

/** Sección de cotización: asistente inteligente + vías de contacto directas. */
export default function Planificador() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Pedí Tu Cotización
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-6">
            Contanos tu mudanza y te mostramos al instante qué camión, cuánta gente y cuánto tiempo lleva. Después nos
            mandás el plan por WhatsApp y te pasamos tu presupuesto sin cargo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={TEL_HREF}
              className="flex items-center gap-2 bg-navy text-primary-foreground px-5 py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              {TELEFONO.visible}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[hsl(142,70%,35%)] text-primary-foreground px-5 py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp {NEGOCIO.whatsapp.visible}
            </a>
          </div>
          <EstadoAtencion className="justify-center mt-4 font-body" tonoClaro />
        </div>
        <AsistenteMudanza />
      </div>
    </section>
  );
}
