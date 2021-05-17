import { combineReducers, createStore, Reducer } from 'redux';
import { onPlayReducer } from '../reducers/on-play.reducer';

export class CombineActions {
  onPlayReducer: any
}

const combine = combineReducers(
  {
    onPlayReducer
  }
);

export const store = createStore(combine);
