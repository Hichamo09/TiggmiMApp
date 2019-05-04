import firebase from 'firebase';

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
