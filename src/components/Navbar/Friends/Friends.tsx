import React from 'react';
import Friend from "./Friend/Friend";
import s from './Friends.module.css'
import {FriendsPropsType} from "./FriendsContainer";

const Friends = (props: FriendsPropsType) => {

    const friends = props.sidebar.friends.map(f => <Friend key={f.id} id={f.id} name={f.name}/>)

    return (
           <div className={s.friends}>
               {friends}
           </div>
    );
};

export default Friends;