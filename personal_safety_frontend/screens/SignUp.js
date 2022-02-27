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
import Screen from "../components/Screen";
import Input from "../components/Input";
import React, { Component, Fragment } from "react";

function SignUp({ navigation }) {
  return (
    <Screen style={{ backgroundColor: "black" }}>
      <Text style={styles.Title}>Sign Up </Text>
      <View style={styles.container}>
        <View style={styles.inputs}>
          <Input title="First Name" placeHolder="Enter your first name" />
          <Input title="Last Name" placeHolder="Enter your last name" />
          <Input title="Email " placeHolder="example@example.com" />
          <Input title="Phone Number" placeHolder="(XXX)-XXX-XXX" />
          <Input title="Password" placeHolder="Pick a strong password" />
        </View>

        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableHighlight>
        <View style={styles.signUp}>
          <Text style={styles.signUpText}>Already have an account? </Text>
          <Button
            title="Log in"
            onPress={() => {
              navigation.navigate("SignIn");
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
    marginTop: "5%",
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

export default SignUp;
