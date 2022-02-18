import React from 'react';
import s from './Message.module.css';
import {MessageType} from "../../../redux/store";

type MessagePropsType = MessageType

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

export default Message;