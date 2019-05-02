import firebase from 'firebase';
import NavigationService from '../routes/navigationService';
import {
  LOGIN_CONFIRMATION,
  SUCCESS_LOGIN,
  FAILED_LOGIN
} from './types';


export const checkAuth = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: SUCCESS_LOGIN,
          payload: user
        })
      }else {
        NavigationService.navigate('Home')
      }
    })
  }
}


export const signUp = (number, captchaToken) => {
  number = `+${number}`
  const captchaVerifier = {
    type: 'recaptcha',
    verify: () => Promise.resolve(captchaToken)
  }
  return (dispatch) => {
    firebase.auth().signInWithPhoneNumber(number, captchaVerifier)
    .then((code) => {
      dispatch({
        type: LOGIN_CONFIRMATION,
        payload: code
      })
    })
    .catch((err) => {
      loginFailed(dispatch, "Oops! something is wrong")
    });
  }
}

export const confirmCode = (confirm, code) => {
  return (dispatch) => {
    confirm.confirm(code).then((result) => {
      dispatch({
        type: SUCCESS_LOGIN,
        payload: result.user
      })
      NavigationService.navigate('Dashboard')

    }).catch((err) => {
      loginFailed(dispatch, "confirmation code is wrong")
    });
  }
}


export const loginFailed = (dispatch, message) => {
  dispatch({
    type: FAILED_LOGIN,
    payload: message
  })
}
