import { authHost,host } from ".";
import jwt_decode from 'jwt-decode';

 const login =async (email,password) =>{
    const {data} = await host.post('api/user/login',{email,password})
    console.log(data)
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
  }

 const registration =async (email,password) =>{
    const {data} = await host.post('api/user/registration',{email,password,role:"ADMIN"})
    localStorage.setItem('token',data.token)
    return jwt_decode(data.token)
}

 const check = async () =>{
    const {data} = await authHost.get('api/user/auth');
    localStorage.setItem('token',data.token)
    console.log(data)
    return jwt_decode(data.token);
}

export {
    login,
    registration,
    check
}