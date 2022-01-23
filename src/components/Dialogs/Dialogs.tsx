import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {DialogPageType, DialogsItemType, MessageType} from "../../redux/state";

type DialogsPropsType = DialogPageType

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
                <div>DIALOGS</div>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                {messagesItem}
            </div>
        </div>
    );
};

export default Dialogs;