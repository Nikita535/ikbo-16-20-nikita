import React from "react";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import { useState ,useContext} from "react";
import {login} from '../../http/userApi'
import {observer} from "mobx-react-lite";
import { Context } from "../..";

const Login = observer(() =>{
    const [email,setEmail] = useState();
    const [password,setPassword]=useState();
    const {user} = useContext(Context);
    let navigate = useNavigate();
    
    const signUp = async()=>{
        let data;
        try {
            data = await login(email,password,navigate);
            user.setUser(data);
            user.setIsAuth(true);
            console.log(user);
            navigate('/');
        } catch (error) {
            alert(error.message)
            navigate('/login');
        }
    }
    return (
        <section class="vh-100">
        <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid" alt="Phone image"></img>
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form>
                <div class="form-outline mb-4">
                    <input type="email" onChange={e =>setEmail(e.target.value)} id="form1Example13" class="form-control form-control-lg" />
                    <label class="form-label" for="form1Example13">Email address</label>
                </div>

                <div class="form-outline mb-4">
                    <input type="password" onChange={e =>setPassword(e.target.value)} id="form1Example23" class="form-control form-control-lg" />
                    <label class="form-label" for="form1Example23">Password</label>
                </div>
                <NavLink to="/register">Register</NavLink>
                <br></br>
                <NavLink to="/login" onClick={signUp} class="btn btn-primary btn-lg">Login</NavLink>
                </form>
            </div>
            </div>
        </div>
        </section>
);
})

export default Login;