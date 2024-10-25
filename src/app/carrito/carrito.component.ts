import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf} from '@angular/common';

interface Articulo {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  articulos: Articulo[] = [
    { nombre: 'Manzana', precio: 0.5, cantidad: 0 },
    { nombre: 'Plátano', precio: 0.3, cantidad: 0 },
    { nombre: 'Naranja', precio: 0.4, cantidad: 0 },
    { nombre: 'Pera', precio: 0.6, cantidad: 0 }
  ];

  // Métodos para aumentar y disminuir la cantidad de un artículo
  incrementarCantidad(articulo: Articulo) {
    articulo.cantidad++;
  }

  disminuirCantidad(articulo: Articulo) {
    if (articulo.cantidad > 0) {
      articulo.cantidad--;
    }
  }

  // Método para calcular el total del ticket de la compra
  calcularTotal(): number {
    return this.articulos.reduce((total, articulo) => total + (articulo.precio * articulo.cantidad), 0);
  }
}
