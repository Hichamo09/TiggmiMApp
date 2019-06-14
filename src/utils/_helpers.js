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

export const _filterRooms = (rooms, memberRooms) => {
  console.log('rooms-------------------', rooms);
  console.log('memberRooms', memberRooms);

  let data = [];
  for (var i = 0; i < rooms.length; i++) {
    console.log('roooms[i]', rooms[i]);
    let key = memberRooms.findIndex(x => x == rooms[i].id);
    console.log('key', key);
    if (key > -1) {
      console.log('loooooooooool yeeeag', rooms[i], key);
       data.push(rooms[i])
    }
  }
  console.log('rooms', data);
  return data
}

export const _notificationTime = (time) => {
  time = moment(time).fromNow();
  return time
}


export const _getRoomImage = (type) => {
  console.log('type', type);
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
