import { Modal, Text, View, StyleSheet, Pressable } from "react-native";
import { BlurView } from "expo-blur";
import { useState } from "react";
import { Icon } from "react-native-elements";
import { increaseFont, decreaseFont } from "../actions/FontSize";
import { useDispatch } from "react-redux";
import MyText from "./MyText";

function AccModal() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Modal visible={open} transparent>
        <BlurView style={styles.container}>
          <View style={styles.content}>
            <Pressable
              style={styles.button}
              onPress={() => dispatch(increaseFont())}
            >
              <MyText style={styles.buttonText}>Increase Font</MyText>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => dispatch(decreaseFont())}
            >
              <MyText style={styles.buttonText}>Decrease Font</MyText>
            </Pressable>
          </View>
          <Pressable
            style={[styles.button, styles.closeButton]}
            onPress={() => setOpen(false)}
          >
            <MyText style={[styles.buttonText]}>Close</MyText>
          </Pressable>
        </BlurView>
      </Modal>
      <Pressable style={styles.accButton} onPress={() => setOpen(true)}>
        <Icon name="universal-access" type="font-awesome" size={50} />
      </Pressable>
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
  content: {
    height: "50%",
    width: "80%",

    justifyContent: "center",
    borderRadius: 40,
  },
  button: {
    backgroundColor: "black",
    height: 70,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: { color: "white" },
  closeButton: {
    position: "absolute",
    bottom: "5%",
    width: "30%",
  },
  accButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AccModal;
