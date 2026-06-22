export const ALERGENOS = {
  gluten: "Gluten",
  leche: "Leche",
  huevo: "Huevo",
  mostaza: "Mostaza",
  soja: "Soja",
  sesamo: "Sésamo",
  sulfitos: "Sulfitos"
} as const;

export type Alergeno = keyof typeof ALERGENOS;

export type NivelPicante = 1 | 2 | 3;

export type Producto = {
  id: string;
  nombre?: string;
  descripcion: string;
  precioCentimos: number;
  alergenos?: readonly Alergeno[];
  picante?: NivelPicante;
  nota?: string;
};

export type SeccionCarta = {
  id: string;
  titulo: string;
  productos: readonly Producto[];
};