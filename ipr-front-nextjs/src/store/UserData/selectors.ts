import { TStore } from 'store/rootTypes';

export const getUserToken = (state: TStore) => {
  return state.userData.token;
};
