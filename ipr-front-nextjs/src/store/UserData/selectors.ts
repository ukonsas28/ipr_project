import { TStore } from 'store/rootTypes';

export const getUserToken = (state: TStore) => {
  return state.userData.token;
};

export const getUserLogin = (state: TStore) => {
  return state.userData.login;
};
