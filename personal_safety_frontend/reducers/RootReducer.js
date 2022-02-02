import { combineReducers } from "redux";
import CheckedReducer from "./CheckedReducer";

const RootReducer = combineReducers({
  checked: CheckedReducer,
});

export default RootReducer;
