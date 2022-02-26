import {v1} from "uuid";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';

export type ActionsTypes = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>

export type DialogsItemType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

const initialState = {
    dialogs: [
        {id: v1(), name: "Saveliy"},
        {id: v1(), name: "Dima"},
        {id: v1(), name: "Egor"},
        {id: v1(), name: "Artem"},
        {id: v1(), name: "Vano"},
    ] as Array<DialogsItemType>,
    messages: [
        {id: v1(), message: "Yo"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "Hello"},
        {id: v1(), message: "Nice project"},
        {id: v1(), message: "What am I doing here?"},
    ] as Array<MessageType>,
    newMessageBody: ""
}

export type DialogPageType = typeof initialState

export const dialogsReducer = (state = initialState, action: ActionsTypes): DialogPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: v1(), message: state.newMessageBody}],
            }
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