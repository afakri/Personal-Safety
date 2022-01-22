import { View, TouchableHighlight, StyleSheet, Text } from "react-native";
import HeaderItem from "./HeaderItem";
function Header() {
  return (
    <View style={styles.container}>
      <HeaderItem text={"Home"} />
      <HeaderItem text={"Friends"} />
      <HeaderItem text={"Profile"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Header;
