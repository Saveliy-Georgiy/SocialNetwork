import {v1} from "uuid";
import dialogsReducer, {DialogPageType, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./dialogsReducer";
const initialState: DialogPageType = {
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

test("reducer should be add update new message", () => {


    const newState = dialogsReducer(initialState, {type: UPDATE_NEW_MESSAGE_BODY, body: "some text"})

    expect(newState.newMessageBody).toBe("some text")
})

test("reducer should send message", () => {
    const initialState: DialogPageType = {
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

    const newState = dialogsReducer(initialState, {type: SEND_MESSAGE})

    expect(newState.messages.length).toBe(6)
})