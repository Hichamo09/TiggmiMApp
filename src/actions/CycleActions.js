import {storeData, getData, updateData} from '../utils/_firebase';
import { _objToArray } from '../utils/_helpers';
import NavigationService from '../routes/navigationService';
import {
  CYCLES_LIST
} from './types';


export const addCycle = (data) => {
  console.log('----data', data);
  return (dispatch, getState) => {
    let userId = getState().auth.currentUser.uid;
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
    console.log('--------------');
    let userId = getState().auth.currentUser.uid;
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
