import { createStore, combineReducers, applyMiddleware } from 'redux';
import AppStateReducer from './appReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  appState: AppStateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunk));
