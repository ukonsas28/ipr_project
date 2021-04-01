import axios from 'axios';
import { baseUrl } from 'helpers';
import { setTokenCookies } from 'helpers/cookies';
import { TGetUserDataParams, TRegistrationUser } from './types';

export enum UserDataActionsTypes {
  getUserData = 'GET_USER_DATA',
  registrationUSer = 'REGISTRATION_USER',
  userLogout = 'USER_LOGOUT',
}

export const getUserDataAction = (params: TGetUserDataParams) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post(`${baseUrl}/auth/login`, params);
      setTokenCookies(data.token);
      dispatch({ type: UserDataActionsTypes.getUserData, payload: data });
    } catch (e) {
      console.log(e);
    }
  };
};

export const registrationUserAction = (registrationData: TRegistrationUser) => {
  return async (dispatch: any) => {
    try {
      if (registrationData.password === registrationData.repeatPassword) {
        const { repeatPassword, ...payload } = registrationData;
        await axios.post(`${baseUrl}/auth/registration`, payload);
        dispatch(
          getUserDataAction({
            login: registrationData.login,
            password: registrationData.password,
          })
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const logoutUserAction = (token: string) => {
  return async (dispatch: any) => {
    try {
      await axios.post(`${baseUrl}/auth/logout`, { token });
      dispatch({ type: UserDataActionsTypes.userLogout });
    } catch (e) {
      console.log(e);
    }
  };
};
