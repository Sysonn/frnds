const initialState = [];
  
  
//   export default function frnds(state=initialState, action) {
//     switch (action.type) {
//       default:
//         return state;
//     }
//   }

export default function frnds(state=initialState, action) {
    let frndList = state.slice();
  
    switch (action.type) {
  
      case 'ADD_FRND':
        return [...state, action.frnds];
  
      case 'UPDATE_FRND':
        let frndToUpdate = frndList[action.id]
        frndToUpdate.text = action.text;
        frndList.splice(action.id, 1, frndToUpdate);
        return frndList;
  
      case 'DELETE_FRND':
        frndList.splice(action.id, 1);
        return frndList;
      
      case 'FETCH_FRNDS':
        return [...state, ...action.frnds];
  
      default:
        return state;
    }
  }