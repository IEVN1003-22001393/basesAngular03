import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false, 
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre: string = '';
  personas: number = 0;
  tCINECO: boolean = false;
  boletos: number = 0;
  total: number = 0;
  msg: string = '';

  procesarCompra(): void {
    this.msg = '';
    this.total = 0;

    const maxBoletosPermitidos = this.personas * 7;

    if (this.personas <= 0 || this.boletos <= 0) {
      this.msg = 'El número de personas y boletos debe ser mayor a cero.';
      return;
    }

    if (this.boletos > maxBoletosPermitidos) {
      this.msg = `No puedes comprar más de ${maxBoletosPermitidos} boletos para ${this.personas} persona(s).`;
      return;
    }

    let subtotal = this.boletos * 12;

    if (this.boletos > 5) {
      subtotal -= subtotal * 0.15;
    } else if (this.boletos >= 3 && this.boletos <= 5) {
      subtotal -= subtotal * 0.10;
    }

    if (this.tCINECO) {
      subtotal -= subtotal * 0.10;
    }

    this.total = subtotal;
  }

  salir(): void {
    this.nombre = '';
    this.personas = 0;
    this.tCINECO = false;
    this.boletos = 0;
    this.total = 0;
    this.msg = '';
  }
}
