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
  return (
    <>
      <Provider store={Store}>
        <Index />
      </Provider>
    </>
  );
}

export default App;
