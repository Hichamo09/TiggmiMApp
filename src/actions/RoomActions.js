import { getData, storeData, updateData} from '../utils/_firebase';
import { _objToArray } from '../utils/_helpers';
import NavigationService from '../routes/navigationService';
import {
  ROOMS_LIST
} from './types';

export const getRooms = () => {
  return (dispatch, getState) => {
    let userId = getState().auth.currentUser.uid;
    console.log("user_id", userId);
    getData(`users/${userId}/rooms`)
    .then((result) => {
      console.log('-------result', _objToArray(result));
      console.log('------result', result);
      dispatch({
        type: ROOMS_LIST,
        payload: _objToArray(result)
      })
    })
    .catch((err) => {
      console.log('-------err', err);
    });
  };
}


/**
@action
@desc add roooms just for testing
*/

export const addRoom = () => {
  return (dispatch, getState) => {
    let userId = getState().auth.currentUser.uid;
    console.log("user_id", userId);
    let data = {
      title: "living room 2",
      type: "livingroom"
    }
    storeData(`users/${userId}/rooms`, data)
    .then((result) => {
      console.log('-------result', _objToArray(result));
      console.log('------result', result);
      dispatch({
        type: ROOMS_LIST,
        payload: _objToArray(result)
      })
    })
    .catch((err) => {
      console.log('-------err', err);
    });
  };
}


export const updateRoom = (id, data) => {
  return (dispatch, getState) => {
    let userId = getState().auth.currentUser.uid;
    console.log('----------data', data, id);
    updateData(`users/${userId}/rooms/${id}`, data)
    .then((result) => {
      console.log('result', result);
      NavigationService.navigate('Rooms');
    })
    .catch((err) => {
      console.log('----------err', err);
    });
  }
}
