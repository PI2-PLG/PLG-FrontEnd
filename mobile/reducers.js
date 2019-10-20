import { combineReducers } from 'redux';
import LoginReducer from './screens/Login/reducers';

export const reducers = combineReducers({
    login: LoginReducer,
});