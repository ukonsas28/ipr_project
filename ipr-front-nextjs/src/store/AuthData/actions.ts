import axios from 'axios';
import { baseUrl } from 'helpers';
import { getTokenCookies, setTokenCookies } from 'helpers/cookies';
import { TLoginUserParams, TRegistrationUser } from './types';

export enum AuthDataActionsTypes {
  loginUser = 'LOGIN_USER',
  registrationUSer = 'REGISTRATION_USER',
  userLogout = 'USER_LOGOUT',
  getUserPermission = 'GET_USER_PERMISSION',
}

export const loginUserAction = (params: TLoginUserParams) => {
  return async (dispatch: any) => {
    try {
      const { data } = await axios.post(`${baseUrl}/auth/login`, params);
      setTokenCookies(data.token);
      dispatch({ type: AuthDataActionsTypes.loginUser, payload: data.token });
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
          loginUserAction({
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
      dispatch({ type: AuthDataActionsTypes.userLogout });
    } catch (e) {
      console.log(e);
    }
  };
};

export const getUserPermission = () => {
  return async (dispatch: any) => {
    const token = getTokenCookies();
    try {
      const { data } = await axios.post(`${baseUrl}/auth/user-permission`, {
        token,
      });
      dispatch({
        type: AuthDataActionsTypes.getUserPermission,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
