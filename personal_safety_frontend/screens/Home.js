import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import Main from "../components/Main";
import { useStore } from "react-redux";

function Home({ navigation }) {
  const test = useStore();
  console.log(test.getState());
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
