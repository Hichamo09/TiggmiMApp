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
    let userType = null;
    let parentId = null;
    firebase.database().ref(ref).on('value', (snapshot) => {
      console.log('snapshot', snapshot.val());
      let data = _objToArray(snapshot.val())
      console.log('data', data);
      //search in members list
      for (var i = 0; i < data.length; i++) {
        let users = _objToArray(data[i].members);
        let index = users.findIndex(x => x.phone_number === number);
        if (index > -1) {
          console.log('---------yeeeeah');
          userType = "child"
          parentId = data[i].id
        }
      }

      //search in users list
      for (var i = 0; i < data.length; i++) {
        let userInfo = data[i].userInfo
        console.log('userInfo', userInfo, data[i]);
        if (userInfo.phone_number === number) {
          console.log('---------yeeeeah in userInfo ');
          userType = "parent"
          parentId = data[i].id
        }
      }

      if (userType) return resolve({userType, parentId})

      return reject(false)
    })
  });
}
