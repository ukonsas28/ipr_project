import { combineReducers } from 'redux';
import authDataReducer from './AuthData/reducer';

const rootReducer = combineReducers({ authData: authDataReducer });

export default rootReducer;
