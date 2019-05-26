import { combineReducers } from 'redux';
import GlobalReducer from './GlobalReducers';
import AuthReducer from './AuthReducers';
import MemberReducer from './MemberReducers';
import NotificationReducer from './NotificationReducers';
import RoomReducer from './RoomReducers';
import CycleReducer from './CycleReducers';


export default combineReducers({
  global: GlobalReducer,
  auth: AuthReducer,
  member: MemberReducer,
  notification: NotificationReducer,
  room: RoomReducer,
  cycle: CycleReducer
})
