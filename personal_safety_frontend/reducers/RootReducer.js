import { combineReducers } from "redux";
import CheckedReducer from "./CheckedReducer";
import ProfileReducer from "./ProfileReducer";

const RootReducer = combineReducers({
  checked: CheckedReducer,
  profile: ProfileReducer,
});

export default RootReducer;
