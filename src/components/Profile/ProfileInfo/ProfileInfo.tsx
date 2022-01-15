import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <img className={s.background}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/PanoHardangerfjorden1.jpg/680px-PanoHardangerfjorden1.jpg"
                 alt="background"/>
            <div className={s.descriptionBlock}>
                <div className={s.avatar}>
                <img src="https://download-cs.net/steam/avatars/3405.jpg" alt="ava"/> </div>
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