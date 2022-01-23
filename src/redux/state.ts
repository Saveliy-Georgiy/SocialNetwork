import {v1} from 'uuid'

export type PostType = {
    id: number
    message: string
    likes: number
}

export type DialogsItemType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogPageType = {
    dialogs: Array<DialogsItemType>
    messages: Array<MessageType>
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

let state: RootStateType = {
    profilePage: {posts: [
            {id: 1, message: "Hi, how a you?", likes: 25},
            {id: 2, message: "It's my first post", likes: 15},
            {id: 3, message: "Yo", likes: 33},
        ],},
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Saveliy"},
            {id: 2, name: "Dima"},
            {id: 3, name: "Egor"},
            {id: 4, name: "Artem"},
            {id: 5, name: "Vano"},
        ],
        messages: [
            {id: 1, message: "Yo"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Hello"},
            {id: 4, message: "Nice project"},
            {id: 5, message: "What am I doing here?"},
        ],
    },
    sidebar: {
        friends: [
            {id: v1(), name: "Dima"},
            {id: v1(), name: "Egor"},
            {id: v1(), name: "Vanya"},
        ]
    }
}

export default state