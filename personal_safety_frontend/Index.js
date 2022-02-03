import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Friends from "./screens/Friends";
import Profile from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/RootReducer";
import thunk from "redux-thunk";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getProfile } from "./actions/Profile";
import Store from "./Store";

const Stack = createNativeStackNavigator();

function Index(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const test = useSelector((state) => state);
  console.log(test);

  return (
    <>
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
    </>
  );
}
const styles = StyleSheet.create({});

function mapStateToProps(state) {
  return {
    user: state.profile.user,
    loading: state.profile.loading,
    error: state.profile.error,
  };
}

export default connect(mapStateToProps)(Index);
