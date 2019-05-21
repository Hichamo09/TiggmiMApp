import moment from 'moment';
import { rooms } from '../config/rooms'

// IDEA: convert firebase response to array
export const _objToArray = (obj) => {
  if (!obj) return [];
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


export const _getRoomImage = (type) => {
  let room = rooms.find((x) => {
    return x.type === type
  })
  return room.url
}

export const getRoomDetails = (rooms, ids) => {
  let arr = [];
  for (let i = 0; i < ids.length; i++) {
    let room = rooms.find(x => x.id === ids[i]);
    arr.push(room);
  }
  return arr;
}
