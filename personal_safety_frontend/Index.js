import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Friends from "./screens/Friends";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

import Profile from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";

import { getToken } from "./actions/Notifications";
import { useDispatch, useStore } from "react-redux";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

function Index(props) {
  const store = useStore();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(store.getState().notification);
    dispatch(getToken());
  }, []);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationEnabled: false,
          }}
          initialRouteName="SignIn"
        >
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Friends"
            component={Friends}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({});

export default Index;
