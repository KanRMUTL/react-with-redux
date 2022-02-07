import { createStore, combineReducers } from 'redux';
import AppStateReducer from './appReducer';

const rootReducer = combineReducers({
  appState: AppStateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
