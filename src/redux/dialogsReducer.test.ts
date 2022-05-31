import {v1} from 'uuid';
import dialogsReducer, {DialogPageType, DialogsActionTypes} from './dialogsReducer';

let initialState: DialogPageType

beforeEach(() => {
    initialState = {
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
    }
})

test("reducer should send message", () => {

    const newState = dialogsReducer(initialState, {
        type: DialogsActionTypes.SEND_MESSAGE, payload: {
            message: "hello man!"
        }
    })

    expect(newState.messages.length).toBe(6)
})