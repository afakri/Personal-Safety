import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableHighlight,
} from "react-native";
import Screen from "../components/Screen";
import Input from "../components/Input";

import { useForm, Controller } from "react-hook-form";

function SignUp({ navigation }) {
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
      <Text style={styles.Title}>Sign Up </Text>
      <View style={styles.container}>
        <View style={styles.inputs}>
          <Controller
            name="FirstName"
            defaultValue=""
            control={control}
            rules={{
              required: { value: true, message: "First name is required!" },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                error={errors.FirstName}
                errorText={errors?.FirstName?.message}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Enter your first name"
                title="First Name"
              />
            )}
          />
          <Controller
            name="LastName"
            defaultValue=""
            control={control}
            rules={{
              required: { value: true, message: "Last name is required!" },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                error={errors.LastName}
                errorText={errors?.LastName?.message}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="Enter your last name"
                title="Last Name"
              />
            )}
          />
          <Controller
            name="Email"
            defaultValue=""
            control={control}
            rules={{
              required: { value: true, message: "Email is required!" },
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
            name="PhoneNumber"
            defaultValue=""
            control={control}
            rules={{
              required: { value: true, message: "Phone number is required!" },
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                error={errors.PhoneNumber}
                errorText={errors?.PhoneNumber?.message}
                onChangeText={(text) => onChange(text)}
                value={value}
                placeholder="(XXX)-XXX-XXX"
                title="Phone Number"
              />
            )}
          />

          <Controller
            name="Password"
            defaultValue=""
            control={control}
            rules={{
              required: { value: true, message: "Password is required!" },
              minLength: {
                value: 5,
                message: "Password should be more than 5 characters",
              },
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
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableHighlight>
        <View style={styles.signUp}>
          <Text style={styles.signUpText}>Already have an account? </Text>
          <Button
            title="Log in"
            onPress={() => {
              navigation.navigate("SignIn");
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
    marginTop: "10%",
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

export default SignUp;
