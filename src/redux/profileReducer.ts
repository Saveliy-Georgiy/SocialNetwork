import {v1} from "uuid";
import {ActionsTypes} from "./ActionTypes";

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type PostType = {
    id: string
    message: string
    likes: number
}

const initialState = {
    posts: [
        {id: v1(), message: "Hi, how a you?", likes: 25},
        {id: v1(), message: "It's my first post", likes: 15},
        {id: v1(), message: "Yo", likes: 33},
    ] as Array<PostType>,
    newPostText: 'it-kamasutra.com'
}

export type ProfilePageType = typeof initialState

const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likes: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ""}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        default:
            return state
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

export default profileReducer;