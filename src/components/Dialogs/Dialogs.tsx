import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

export type DialogsItemType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

const dialogsData = [
    {id: 1, name: "Saveliy"},
    {id: 2, name: "Dima"},
    {id: 3, name: "Egor"},
    {id: 4, name: "Artem"},
    {id: 5, name: "Vano"},
]

const messagesData = [
    {id: 1, message: "Yo"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Hello"},
    {id: 4, message: "Nice project"},
    {id: 5, message: "What am I doing here?"},
]

const Dialogs = () => {

    const dialogsItem = dialogsData.map((d: DialogsItemType) =>
        <DialogsItem key={d.id} id={d.id} name={d.name}/>
    )

    const messagesItem = messagesData.map((m: MessageType) =>
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