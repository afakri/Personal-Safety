import React, { useState } from "react";
import Input from "../components/Input";
import { BlurView } from "expo-blur";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Modal,
} from "react-native";
import MyText from "./MyText";

function SecurityQuestions(props) {
  const [open, setOpen] = useState(false);
  const [qa, setQa] = useState(props.questions);
  const [question, onChangeQuestion] = useState("");
  const [answer, onChangeAnswer] = useState("");
  return (
    <View style={styles.container}>
      <Modal visible={open} transparent>
        <BlurView style={styles.modal}>
          <Input
            placeholder="Security question"
            title="Enter a security question:"
            onChangeText={onChangeQuestion}
          />
          <Input
            placeholder="Security answer"
            title="Enter the answer:"
            onChangeText={onChangeAnswer}
          />
          <TouchableHighlight
            underlayColor="grey"
            style={styles.add}
            underlayColor="#0233f5"
            onPress={() => {
              setOpen(false);
              question === ""
                ? console.log("nothing was entered")
                : qa.push({ question: question, answer: answer });
              onChangeQuestion("");
              onChangeAnswer("");
              props.setQuestAnsw(qa);
            }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>Add</Text>
          </TouchableHighlight>
        </BlurView>
      </Modal>
      <View style={styles.questions}>
        {qa.map((qa, index) => (
          <MyText key={index}>{qa.question}</MyText>
        ))}
      </View>
      <TouchableHighlight
        style={styles.add}
        underlayColor="#0233f5"
        onPress={() => setOpen(true)}
      >
        <Text style={styles.text}>+</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  container: {
    alignItems: "center",
  },
  questions: {
    minHeight: 50,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 30,
  },
  add: {
    backgroundColor: "grey",
    borderRadius: 10,
    width: 100,
    alignItems: "center",
    marginTop: 9,
  },
});

export default SecurityQuestions;
