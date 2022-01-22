import { View, StyleSheet, Text } from "react-native";
import Button from "./Button";
function Main() {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Sussan! </Text>
        <Text style={styles.description}>
          You have not yet checked in today.
        </Text>
        <Text style={styles.description}> Tap the button to checkin now!</Text>
      </View>
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#d9d9d9",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    padding: 30,
  },
  description: {
    fontSize: 20,
  },
  checkin: {
    backgroundColor: "blue",
    fontSize: 40,
  },
});

export default Main;
