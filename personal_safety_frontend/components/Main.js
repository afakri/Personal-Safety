import { View, StyleSheet } from "react-native";
import Button from "./Button";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setChecked } from "../actions/Checked";
import MyText from "./MyText";

function Main(props) {
  useEffect(() => {
    if (!props.checked) {
      const interval = setInterval(() => {
        console.log("Not Checked in ");
        if (props.checked) {
          return () => clearInterval(interval);
        }
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [props.checked]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MyText style={styles.title}>Welcome, Sussan! </MyText>
        <MyText style={styles.description}>
          {props.checked
            ? `You are checked-in.\nWe will keep you posted!`
            : `You have not yet checked-in today. \nTap the button to checkin now!`}
        </MyText>
      </View>
      {props.checked ? <></> : <Button text="Check in" />}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginTop: "25%",
  },
  container: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  title: {
    padding: 30,
    color: "white",
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});

function mapStateToProps(state) {
  return {
    checked: state.checked.val,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setChecked: (checked) => dispatch(setChecked(checked)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
