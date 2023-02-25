import { observer } from "mobx-react-lite";
import React, { useContext ,useEffect,useState} from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from "..";
import {NavLink} from "react-router-dom"
import { deleteUser, getAll , updateUser} from "../http/userApi";

const About = observer((props) => {
    const [roleFromInput,setRole] = useState();
    const {user} = useContext(Context);
    useEffect(() => {
        getAll().then(data => {
            user.setUsers(data)
        })
    }, [])


    const deleteUser_ = (email,role)=>{
        const data = deleteUser(email,role);
        console.log(data)
    }
    const changeUser = (role,id)=>{
        const data = updateUser(role,id);
        console.log(data);
    }

    return (
        <ListGroup>
            {user.users.map(l=>{return(
                <ListGroup.Item mr={4}>
                    <div>{l.email}</div>
                    <input value={roleFromInput} onChange={event => setRole(event.target.value)}/>
                    <div><NavLink to="/"  onClick={()=>deleteUser_(l.email,user.getRole)}>Удалить</NavLink></div>
                    <p onClick={()=>changeUser(roleFromInput,l.id)}>Изменить</p>
                </ListGroup.Item>
                    );
                })
            }
        </ListGroup>
    );
})


export default About;