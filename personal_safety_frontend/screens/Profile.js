import { Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";

function Profile(props) {
  return (
    <Screen style={styles.container}>
      <Header navigation={props.navigation} />
      <Text style={styles.text}>Profile</Text>
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
export default Profile;
