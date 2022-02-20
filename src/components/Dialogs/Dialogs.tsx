import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {
    DialogsItemType,
    MessageType,
    DialogPageType,
} from "../../redux/store";

type DialogsPropsType = DialogPageType & {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

const Dialogs = (props: any) => {

    const dialogsItem = props.dialogsPage.dialogs.map((d: DialogsItemType) =>
        <DialogsItem key={d.id} id={d.id} name={d.name}/>
    )

    const messagesItem = props.dialogsPage.messages.map((m: MessageType) =>
        <Message key={m.id} id={m.id} message={m.message}/>
    )

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.target.value)
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
            <div><textarea value={props.dialogsPage.newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message"/>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;