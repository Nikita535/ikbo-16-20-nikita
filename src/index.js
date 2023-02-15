import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import store from './state';
import { gettingWeather } from './state';
import { sendMessage } from './state';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App store={store} gettingWeather={gettingWeather} sendMessage={sendMessage}/>
  </React.StrictMode>
);

export default root;

