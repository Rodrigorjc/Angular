import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  lista: Array<string> = new Array();
  nuevaTarea: string = ' ';

  addTarea() {
    if (this.nuevaTarea.trim()) {
      this.lista.push(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }
}
