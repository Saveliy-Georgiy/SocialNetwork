import React from 'react';
import s from './MyPosts.module.css'
import {
    PostType,
    ProfilePageType,
} from "../../../redux/store";
import Post from "./Post/Post";

export type MyPostsPropsType = ProfilePageType & {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map((m: PostType) =>
        <Post key={m.id} id={m.id} message={m.message} likes={m.likes}/>
    )

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const changeTextarea = () => {
        (newPostElement.current) && props.updateNewPostText(newPostElement.current.value)
        }

    const onAddPost = () => {
        (newPostElement.current) && props.addPost()
    }

    return (
        <div className={s.postsBlock}>
            <div className={s.newPosts}>

                <div className={s.header}>
                    My posts
                </div>

                <div className={s.textareaWrapper}>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={changeTextarea} placeholder="your news..."/>
                </div>

                <div className={s.buttonWrapper}>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;