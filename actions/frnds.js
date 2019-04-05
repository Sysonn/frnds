export const addFrnd = (username) => {
    return dispatch => {
      let headers = {"Content-Type": "application/json"};
      email =(username + "@mail.com");
      let body = JSON.stringify({username, email });
      return fetch("http://159.203.185.162/users/", {headers, method: "POST", body})
        .then(res => res.json())
        .then(frnds => {
          return dispatch({
            type: 'ADD_FRND',
            frnds
          })
        })
    }
  }
  
  export const updateFrnd = (id, text) => {
    return {
      type: 'UPDATE_FRND',
      id,
      text
    }
  }
  
  export const deleteFrnd = id => {
    return {
      type: 'DELETE_FRND',
      id
    }
  }

  export const fetchFrnds = () => {
    return dispatch => {
      let headers = {"Content-Type": "application/json"};
      return fetch("http://159.203.185.162/users/", {headers,  })
        .then(res => res.json())
        .then(frnds => {
          return dispatch({
            type: 'FETCH_FRNDS',
            frnds
          })
        })
    }
  }

 