import type { SeccionCarta as SeccionCartaType } from "../../types/carta";
import { ProductoCard } from "./ProductoCard";

type SeccionCartaProps = {
  seccion: SeccionCartaType;
};

export function SeccionCarta({ seccion }: SeccionCartaProps) {
  const tituloId = `${seccion.id}-titulo`;

  return (
    <section
      id={seccion.id}
      aria-labelledby={tituloId}
      className="my-8 flex w-full flex-col scroll-mt-8"
    >
      <h2
        id={tituloId}
        className="mb-4 text-4xl font-title font-semibold capitalize tracking-widest text-accent"
      >
        {seccion.titulo}
      </h2>

      <ul className="space-y-4">
        {seccion.productos.map((producto) => (
          <li key={producto.id}>
            <ProductoCard producto={producto} />
          </li>
        ))}
      </ul>
    </section>
  );
}