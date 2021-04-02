import { createStore, applyMiddleware } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { TStore } from './rootTypes';

const makeStore: MakeStore<TStore> = (context: Context) => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export const wrapper = createWrapper<TStore>(makeStore);
