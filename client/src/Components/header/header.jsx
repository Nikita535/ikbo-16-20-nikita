import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../..";
import { useContext } from "react";
import {observer} from "mobx-react-lite";


const Header = observer(() =>{
  const {user} = useContext(Context);
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Погода</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <NavLink className='nav-link' to="/about">О нас</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className='nav-link' to="/weather">Погода</NavLink>
            </li>
            <li class="nav-item">
            < NavLink className='nav-link' to="dialogs">Диалоги</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className='nav-link' to="/license">Соглашение</NavLink>
            </li>
            {user.isAuth &&
            <li class="nav-item">
              <NavLink className='nav-link' to="/login">Авторизация</NavLink>
            </li>
            } 
          </ul>
        </div>
      </nav>
    </div>
    );
})

export default Header;