import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import { StoreType } from '../../redux/redux-store';
import Dialogs from './Dialogs';

type DialogsPropsType = StoreType

const DialogsContainer = (props: any) => {

    const state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return <Dialogs sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange} dialogsPage={state}/>
};

export default DialogsContainer;