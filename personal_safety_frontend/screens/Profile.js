import { StyleSheet, View, TouchableHighlight, ScrollView } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import Header from "../components/Header";
import TimePicker from "../components/TimePicker";
import MyText from "../components/MyText";
import NumericInput from "react-native-numeric-input";
import SecurityQuestions from "../components/SecurityQuestions";
import { useSelector, useDispatch } from "react-redux";
import { setSettings } from "../actions/SettingsActions";

function Profile(props) {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const [questAnsw, setQuestAnsw] = useState([]);
  const [time, setTime] = useState(settings.time);
  const [checks, setChecks] = useState(settings.numberCheckins);

  const save = () => {
    dispatch(
      setSettings({
        time: time,
        questAns: questAnsw,
        numberCheckins: checks,
      })
    );
  };
  console.log(settings);
  return (
    <Screen style={styles.container}>
      <Header navigation={props.navigation} />
      <ScrollView contentContainerStyle={styles.body}>
        <TimePicker time={time} setTime={setTime} />
        <View style={styles.numCheck}>
          <MyText style={styles.text}> Number of check ins: </MyText>
          <NumericInput
            value={checks}
            totalWidth={100}
            onChange={(value) => setChecks(value)}
            textColor="white"
            editable={false}
            minValue={1}
            maxValue={5}
          />
        </View>

        <SecurityQuestions
          setQuestAnsw={setQuestAnsw}
          questions={settings.questAns}
        />
        <View style={styles.submit}>
          <TouchableHighlight
            style={styles.submitButt}
            underlayColor="grey"
            onPress={save}
          >
            <MyText>Save</MyText>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
  },
  body: {
    paddingTop: 80,
    height: "100%",
    justifyContent: "space-around",
  },
  text: { color: "white" },
  numCheck: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  submit: {
    width: "100%",
    alignItems: "center",
  },
  submitButt: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 100,
    height: 50,
    borderRadius: 10,
  },
});
export default Profile;
