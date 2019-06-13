import firebase from 'firebase';
import { _objToArray } from './_helpers';

export const storeData = (ref, data) => {
    return new Promise(function(resolve, reject) {
      firebase.database().ref(ref).push().set(data, function (err) {
        console.log('loooooool');
        if (err) return reject(err);
        resolve(true)
      })
    });
  }

export const updateData = (ref, data) => {
    return new Promise(function(resolve, reject) {
      firebase.database().ref(ref).set(data, function (err) {
        console.log('loooooool');
        if (err) return reject(err);
        resolve(true)
      })
    });
  }

export const getData = (ref) => {
    return new Promise(function(resolve, reject) {
      firebase.database().ref(ref).on('value', (snapshot) => {
        resolve(snapshot.val())
      })
    });
  }

export const deleteData = (ref) => {
    return new Promise(function(resolve, reject) {
      firebase.database().ref(ref).remove()
    });
  }

export const findValue = (ref, number) => {
  console.log('NUMBER', number);
  return new Promise(function(resolve, reject) {
    firebase.database().ref(ref).on('value', (snapshot) => {
      console.log('snapshot', snapshot.val());
      let data = _objToArray(snapshot.val())
      console.log('data', data);
      for (var i = 0; i < data.length; i++) {
        let users = _objToArray(data[i].members);
        let index = users.findIndex(x => x.phone_number === number);
        if (index > -1) {
          console.log('---------yeeeeah ');
          return resolve(true)
        }
      }
      return reject(false)
    })
  });
}
