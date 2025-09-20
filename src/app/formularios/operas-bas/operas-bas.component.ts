import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1:string=''
  num2:string=''
  resultado:number=0
  value:number=0

  op(elegirOP:number):void{
    if(elegirOP==1){
    this.resultado=parseInt(this.num1) + parseInt(this.num2)
    }
      else if(elegirOP==2){
      this.resultado=parseInt(this.num1) - parseInt(this.num2)
      }
      else if(elegirOP==3){
      this.resultado=parseInt(this.num1) / parseInt(this.num2)
      }
      else if(elegirOP==4){
      this.resultado=parseInt(this.num1) * parseInt(this.num2)
      }
  }

}
