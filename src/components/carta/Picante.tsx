import { FaPepperHot } from "react-icons/fa";

import type { NivelPicante } from "../../types/carta";

type PicanteProps = {
  nivel?: NivelPicante;
};

export function Picante({ nivel }: PicanteProps) {
  if (!nivel) {
    return null;
  }

  const etiqueta = `Picante: nivel ${nivel} de 3`;

  return (
    <span
      role="img"
      aria-label={etiqueta}
      title={etiqueta}
      className="
        inline-flex items-center gap-0.5 text-red-500
        motion-safe:animate-vibrate-rotate-1 px-2
      "
    >
      {Array.from({ length: nivel }, (_, index) => (
        <FaPepperHot
          key={`picante-${index}`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}