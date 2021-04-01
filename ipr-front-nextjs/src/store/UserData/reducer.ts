import { UserDataActionsTypes } from 'store/UserData/actions';
import { TUserData } from './types';

const initialState: TUserData = {
  login: '',
  token: '',
};

const userDataReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case UserDataActionsTypes.getUserData:
      return {
        ...state,
        login: action.payload.login,
        token: action.payload.token,
      };
    case UserDataActionsTypes.userLogout:
      return {
        ...state,
        login: '',
        token: '',
      };
    default:
      return state;
  }
};

export default userDataReducer;
