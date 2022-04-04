import {v1} from "uuid";
import {AppThunk} from "./redux-store";
import {profileAPI} from "../api/api";

export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_STATUS = 'SET_STATUS';

export type ProfileActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

export type PostType = {
    id: string
    message: string
    likes: number
}

type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: true
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}

const initialState = {
    posts: [
        {id: v1(), message: "Hi, how a you?", likes: 25},
        {id: v1(), message: "It's my first post", likes: 15},
        {id: v1(), message: "Yo", likes: 33},
    ] as Array<PostType>,
    newPostText: 'it-kamasutra.com',
    profile: null as ProfileType | null,
    status: "",
}

export type ProfilePageType = typeof initialState

const profileReducer = (state = initialState, action: ProfileActionsType): ProfilePageType => {
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
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: ADD_POST,
    } as const
}
export const updateNewPostText = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText,
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status,
    } as const
}
export const getUserProfile = (userId: string): AppThunk => {
    return (dispatch) => {
        profileAPI.setUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}
export const getStatus = (userId: string): AppThunk => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}
export const updateStatus = (status: string): AppThunk => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer;