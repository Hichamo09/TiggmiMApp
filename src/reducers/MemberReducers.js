import {
  MEMBERS_LIST
} from '../actions/types';


const INITIAL_STATE = {
  membersList: []
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case MEMBERS_LIST:
      return {...state, membersList: action.payload}
    default:
      return state
  }
}
