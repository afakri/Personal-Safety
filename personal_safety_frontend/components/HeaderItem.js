import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

function HeaderItem({ text, onPress }) {
  return (
    <TouchableHighlight
      underlayColor="#d9d9d9"
      onPress={onPress}
      style={styles.container}
    >
      <Text style={styles.item}>{text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
  },
  item: {
    fontSize: 30,
  },
});

export default HeaderItem;
