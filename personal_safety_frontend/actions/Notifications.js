import axios from "axios";
import * as Notifications from "expo-notifications";

export function gettingToken() {
  return {
    type: "GET_TOKEN",
    loading: true,
  };
}
export function gettingTokenDone(token) {
  return {
    type: "GET_TOKEN_DONE",
    loading: false,
    payload: token,
  };
}
export function gettingTokenFailed(error) {
  return {
    type: "GET_TOKEN_FAILED",
    loading: false,
    payload: error,
  };
}

export function getToken() {
  return async (dispatch) => {
    try {
      dispatch(gettingToken());
      let token;

      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;

      try {
        const response = await axios.patch(
          "https://notification-app.loca.lt/api/v1/users/0631005047",
          { token: token }
        );
        console.log("👉 Returned data:", response.data);
      } catch (e) {
        console.log(`😱 Axios request failed first: ${e}`);
      }

      dispatch(gettingTokenDone(token));
    } catch (error) {
      dispatch(gettingTokenFailed(error));
    }
  };
}
