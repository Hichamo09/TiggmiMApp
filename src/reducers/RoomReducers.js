import {
  ROOMS_LIST
} from '../actions/types';


const INITIAL_STATE = {
  roomsList: []
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case ROOMS_LIST:
      return {...state, roomsList: action.payload}
    default:
      return state
  }
}
