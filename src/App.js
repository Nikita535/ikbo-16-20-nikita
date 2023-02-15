import Header from './Components/header/header';
import Body from './Components/body';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import About from './Components/about';
import Dialogs from './Components/Dialogs/Dialogs';


const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/dialogs/*" element={<Dialogs store={props.store} sendMessage={props.sendMessage}/>}/>
            <Route path="/weather" element={<Body weatherMethod={props.gettingWeather} state={props.state}/>}/>
        </Routes>
      </div> 
      </BrowserRouter>
  );
}

export default App;
