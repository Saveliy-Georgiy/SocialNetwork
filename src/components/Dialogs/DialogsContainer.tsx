import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                const state = store.getState()

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageAC())
                }

                const onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyAC(body))
                }
                return <Dialogs sendMessage={onSendMessageClick}
                                updateNewMessageBody={onNewMessageChange}
                                dialogs={state.dialogsPage.dialogs}
                                messages={state.dialogsPage.messages}
                                newMessageBody={state.dialogsPage.newMessageBody}/>
            }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;