import {
  ROOMS_LIST,
  UPDATE_PINS
} from '../actions/types';


const INITIAL_STATE = {
  roomsList: []
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case ROOMS_LIST:
      return {...state, roomsList: action.payload}
    case UPDATE_PINS:
      console.log('action.payload', action.payload);
      let room = state.roomsList.find(x => x.id == action.payload.room_id);
      room.pins = action.payload.pins;
      return {...state}
    default:
      return state
  }
}
