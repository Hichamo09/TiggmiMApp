import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import {
  LOGIN_CONFIRMATION,
  SUCCESS_LOGIN,
  FAILED_LOGIN
} from './types';
import NavigationService from '../routes/navigationService';


export const signUp = (number, captchaToken) => {
  console.log('-----------number', number, ' token ', captchaToken);
  number = `+${number}`
  const captchaVerifier = {
    type: 'recaptcha',
    verify: () => Promise.resolve(captchaToken)
  }
  return (dispatch) => {
    firebase.auth().signInWithPhoneNumber(number, captchaVerifier)
    .then((code) => {
      console.log('--------code', code);
      dispatch({
        type: LOGIN_CONFIRMATION,
        payload: code
      })
    })
    .catch((err) => {
      loginFailed(dispatch, "Oops! something is wrong")
      console.log('--------err', err);
    });
  }
}

export const confirmCode = (confirm, code) => {
  return (dispatch) => {
    confirm.confirm(code).then((result) => {
      console.log('-----------------result', result);
      dispatch({
        type: SUCCESS_LOGIN,
        payload: result.user
      })
      NavigationService.navigate('Dashboard')

    }).catch((err) => {
      loginFailed(dispatch, "confirmation code is wrong")
      console.log('--------------err', err);
    });
  }
}


export const loginFailed = (dispatch, message) => {
  console.log('----------loginFailed', message);
  dispatch({
    type: FAILED_LOGIN,
    payload: message
  })
}
