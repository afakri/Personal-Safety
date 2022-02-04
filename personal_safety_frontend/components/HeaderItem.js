import { View, StyleSheet, TouchableHighlight } from "react-native";
import MyText from "./MyText";

function HeaderItem({ text, onPress }) {
  return (
    <TouchableHighlight
      underlayColor="#d9d9d9"
      onPress={onPress}
      style={styles.container}
    >
      <MyText>{text}</MyText>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
  },
});

export default HeaderItem;
