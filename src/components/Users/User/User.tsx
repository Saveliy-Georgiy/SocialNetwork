import React from 'react';
import s from './User.module.css';
import {NavLink} from 'react-router-dom';
import avatar from '../../../icons/avatar.jpg';
import { UserType } from '../../../redux/usersReducer';

type UsersType = {
    user: UserType
    followingInProgress: Array<number>
    follow: (id: number) => void
    unfollow: (id: number) => void
}

export const User = (props: UsersType) => {

    const {
        user,
        followingInProgress,
        follow,
        unfollow,
    } = props;

    return (
        <div key={user.id} className={s.userWrapper}>
            <div className={s.imgWrapper}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={s.photo}
                             src={user.photos.small !== null ? user.photos.small : avatar}
                             alt="photo"/>
                    </NavLink>
                </div>
                <div className={s.buttonWrapper}>
                    {user.followed ?
                        <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollow(user.id);
                            }}>Unfollow</button>
                        :
                        <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id);
                            }}>Follow</button>
                    }
                </div>
            </div>
            <div className={s.informationWrapper}>
                <div className={s.message}>
                    <div className={s.name}>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={s.locationWrapper}>
                    <div className={s.location}>{'u.location.country'},</div>
                    <div className={s.location}>{'u.location.city'}</div>
                </div>
            </div>
        </div>
    );
};