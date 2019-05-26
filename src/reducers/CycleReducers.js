import {
  CYCLES_LIST
} from '../actions/types';

const INITIAL_STATE = {
  cycles: "",
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case CYCLES_LIST:
      return {...state, cycles: action.payload}
    default:
      return state
  }
}
