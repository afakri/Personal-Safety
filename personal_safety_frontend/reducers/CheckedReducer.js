const initialState = {
  val: false,
};

function CheckedReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CHECKED":
      return { val: action.checked };
    default:
      return state;
  }
}

export default CheckedReducer;
