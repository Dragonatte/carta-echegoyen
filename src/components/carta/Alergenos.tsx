import type { ComponentType } from "react";

import {
  EggIcon,
  GlutenIcon,
  MilkIcon,
  MustardIcon,
  SesameIcon,
  SoyaIcon,
  SulphiteIcon
} from "react-allergens";

import { ALERGENOS, type Alergeno } from "../../types/carta.d";

type AllergenIconProps = {
  width?: number | string;
  height?: number | string;
  innerColor?: string;
  outerColor?: string;
};

type AlergenoMeta = {
  Icon: ComponentType<AllergenIconProps>;
};

const ALERGENO_META = {
  gluten: { Icon: GlutenIcon },
  leche: { Icon: MilkIcon },
  huevo: { Icon: EggIcon },
  mostaza: { Icon: MustardIcon },
  soja: { Icon: SoyaIcon },
  sesamo: { Icon: SesameIcon },
  sulfitos: { Icon: SulphiteIcon }
} as const satisfies Record<Alergeno, AlergenoMeta>;

type AlergenoIconPropsComponent = {
  alergeno: Alergeno;
};

function AlergenoIcon({ alergeno }: AlergenoIconPropsComponent) {
  const { Icon } = ALERGENO_META[alergeno];
  const label = ALERGENOS[alergeno];

  return (
    <li>
      <span
        title={label}
        className="
          group relative inline-flex h-9 w-9 items-center justify-center
          rounded-full border border-accent/30 bg-black/30
          transition-colors hover:border-accent hover:bg-accent/10
        "
      >
        <span aria-hidden="true">
          <Icon
            width={24}
            height={24}
            outerColor="#FAB91B80"
          />
        </span>

        <span className="sr-only">
          Contiene {label}
        </span>

        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute bottom-full left-1/2 z-30 mb-2
            -translate-x-1/2 whitespace-nowrap rounded-md
            bg-zinc-900 px-2 py-1 text-xs font-semibold text-white
            opacity-0 shadow-lg transition-opacity
            group-hover:opacity-100
          "
        >
          {label}

          <span
            className="
              absolute left-1/2 top-full -translate-x-1/2
              border-4 border-transparent border-t-zinc-900
            "
          />
        </span>
      </span>
    </li>
  );
}

type AlergenosProps = {
  alergenos?: readonly Alergeno[];
};

export function Alergenos({ alergenos }: AlergenosProps) {
  if (!alergenos?.length) {
    return null;
  }

  return (
    <ul
      aria-label="Alérgenos"
      className="flex flex-wrap gap-2"
    >
      {alergenos.map((alergeno) => (
        <AlergenoIcon key={alergeno} alergeno={alergeno} />
      ))}
    </ul>
  );
}