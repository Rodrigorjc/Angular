import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reloj',
  standalone: true,
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css'],
  imports: [CommonModule]
})
export class RelojComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  private intervalId: any;
  isClockVisible: boolean = false;

  ngOnInit() {
    // No iniciar el reloj automáticamente
  }

  startClock() {
    this.isClockVisible = true;
    this.updateTime();
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }

  stopClock() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnDestroy() {
    this.stopClock();
  }
}
