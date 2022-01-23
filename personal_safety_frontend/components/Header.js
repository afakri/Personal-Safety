import { View, TouchableHighlight, StyleSheet, Text } from "react-native";
import HeaderItem from "./HeaderItem";
function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderItem
        text={"Home"}
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <HeaderItem
        text={"Friends"}
        onPress={() => {
          navigation.navigate("Friends");
        }}
      />
      <HeaderItem
        text={"Profile"}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
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
