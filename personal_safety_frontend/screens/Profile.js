import { Text } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";

function Profile(props) {
  return (
    <Screen>
      <Header navigation={props.navigation} />
      <Text>Profile</Text>
    </Screen>
  );
}

export default Profile;
