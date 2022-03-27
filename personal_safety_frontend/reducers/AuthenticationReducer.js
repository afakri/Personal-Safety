const initialState = {
  compatible: false,
  savedBiometrics: false,
  authentication: {},
};

function AuthenticationReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COMPATIBILITY":
      return { ...state, compatible: action.payload };
    case "GET_SAVED_BIOMETRICS":
      return { ...state, savedBiometrics: action.payload };
    case "AUTHENTICATE":
      return { ...state, authentication: action.payload };
    case "UNAUTHENTICATE":
      return {
        ...state,
        authentication: { ...state.authentication, success: false },
      };
    default:
      return state;
  }
}

export default AuthenticationReducer;
