export function datosAleatorios() {
  const tamano = Math.floor(Math.random() * 120) + 40;
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return {
    width: tamano,
    height: tamano,
    color: `rgb(${r}, ${g}, ${b})`,
  };
}
