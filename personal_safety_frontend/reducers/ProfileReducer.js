const initialState = {
  user: {},
  loading: false,
  error: "",
};

function ProfileReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PROFILE":
      return { ...state, loading: action.loading };
    case "GET_PROFILE_DONE":
      return {
        ...state,
        user: action.payload.data.data,
        loading: action.loading,
      };
    case "GET_PROFILE_FAILED":
      return { ...state, error: action.payload, loading: action.loading };
    default:
      return state;
  }
}
export default ProfileReducer;
