import React from "react";
import { View, Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";

function Input(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title} </Text>
      <TextInput
        style={[styles.input, props.error && styles.error]}
        placeholderTextColor="grey"
        {...props}
      />
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
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
  },
  error: {
    borderColor: "#b80719",
  },
  errorText: {
    color: "#b80719",
  },
});

export default Input;
