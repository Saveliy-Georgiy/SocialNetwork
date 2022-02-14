import {v1} from 'uuid'
import profileReducer, { addPostAC, updateNewPostTextAC } from "./profileReducer";
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC } from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

export type PostType = {
    id: string
    message: string
    likes: number
}

export type DialogsItemType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type FriendsType = {
    id: string
    name: string
}

export type SidebarType = {
    friends: Array<FriendsType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "Hi, how a you?", likes: 25},
                {id: v1(), message: "It's my first post", likes: 15},
                {id: v1(), message: "Yo", likes: 33},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: v1(), name: "Dima"},
                {id: v1(), name: "Egor"},
                {id: v1(), name: "Vanya"},
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("state changed")
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber()
    }
}

export default store