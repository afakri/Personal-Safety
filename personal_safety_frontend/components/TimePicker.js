import React, { useState } from "react";
import { BlurView } from "expo-blur";
import MyText from "./MyText";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { TimePicker as TP, ValueMap } from "react-native-simple-time-picker";

function TimePicker(props) {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState({
    hours: props.time.hours,
    minutes: props.time.minutes,
  });

  const handleChange = (newValue: ValueMap) => {
    setValue(newValue);
    props.setTime(newValue);
  };
  return (
    <>
      <Modal visible={open} transparent>
        <BlurView style={styles.container}>
          <TP
            value={value}
            onChange={handleChange}
            style={{ backgroundColor: "red" }}
            textColor="white"
          />

          <TouchableHighlight
            underlayColor="grey"
            style={[styles.button, styles.closeButton]}
            onPress={() => setOpen(false)}
          >
            <MyText style={[styles.text]}>X</MyText>
          </TouchableHighlight>
        </BlurView>
      </Modal>
      <View style={styles.container2}>
        <View style={styles.checkinTime}>
          <MyText style={styles.text}>Time of first check in:</MyText>
          <TouchableHighlight
            underlayColor="grey"
            style={styles.accButton}
            onPress={() => setOpen(true)}
          >
            <MyText
              style={styles.timeButton}
            >{`${value.hours}:${value.minutes}`}</MyText>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  container2: {
    alignItems: "center",
    width: "100%",
  },
  checkinTime: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  content: {
    height: "50%",
    width: "80%",

    justifyContent: "center",
  },
  button: {
    backgroundColor: "black",
    height: 70,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  text: { color: "white" },
  closeButton: {
    position: "absolute",
    bottom: "5%",
    width: 60,
    height: 60,
    borderRadius: 200,
  },
  accButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 2,
    width: "30%",
  },
  timeButton: {
    color: "black",
  },
});

export default TimePicker;
