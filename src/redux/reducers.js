const initData = {data: []}

function reducer(state = initData, action) {
  switch (action.type) {
    case "INCREMENT": {
      const cartItem = state.data.find((item) => item.id === action.data.id);
      cartItem.quantity = cartItem.quantity + 1;
      return;
    };
    case "DECREMENT": {
      const cartItem = state.data.find((item) => item.id === action.data.id);
      cartItem.quantity = cartItem.quantity - 1;
      return;
    };
    case "ADD_DATA": {
      state.data.push(action.data);
      return state;
    };
    case "DELETE_DATA": {
      const itemId = action.data.id;
      state.data = state.data.filter((item) => item.id !== itemId);
      return;
    };
    default: return state;
  }
}

export default reducer;