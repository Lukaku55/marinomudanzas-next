import { Clock, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { EMPRESA, MOSTRAR_PENDIENTES } from "@/content/site";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";
import Pendiente from "./Pendiente";
import PresupuestoForm from "./PresupuestoForm";
import Reveal from "./Reveal";

export default function Presupuesto({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos(idioma);
  return (
    <section id="presupuesto" className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 py-24 md:px-8 md:py-36 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="display max-w-[14ch] text-[clamp(2rem,4.6vw,3.6rem)]">{t.ui.presupuestoTitulo}</h2>
          </Reveal>
          <Reveal demora={0.1}>
            <p className="mt-6 max-w-[52ch] text-[1.1rem] leading-relaxed text-ink-soft">
              {t.ui.presupuestoTexto}
            </p>
          </Reveal>
          <Reveal demora={0.15} className="mt-10 rounded-[4px] border border-line bg-surface p-6 md:p-9">
            <PresupuestoForm idioma={idioma} />
          </Reveal>
        </div>

        <aside className="lg:col-span-5 lg:pt-4" aria-label={t.ui.contactoDirecto}>
          <Reveal className="on-dark rounded-[4px] bg-navy p-7 text-white md:p-9">
            <h3 className="display text-[1.6rem]">{t.ui.hablarAhora}</h3>
            <p className="mt-2 text-navy-soft">{t.ui.hablarTexto}</p>
            <a href={t.whatsapp()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-6 w-full">
              <WhatsappLogo size={20} weight="fill" />
              WhatsApp {EMPRESA.whatsapp.visible}
            </a>
            <ul className="mt-7 grid gap-1 border-t border-white/15 pt-5">
              {EMPRESA.telefonos.map((t) => (
                <li key={t.href}>
                  <a href={t.href} className="flex min-h-[44px] items-center gap-3 text-[1.1rem]">
                    <Phone size={20} className="text-gold" aria-hidden="true" />
                    <span className="link-sub">{t.visible}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <ul className="mt-6 grid gap-3 text-ink-soft">
            <li className="flex gap-3"><MapPin size={20} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" /><span>{EMPRESA.direccion}</span></li>
            <li className="flex gap-3"><Clock size={20} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" /><span>{t.horario}</span></li>
            <li className="flex gap-3"><WhatsappLogo size={20} className="mt-0.5 shrink-0 text-gold-deep" aria-hidden="true" /><span>{t.horarioWhatsapp}</span></li>
          </ul>
          {MOSTRAR_PENDIENTES && !EMPRESA.email && (
            <p className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-5 text-sm text-ink-soft">
              <Pendiente>{t.ui.datoPendiente}</Pendiente>
              <span>{t.ui.correoPendiente}</span>
            </p>
          )}
          {EMPRESA.email && (
            <a href={`mailto:${EMPRESA.email}`} className="btn btn-linea mt-6 text-navy">{EMPRESA.email}</a>
          )}
        </aside>
      </div>
    </section>
  );
}
