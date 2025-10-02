import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { calculo } from './calculo';
 
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
 
  primera!: number
  segunda!: number
  multiplicador!: number
  tolerancia!: number
  ohms: string = ''
  Max: string = ''
  Min: string = ''
  color1: string =''
  color2: string =''
  colorMultiplicador: string =''
  tol: string = ''
  color1Class: string =''
  color2Class: string =''
  colorMultClass: string =''
  tolClass: string = ''
 
  color: { [key:number]: {name:string, class:string} } = {
    0: {name: 'Negro', class: 'negro'},
    1: {name: 'Café', class: 'cafe'},
    2: {name: 'Rojo', class: 'rojo'},
    3: {name: 'Naranja', class: 'naranja'},
    4: {name: 'Amarillo', class: 'amarillo'},
    5: {name: 'Verde', class: 'verde'},
    6: {name: 'Azul', class: 'azul'},
    7: {name: 'Violeta', class: 'morado'},
    8: {name: 'Gris', class: 'gris'},
    9: {name: 'Blanco', class: 'blanco'}
  }
 
  multicolor: { [key:number]: {name:string, class:string} } = {
    1: {name: 'Negro', class: 'negro'},
    10: {name: 'Cafe', class: 'cafe'},
    100: {name: 'Rojo', class: 'rojo'},
    1000: {name: 'Naranja', class: 'naranja'},
    10000: {name: 'Amarillo', class: 'amarillo'},
    0.1: {name: 'Dorado', class: 'dorado'},
    0.01: {name: 'Plata', class: 'plata'}
  }
 
  tolcol: { [key:number]: {name:string, class:string} } = {
    0.05: {name: 'Dorado', class: 'dorado'},
    0.10: {name: 'Plata', class: 'plata'}
  }
 
 
  calcular():void {
 
    const primerCol = this.color[this.primera]
    this.color1 = primerCol.name
    this.color1Class = primerCol.class
 
    const segundoCol = this.color[this.segunda]
    this.color2 = segundoCol.name
    this.color2Class = segundoCol.class
 
    const multiCol = this.multicolor[this.multiplicador]
    this.colorMultiplicador = multiCol.name
    this.colorMultClass = multiCol.class
 
    const toleCol = this.tolcol[this.tolerancia]
    this.tol = toleCol.name
    this.tolClass = toleCol.class
 
const miCalculo = new calculo();
 
    miCalculo.primera = this.primera;
    miCalculo.segunda = this.segunda;
    miCalculo.multiplicador = this.multiplicador;
    miCalculo.tolerancia = this.tolerancia;
 
    miCalculo.obtenerResultados();
    this.ohms = miCalculo.valor;
    this.Max = miCalculo.valorMaximo;
    this.Min = miCalculo.valorMinimo;
  }
}