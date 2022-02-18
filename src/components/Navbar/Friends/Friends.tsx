import React from 'react';
import {SidebarType} from "../../../redux/store";
import Friend from "./Friend/Friend";
import s from './Friends.module.css'

type FriendsPropsType = SidebarType

const Friends = (props: FriendsPropsType) => {

    const friends = props.friends.map(f => <Friend key={f.id} id={f.id} name={f.name}/>)

    return (
           <div className={s.friends}>
               {friends}
           </div>
    );
};

export default Friends;