import React from "react";

const Form = (props) => {
    return (
        <form onSubmit={props.wetherMethod}>
            <input type="text" name="city" placeholder="Город"/>
            <button>Получить погоду</button>
        </form>
    );
}


export default Form;