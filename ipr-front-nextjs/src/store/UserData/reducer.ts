import { UserDataActionsTypes } from 'store/UserData/actions';
import { TUserData } from './types';

const initialState: TUserData = {
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
        token: action.payload,
      };
    default:
      return state;
  }
};

export default userDataReducer;
