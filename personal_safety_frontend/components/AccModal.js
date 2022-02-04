import { Modal, Text, View, StyleSheet, Pressable } from "react-native";
import { BlurView } from "expo-blur";
import { useState } from "react";
function AccModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal visible={open} transparent>
        <BlurView style={styles.container}>
          <View style={styles.content}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Increase Font</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Decrease Font</Text>
            </Pressable>
          </View>
          <Pressable
            style={[styles.button, styles.closeButton]}
            onPress={() => setOpen(false)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </BlurView>
      </Modal>
      <Pressable
        style={[styles.button, styles.accButton]}
        onPress={() => setOpen(true)}
      >
        <Text style={styles.buttonText}>Accessibility</Text>
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
  buttonText: { color: "white", fontSize: 20 },
  closeButton: {
    position: "absolute",
    bottom: "5%",
    width: "30%",
  },
  accButton: {
    position: "absolute",
    bottom: "5%",
    left: "5%",
    width: "30%",
  },
});

export default AccModal;
