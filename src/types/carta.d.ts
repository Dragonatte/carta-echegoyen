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

export type Producto = {
  id: string;
  nombre?: string;
  descripcion: string;
  precioCentimos: number;
  /** Muestra "Desde" antes del importe. */
  precioDesde?: boolean;
  /** Alérgenos presentes según la ficha técnica disponible. */
  alergenos: readonly Alergeno[];
  /** Trazas declaradas por proveedor; no equivale a ingrediente presente. */
  puedeContener?: readonly Alergeno[];
  /** Úsalo para no publicar una declaración como definitiva cuando falte una ficha técnica. */
  alergenosPendientesDeConfirmar?: boolean;
  picante?: NivelPicante;
  nota?: string;
  aviso?: string;
};

export type SeccionCarta = {
  id: string;
  titulo: string;
  subtitulo?: string;
  aviso?: string;
  productos: readonly Producto[];
};
