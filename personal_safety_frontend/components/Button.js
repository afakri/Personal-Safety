import { TouchableHighlight, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { setChecked } from "../actions/Checked";
import MyText from "./MyText";
import axios from "axios";

function Button(props) {
  const sendPush = async () => {
    let res = await axios.get(
      "https://notification-app.loca.lt/api/v1/reminder/0631005047"
    );
    console.log("push notif sent");
  };
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="#0533g7"
      onPress={() => {
        props.setChecked(true);
        const timer = setTimeout(() => {
          console.log("30sec has passed! checkin now");
          sendPush()
            .then(console.log("Notif sent"))
            .catch((e) => console.log(e));
          props.setChecked(false);
        }, 20000);

        return () => clearTimeout(timer);
      }}
    >
      <MyText style={styles.text}>{props.text}</MyText>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#0233f5",
    width: 300,
    alignItems: "center",
    borderRadius: 30,
    height: 60,
  },
  text: {
    color: "white",
  },
});

function mapDispatchToProps(dispatch) {
  return {
    setChecked: (checked) => dispatch(setChecked(checked)),
  };
}
export default connect(null, mapDispatchToProps)(Button);
