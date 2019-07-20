export const get = (endpoint, url) => {
  console.log('-------------start getData', url);
  return new Promise(function(resolve, reject) {
    console.log('endpoint', endpoint, url, );
    return fetch(`http://6b8fa22c.ngrok.io${url}`, {
    // return fetch(`${http://10.0.2.2:3000}${url}`, {
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
