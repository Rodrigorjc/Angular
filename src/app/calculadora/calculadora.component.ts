import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number | string = 0;
  operacionActual: string = 'suma';

  sumar() {
    this.resultado = this.numero1 + this.numero2;
    this.operacionActual = 'suma';
  }

  restar() {
    this.resultado = this.numero1 - this.numero2;
    this.operacionActual = 'resta';
  }

  multiplicar() {
    this.resultado = this.numero1 * this.numero2;
    this.operacionActual = 'multiplicacion';
  }

  dividir() {
    if (this.numero2 !== 0) {
      this.resultado = this.numero1 / this.numero2;
      this.operacionActual = 'division';
    } else {
      this.resultado = "Error: División por cero";
    }
  }

  raizCuadrada() {
    this.resultado = Math.sqrt(this.numero1);
    this.operacionActual = 'raiz';
  }

  mostrarSegundoNumero(): boolean {
    return this.operacionActual !== 'raiz';
  }
}
