import React from "react";

const Weather = (props) => {
    console.log(props);
    return (
        <div>

            <div>
                <p>Местоположение: {`${props.state.city}`}</p>
                <p>Температура: {`${props.state.temp}`}</p>
                <p>Восход солнца: {`${props.state.surise}`}</p>
                <p>Заход солнца: {`${props.state.sunset}`}</p>
            </div>
            
        </div>
    );
}


export default Weather;