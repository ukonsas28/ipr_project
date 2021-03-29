import { combineReducers } from 'redux';
import userDataReducer from './UserData/reducer';

const rootReducer = combineReducers({ userData: userDataReducer });

export default rootReducer;
