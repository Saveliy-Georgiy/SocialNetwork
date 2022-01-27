import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = ProfilePageType & {
    addPostCallBack: (postText: string) => void
    changeTextarea: () => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} changeTextarea={props.changeTextarea} addPostCallBack={props.addPostCallBack}/>
        </div>
    );
};

export default Profile;