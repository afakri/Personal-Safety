import React from "react";
import Index from "./Index";
import Store from "./Store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={Store}>
        <Index />
      </Provider>
    </>
  );
}

export default App;
