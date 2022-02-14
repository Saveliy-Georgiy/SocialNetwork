import {v1} from "uuid";
import {ActionsTypes, DialogPageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            const newMessage = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: v1(), message: newMessage})
            return state
        default:
            return state
    }
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE,
    } as const
}

export default dialogsReducer;