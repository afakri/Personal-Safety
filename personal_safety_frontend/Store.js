import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/RootReducer";
import thunk from "redux-thunk";

const Store = createStore(reducer, applyMiddleware(thunk));

export default Store;
