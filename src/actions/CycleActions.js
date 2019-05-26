import {storeData, getData, updateData} from '../utils/_firebase';
import NavigationService from '../routes/navigationService';
import {
  MEMBERS_LIST
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
