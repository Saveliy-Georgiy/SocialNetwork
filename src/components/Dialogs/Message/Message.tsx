import React from 'react';
import s from './Message.module.css';
import {MessageType} from "../../../index";

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

export default Message;