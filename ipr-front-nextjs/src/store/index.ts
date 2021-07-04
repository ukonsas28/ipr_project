import { createStore, applyMiddleware, Store } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { TStore } from './rootTypes';

const makeStore: MakeStore<Store<TStore>> = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export const wrapper = createWrapper<Store<TStore>>(makeStore);
