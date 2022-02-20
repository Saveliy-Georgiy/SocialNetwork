import React from 'react';
import {
    ActionsTypes,
    ProfilePageType,
} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from './MyPosts';
import {AppStateType, StoreType} from "../../../redux/redux-store";

export type MyPostsPropsType = StoreType

const MyPostsContainer = (props: any) => {

    const state = props.store.getState()

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    );
};

export default MyPostsContainer;