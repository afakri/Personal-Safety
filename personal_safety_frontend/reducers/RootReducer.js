import { combineReducers } from "redux";
import CheckedReducer from "./CheckedReducer";
import ProfileReducer from "./ProfileReducer";
import FontSizeReducer from "./FontSizeReducer";
import NotificationReducer from "./NotificationReducer";

const RootReducer = combineReducers({
  checked: CheckedReducer,
  profile: ProfileReducer,
  font: FontSizeReducer,
  notification: NotificationReducer,
});

export default RootReducer;
