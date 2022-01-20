import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from "../../index";

type ProfileType = {
    posts: Array<PostType>
}

const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;