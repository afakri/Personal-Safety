import axios from "axios";

export function gettingProfile(bool) {
  return {
    type: "GET_PROFILE",
    loading: bool,
  };
}
export function gettingProfileDone(data) {
  return {
    type: "GET_PROFILE_DONE",
    loading: false,
    payload: data,
  };
}
export function gettingProfileFailed(error) {
  return {
    type: "GET_PROFILE_FAILED",
    loading: false,
    payload: error,
  };
}

export function getProfile() {
  return async (dispatch) => {
    try {
      dispatch(gettingProfile(true));
      const response = await axios({
        method: "get",
        url: "http://localhost:3000/api/v1/users/test@test%2Ecom",
      });
      dispatch(gettingProfileDone(response));
    } catch (error) {
      dispatch(gettingProfileFailed(error));
    }
  };
}
