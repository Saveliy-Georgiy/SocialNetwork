import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem id = "1" name="Saveliy"/>
                <DialogsItem id = "2" name="Dima"/>
                <DialogsItem id = "3" name="Egor"/>
                <DialogsItem id = "4" name="Artem"/>
                <DialogsItem id = "5" name="Vano"/>
            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
};

export default Dialogs;