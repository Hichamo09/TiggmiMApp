 import { getData, storeData, updateData} from '../utils/_firebase';
 import { get } from '../utils/_api';
import { _objToArray, _filterRooms } from '../utils/_helpers';
import NavigationService from '../routes/navigationService';
import {
  ROOMS_LIST,
  UPDATE_PINS
} from './types';

export const getRooms = () => {
  return (dispatch, getState) => {
    let userId = getState().auth.currentUser.parentId;
    getData(`users/${userId}/rooms`)
    .then((result) => {
      let data = _filterRooms(_objToArray(result), getState().auth.currentUser.rooms)
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


export const updateLight = (pins, room_id) => {
  return {
    type: UPDATE_PINS,
    payload: {room_id, pins: pins}
  }

}
