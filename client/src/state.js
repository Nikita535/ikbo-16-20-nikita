import root from './index'
import App from './App';

const API_KEY = "a8e57f0cdebfefde8d1b3c1f7f3e6755";


let store = {
    weather : {
       temp: "",
       city: "",
       country: "",
       sunrise: "",
       sunset: "",
   },
       dialogsData : [
       {id: 1,name:'Nikita'},
       {id:2, name:'Sasha'},
       {id:3, name:'Pasha'}
   ],
   
       messageData : [
       {id:1, message: 'Hi'},
       {id:2, message: 'Hu'},
       {id:3, message:'Ho'}
   ]
  }

export let gettingWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data =  await api_url.json();

    store.weather = {
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
    }
    root.render (<App state={store.weather}/>);
}


export let sendMessage =  (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value;
    console.log(message);
    store.messageData.push({id:4,message:message});
    console.log(store.messageData);
    root.render (<App store={store} sendMessage={sendMessage}/>);
}
    

   export default store;