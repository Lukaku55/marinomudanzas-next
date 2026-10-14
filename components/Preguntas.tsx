import { Plus } from "@phosphor-icons/react/dist/ssr";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";
import Reveal from "./Reveal";

/* Acordeón nativo: funciona con teclado y sin JavaScript. */
export default function Preguntas({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos(idioma);
  return (
    <section id="preguntas" className="textura-papel border-t border-line">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <h2 className="display max-w-[12ch] text-[clamp(2rem,4.6vw,3.6rem)]">{t.ui.preguntasTitulo}</h2>
        </Reveal>
        <div className="lg:col-span-8">
          {t.faq.map((f) => (
            <details key={f.pregunta} className="group border-b border-line first:border-t">
              <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-6 py-4 text-[1.15rem] font-semibold [&::-webkit-details-marker]:hidden">
                {f.pregunta}
                <Plus size={22} className="shrink-0 text-gold-deep transition-transform duration-300 ease-[var(--ease-out)] group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="max-w-[68ch] pb-6 text-[1.05rem] leading-relaxed text-ink-soft">{f.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
