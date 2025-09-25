import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { calcular } from './calculo'

@Component({
  selector: 'app-resistencias',
  standalone: true,
  imports: [
    FormsModule 
  ],
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {

  primera: number | null = null;
  segunda: number | null = null;
  multiplicador: number | null = null;
  tolerancia: number | null = null;

  valorOhm = '';
  valorMaximo = '';
  valorMinimo = '';


  calcular():void {

    if (this.primera === null || this.segunda === null || this.multiplicador === null || this.tolerancia === null) {
      return;
    }

    const resultados = calcular(this.primera, this.segunda, this.multiplicador, this.tolerancia);


    this.valorOhm = resultados.valorOhm;
    this.valorMaximo = resultados.valorMaximo;
    this.valorMinimo = resultados.valorMinimo;
  }

}
