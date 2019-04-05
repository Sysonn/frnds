export const fetchPosts = () => {
  return (dispatch, getState) => {
    console.log('fetching posts...');
    let headers = {"Content-Type": "application/json"};
    let {token} = getState().auth;

    if (token) {
      headers["Authorization"] = `Token${token}`;
    }

    return fetch("http://159.203.185.162/api/posts/", {headers, })
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return {status: res.status, data};
          })
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          return dispatch({type: 'FETCH_POSTS', posts: res.data});
        } else if (res.status === 401 || res.status === 403) {
          dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
          throw res.data;
        }
      })
  }
}

export const addPost = postcontent => {
  return (dispatch, getState) => {
    console.log('~~ addPost!! ~~');
    let headers = {"Content-Type": "application/json"};
    let {token} = getState().auth;

    if (token) {
      headers["Authorization"] = `Token${token}`;
    }

    let body = JSON.stringify({postcontent, });
    return fetch("http://159.203.185.162/api/posts/", {headers, method: "POST", body})
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return {status: res.status, data};
          })
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 201) {
          return dispatch({type: 'ADD_POST', post: res.data});
        } else if (res.status === 401 || res.status === 403) {
          dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
          throw res.data;
        }
      })
  }
}

export const updatePost = (index, postcontent) => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let {token} = getState().auth;

    if (token) {
      headers["Authorization"] = `Token${token}`;
    }

    let body = JSON.stringify({postcontent, });
    let postId = getState().posts[index].id;

    return fetch(`http://159.203.185.162/api/posts/${postId}/`, {headers, method: "PUT", body})
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return {status: res.status, data};
          })
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          return dispatch({type: 'UPDATE_POST', post: res.data, index});
        } else if (res.status === 401 || res.status === 403) {
          dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
          throw res.data;
        }
      })
  }
}

export const deletePost = index => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let {token} = getState().auth;

    if (token) {
      headers["Authorization"] = `Token${token}`;
    }

    let postId = getState().posts[index].id;

    return fetch(`http://159.203.185.162/api/posts/${postId}/`, {headers, method: "DELETE"})
      .then(res => {
        if (res.status === 204) {
          return {status: res.status, data: {}};
        } else if (res.status < 500) {
          return res.json().then(data => {
            return {status: res.status, data};
          })
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 204) {
          return dispatch({type: 'DELETE_POST', index});
        } else if (res.status === 401 || res.status === 403) {
          dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
          throw res.data;
        }
      })
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export const addPost = (postcontent) => {
//     return dispatch => {
//       let headers = {"Content-Type": "application/json"};
//     //   email =(username + "@mail.com");
//     //   let body = JSON.stringify({username, email });
//     let body = JSON.stringify({postcontent});
//       return fetch("http://159.203.185.162/api/posts/", {headers, method: "POST", body})
//         .then(res => res.json())
//         .then(posts => {
//           return dispatch({
//             type: 'ADD_POST',
//             posts
//           })
//         })
//     }
//   }
  
//   export const updatePost = (id, postcontent) => {
//     return {
//       type: 'UPDATE_POST',
//       id,
//       postcontent
//     }
//   }
  
//   export const deletePost = id => {
//     return {
//       type: 'DELETE_POST',
//       id
//     }
//   }

//   export const fetchPosts = () => {
//     return dispatch => {
//       let headers = {"Content-Type": "application/json"};
//       return fetch("http://159.203.185.162/api/posts/", {headers,  })
//         .then(res => res.json())
//         .then(posts => {
//           return dispatch({
//             type: 'FETCH_POSTS',
//             posts
//           })
//         })
//     }
//   }

 