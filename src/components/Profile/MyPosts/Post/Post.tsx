import React from 'react';
import s from './Post.module.css'
import {PostType} from "../../../../redux/profileReducer";

type PostPropsType = PostType

const Post = (props: PostPropsType) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://download-cs.net/steam/avatars/3405.jpg" alt="avatar"/>
            </div>
            <div className={s.textMessage}>{props.message}</div>
            <div className={s.likes}>
                <div className={s.buttonWrapper}>
                    <button>Like</button>
                </div>
                <div>{props.likes}</div>
            </div>
        </div>
    );
};

export default Post;