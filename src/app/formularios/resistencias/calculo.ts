
export function calcular(primera: number, segunda: number, multiplicador: number, tolerancia: number) {


  const valorBase = Number(`${primera}${segunda}`);
  

  const valorCalculado = valorBase * multiplicador;
  

  const margen = valorCalculado * tolerancia;


  const resultados = {
    valorOhm: `${valorCalculado.toLocaleString()} Ohms`,
    valorMaximo: `${(valorCalculado + margen).toLocaleString()} Ohms`,
    valorMinimo: `${(valorCalculado - margen).toLocaleString()} Ohms`
  };

  return resultados;
}