

export const objToArray = (obj) => {
  let arr = obj ? Object.values(obj) : []
  console.log('member--------- ', arr);
  return arr;
}
