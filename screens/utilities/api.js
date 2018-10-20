var api = {
    getNames(){
    var url='http://159.203.185.162/users.json';
    return fetch(url).then((response) => response.json());
  }
};

module.exports = api;

// var api = {
//     getNames(){
//     var url='http://159.203.185.162/users.json';
//     return fetch(url, {
//         method: 'GET',
//         headers: {
//         "Accept": "application/json",
//         'Content-Type': 'application/json'
//         }
//     })
//     .then(response => { return response.json();})
//     .then(responseData => {console.log(responseData); return responseData;})
//     .then(data => {this.setState({"questions" : data});})

//     .catch(err => {
//         console.log("fetch error" + err);
//     });

//   }
// };

module.exports = api;

