import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableHighlight,
} from "react-native";
import Input from "../components/Input";
import Screen from "../components/Screen";
import React, { Component, Fragment } from "react";

function SignIn({ navigation }) {
  return (
    <Screen style={{ backgroundColor: "black" }}>
      <Text style={styles.Title}>Log In </Text>
      <View style={styles.container}>
        <View style={styles.inputs}>
          <Input title="Email" placeHolder="Enter your email" />
          <Input title="Password" placeHolder="Enter your password" />
        </View>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>
        <View style={styles.signUp}>
          <Text style={styles.signUpText}>Dont have an account? </Text>
          <Button
            title="Sign up"
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  inputs: {
    alignItems: "center",
    width: "100%",
    marginTop: "25%",
    marginBottom: "8%",
  },
  button: {
    padding: 10,
    width: 200,
    marginTop: 20,
    width: 350,
    backgroundColor: "#0233f5",
    borderWidth: 1,
    borderColor: "#0233f5",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 15,
    alignItems: "center",
  },
  item: {
    fontSize: 30,
  },

  baseText: {
    marginLeft: "10%",
    color: "white",
    fontSize: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },

  Title: {
    fontSize: 50,
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    fontWeight: "bold",
  },
  signUp: { flexDirection: "row", alignItems: "center" },
  signUpText: { color: "white", fontSize: 17 },
});

export default SignIn;
