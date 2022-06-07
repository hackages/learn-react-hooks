export function reducer(state, action){
  switch(action.type){
    case "increment": {
      // logic
      const newCount = state.count + 1;
      return {
          ...state,
        count: newCount
      }
    };
    case "decrement": {
      // logic
      const newCount = state.count - 1;
      return {
          ...state,
        count: newCount
      }
    };
    case "INPUT": {
      // logic
      const newText = action.payload;
      return {
          ...state,
        text: newText 
      }
    };
  }
  return state;
}

