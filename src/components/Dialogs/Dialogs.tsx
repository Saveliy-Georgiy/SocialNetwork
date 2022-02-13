import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    DialogPageType,
    DialogsItemType,
    MessageType,
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../redux/state";

type DialogsPropsType = DialogPageType & {
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsItem = props.dialogs.map((d: DialogsItemType) =>
        <DialogsItem key={d.id} id={d.id} name={d.name}/>
    )

    const messagesItem = props.messages.map((m: MessageType) =>
        <Message key={m.id} id={m.id} message={m.message}/>
    )

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyAC(e.target.value))
    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>DIALOGS</div>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                {messagesItem}
            </div>
            <div><textarea value={props.newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"/>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;