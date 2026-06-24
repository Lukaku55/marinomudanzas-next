import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ServiceDetailResidencial = () => {
  return (
    <section id="mudanzas-residenciales" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Mudanzas Residenciales en CABA y GBA
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
            Trasladamos tu hogar con el mayor cuidado profesional. Embalaje incluido con mantas y film stretch, desarmado y armado de muebles y coordinacion con encargados de edificios.
          </p>
          <Link
            href="/mudanzas-residenciales"
            className="inline-flex items-center gap-2 bg-navy text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
          >
            Ver servicio completo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailResidencial;
