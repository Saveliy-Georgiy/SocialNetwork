import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string
    likes: number
}

const Post = (props: PostType) => {
    return (
        <div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src="https://download-cs.net/steam/avatars/3405.jpg" alt="avatar"/>
                    {props.message}
                </div>
                <button>like</button>
                <div>{props.likes}</div>
            </div>
        </div>
    );
};

export default Post;