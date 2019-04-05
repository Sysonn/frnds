const initialState = [];
  
  
export default function posts(state=initialState, action) {
    let postList = state.slice();
  
    switch (action.type) {
  
      case 'ADD_POST':
        return [...state, action.posts];
  
      case 'UPDATE_POST':
        let postToUpdate = postList[action.id]
        postToUpdate.postcontent = action.postcontent;
        postList.splice(action.id, 1, postToUpdate);
        return postList;
  
      case 'DELETE_POST':
        postList.splice(action.id, 1);
        return postList;
      
      case 'FETCH_POSTS':
        return [...state, ...action.posts];
  
      default:
        return state;
    }
  }