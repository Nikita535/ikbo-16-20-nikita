import React from "react";
import Form from "./form";
import Info from "./info";
import Weather from "./Weather";


const Body = (props) =>{
    return (
        <div className="wrapper">
        <div className='main'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5 info'>
              <Info />
            </div>
            <div className='col-sm-7 form'> 
              <Form wetherMethod={props.weatherMethod} />
              <Weather state={props.state} />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Body;