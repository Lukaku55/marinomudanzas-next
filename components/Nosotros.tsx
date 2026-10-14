import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";
import Foto from "./Foto";
import Pendiente from "./Pendiente";
import { MOSTRAR_PENDIENTES } from "@/content/site";
import Reveal from "./Reveal";

export default function Nosotros({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos(idioma);
  const n = t.nosotros;
  return (
    <section id="nosotros" className="textura-papel">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-24 md:px-8 md:py-36 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="display max-w-[17ch] text-[clamp(2rem,4.6vw,3.6rem)]">{n.titulo}</h2>
          </Reveal>
          <div className="mt-8 max-w-[60ch] space-y-5 text-[1.1rem] leading-relaxed text-ink-soft">
            {n.parrafos.map((p, i) => (
              <Reveal key={i} demora={0.08 * (i + 1)}>
                <p className={i === 0 ? "text-[1.25rem] leading-snug text-ink" : undefined}>{p}</p>
              </Reveal>
            ))}
          </div>
          {MOSTRAR_PENDIENTES && n.confirmar && (
            <div className="mt-10 flex max-w-[60ch] flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-6 text-sm text-ink-soft">
              <Pendiente>{t.ui.aConfirmar}</Pendiente>
              <span>{t.ui.faltaSumar}: {n.pendientes.join("; ")}.</span>
            </div>
          )}
        </div>
        <Reveal modo="cortina" as="figure" className="lg:col-span-5">
          <Foto foto={n.foto} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] w-full rounded-[4px] object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
