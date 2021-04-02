import { UserDataActionsTypes } from 'store/UserData/actions';
import { TUserData } from './types';

const initialState: TUserData = {
  token: '',
  firstName: '',
  lastName: '',
};

const userDataReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case UserDataActionsTypes.loginUser:
      return {
        ...state,
        token: action.payload,
      };
    case UserDataActionsTypes.getUserPermission:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case UserDataActionsTypes.userLogout:
      return {
        ...state,
        token: '',
        firstName: '',
        lastName: '',
      };
    default:
      return state;
  }
};

export default userDataReducer;
