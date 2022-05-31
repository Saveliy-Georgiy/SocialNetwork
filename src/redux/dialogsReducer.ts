import {v1} from 'uuid';

export enum DialogsActionTypes {
    SEND_MESSAGE = 'Dialogs/SEND_MESSAGE',
}

export type DialogsRootActionType = ReturnType<typeof sendMessage>

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
        {id: v1(), name: 'Saveliy'},
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Egor'},
        {id: v1(), name: 'Artem'},
        {id: v1(), name: 'Vano'},
    ] as Array<DialogsItemType>,
    messages: [
        {id: v1(), message: 'Yo'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'Nice project!'},
        {id: v1(), message: 'What am I doing here?'},
    ] as Array<MessageType>,
};

export type DialogPageType = typeof initialState

export const dialogsReducer = (state = initialState, action: DialogsRootActionType): DialogPageType => {
    switch (action.type) {
        case DialogsActionTypes.SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.payload.message}],
            };
        default:
            return state;
    }
};

export const sendMessage = (message: string) => {
    return {
        type: DialogsActionTypes.SEND_MESSAGE,
        payload: {message,},
    } as const;
};

export default dialogsReducer;