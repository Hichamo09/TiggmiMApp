import { combineReducers } from 'redux';
import GlobalReducer from './GlobalReducers';
import AuthReducer from './AuthReducers';


export default combineReducers({
  global: GlobalReducer,
  auth: AuthReducer
})
