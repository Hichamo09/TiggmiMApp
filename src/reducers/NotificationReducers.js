import {
  NOTIFICATIONS_LIST
} from '../actions/types';


const INITIAL_STATE = {
  notificationsList: []
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTIFICATIONS_LIST:
      return {...state, notificationsList: action.payload}
    default:
      return state
  }
}
