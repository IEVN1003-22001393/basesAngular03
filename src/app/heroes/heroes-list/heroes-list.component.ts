import { Component } from '@angular/core';
import { IHeroes } from '../heroes';
 
@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html'
})
export class HeroesListComponent {
 
  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImage=!this.muestraImage;
  }

  heroes:IHeroes[]=[
    {
      imagen:"https://dragonball-api.com/characters/Androide_16.webp",
      nombre:"Androide 16",
      description:"El Androide 16 de Dragon Ball es un androide 100% mecánico, alto y con ojos azules, creado por el Dr.",
      race:"Androide",
      ki:1000
    },
    {
      imagen:"https://dragonball-api.com/transformaciones/Super_Buu_Gohan_Absorbido.webp",
      nombre:"Majin Buu",
      description:"Majin Buu es un demonio de aspecto chicloso y piel rosa originario de Dragon Ball Z, con una gran capacidad regenerativa y poderes sobrenaturales como manipulación del ki y telekinesis.",
      race:"Majin",
      ki:60000000
    },
    {
      imagen:"https://dragonball-api.com/characters/celula.webp",
      nombre:"Cell",
      description:"Cell es un bio-androide maligno creado por el Dr. Gero del Ejército de la Cinta Roja, utilizando el ADN de los guerreros más poderosos como Goku, Vegeta y Freezer para convertirse en el ser perfecto y vengarse de Goku.",
      race:"Androide",
      ki:250000000
    },
    {
      imagen:"https://dragonball-api.com/transformaciones/gogeta.webp",
      nombre:"Gogeta",
      description:"Gogeta es la fusión resultante de Son Goku y Vegeta, cuando realizan la Danza de la Fusión correctamente para enfrentarse a Broly.",
      race:"Saiyan",
      ki:150000
    }
  ]
}