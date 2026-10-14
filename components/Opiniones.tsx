import { ArrowUpRight, Star } from "@phosphor-icons/react/dist/ssr";
import { EMPRESA, MOSTRAR_PENDIENTES } from "@/content/site";
import Pendiente from "./Pendiente";
import Reveal from "./Reveal";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";

/* No se muestran testimonios hasta verificar cada uno con su reseña original. */
export default function Opiniones({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos(idioma);
  return (
    <section id="opiniones" className="textura-papel">
      <div className="mx-auto grid max-w-[1320px] items-end gap-10 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <h2 className="display max-w-[15ch] text-[clamp(2rem,4.6vw,3.6rem)]">{t.ui.opinionesTitulo}</h2>
          <p className="mt-6 max-w-[52ch] text-[1.1rem] leading-relaxed text-ink-soft">
            {t.ui.opinionesTexto}
          </p>
          {MOSTRAR_PENDIENTES && (
            <p className="mt-8 flex flex-wrap items-center gap-3 text-sm text-ink-soft">
            <Pendiente>{t.ui.testimoniosPendientes}</Pendiente>
            <span>{t.ui.testimoniosNota}</span>
          </p>
          )}
        </Reveal>
        <Reveal demora={0.1} className="rounded-[4px] border border-line bg-surface p-8 lg:col-span-5">
          <p className="flex items-baseline gap-3">
            <span className="display text-[4.5rem] leading-none [font-variant-numeric:tabular-nums]">{idioma === "en" ? EMPRESA.resenas.puntuacion.replace(",", ".") : EMPRESA.resenas.puntuacion}</span>
            <span className="text-ink-soft">{t.ui.sobre5}</span>
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-ink-soft">
            <Star size={18} weight="fill" className="text-gold" aria-hidden="true" />
            {t.ui.puntuacionVista}
          </p>
          <a href={EMPRESA.resenas.url} target="_blank" rel="noopener noreferrer" className="btn btn-linea mt-7 text-navy">
            {t.ui.verResenas}
            <ArrowUpRight size={18} weight="bold" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
