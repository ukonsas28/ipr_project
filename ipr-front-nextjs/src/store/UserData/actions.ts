import axios from 'axios';
import { baseUrl } from 'helpers';
import { setTokenCookies } from 'helpers/cookies';
import { TGetUserDataParams } from './types';

export enum UserDataActionsTypes {
  getUserData = 'GET_USER_DATA',
}

export const getUserDataAction = (params: TGetUserDataParams) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post(`${baseUrl}/auth/login`, params);
      setTokenCookies(data.token);
      dispatch({ type: UserDataActionsTypes.getUserData, payload: data.token });
    } catch (e) {
      console.log(e);
    }
  };
};
