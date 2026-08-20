import type { Producto } from "../../types/carta";
import { cartaPrincipal, cartaVegana } from "../../data/carta";
import { formatEuro } from "../../utils/formatters";
import { Picante } from "./Picante";
import { Alergenos } from "./Alergenos";

type ProductoCardProps = {
  producto: Producto;
  type: "normal" | "vegana";
};

type ProductoIndexado = {
  producto: Producto;
  nombre: string;
  visible: boolean;
};

const productosAuxiliares = [
  {
    id: "patatas-gajo",
    nombre: "Patatas gajo",
    descripcion: "",
    precioCentimos: 0,
    alergenos: ["gluten"]
  },
  {
    id: "patatas-naturales",
    nombre: "Patatas naturales",
    descripcion: "",
    precioCentimos: 0,
    alergenos: []
  },
  {
    id: "aros-queso-cheddar",
    nombre: "Aros de queso Cheddar",
    descripcion: "",
    precioCentimos: 0,
    alergenos: ["gluten", "leche"]
  },
  {
    id: "salsa-ranchera",
    nombre: "Salsa ranchera",
    descripcion: "",
    precioCentimos: 0,
    alergenos: ["huevo", "leche"]
  },
  {
    id: "salsa-yogur",
    nombre: "Salsa de yogur",
    descripcion: "",
    precioCentimos: 0,
    alergenos: ["leche"]
  },
  {
    id: "aros-de-cebolla",
    nombre: "Aros de cebolla",
    descripcion: "",
    precioCentimos: 0,
    alergenos: []
  },
  {
    id: "nuggets-artesanos",
    nombre: "Nuggets artesanos",
    descripcion: "",
    precioCentimos: 0,
    alergenos: []
  },
] as const satisfies readonly Producto[];


/*
 * Índice de todos los productos que aparecen realmente
 * en alguna de las cartas.
 *
 * Si un producto no tiene nombre propio, usamos el título
 * de su sección. Por ejemplo:
 *
 * pulled-chicken-original -> "Pulled Chicken"
 */
const productosVisibles = [
  ...cartaPrincipal,
  ...cartaVegana
].flatMap((seccion) =>
  seccion.productos.map((producto) => [
    producto.id,
    {
      producto,
      nombre: producto.nombre ?? seccion.titulo,
      visible: true
    }
  ] as const)
);


/*
 * Los auxiliares pueden formar parte de combos, pero
 * no tienen una tarjeta propia a la que desplazarse.
 */
const productosOcultos = productosAuxiliares.map((producto) => [
  producto.id,
  {
    producto,
    nombre: producto.nombre ?? producto.id,
    visible: false
  }
] as const);


const productosPorId = new Map<string, ProductoIndexado>([
  ...productosVisibles,
  ...productosOcultos
]);


export function ProductoCard({
  producto,
  type
}: ProductoCardProps) {
  const priceText =
    type === "vegana"
      ? "text-accent-vg/75"
      : "text-accent/75";

  return (
    <article
      id={producto.id}
      className="flex scroll-mt-24 gap-3 border-b border-gray-600 pb-4"
    >
      <div className="min-w-0 flex-1">

        {producto.nombre && (
          <h3 className="mb-2 text-xl font-bold">
            {producto.nombre}
          </h3>
        )}

        {producto.personas && (
          <p className="mb-2 font-semibold text-gray-300">
            Para {producto.personas} personas
          </p>
        )}

        <p className="text-gray-400">
          {producto.descripcion}
        </p>

        {producto.nota && (
          <p className="mt-1 text-sm text-gray-500">
            {producto.nota}
          </p>
        )}

        {producto.componentes &&
          producto.componentes.length > 0 && (
            <div className="mt-3">
              <p className="text-gray-400">
                En el tablao podrás bailar con...
              </p>

              <ul className="mt-2 list-disc space-y-1 pl-5">
                {producto.componentes.map((componente) => {
                  const incluido = productosPorId.get(
                    componente.productoId
                  );

                  if (!incluido) {
                    return (
                      <li key={componente.productoId}>
                        {componente.productoId}
                      </li>
                    );
                  }

                  const contenido = (
                    <>
                      {componente.cantidad &&
                        componente.cantidad > 1 &&
                        `${componente.cantidad} × `}

                      {incluido.nombre}
                    </>
                  );

                  return (
                    <li key={componente.productoId}>
                      {incluido.visible ? (
                        <a
                          href={`#${incluido.producto.id}`}
                          className="
                            text-gray-300
                            underline
                            underline-offset-2
                            transition-colors
                            hover:text-white
                          "
                        >
                          {contenido}
                        </a>
                      ) : (
                        <span className="text-gray-300">
                          {contenido}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>

              {producto.textoFinal && (
                <p className="mt-3 text-gray-400">
                  {producto.textoFinal}
                </p>
              )}

              {producto.modificable === false && (
                <p className="mt-3 font-bold uppercase text-accent">
                  No es modificable
                </p>
              )}
            </div>
          )}

        <div className="mt-2 items-center gap-2">
          <Picante nivel={producto.picante} />

          <Alergenos
            alergenos={producto.alergenos}
            type={type}
          />
        </div>
      </div>

      <data
        value={(producto.precioCentimos / 100).toFixed(2)}
        className={`shrink-0 self-end font-semibold ${priceText}`}
      >
        {formatEuro(producto.precioCentimos)}
      </data>
    </article>
  );
}