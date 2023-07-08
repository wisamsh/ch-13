import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import './assets/fonts.css';
import './index.css';
import { Provider } from "./Context/tasks";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
  <Provider>
    <App />
  </Provider>,
  
)
