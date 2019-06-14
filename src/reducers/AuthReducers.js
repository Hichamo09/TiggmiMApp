import {
  LOGIN_CONFIRMATION,
  SUCCESS_LOGIN,
  FAILED_LOGIN
} from '../actions/types';


const INITIAL_STATE = {
  currentUser: {},
  parentId: "",
  userType: "",
  firebaseCode: "",
  errorMessage: "",
  codeIsSent: false
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_CONFIRMATION:
      return {
        ...state,
        firebaseCode: action.payload.code,
        codeIsSent: true,
        errorMessage: "",
        parentId: action.payload.parentId,
        userType: action.payload.userType
      }
    case SUCCESS_LOGIN:
    console.log('action.payload.userType.parentId', action.payload.userType);
      return {
        ...state,
        currentUser: {
          uid: action.payload.user.uid,
          phone_number: action.payload.user.phoneNumber,
          token: action.payload.token,
          parentId: action.payload.userType.parentId,
          userType: action.payload.userType.userType,
          rooms: action.payload.userType.rooms,
          role: action.payload.userType.role
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
