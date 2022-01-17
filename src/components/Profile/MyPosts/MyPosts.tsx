import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message="Hi, how a you?" likes={15}/>
                <Post message="It's my first post" likes={20}/>
                <Post message={"Yo"} likes={33}/>
            </div>
        </div>
    );
};

export default MyPosts;