import {storeData, getData} from '../utils/_firebase';
import { objToArray } from '../utils/_helpers';
import firebase from 'firebase';
import NavigationService from '../routes/navigationService';
import {
  MEMBERS_LIST
} from './types';


export const addMember = (data) => {
  return (dispatch) => {
    let userId = firebase.auth().currentUser.uid;
    storeData('users/' + userId + '/members/', data)
    .then((result) => {
      NavigationService.navigate('Members');
    })
    .catch((err) => {
      console.log('-----------err', err);
    });
  }
}


export const getMembers = () => {
  return async (dispatch) => {
    let userId = await firebase.auth().currentUser.uid;
    getData(`users/${userId}/members`)
    .then((result) => {
      dispatch({
        type: MEMBERS_LIST,
        payload: objToArray(result)
      })
    })
    .catch((err) => {
      console.log('----------err', err);
    });
  }
}
