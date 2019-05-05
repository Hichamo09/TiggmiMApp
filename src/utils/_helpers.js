import moment from 'moment';

// IDEA: convert firebase response to array
export const _objToArray = (obj) => {
  let arr = [];
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    arr.push({
      id: keys[i],
      ...obj[keys[i]]
    })
  }
  return arr;
}


export const _notificationTime = (time) => {
  time = moment(time).fromNow();
  return time
}
