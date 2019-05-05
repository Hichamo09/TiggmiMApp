import {storeData, getData} from '../utils/_firebase';
import { _objToArray } from '../utils/_helpers';
import NavigationService from '../routes/navigationService';
import {
  MEMBERS_LIST
} from './types';


export const addMember = (data) => {
  return (dispatch) => {
    let userId = getState().auth.currentUser.uid;
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
    let userId = getState().auth.currentUser.uid;
    getData(`users/${userId}/members`)
    .then((result) => {
      dispatch({
        type: MEMBERS_LIST,
        payload: _objToArray(result)
      })
    })
    .catch((err) => {
      console.log('----------err', err);
    });
  }
}
