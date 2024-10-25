import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';

interface Producto {
  nombre: string;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  nombre: string = '';
  descripcion: string = '';
  precio: number = 0;

  productos: Producto[] = [];

  enviarProducto() {
    if (this.nombre.trim() && this.descripcion.trim() && this.precio > 0) {
      const nuevoProducto: Producto = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio
      };
      this.productos.push(nuevoProducto);
      this.nombre = '';
      this.descripcion = '';
      this.precio = 0;
    }
  }
}
