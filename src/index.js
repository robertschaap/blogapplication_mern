import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { store } from "./redux.js";

import "./styles/index.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
