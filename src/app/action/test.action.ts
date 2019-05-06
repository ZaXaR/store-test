import { Action } from '@ngrx/store';

export enum ActionTypes {
  Start = '[Counter] start',
  Reset = '[Counter] reset'
}

export class CounterStart implements Action {
  readonly type = ActionTypes.Start;
}
export class CounterReset implements Action {
  readonly type = ActionTypes.Reset;
}
