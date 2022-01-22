import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

function HeaderItem(props) {
  return (
    <TouchableHighlight
      underlayColor="#d9d9d9"
      onPress={() => {}}
      style={styles.container}
    >
      <Text style={styles.item}>{props.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "30",
    borderRadius: 10,
    padding: 10,
  },
  item: {
    fontSize: 30,
  },
});

export default HeaderItem;
