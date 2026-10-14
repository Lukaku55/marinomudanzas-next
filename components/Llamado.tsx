import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";

/** Franja de contacto para cortar la página donde el visitante ya vio pruebas. */
export default function Llamado({ idioma = "es", ...props }: { idioma?: Idioma; titulo?: string; texto?: string }) {
  const t = textos(idioma);
  const { cta: CTA, confianza: CONFIANZA } = t;
  const titulo = props.titulo ?? t.ui.llamadoTitulo;
  const texto = props.texto ?? t.ui.llamadoTexto;
  return (
    <section className="on-dark bg-navy text-white">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-5 py-16 md:px-8 md:py-20 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="display max-w-[20ch] text-[clamp(1.8rem,3.6vw,2.8rem)]">{titulo}</h2>
          <p className="mt-3 max-w-[52ch] text-[1.05rem] leading-relaxed text-navy-soft">{texto}</p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
            {CONFIANZA.map((c) => <li key={c} className="border-l border-gold pl-3">{c}</li>)}
          </ul>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a href={CTA.href} className="btn btn-primario">{CTA.label}<ArrowRight size={18} weight="bold" /></a>
          <a href={t.whatsapp()} target="_blank" rel="noopener noreferrer" className="btn btn-linea text-white"><WhatsappLogo size={20} weight="fill" />WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
