import firebase from 'firebase';
import NavigationService from '../routes/navigationService';


export const addMember = (data) => {
  return (dispatch) => {
    let userId = firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + userId + '/members/').set(data)
    .then((result) => {
      NavigationService.navigate('Members');
    })
    .catch((err) => {
      console.log('-----------err', err);
    });
  }
}
