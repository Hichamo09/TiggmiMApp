export const get = (url) => {
  console.log('-------------start getData', url);
  return new Promise(function(resolve, reject) {
    return fetch(`http://10.0.2.2:3000${url}`, {
        method: 'GET'
    }).then(response => response.json())
    .then((result) => {
      console.log('result--------------');
      console.log(result);
      resolve(result)
    })
    .catch((err) => {
      console.log('api error');
      console.log(err);
      reject(err)
    });
  });
}
