import { combineReducers } from 'redux';
import GlobalReducer from './GlobalReducers';


export default combineReducers({
  global: GlobalReducer,
})
