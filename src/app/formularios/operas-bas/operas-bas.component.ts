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

  op():void{
    if(this.value==1){
    this.resultado=parseInt(this.num1) + parseInt(this.num2)
    }
      else(this.value==2);{
      this.resultado=parseInt(this.num1) - parseInt(this.num2)
      }
         else(this.value==3){
      this.resultado=parseInt(this.num1) / parseInt(this.num2)
      }
         if(this.value==4){
      this.resultado=parseInt(this.num1) * parseInt(this.num2)
      }
  }

}
