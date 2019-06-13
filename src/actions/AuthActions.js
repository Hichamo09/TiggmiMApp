import firebase from 'firebase';
import NavigationService from '../routes/navigationService';
import { AsyncStorage } from 'react-native';
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
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(async (idToken) => {
          console.log('idToken', idToken);
          let userType = await AsyncStorage.getItem('userType')
          console.log('userType', userType);
          dispatch({
            type: SUCCESS_LOGIN,
            payload: {user: user, token: idToken, userType: JSON.parse(userType)}
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
        .then(async (code) => {
          console.log('code ', code);
          console.log("result", result);
          await AsyncStorage.setItem("userType", JSON.stringify(result))
          dispatch({
            type: LOGIN_CONFIRMATION,
            payload: {code, ...result}
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
      NavigationService.navigate('Home')
      dispatch({
        type: SUCCESS_LOGIN,
        payload: result.user
      })
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
