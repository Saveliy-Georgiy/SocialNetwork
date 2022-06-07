import React, {FC} from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfilePropsType} from './ProfileContainer';

const Profile: FC<ProfilePropsType> = (
    {
        profile,
        status,
        updateStatus,
    }) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;