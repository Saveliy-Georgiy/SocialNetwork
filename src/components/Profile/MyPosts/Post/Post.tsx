import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img src="https://download-cs.net/steam/avatars/3405.jpg" alt="avatar"/>
                    post1
                </div>
                <button>like</button>
            </div>
        </div>
    );
};

export default Post;