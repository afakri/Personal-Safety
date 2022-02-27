const initialState = {
  token: "",
  loading: false,
  error: "",
};

function NotificationReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TOKEN":
      return { ...state, loading: action.loading };
    case "GET_TOKEN_DONE":
      return {
        ...state,
        token: action.payload,
        loading: action.loading,
      };
    case "GET_TOKEN_FAILED":
      return { ...state, error: action.payload, loading: action.loading };
    default:
      return state;
  }
}
export default NotificationReducer;
