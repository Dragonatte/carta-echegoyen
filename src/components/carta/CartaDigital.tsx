import { cartaPrincipal } from "../../data/carta";
import { FloatingFoodIcons } from "./FloatingFoodIcons";
import { SeccionCarta } from "./SeccionCarta";

export function CartaDigital() {
  return (
    <main className="relative isolate p-4 md:max-w-6xl md:mx-auto scroll-smooth">
      <FloatingFoodIcons />

      <section
        id="carta"
        aria-labelledby="carta-titulo"
        className="relative z-10 pt-32 scroll-smooth"
      >
        <h1
          id="carta-titulo"
          className="text-center text-6xl font-title font-bold tracking-[0.35em] text-accent"
        >
          Nuestra Carta
        </h1>

        <nav>
          <ul className="flex flex-wrap justify-center gap-4 mt-8">
            {cartaPrincipal.map((seccion) => (
              <li key={seccion.id}>
                <a
                  href={`#${seccion.id}`}
                  className="border-2 rounded-full border-accent/65 p-2 text-sm font-semibold text-primary text-accent/65 transition-colors duration-300 hover:bg-accent/50 hover:text-white/50 scroll-smooth"
                >
                  {seccion.titulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 scroll-smooth">
          {cartaPrincipal.map((seccion) => (
            <SeccionCarta key={seccion.id} seccion={seccion} />
          ))}
        </div>
      </section>
    </main>
  );
}