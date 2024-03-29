import {v1} from 'uuid';
import {AppThunk} from './reduxStore';
import {profileAPI} from '../api/api';

export enum ProfileActionTypes {
    ADD_POST = 'Profile/ADD_POST',
    SET_USER_PROFILE = 'Profile/SET_USER_PROFILE',
    SET_STATUS = 'Profile/SET_STATUS',
    DELETE_POST = 'Profile/DELETE_POST',
    SEND_MESSAGE = 'Profile/SEND_MESSAGE',
    SAVE_PHOTO_SUCCESS = 'Profile/SAVE_PHOTO_SUCCESS'
}

export type ProfileRootActionType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

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

export type PhotosType = {
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
        {id: v1(), message: 'Hi, how a you?', likes: 25},
        {id: v1(), message: 'It\'s my first post', likes: 15},
        {id: v1(), message: 'Yo', likes: 33},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
};

export type ProfilePageType = typeof initialState

const profileReducer = (state = initialState, action: ProfileRootActionType): ProfilePageType => {
    switch (action.type) {
        case ProfileActionTypes.ADD_POST:
            const newPost: PostType = {
                id: v1(),
                message: action.message,
                likes: 0
            };
            return {...state, posts: [...state.posts, newPost]};
        case ProfileActionTypes.SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case ProfileActionTypes.SET_STATUS:
            return {...state, status: action.status};
        case ProfileActionTypes.DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId && p)};
        case ProfileActionTypes.SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        default:
            return state;
    }
};

export const addPost = (message: string) => {
    return {
        type: ProfileActionTypes.ADD_POST,
        message,
    } as const;
};
export const setUserProfile = (profile: any) => {
    return {
        type: ProfileActionTypes.SET_USER_PROFILE,
        profile,
    } as const;
};
export const setStatus = (status: string) => {
    return {
        type: ProfileActionTypes.SET_STATUS,
        status,
    } as const;
};
export const deletePost = (postId: string) => {
    return {
        type: ProfileActionTypes.DELETE_POST,
        postId,
    } as const;
};
export const savePhotoSuccess = (photos: PhotosType) => {
    return {
        type: ProfileActionTypes.SAVE_PHOTO_SUCCESS,
        photos,
    } as const;
};

export const getUserProfile = (userId: string): AppThunk => async (dispatch) => {
    let response = await profileAPI.setUserProfile(userId);
    dispatch(setUserProfile(response.data));
};
export const getStatus = (userId: string): AppThunk => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status: string): AppThunk => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};
export const savePhoto = (file: File): AppThunk => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};


export default profileReducer;