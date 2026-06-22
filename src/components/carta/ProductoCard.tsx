import type { Producto } from "../../types/carta";
import { formatEuro } from "../../utils/formatters";
import { Picante } from "./Picante";
import { Alergenos } from "./Alergenos";

type ProductoCardProps = {
  producto: Producto;
};

export function ProductoCard({ producto }: ProductoCardProps) {
  return (
    <article className="flex gap-3 border-b border-gray-600 pb-4">
      <div className="min-w-0 flex-1">
        {producto.nombre && (
          <h3 className="mb-2 text-xl font-bold">
            {producto.nombre}
          </h3>
        )}

        <p className="text-gray-400">
          {producto.descripcion}
        </p>

        {producto.nota && (
          <p className="mt-1 text-sm text-gray-500">
            {producto.nota}
          </p>
        )}

        <div className="mt-2 items-center gap-2">
          <Picante nivel={producto.picante} />
          <Alergenos alergenos={producto.alergenos} />
        </div>
      </div>

      <data
        value={(producto.precioCentimos / 100).toFixed(2)}
        className="shrink-0 self-end font-semibold text-accent/75"
      >
        {formatEuro(producto.precioCentimos)}
      </data>
    </article>
  );
}