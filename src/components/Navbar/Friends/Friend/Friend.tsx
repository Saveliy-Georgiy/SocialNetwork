import React from 'react';
import { FriendsType } from '../../../../redux/sidebarReducer';
import s from './Friend.module.css'

type FriendsPropsType = FriendsType

const Friend = (props: FriendsPropsType) => {
    return (
        <div className={s.friend}>
            <div  className={s.avatar}>
                <img src="https://download-cs.net/steam/avatars/3405.jpg" alt="avatar"/>
            </div>
           <div className={s.friendName}>
               {props.name}
           </div>
        </div>
    );
};

export default Friend;