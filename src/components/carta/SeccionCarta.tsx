import type { SeccionCarta as SeccionCartaType } from "../../types/carta";
import { ProductoCard } from "./ProductoCard";

type SeccionCartaProps = {
  seccion: SeccionCartaType;
  type: "normal" | "vegana";
};

export function SeccionCarta({ seccion, type }: SeccionCartaProps) {
  const tituloId = `${seccion.id}-titulo`;

  const text_accent = type === "vegana" ? "text-accent-vg" : "text-accent";
  const text_muted = type === "vegana" ? "text-accent-vg/60" : "text-accent/60";

  return (
    <section
      id={seccion.id}
      aria-labelledby={tituloId}
      className="my-8 flex w-full flex-col scroll-mt-8 scroll-smooth"
    >
      <h2
        id={tituloId}
        className={`mb-4 text-4xl font-title font-semibold capitalize tracking-widest ${text_accent}`}
      >
        {seccion.titulo}
      </h2>

      {seccion.subtitulo && (
          <h3 className={`text-xl ${text_muted} font-semibold text-muted-foreground`}>
            {seccion.subtitulo}
          </h3>
      )}

      <ul className="space-y-4">
        {seccion.productos.map((producto) => (
          <li key={producto.id}>
            <ProductoCard producto={producto} type={type} />
          </li>
        ))}
      </ul>
    </section>
  );
}