import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SaludoComponent} from './saludo/saludo.component';
import {RelojComponent} from './reloj/reloj.component';
import {TareasComponent} from './tareas/tareas.component';
import {RegresivaComponent} from './regresiva/regresiva.component';
import {ComentariosComponent} from './comentarios/comentarios.component';
import {ProductoComponent} from './producto/producto.component';
import {CalculadoraComponent} from './calculadora/calculadora.component';
import {CarritoComponent} from './carrito/carrito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaludoComponent, RelojComponent, TareasComponent, RegresivaComponent, ComentariosComponent, ProductoComponent, CalculadoraComponent, CarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular1';

  manejarComentario(comentario: string) {
    console.log('Nuevo comentario recibido:', comentario);
  }
}
