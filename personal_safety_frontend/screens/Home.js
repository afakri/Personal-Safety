import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import Main from "../components/Main";
import AccModal from "../components/AccModal";
function Home({ navigation }) {
  return (
    <Screen>
      <Header navigation={navigation} />
      <Main />
      <AccModal />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Home;
