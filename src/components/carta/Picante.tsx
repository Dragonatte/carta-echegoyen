import { FaPepperHot } from "react-icons/fa";

import type { NivelPicante } from "../../types/carta";

type PicanteProps = {
  nivel?: NivelPicante;
};

const vibrateClasses = {
  1: "motion-safe:animate-vibrate-rotate-1",
  2: "motion-safe:animate-vibrate-rotate-2",
  3: "motion-safe:animate-vibrate-rotate-3"
}

export function Picante({ nivel }: PicanteProps) {
  if (!nivel) {
    return null;
  }

  const etiqueta: string = `Picante: nivel ${nivel} de 3`;
  const className: string = vibrateClasses[nivel] ?? "";

  return (
    <span
      role="img"
      aria-label={etiqueta}
      title={etiqueta}
      className="
        inline-flex items-center gap-0.5 text-red-500 px-2
      "
    >
      {Array.from({ length: nivel }, (_: never, index: number) => (
        <FaPepperHot
          key={`picante-${index}`}
          aria-hidden="true"
          className={className}
        />
      ))}
    </span>
  );
}