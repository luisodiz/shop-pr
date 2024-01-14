import { createStore } from 'redux';
import { rootReducer } from './root-reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { loadState, saveState } from '@store/local-storage';

const persistedState = loadState();

export const store = createStore(rootReducer, persistedState, devToolsEnhancer());
store.subscribe(() => {
  saveState(store.getState());
});