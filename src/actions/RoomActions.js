 import { getData, storeData, updateData} from '../utils/_firebase';
import { _objToArray, _filterRooms } from '../utils/_helpers';
import NavigationService from '../routes/navigationService';
import {
  ROOMS_LIST
} from './types';

export const getRooms = () => {
  console.log('get rooms');
  return (dispatch, getState) => {
    console.log('auth.currentUser', getState().auth.currentUser);
    let userId = getState().auth.currentUser.parentId;
    console.log("user_id", userId);
    getData(`users/${userId}/rooms`)
    .then((result) => {
      console.log('-------result', _objToArray(result));
      let data = _filterRooms(_objToArray(result), getState().auth.currentUser.rooms)
      console.log('------result', data);
      dispatch({
        type: ROOMS_LIST,
        payload: data
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
    let userId = getState().auth.currentUser.parentId;
    console.log("user_id", userId);
    let data = {
      title: "other room",
      type: "livingroom",
      pins: [{
        type: "light"
      }]
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
    let userId = getState().auth.currentUser.parentId;
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
