import { Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";

function Friends({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.text}>Friends</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
  },
  text: { color: "white" },
});

export default Friends;
