import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CounterStart, CounterReset } from './action/test.action';
import {Observable, timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  total$: Observable<number>;
  timerA = timer(1000, 1000);
  subscribeTimer: any;

  constructor(private store: Store<{ total: number }>) {
    this.total$ = store.pipe(select('total'));
  }

  start() {
    this.subscribeTimer = this.timerA.subscribe(() => {
        this.store.dispatch(new CounterStart());
    });
  }

  stop() {
    this.subscribeTimer.unsubscribe();
  }

  reset() {
    this.store.dispatch(new CounterReset());
  }
}
