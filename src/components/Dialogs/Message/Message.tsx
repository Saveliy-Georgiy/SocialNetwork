import React from 'react';
import {MessageType} from '../Dialogs';
import s from './Message.module.css';

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
};

export default Message;