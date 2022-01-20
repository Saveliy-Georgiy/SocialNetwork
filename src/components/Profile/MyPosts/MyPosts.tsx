import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export type PostType = {
    id: number
    message: string
    likes: number
}

const posts = [
    {id: 1, message: "Hi, how a you?", likes: 25},
    {id: 2, message: "It's my first post", likes: 15},
    {id: 3, message: "Yo", likes: 33},
]

const postsElements = posts.map((m: PostType) =>
    <Post key={m.id} id={m.id} message={m.message} likes={m.likes}/>
)

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
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;