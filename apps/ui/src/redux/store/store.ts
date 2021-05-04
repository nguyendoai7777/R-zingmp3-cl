import { createStore } from 'redux';
import { onPlayReducer } from '../reducers/on-play.reducer';

export const store = createStore(onPlayReducer)
