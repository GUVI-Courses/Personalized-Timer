import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  @Input() targetDate!: string;
  @Input() count!: number;

  remainingTime!: string;

  ngOnInit(): void {
    this.calculateRemainigTime();
    setInterval(() => this.calculateRemainigTime(), 1000)
  }

  calculateRemainigTime() {
    const now = new Date().getTime();
    const target = new Date(this.targetDate).getTime();
    const timeDiff = target - now;
    if (timeDiff <= 0) {
      this.remainingTime = 'Time is Up!';
    } else {
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      this.remainingTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      if (minutes == 0 && seconds == 0) {
        alert("Time is up for counter " + Number(this.count + 1));
      }
    }
  }
}
