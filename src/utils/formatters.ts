const euroFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR"
});

export function formatEuro(precioCentimos: number): string {
  return euroFormatter.format(precioCentimos / 100);
}