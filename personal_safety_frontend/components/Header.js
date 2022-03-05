import { View, TouchableHighlight, StyleSheet, Text } from "react-native";
import HeaderItem from "./HeaderItem";
import AccModal from "./AccModal";
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
      <AccModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "black",
    borderBottomWidth: 1,
    borderColor: "grey",
    padding: 10,
  },
});

export default Header;
