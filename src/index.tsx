import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history'
import {Router} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {ModalConstructor} from "./components/Modals/ModalConstuctor";
import {Provider} from 'mobx-react'
import mainStore from "./stores/mainStore";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
      <Provider {...mainStore}>
      <BrowserRouter>
          <App />
          <ModalConstructor/>
      </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
