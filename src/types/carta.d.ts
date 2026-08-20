export const ALERGENOS = {
  gluten: "Gluten",
  crustaceos: "Crustáceos",
  huevo: "Huevo",
  pescado: "Pescado",
  cacahuetes: "Cacahuetes",
  soja: "Soja",
  leche: "Leche",
  frutos_cascara: "Frutos de cáscara",
  apio: "Apio",
  mostaza: "Mostaza",
  sesamo: "Sésamo",
  sulfitos: "Sulfitos",
  altramuces: "Altramuces",
  moluscos: "Moluscos"
} as const;

export type Alergeno = keyof typeof ALERGENOS;
export type NivelPicante = 1 | 2 | 3;

export type ComponenteCombo = {
  productoId: string;
  cantidad?: number;
};

export type Producto = {
  id: string;
  nombre?: string;
  descripcion: string;
  precioCentimos: number;
  precioDesde?: boolean;
  alergenos: readonly Alergeno[];
  puedeContener?: readonly Alergeno[];
  picante?: NivelPicante;

  tipo?: "normal" | "combo";
  componentes?: readonly ComponenteCombo[];

  personas?: number;
  modificable?: boolean;
  textoFinal?: string;

  alergenosPendientesDeConfirmar?: boolean;
  nota?: string;
};

export type SeccionCarta = {
  id: string;
  titulo: string;
  subtitulo?: string;
  aviso?: string;
  productos: readonly Producto[];
};
