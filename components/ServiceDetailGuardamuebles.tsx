import { Phone, MessageCircle, CheckCircle, ShieldCheck } from "lucide-react";

const benefits = [
  "Depósito propio con vigilancia y monitoreo las 24 horas",
  "Espacios climatizados para proteger muebles y objetos delicados",
  "Acceso coordinado para retiro parcial o total de pertenencias",
  "Contratos flexibles: días, semanas o meses sin permanencia mínima",
  "Inventario detallado al momento del ingreso de mercadería",
  "Embalaje especial para almacenamiento prolongado",
  "Seguro de almacenamiento incluido en la tarifa",
  "Servicio de retiro y entrega a domicilio",
];

const ServiceDetailGuardamuebles = () => {
  return (
    <section id="guardamuebles" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
            Guardamuebles con Seguridad 24hs en Buenos Aires
          </h2>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            ¿Necesitás un lugar seguro para guardar tus muebles y pertenencias? En <strong className="text-foreground">Marino Mudanzas</strong> contamos con un depósito propio de guardamuebles en Buenos Aires, equipado con vigilancia permanente, cámaras de seguridad y monitoreo las 24 horas del día, los 365 días del año. Ya sea que estés en proceso de mudanza, remodelando tu hogar o necesites liberar espacio en tu oficina, nuestro servicio de guardamuebles te ofrece la tranquilidad que necesitás.
          </p>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            Nuestras instalaciones cuentan con espacios climatizados que protegen tus pertenencias de la humedad, el polvo y las variaciones de temperatura. Esto es especialmente importante para muebles de madera, tapizados, electrodomésticos, documentos y objetos de valor sentimental o económico. Al ingresar tu mercadería, realizamos un inventario detallado con fotografías para que tengas un registro completo de cada pieza almacenada.
          </p>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            Ofrecemos contratos flexibles que se adaptan a tus necesidades: podés guardar tus pertenencias por días, semanas o meses, sin permanencia mínima obligatoria. Si necesitás retirar algunos objetos antes de tiempo, coordinamos el acceso de forma rápida y sencilla. También brindamos servicio de retiro a domicilio: pasamos a buscar tus cosas, las embalamos con materiales profesionales y las trasladamos a nuestro depósito.
          </p>

          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
            La tarifa de guardamuebles incluye seguro de almacenamiento, por lo que tus pertenencias están protegidas ante cualquier eventualidad. Nuestro depósito está ubicado en una zona de fácil acceso en Buenos Aires, lo que nos permite retirar y entregar tu mercadería de forma ágil en cualquier punto de CABA y GBA. Consultá nuestras tarifas y reservá tu espacio hoy mismo.
          </p>

          <div className="bg-secondary rounded-xl p-8 mb-10">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-gold" />
              Características de nuestro guardamuebles
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-body text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20consultar%20por%20el%20servicio%20de%20guardamuebles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[hsl(142,70%,35%)] text-primary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Pedí tu presupuesto gratis
            </a>
            <a
              href="tel:+541146111818"
              className="flex items-center gap-3 bg-navy text-primary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Llamanos: 4611-1818
            </a>
          </div>
        </div>
      </div>


      <div className="mt-12 border-t border-border pt-8">
        <h3 className="font-display text-xl font-semibold text-foreground mb-6">También te puede interesar</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/mudanzas-residenciales" className="block bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-gold transition-all group"><h4 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-1">Mudanzas Residenciales</h4><p className="font-body text-sm text-muted-foreground">Traslado de casas y departamentos en CABA y GBA</p></a>
          <a href="/mudanzas-oficinas" className="block bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-gold transition-all group"><h4 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-1">Mudanzas de Oficinas</h4><p className="font-body text-sm text-muted-foreground">Traslado profesional de empresas y oficinas en CABA y GBA</p></a>
          <a href="/mudanzas-interior" className="block bg-card border border-border rounded-xl p-5 hover:shadow-lg hover:border-gold transition-all group"><h4 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors mb-1">Mudanzas al Interior</h4><p className="font-body text-sm text-muted-foreground">Larga distancia a todo el pais y paises limitrofes</p></a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailGuardamuebles;
