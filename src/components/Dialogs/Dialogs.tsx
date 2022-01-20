import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsItemType, MessageType} from "../../index";

type DialogsPropsType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessageType>
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsItem = props.dialogs.map((d: DialogsItemType) =>
        <DialogsItem key={d.id} id={d.id} name={d.name}/>
    )

    const messagesItem = props.messages.map((m: MessageType) =>
        <Message key={m.id} id={m.id} message={m.message}/>
    )

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                {messagesItem}
            </div>
        </div>
    );
};

export default Dialogs;