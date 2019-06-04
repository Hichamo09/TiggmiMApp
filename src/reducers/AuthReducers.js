import {
  LOGIN_CONFIRMATION,
  SUCCESS_LOGIN,
  FAILED_LOGIN
} from '../actions/types';


const INITIAL_STATE = {
  currentUser: {},
  firebaseCode: "",
  errorMessage: "",
  codeIsSent: false
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_CONFIRMATION:
      return {
        ...state,
        firebaseCode: action.payload,
        codeIsSent: true,
        errorMessage: ""
      }
    case SUCCESS_LOGIN:
      return {
        ...state,
        currentUser: {
          uid: action.payload.user.uid,
          phone_number: action.payload.user.phoneNumber,
          token: action.payload.token
        },
        errorMessage: ""
      }
    case FAILED_LOGIN:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state
  }
}
