import { TouchableHighlight, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { setChecked } from "../actions/Checked";

function Button(props) {
  return (
    <TouchableHighlight
      style={styles.container}
      underlayColor="#045423"
      onPress={() => props.setChecked(true)}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    width: 200,
    alignItems: "center",
    borderRadius: 30,
  },
  text: {
    fontSize: 30,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    setChecked: (checked) => dispatch(setChecked(checked)),
  };
}
export default connect(null, mapDispatchToProps)(Button);
