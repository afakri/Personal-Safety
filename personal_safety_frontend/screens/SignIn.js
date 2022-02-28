import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
} from "react-native";

import { useForm, Controller } from "react-hook-form";

import Input from "../components/Input";
import Screen from "../components/Screen";

function SignIn({ navigation }) {
  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, "data");
    navigation.navigate("Home");
  };
  return (
    <Screen style={{ backgroundColor: "black" }}>
      <Text style={styles.Title}>Log In </Text>
      <View style={styles.container}>
        <View style={styles.inputs}>
          <Controller
            name="Email"
            defaultValue=""
            control={control}
            rules={{
              required: {
                value: true,
                message: "Email is required!",
              },
              pattern: {
                value: EMAIL_REGEX,
                message: "Not a valid email",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                error={errors.Email}
                errorText={errors?.Email?.message}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Enter your email"
                title="Email"
              />
            )}
          />
          <Controller
            name="Password"
            defaultValue=""
            control={control}
            rules={{
              required: { value: true, message: "Password is required!" },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                error={errors.Password}
                errorText={errors?.Password?.message}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Enter your password"
                title="Password"
              />
            )}
          />
        </View>

        <TouchableHighlight
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>
        <View style={styles.signUp}>
          <Text style={styles.signUpText}>Dont have an account? </Text>
          <Button
            title="Sign up"
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  inputs: {
    alignItems: "center",
    width: "100%",
    marginTop: "40%",
    marginBottom: "45%",
  },
  button: {
    padding: 10,
    width: 200,

    width: 350,
    backgroundColor: "#0233f5",
    borderWidth: 1,
    borderColor: "#0233f5",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 15,
    alignItems: "center",
  },
  item: {
    fontSize: 30,
  },

  baseText: {
    marginLeft: "10%",
    color: "white",
    fontSize: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },

  Title: {
    fontSize: 50,
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",

    fontWeight: "bold",
  },
  signUp: { flexDirection: "row", alignItems: "center" },
  signUpText: { color: "white", fontSize: 17 },
});

export default SignIn;
