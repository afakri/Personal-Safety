import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Friends from "./screens/Friends";
import Profile from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
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
              animationEnabled: true,
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
