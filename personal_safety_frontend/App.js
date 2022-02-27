import React, { useState, useEffect, useRef } from "react";
import Index from "./Index";
import Store from "./Store";
import { Provider } from "react-redux";
import Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

Notifications.addNotificationReceivedListener((notification) => {
  console.log("notification received");
});

Notifications.addNotificationResponseReceivedListener((response) => {
  console.log("user clicked on notification");
});

function App() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);

  const responseListener = useRef();

  useEffect(() => {
    sendPushNotification(expoPushToken).catch((e) => console.log(e));
    // This listener is fired whenever a notification is received while the app is foregrounded

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
  }, []);

  return (
    <>
      <Provider store={Store}>
        <Index />
      </Provider>
    </>
  );
}

// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Original Title",
    body: "And here is the body!",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

export default App;
