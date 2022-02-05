import { createStore, combineReducers } from 'redux';
import AppStateReducer from './appReducer';

const rootReducer = combineReducers({
  appState: AppStateReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
