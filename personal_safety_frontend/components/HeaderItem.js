import { View, StyleSheet, TouchableHighlight } from "react-native";
import MyText from "./MyText";

function HeaderItem(props) {
  return (
    <TouchableHighlight
      underlayColor="blue"
      onPress={props.onPress}
      style={styles.container}
      {...props}
    >
      <MyText style={styles.text}>{props.text}</MyText>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: "white",
  },
});

export default HeaderItem;
