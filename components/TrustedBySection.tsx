const companies = [
  { name: "Coca-Cola", alt: "Mudanza corporativa realizada para Coca-Cola por Marino Mudanzas" },
  { name: "Banco Comafi", alt: "Traslado de oficinas para Banco Comafi por Marino Mudanzas" },
  { name: "Banco Ciudad", alt: "Mudanza corporativa para Banco Ciudad por Marino Mudanzas" },
  { name: "Aeropuerto 2000", alt: "Logística y mudanza para Aeropuerto 2000 por Marino Mudanzas" },
  { name: "Embajada Qatar", alt: "Servicio de mudanza para Embajada de Qatar por Marino Mudanzas" },
  { name: "Embajada de Francia", alt: "Servicio de mudanza para la Embajada de Francia por Marino Mudanzas" },
];

const TrustedBySection = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary border-b border-border">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Empresas que Confiaron en Nosotros
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center h-20 w-full px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              title={company.alt}
            >
              <span className="font-display text-lg md:text-xl font-bold text-foreground/70 text-center select-none">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
