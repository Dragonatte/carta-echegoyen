import { cartaPrincipal } from "../../data/carta";
import { FloatingFoodIcons } from "./FloatingFoodIcons";
import { SeccionCarta } from "./SeccionCarta";

export function CartaDigital() {
  return (
    <main className="relative isolate p-4 md:max-w-6xl md:mx-auto">
      <FloatingFoodIcons />

      <section
        id="carta"
        aria-labelledby="carta-titulo"
        className="relative z-10 pt-32"
      >
        <h1
          id="carta-titulo"
          className="text-center text-6xl font-title font-bold tracking-[0.35em] text-accent"
        >
          Nuestra Carta
        </h1>

        <div className="mt-8">
          {cartaPrincipal.map((seccion) => (
            <SeccionCarta key={seccion.id} seccion={seccion} />
          ))}
        </div>
      </section>
    </main>
  );
}