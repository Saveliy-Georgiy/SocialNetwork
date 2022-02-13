import React from 'react';
import s from './MyPosts.module.css'
import {
    ActionsTypes,
    addPostAC,
    PostType,
    ProfilePageType, updateNewPostTextAC,
} from "../../../redux/state";
import Post from "./Post/Post";

export type MyPostsPropsType = ProfilePageType & {
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map((m: PostType) =>
        <Post key={m.id} id={m.id} message={m.message} likes={m.likes}/>
    )

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const changeTextarea = () => {
        (newPostElement.current) && props.dispatch(updateNewPostTextAC(newPostElement.current.value))
        }

    const addPost = () => {
        (newPostElement.current) && props.dispatch(addPostAC())
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