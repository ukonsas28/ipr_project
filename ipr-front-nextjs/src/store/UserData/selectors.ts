import { TStore } from 'store/rootTypes';

export const getUserToken = (state: TStore) => {
  return state.userData.token;
};

export const getUserFirstName = (state: TStore) => {
  return state.userData.firstName;
};
export const getUserLastName = (state: TStore) => {
  return state.userData.lastName;
};
