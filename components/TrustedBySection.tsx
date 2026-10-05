const companies = [
  { name: "Coca-Cola", alt: "Mudanza corporativa realizada para Coca-Cola por Marino Mudanzas" },
  { name: "Banco Comafi", alt: "Traslado de oficinas para Banco Comafi por Marino Mudanzas" },
  { name: "Banco Ciudad", alt: "Mudanza corporativa para Banco Ciudad por Marino Mudanzas" },
  { name: "Aeropuerto 2000", alt: "Logística y mudanza para Aeropuerto 2000 por Marino Mudanzas" },
  { name: "Embajada Qatar", alt: "Servicio de mudanza para Embajada de Qatar por Marino Mudanzas" },
  { name: "Embajada de Francia", alt: "Servicio de mudanza para la Embajada de Francia por Marino Mudanzas" },
];

type Company = (typeof companies)[number];

const CompanyName = ({ company }: { company: Company }) => (
  <div className="group flex items-center" title={company.alt}>
    <span className="font-display text-2xl md:text-4xl font-bold text-foreground/35 whitespace-nowrap select-none px-8 md:px-12 transition-colors duration-500 group-hover:text-navy">
      {company.name}
    </span>
    <span aria-hidden className="diamond opacity-60 transition-transform duration-500 group-hover:rotate-[225deg] group-hover:scale-150" />
  </div>
);

const TrustedBySection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-secondary border-y border-border">
      <div className="container mx-auto px-4">
        <h2 data-reveal="up" className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Empresas que Confiaron en Nosotros
        </h2>
      </div>

      <div data-reveal="up" className="marquee delay-reveal-1" style={{ ["--marquee-duration" as string]: "35s" }}>
        <div className="marquee-track items-center py-4">
          {companies.map((company) => (
            <CompanyName key={company.name} company={company} />
          ))}
          <div aria-hidden className="flex items-center" data-nosnippet>
            {companies.map((company) => (
              <CompanyName key={`dup-${company.name}`} company={company} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
