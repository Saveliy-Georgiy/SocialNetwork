import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";
import {v1} from "uuid";

const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg',
                followed: true,
                fullName: "Saveliy",
                status: 'I am boss',
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: v1(),
                photoUrl: 'https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg',
                followed: false,
                fullName: "Egor",
                status: 'I am boss too',
                location: {city: "Moskow", country: "Russia"}
            },
            {
                id: v1(),
                photoUrl: 'https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg',
                followed: false,
                fullName: "Dima",
                status: 'I am boss too',
                location: {city: "Borisov", country: "Belarus"}
            },
            {
                id: v1(),
                photoUrl: 'https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg',
                followed: true,
                fullName: "Vano",
                status: 'I am boss too',
                location: {city: "Grodno", country: "Belarus"}
            },])
    }
    return (
        <div>
            {
                props.usersPage.users.map(u =>
                    <div key={u.id} className={s.userWrapper}>
                        <div className={s.imgWrapper}>
                            <div>
                                <img className={s.photo}
                                     src={'https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg'} alt="photo"/>
                            </div>
                            <div className={s.buttonWrapper}>
                                {u.followed ?
                                    <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button> :
                                    <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>}

                            </div>
                        </div>
                        <div className={s.informationWrapper}>
                            <div className={s.message}>
                                <div className={s.name}>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={s.locationWrapper}>
                                <div className={s.location}>{u.location.country},</div>
                                <div className={s.location}>{u.location.city}</div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Users;