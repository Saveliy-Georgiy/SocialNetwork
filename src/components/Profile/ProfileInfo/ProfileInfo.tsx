import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";
import avatar from '../../../icons/avatar.jpg'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <img className={s.background}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/PanoHardangerfjorden1.jpg/680px-PanoHardangerfjorden1.jpg"
                 alt="background"/>
            <div className={s.descriptionBlock}>
                <div className={s.avatar}>
                    <img src={props.profile.photos.large || avatar} alt="ava"/>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div className={s.infoWrapper}>
                    <div className={s.myName}>Saveliy Biryukov</div>
                    <div>Date of Birth: 29.09.1999</div>
                    <div>City: Minsk</div>
                    <div>Education: BSUIR</div>
                    <div>Web Site: none</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
//src="https://download-cs.net/steam/avatars/3405.jpg"