export const addFrnd = text => {
    return {
      type: 'ADD_FRND',
      text
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