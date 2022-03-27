import { TouchableHighlight, Text, StyleSheet } from "react-native";
import { connect, useSelector, useDispatch } from "react-redux";
import { setChecked } from "../actions/Checked";
import MyText from "./MyText";
import axios from "axios";
import {
  getCompatibility,
  getSavedBiometrics,
  authenticate,
  Unauthenticate,
} from "../actions/Authentication";
function Button(props) {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.checked.val);
  const authenticated = useSelector(
    (state) => state.authentication.authentication
  );
  const sendPush = async () => {
    let res = await axios.get(
      "https://notification-app.loca.lt/api/v1/reminder/0631005047"
    );
    console.log("push notif sch");
  };
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="#0533g7"
      onPress={() => {
        dispatch(getCompatibility());
        dispatch(getSavedBiometrics());
        dispatch(authenticate());

        if (authenticated.success) {
          dispatch(setChecked(true));
          sendPush()
            .then(console.log("Notif sent"))
            .catch((e) => console.log(e));
        } else {
          console.log("Authentication failed ");
        }
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

export default Button;
