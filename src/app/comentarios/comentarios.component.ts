import { Component, Output, EventEmitter } from '@angular/core';
import {NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {
   comentario: string = " ";
   comentarios: string[] = [];

   // @ts-ignore
  @Output() comentarioEnviado = new EventEmitter<string>();

  enviarComentario() {
    if (this.comentario.trim()) {
      this.comentarios.push(this.comentario);
      // @ts-ignore
      this.comentarioEnviado.emit(this.comentario);
      this.comentario = " ";
    }
  }
}
