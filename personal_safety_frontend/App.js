import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Friends from "./screens/Friends";
import Profile from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import reducer from "./reducers/RootReducer";

const Stack = createNativeStackNavigator();

const store = createStore(reducer);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
            }}
            initialRouteName="Home"
          >
            <Stack.Screen
              name="Home"
              component={Home}
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
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
