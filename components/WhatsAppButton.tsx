import BarraMovil from "./BarraMovil";
import WhatsAppFloat from "./WhatsAppFloat";

/** Nombre que esperan los artículos del blog: botón flotante en escritorio y barra fija en celular. */
export default function WhatsAppButton() {
  return (
    <div data-whatsapp>
      <WhatsAppFloat />
      <BarraMovil />
    </div>
  );
}
