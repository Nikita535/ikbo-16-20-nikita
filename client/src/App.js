import Header from './Components/header/header';
import Body from './Components/body';
import { Route, BrowserRouter, Routes,Navigate } from 'react-router-dom'
import About from './Components/about';
import Dialogs from './Components/Dialogs/Dialogs';
import License from './Components/license';
import store from './Redux/store';
import Login from './Components/auth/login';
import Register from './Components/auth/register';
import { useContext, useEffect,useState } from 'react';
import {Context} from './index';
import { check } from './http/userApi';
import { observer } from 'mobx-react-lite';



const App = observer((props) => {
  const {user}= useContext(Context);

  useEffect(() => {
    check().then(data => {
        user.setUser(data)
        console.log(data)
        user.setIsAuth(true)
    })
}, [])



  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
            <Route path="/about" element={<About/>}/>  
            <Route path="/dialogs/*" element={<Dialogs store={props.store} sendMessage={props.sendMessage}/>}/>
            <Route path="/weather" element={<Body weatherMethod={props.gettingWeather} state={props.state}/>}/>
            <Route path="/license" element={<License store={store} />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
      </div> 
      </BrowserRouter>
  );
})

export default App;
