import { View, StyleSheet, Text } from "react-native";
import Button from "./Button";
import { useState } from "react";

function Main() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Sussan! </Text>
        <Text style={styles.description}>
          {checked
            ? `You are checked-in.\nWe will keep you posted!`
            : `You have not yet checked-in today. \nTap the button to checkin now!`}
        </Text>
      </View>
      {checked ? <></> : <Button onPress={setChecked} />}
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
    marginBottom: 100,
  },
  title: {
    fontSize: 30,
    padding: 30,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
  },
  checkin: {
    backgroundColor: "blue",
    fontSize: 40,
  },
});

export default Main;
