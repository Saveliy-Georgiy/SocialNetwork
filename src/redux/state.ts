import {v1} from 'uuid'

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

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber()
        } else if (action.type === 'SEND_MESSAGE') {
            const newMessage = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ""
            this._state.dialogsPage.messages.push({id: v1(), message: newMessage})
            this._callSubscriber()
        }
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
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

export default store