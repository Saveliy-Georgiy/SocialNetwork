import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()
                    const onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text))
                    }

                    const addPost = () => {
                        store.dispatch(addPostAC())
                    }
                    return <MyPosts updateNewPostText={onPostChange}
                                    addPost={addPost}
                                    posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;