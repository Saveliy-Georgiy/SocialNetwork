import {v1} from "uuid";
import {ActionsTypes} from "./store";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    dialogs: [
        {id: v1(), name: "Saveliy"},
        {id: v1(), name: "Dima"},
        {id: v1(), name: "Egor"},
        {id: v1(), name: "Artem"},
        {id: v1(), name: "Vano"},
    ],
    messages: [
        {id: v1(), message: "Yo"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "Hello"},
        {id: v1(), message: "Nice project"},
        {id: v1(), message: "What am I doing here?"},
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state = initialState, action: ActionsTypes): typeof initialState => {
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