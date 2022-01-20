import React from 'react';
import { PostType } from '../../..';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export type MyPostsPropsType = {
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map((m: PostType) =>
        <Post key={m.id} id={m.id} message={m.message} likes={m.likes}/>
    )

    return (
        <div className={s.postsBlock}>
            <div className={s.newPosts}>

                <div className={s.header}>
                    My posts
                </div>

                <div className={s.textareaWrapper}>
                    <textarea placeholder="your news..."></textarea>
                </div>

                <div className={s.buttonWrapper}>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;