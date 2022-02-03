const initialState = {
  val: false,
};

function CheckedReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CHECKED":
      return { ...state, val: action.checked };
    default:
      return state;
  }
}

export default CheckedReducer;
