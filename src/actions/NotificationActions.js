import {storeData, getData} from '../utils/_firebase';
import { _objToArray } from '../utils/_helpers';
import moment from 'moment';
import NavigationService from '../routes/navigationService';
import {
  NOTIFICATIONS_LIST
} from './types';


export const getNotifications = () => {
  return async (dispatch, getState) => {
    let userId = getState().auth.currentUser.parentId;
    getData(`users/${userId}/notifications`)
    .then((result) => {
      dispatch({
        type: NOTIFICATIONS_LIST,
        payload: _objToArray(result)
      })
    })
    .catch((err) => {
      console.log('----------err', err);
    });
  }
}

export const addNotification = (data) => {
  data = {
    type: "test notification",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: moment().toISOString()
  }
  return (dispatch, getState) => {
    let userId = getState().auth.currentUser.parentId;
    storeData('users/' + userId + '/notifications/', data)
    .then((result) => {
      NavigationService.navigate('notifications');
    })
    .catch((err) => {
      console.log('-----------err', err);
    });
  }
}
