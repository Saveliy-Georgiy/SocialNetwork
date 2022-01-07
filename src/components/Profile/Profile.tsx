import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
            <div><img
                src="https://natworld.info/wp-content/uploads/2018/01/%D0%A1%D0%BE%D1%87%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BC%D1%83-%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpeg"
                alt=""/>
                <div>
                    <div>ava +description</div>
                   <MyPosts/>
                </div>
            </div>
    );
};

export default Profile;