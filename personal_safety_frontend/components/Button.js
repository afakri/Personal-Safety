import { TouchableHighlight, Text, StyleSheet } from "react-native";

function Button() {
  return (
    <TouchableHighlight style={styles.container}>
      <Text style={styles.text}>Checkin</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    width: 200,
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    fontSize: 30,
  },
});
export default Button;
