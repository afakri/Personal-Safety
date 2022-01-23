import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import Main from "../components/Main";

function Home({ navigation }) {
  return (
    <Screen>
      <Header navigation={navigation} />
      <Main />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Home;
