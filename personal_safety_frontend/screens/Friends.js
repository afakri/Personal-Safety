import { Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";

function Friends({ navigation }) {
  return (
    <Screen>
      <Header navigation={navigation} />
      <Text>Friends</Text>
    </Screen>
  );
}

export default Friends;
