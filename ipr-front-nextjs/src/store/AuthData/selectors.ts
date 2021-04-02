import { TStore } from 'store/rootTypes';

export const getUserToken = (state: TStore) => {
  return state.authData.token;
};

export const getUserFirstName = (state: TStore) => {
  return state.authData.firstName;
};
export const getUserLastName = (state: TStore) => {
  return state.authData.lastName;
};
