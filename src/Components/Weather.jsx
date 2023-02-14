import React from "react";

const Weather = (props) => {
    return (
            <div>
                {props.state&&
                <div>
                    <p>Местоположение: {`${props.state.city}`}</p>
                    <p>Температура: {`${props.state.temp}`}</p>
                    <p>Восход солнца: {`${props.state.sunrise}`}</p>
                    <p>Заход солнца: {`${props.state.sunset}`}</p>
                </div>
}
            </div>
            );
}


export default Weather;