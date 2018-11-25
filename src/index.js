import App from "./App.js";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import petClinicApp from "./reducers/index";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  petClinicApp,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);