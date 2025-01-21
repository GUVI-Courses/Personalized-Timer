import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-timer-list',
  templateUrl: './timer-list.component.html',
  styleUrl: './timer-list.component.css'
})
export class TimerListComponent {
  timers: any[] = [];
  targetDate: string = '';

  constructor(private firestore: AngularFirestore) {
    this.getTimers();
  }

  getTimers() {
    this.firestore.collection('timers', (ref) => ref.orderBy('targetDate', 'asc'))
      .valueChanges({ idField: 'id' })
      .subscribe((data) => { this.timers = data });
  }

  addTimer() {
    if (this.targetDate) {
      this.firestore.collection('timers').add({ targetDate: this.targetDate });
      this.targetDate = '';
    }
  }

  deleteTimer(timerId: string) {
    this.firestore.collection('timers').doc(timerId).delete();
    this.getTimers();
  }
}
