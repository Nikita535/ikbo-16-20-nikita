import React, { useState } from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Meassage from './Message/Message';




const Dialogs = (props) => {

    let dialogsElements = props.store.dialogsData.map(dialog =><DialogItem name={dialog.name} id={dialog.id}/> );
   
   
   let messageElements = props.store.messageData.map(message =><Meassage message={message.message}/>);

   const [text,setText] = useState('что-то');

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <form onSubmit={props.sendMessage}>
                <input value={text} type="text" style={{color:'black'}} name="message" placeholder="Сообщение" onChange={event => setText(event.target.value)}/>
                <button>Отправить</button>
            </form>
        </div>
    );
}

export default Dialogs;