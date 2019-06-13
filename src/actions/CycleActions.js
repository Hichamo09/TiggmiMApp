import {storeData, getData, updateData} from '../utils/_firebase';
import { _objToArray } from '../utils/_helpers';
import NavigationService from '../routes/navigationService';
import {
  CYCLES_LIST
} from './types';


export const addCycle = (data) => {
  console.log('----data', data);
  return (dispatch, getState) => {
    let userId = getState().auth.currentUser.parentId;
    storeData('users/' + userId + '/cycles/', data)
    .then((result) => {
      NavigationService.navigate('Cycles');
    })
    .catch((err) => {
      console.log('-----------err', err);
    });
  }
}

export const getCycle = () => {
  return (dispatch, getState) => {
    let userId = getState().auth.currentUser.parentId;
    getData('users/' + userId + '/cycles')
    .then((result) => {
      dispatch({
        type: CYCLES_LIST,
        payload: _objToArray(result)
      })
    })
    .catch((err) => {
      console.log('----------err', err);
    });
  }
}


export const updateCycle = (id, data) => {
  return (dispatch, getState) => {
    let userId = getState().auth.currentUser.parentId;
    updateData(`users/${userId}/cycles/${id}`, data)
    .then((result) => {
      NavigationService.navigate('Cycles');
    })
    .catch((err) => {
      console.log('----------err', err);
    });
  }
}
