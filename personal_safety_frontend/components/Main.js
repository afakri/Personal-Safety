import { View, StyleSheet, Text } from "react-native";
import Button from "./Button";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Main(props) {
  useEffect(() => {
    if (props.checked) {
      const timer = setTimeout(() => {
        console.log("10sec has passed! checkin now");
        props.setNotChecked();
      }, 10000);

      return () => clearTimeout(timer);
    }
    const interval = setInterval(() => {
      console.log("Not Checked in ");
      if (props.checked) {
        return () => clearInterval(interval);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [props.checked]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Sussan! </Text>
        <Text style={styles.description}>
          {props.checked
            ? `You are checked-in.\nWe will keep you posted!`
            : `You have not yet checked-in today. \nTap the button to checkin now!`}
        </Text>
      </View>
      {props.checked ? <></> : <Button onPress={props.setChecked} />}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#d9d9d9",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  title: {
    fontSize: 30,
    padding: 30,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
  },
  checkin: {
    backgroundColor: "blue",
    fontSize: 40,
  },
});

function mapStateToProps(state) {
  return {
    checked: state.checked,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setChecked: () => dispatch({ type: "SET_CHECKED" }),
    setNotChecked: () => dispatch({ type: "SET_NOT_CHECKED" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
