import { CalendarCheck, ChatCircleDots, Receipt, ShieldCheck, Star, Truck } from "@phosphor-icons/react/dist/ssr";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";
import Pendiente from "./Pendiente";
import { MOSTRAR_PENDIENTES } from "@/content/site";
import Reveal from "./Reveal";

const ICONOS = { presupuesto: Receipt, cuidado: ShieldCheck, plan: CalendarCheck, camion: Truck, chat: ChatCircleDots, estrella: Star };

export default function PorQue({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos(idioma);
  const POR_QUE = t.porQue;
  return (
    <section id="por-que" className="bg-surface">
      <div className="mx-auto max-w-[1320px] px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <h2 className="display max-w-[18ch] text-[clamp(2rem,4.6vw,3.6rem)]">{POR_QUE.titulo}</h2>
        </Reveal>
        <dl className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {POR_QUE.motivos.map((m, i) => {
            const Icono = ICONOS[m.icono];
            return (
              <Reveal key={m.titulo} demora={0.05 * i} className="border-t border-line pt-6">
                <Icono size={34} weight="light" className="text-gold-deep" aria-hidden="true" />
                <dt className="display mt-4 text-[1.3rem]">{m.titulo}</dt>
                <dd className="mt-2 leading-relaxed text-ink-soft">{m.texto}</dd>
              </Reveal>
            );
          })}
        </dl>
        {MOSTRAR_PENDIENTES && POR_QUE.confirmar && (
          <p className="mt-12 flex flex-wrap items-center gap-3 text-sm text-ink-soft">
            <Pendiente>{t.ui.aConfirmar}</Pendiente>
            <span>{t.ui.porQueNota}</span>
          </p>
        )}
      </div>
    </section>
  );
}
