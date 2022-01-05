import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>my posts</div>
            <textarea></textarea>
            <button>Add post</button>
            <Post message = "Hi, how a you?" likes={15}/>
            <Post message = "It's my first post" likes={20}/>
            <Post message ={"Yo"} likes={33}/>
        </div>
    );
};

export default MyPosts;