import { getData} from '../utils/_firebase';
import { _objToArray } from '../utils/_helpers';
import {
  ROOMS_LIST
} from './types';

export const getRooms = () => {
  return (dispatch, getState) => {
    let userId = getState().auth.currentUser.uid;
    getData(`users/${userId}/rooms`)
    .then((result) => {
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
