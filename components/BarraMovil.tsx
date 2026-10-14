import { ClipboardText } from "@phosphor-icons/react/dist/ssr";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";

/** En celular, el pedido de presupuesto queda siempre a mano. WhatsApp va en el botón flotante. */
export default function BarraMovil({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos(idioma);
  return (
    <>
      <div className="h-[76px] md:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 p-3 backdrop-blur md:hidden">
        <a href={t.cta.href} className="btn btn-primario w-full"><ClipboardText size={20} weight="bold" aria-hidden="true" />{t.ui.presupuestoCorto}</a>
      </div>
    </>
  );
}
