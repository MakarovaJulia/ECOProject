import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history'
import {BrowserRouter} from "react-router-dom";
import {ModalConstructor} from "./components/Modals/ModalConstuctor";
import {Provider} from 'mobx-react'
import mainStore from "./stores/mainStore";
import axios from "axios";

const history = createBrowserHistory();

axios.defaults.baseURL = "https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/";

axios.interceptors.request.use(({ ...config }) => {

    const token = localStorage.getItem("token");
    console.log(config, token);

    if (token) {
        return {
            ...config,
            headers: {
                ...(config.headers || {}),
                Authorization: token,
                "Content-type": "application/json"
            }
        };
    } else{
        return config;
    }
});

axios.interceptors.response.use(({...response})=>{
    return response.data;
});

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
