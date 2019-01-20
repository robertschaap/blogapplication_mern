// @flow
import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducers } from "./redux.js";
import reduxPromise from "redux-promise";

import "./styles/normalize.css";
import "./styles/index.scss";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxPromise),
);

const root = document.getElementById("root");

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    root,
  );
}

