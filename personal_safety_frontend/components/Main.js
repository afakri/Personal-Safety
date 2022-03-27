import { View, StyleSheet } from "react-native";
import Button from "./Button";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setChecked } from "../actions/Checked";
import MyText from "./MyText";
import { Unauthenticate } from "../actions/Authentication";
function Main(props) {
  const checked = useSelector((state) => state.checked.val);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!checked) {
      const interval = setInterval(() => {
        console.log("Not Checked in ");
        if (checked) {
          return () => clearInterval(interval);
        }
      }, 10000);
      return () => clearInterval(interval);
    }
    const interval2 = setTimeout(() => {
      dispatch(setChecked(false));
      dispatch(Unauthenticate());
      console.log("Time to Checkin");
    }, 60000);
  }, [checked]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MyText style={styles.title}>Welcome, Sussan! </MyText>
        <MyText style={styles.description}>
          {checked
            ? `You are checked-in.\nWe will keep you posted!`
            : `You have not yet checked-in today. \nTap the button to checkin now!`}
        </MyText>
      </View>
      {checked ? <></> : <Button text="Check in" />}
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

export default Main;
