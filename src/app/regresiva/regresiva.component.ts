import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-regresiva',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './regresiva.component.html',
  styleUrls: ['./regresiva.component.css']
})
export class RegresivaComponent implements OnDestroy {
  actual: number = 0;
  restante: number = -1;
  private intervalo: any;

  start() {
    this.restante = this.actual;
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
    this.intervalo = setInterval(() => {
      if (this.restante > 0) {
        this.restante--;
      } else {
        clearInterval(this.intervalo);
      }
    }, 1000);
  }
  parar() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
      this.intervalo = null;
    }
  }

  ngOnDestroy() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }
}
