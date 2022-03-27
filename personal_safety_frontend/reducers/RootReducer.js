import { combineReducers } from "redux";
import CheckedReducer from "./CheckedReducer";
import ProfileReducer from "./ProfileReducer";
import FontSizeReducer from "./FontSizeReducer";
import NotificationReducer from "./NotificationReducer";
import AuthenticationReducer from "./AuthenticationReducer";
import SettingsReducer from "./SettingsReducer";

const RootReducer = combineReducers({
  checked: CheckedReducer,
  profile: ProfileReducer,
  font: FontSizeReducer,
  notification: NotificationReducer,
  authentication: AuthenticationReducer,
  settings: SettingsReducer,
});

export default RootReducer;
