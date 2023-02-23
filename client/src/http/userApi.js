import { authHost,host } from ".";

 const login =async (email,password,navigate) =>{
    const response = await host.post('api/user/login',{email,password})
    console.log(response)
    if(response.status==200){
        console.log('ok');
        return navigate('/');
    }
    return navigate('/login');
  }

 const registration =async (email,password) =>{
    const response = await host.post('api/user/registration',{email,password,role:"ADMIN"})
    console.log(response)
    return response;
  }

 const check = async () =>{
    const response = await host.post('api/user/registration');
    return response;
}

export {
    login,
    registration,
    check
}