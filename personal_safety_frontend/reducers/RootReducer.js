import { combineReducers } from "redux";
import CheckedReducer from "./CheckedReducer";
import ProfileReducer from "./ProfileReducer";
import FontSizeReducer from "./FontSizeReducer";

const RootReducer = combineReducers({
  checked: CheckedReducer,
  profile: ProfileReducer,
  font: FontSizeReducer,
});

export default RootReducer;
