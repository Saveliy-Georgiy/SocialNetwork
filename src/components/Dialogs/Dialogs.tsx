import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {DialogsItemType, MessageType} from "../../redux/dialogsReducer";
import {Navigate} from "react-router-dom";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props: DialogsPropsType) => {

    const dialogsItem = props.dialogsPage.dialogs.map((d: DialogsItemType) =>
        <DialogsItem key={d.id} id={d.id} name={d.name}/>
    )

    const messagesItem = props.dialogsPage.messages.map((m: MessageType) =>
        <Message key={m.id} id={m.id} message={m.message}/>
    )

    const onSendMessageClick = (message: string) => {
        props.sendMessage(message)
    }

    if (!props.isAuth) return <Navigate to="/login"/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>DIALOGS</div>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                {messagesItem}
            </div>
            <AddMessageForm sendMessage={onSendMessageClick}/>
        </div>
    );
};

export default Dialogs;