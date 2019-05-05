import { combineReducers } from 'redux';
import GlobalReducer from './GlobalReducers';
import AuthReducer from './AuthReducers';
import MemberReducer from './MemberReducers';
import NotificationReducer from './NotificationReducers';


export default combineReducers({
  global: GlobalReducer,
  auth: AuthReducer,
  member: MemberReducer,
  notification: NotificationReducer,
})
