import Footer from "./Footer";
import Header from "./Header";
import WhatsAppButton from "./WhatsAppButton";

/**
 * Envoltorio de las páginas traídas tal cual del sitio actual (blog, servicios
 * y galería). Algunas incluyen su propia cabecera y pie y otras no: acá se
 * ponen una sola vez y se ocultan los repetidos (ver ".blog-pagina" en globals.css).
 */
export default function PaginaImportada({ children }: { children: React.ReactNode }) {
  return (
    <div className="blog">
      <Header />
      <div className="blog-pagina">{children}</div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
