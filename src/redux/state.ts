import {v1} from 'uuid'

let renderEntireTree = () => {
    console.log("hello")
}

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

const state: RootStateType = {
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
    },
    sidebar: {
        friends: [
            {id: v1(), name: "Dima"},
            {id: v1(), name: "Egor"},
            {id: v1(), name: "Vanya"},
        ]
    }
}

export const changeTextarea = (newText: string) => {
    state.profilePage.newPostText = newText
    renderEntireTree()
}

export const addPost = () => {
    const newPost: PostType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    renderEntireTree()
}

export const subscribe = (observer: () => void) => {
    renderEntireTree = observer
}

export default state