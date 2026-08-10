import { useState, type ComponentType } from "react";

import {
  CeleryIcon,
  CrustaceanIcon,
  EggIcon,
  FishIcon,
  GlutenIcon,
  LupinIcon,
  MilkIcon,
  MolluscIcon,
  MustardIcon,
  NutsIcon,
  PeanutIcon,
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
  crustaceos: { Icon: CrustaceanIcon },
  huevo: { Icon: EggIcon },
  pescado: { Icon: FishIcon },
  cacahuetes: { Icon: PeanutIcon },
  soja: { Icon: SoyaIcon },
  leche: { Icon: MilkIcon },
  frutos_cascara: { Icon: NutsIcon },
  apio: { Icon: CeleryIcon },
  mostaza: { Icon: MustardIcon },
  sesamo: { Icon: SesameIcon },
  sulfitos: { Icon: SulphiteIcon },
  altramuces: { Icon: LupinIcon },
  moluscos: { Icon: MolluscIcon }
} as const satisfies Record<Alergeno, AlergenoMeta>;

type AlergenoIconPropsComponent = {
  alergeno: Alergeno;
  abierto: boolean;
  onToggle: () => void;
  onClose: () => void;
};

function AlergenoIcon({
  alergeno,
  abierto,
  onToggle,
  onClose
}: AlergenoIconPropsComponent) {
  const { Icon } = ALERGENO_META[alergeno];
  const label = ALERGENOS[alergeno];

  return (
    <li className="relative">
      <button
        type="button"
        aria-label={`Alérgeno: ${label}`}
        aria-expanded={abierto}
        title={label}
        onClick={onToggle}
        onBlur={onClose}
        className="
          group relative inline-flex h-9 w-9 items-center justify-center
          rounded-full border border-accent/30 bg-black/30
          transition-colors hover:border-accent hover:bg-accent/10
          focus:outline-none focus:ring-2 focus:ring-accent/70
        "
      >
        <span aria-hidden="true">
          <Icon
            width={24}
            height={24}
            outerColor="#FAB91B80"
          />
        </span>

        <span
          className={`
            pointer-events-none absolute bottom-full left-1/2 z-30 mb-2
            -translate-x-1/2 whitespace-nowrap rounded-md
            bg-zinc-900 px-2 py-1 text-xs font-semibold text-white
            shadow-lg transition-opacity
            group-hover:opacity-100 group-focus:opacity-100

            ${abierto ? "opacity-100" : "opacity-0"}
          `}
        >
          {label}

          <span
            className="
              absolute left-1/2 top-full -translate-x-1/2
              border-4 border-transparent border-t-zinc-900
            "
          />
        </span>
      </button>
    </li>
  );
}

type AlergenosProps = {
  alergenos?: readonly Alergeno[];
};

export function Alergenos({ alergenos }: AlergenosProps) {
  const [alergenoAbierto, setAlergenoAbierto] = useState<Alergeno | null>(null);

  if (!alergenos?.length) {
    return null;
  }

  return (
    <ul
      aria-label="Alérgenos"
      className="flex flex-wrap gap-2"
    >
      {alergenos.map((alergeno) => (
        <AlergenoIcon
          key={alergeno}
          alergeno={alergeno}
          abierto={alergenoAbierto === alergeno}
          onToggle={() =>
            setAlergenoAbierto((actual) =>
              actual === alergeno ? null : alergeno
            )
          }
          onClose={() => setAlergenoAbierto(null)}
        />
      ))}
    </ul>
  );
}