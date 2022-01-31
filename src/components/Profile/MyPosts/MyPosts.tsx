import React from 'react';
import s from './MyPosts.module.css'
import {PostType, ProfilePageType} from "../../../redux/state";
import Post from "./Post/Post";

export type MyPostsPropsType = ProfilePageType & {
    addPost: (postText: string) => void
    changeTextarea: () => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map((m: PostType) =>
        <Post key={m.id} id={m.id} message={m.message} likes={m.likes}/>
    )

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const changeTextarea = () => {
        props.changeTextarea()
    }

    const addPost = () => {
        if(newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.newPosts}>

                <div className={s.header}>
                    My posts
                </div>

                <div className={s.textareaWrapper}>
                    <textarea ref={newPostElement} onChange={changeTextarea} placeholder="your news..."></textarea>
                </div>

                <div className={s.buttonWrapper}>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;