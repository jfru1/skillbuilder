import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import reducers from './reducers';
import store from './store'
import {ConnectedRuter as Router, routerReducer, routerMiddleware} from "react-router-redux"
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
const middleware =routerMiddleware(history)




ReactDOM.render(
  <Provider store={store}>
      <App />
    </Provider>,
 document.getElementById("root")



);
