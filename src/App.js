import Header from './Components/header/header';
import Body from './Components/body';
import car from './img/car.svg'
import { Router, Route, IndexRoute, BrowserRouter, Routes } from 'react-router-dom'
import './App.css';
import About from './Components/about';
import root from '.';

const API_KEY = "a8e57f0cdebfefde8d1b3c1f7f3e6755";

const App = (props) => {

  const gettingWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data =  await api_url.json();
    
    let state = {
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    }
    console.log(state)
    root.render (<App state={state}/>);
  }

  return (
    // <div className='App'>
    //   <header className='App-header'>
    //     <img src={car} className="App-logo" alt="logo"></img>
    //     <p>Жизневский Никита ИКБО-16-20</p>
    //   </header>
    // </div>
    <BrowserRouter>
      <div>
        <div onLoad={console.log("App")}></div>
        <Header />
        <Body weatherMethod={gettingWeather} state={props.state}/>
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element/>
        </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;
