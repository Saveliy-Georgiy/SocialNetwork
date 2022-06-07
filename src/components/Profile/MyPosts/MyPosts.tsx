import React, {FC} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../redux/profileReducer';
import {AddNewPostForm} from './AddNewPostForm/AddNewPostForm';

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (message: string) => void
}

const MyPosts: FC<MyPostsPropsType> = React.memo((
    {
        posts,
        addPost,
    }) => {

    const postsElements = posts.map((m: PostType) =>
        <Post key={m.id} id={m.id} message={m.message} likes={m.likes}/>
    );

    const onAddPost = (message: string) => {
        addPost(message);
    };

    return (
        <div className={s.postsBlock}>
            <div className={s.newPosts}>
                <div className={s.header}>
                    My posts
                </div>
                <AddNewPostForm onAddPost={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

export default MyPosts;