import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import awsReducer from "./reducers/awsReducer";
import onChangeReducer from "./reducers/onChangeReducer";
import validationReducer from "./reducers/validationReducer";
import App from "./App";

const rootReducer = combineReducers({
  auth: authReducer,
  aws: awsReducer,
  change: onChangeReducer,
  validation: validationReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
