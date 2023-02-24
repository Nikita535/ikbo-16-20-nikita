import { observer } from "mobx-react-lite";
import React, { useContext ,useEffect} from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Context } from "..";
import {NavLink} from "react-router-dom"
import { deleteUser, getAll } from "../http/userApi";

const About = observer((props) => {

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
    const changeUser = ()=>{
        console.log("change")
    }

    return (
        <ListGroup>
            {user.users.map(l=>{return(
                <ListGroup.Item mr={4}>
                    {l.email}
                    <NavLink to="/"  onClick={()=>deleteUser_(l.email,user.getRole)}>Удалить</NavLink> 
                    <p onClick={()=>changeUser()}>Изменить</p>
                </ListGroup.Item>
                    );
                })
            }
        </ListGroup>
    );
})


export default About;