const counter = (state = {
  count: 0,
}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      state = {
        ...state,
        count: state.count + 1,
      }
      return state

    case 'DECREMENT':
      state = {
        ...state,
        count: state.count - 1,
      }
      
      return state;
  
    default:
      return state;
  }
}

export default counter;