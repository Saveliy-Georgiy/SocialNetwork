import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = ProfilePageType & {
    addPost: () => void
    changeTextarea: (newPostText: string) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} changeTextarea={props.changeTextarea} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;