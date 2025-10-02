export class calculo {
  primera: number = 0;
  segunda: number = 0;
  multiplicador: number = 0;
  tolerancia: number = 0;
 
  valor: string = '';
  valorMaximo: string = '';
  valorMinimo: string = '';
 
  obtenerResultados(): void {
    const primeros2 = Number(`${this.primera}${this.segunda}`);
    const multiVal =  primeros2 * this.multiplicador;
    const valPorcent = multiVal * this.tolerancia;
 
    this.valor = `${multiVal} ohms`;
    this.valorMaximo = `${(multiVal + valPorcent)} ohms`;
    this.valorMinimo = `${(multiVal - valPorcent)} ohms`;
  }
}