import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import store from './state';
import { gettingWeather } from './state';
import { sendMessage } from './state';
import UserStore from './mobx/userStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user:new UserStore()
    }}>
      <App store={store} gettingWeather={gettingWeather} sendMessage={sendMessage}/>
      </Context.Provider>
  </React.StrictMode>
);

export default root;

