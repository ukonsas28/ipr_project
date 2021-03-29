import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { TStore } from './rootTypes';

let store: any;

function initStore(preloadedState: TStore) {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}

export const initializeStore = (preloadedState: TStore) => {
  let _store = store ?? initStore(preloadedState);
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }
  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: TStore) {
  const store: TStore = useMemo(() => {
    return initializeStore(initialState);
  }, [initialState]);
  return store;
}
