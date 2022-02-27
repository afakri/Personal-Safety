import React from "react";
import { View, Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";

function Input(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title} </Text>
      <TextInput
        style={styles.input}
        placeholder={props.placeHolder}
        keyboardType="numeric"
        placeholderTextColor="grey"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 22,
    color: "white",
    padding: 2,
  },
  input: {
    height: 40,
    borderRadius: 15,
    borderWidth: 1,
    paddingLeft: 10,
    width: 350,
    height: 50,
    borderColor: "#0233f5",
    fontSize: 20,
    color: "white",
    marginBottom: 25,
  },
});

export default Input;
