import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {PostType} from '../../../redux/profileReducer';
import {AddNewPostForm} from "./AddNewPostForm/AddNewPostForm";

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.profilePage.posts.map((m: PostType) =>
        <Post key={m.id} id={m.id} message={m.message} likes={m.likes}/>
    )

    const onAddPost = (message: string) => {
        props.addPost(message)
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.newPosts}>
                <div className={s.header}>
                    My posts
                </div>
              <AddNewPostForm onAddPost={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};


export default MyPosts;