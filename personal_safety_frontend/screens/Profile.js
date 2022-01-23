import { Text } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";

function Profile({ navigation }) {
  return (
    <Screen>
      <Header navigation={navigation} />
      <Text>Profile</Text>
    </Screen>
  );
}

export default Profile;
