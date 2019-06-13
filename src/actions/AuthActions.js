import firebase from 'firebase';
import NavigationService from '../routes/navigationService';
import { findValue } from '../utils/_firebase';
import {
  LOGIN_CONFIRMATION,
  SUCCESS_LOGIN,
  FAILED_LOGIN
} from './types';


export const checkAuth = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {

      console.log('user----', user);
      if (user) {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          console.log('idToken', idToken);
          dispatch({
            type: SUCCESS_LOGIN,
            payload: {user: user, token: idToken}
          })
        }).catch(function(error) {
          console.log('error', error);
        });
      }else {
        console.log('nulllllll user');
        NavigationService.navigate('Login')
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
    findValue("users", number).then((result) => {
      if (result) {
        firebase.auth().signInWithPhoneNumber(number, captchaVerifier)
        .then((code) => {
          dispatch({
            type: LOGIN_CONFIRMATION,
            payload: code
          })
        })
        .catch((err) => {
          console.log('----------err', err);
          loginFailed(dispatch, "Oops! something is wrong")
        });
      }
    }).catch((err) => {
      console.log('err', err);
      loginFailed(dispatch, "Oops! your number is not exist in our records")
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
      NavigationService.navigate('Home')

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
