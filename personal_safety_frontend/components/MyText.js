import { useSelector } from "react-redux";
import { Text, StyleSheet } from "react-native";

function MyText(props) {
  const fontSize = useSelector((state) => state.font.size);
  return (
    <Text style={[props.style, { fontSize: fontSize }]}>{props.children}</Text>
  );
}

export default MyText;
