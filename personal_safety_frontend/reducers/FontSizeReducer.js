const initialState = {
  size: 20,
};

function CheckedReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREASE_FONT_SIZE":
      return { ...state, size: state.size + 1 };
    case "DECREASE_FONT_SIZE":
      return { ...state, size: state.size - 1 };
    default:
      return state;
  }
}

export default CheckedReducer;
