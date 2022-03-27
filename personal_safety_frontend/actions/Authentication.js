import * as LocalAuthentication from "expo-local-authentication";

export function setCompatibility(compatible) {
  return {
    type: "GET_COMPATIBILITY",
    payload: compatible,
  };
}
export function SavedBiometrics(savedBiometrics) {
  return {
    type: "GET_SAVED_BIOMETRICS",
    payload: savedBiometrics,
  };
}
export function Doauthenticate(biometricAuth) {
  return {
    type: "AUTHENTICATE",
    payload: biometricAuth,
  };
}
export function Unauthenticate() {
  return {
    type: "UNAUTHENTICATE",
  };
}

export function getCompatibility() {
  return async (dispatch) => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    dispatch(setCompatibility(compatible));
  };
}
export function getSavedBiometrics() {
  return async (dispatch) => {
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    dispatch(SavedBiometrics(savedBiometrics));
  };
}
export function authenticate() {
  return async (dispatch) => {
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometrics",
    });
    console.log(biometricAuth);
    dispatch(Doauthenticate(biometricAuth));
  };
}
