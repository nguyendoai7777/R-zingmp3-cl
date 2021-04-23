import { createStore } from 'redux';
import { routeReducer } from '../reducers/route-reducer';

export const store = createStore(routeReducer)
