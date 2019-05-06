import { Action } from '@ngrx/store';
import { ActionTypes } from '../action/test.action';

export const initialState = {
    first: 15,
    second: -5
};

let bool1: boolean;
let bool2: boolean;

export function countReducer(state = initialState, action: Action) {
  function checkState() {
    if (state.first === 15) {
      bool1 = false;
    } else if (state.first === -5) {
      bool1 = true;
    }
    if (state.second === 15) {
      bool2 = false;
    } else if (state.second === -5) {
      bool2 = true;
    }

    if (bool1) {
      state.first = state.first + 1;
    } else {
      state.first = state.first - 1;
    }

    if (bool2) {
      state.second = state.second + 2;
    } else {
      state.second = state.second - 2;
    }

    return state = {
        first: state.first,
        second: state.second
      };
  }

  switch (action.type) {
    case ActionTypes.Start:
      return checkState();
    case ActionTypes.Reset:
      return state = {
        first: 15,
        second: -5
      };

    default:
      return state;
  }
}
