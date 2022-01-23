import { TouchableHighlight, Text, StyleSheet } from "react-native";

function Button({ onPress }) {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="#045423"
      onPress={onPress}
    >
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
