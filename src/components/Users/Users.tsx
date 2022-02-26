import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";
import {v1} from "uuid";

const Users = (props: UsersPropsType) => {

    if(props.usersPage.users.length === 0) {
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
                props.usersPage.users.map(u => <div key={u.id}>
                <span>
                <div>
                    <img className={s.photo} src={'https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg'} alt="photo"/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button> :
                        <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>}

                </div>
                    </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                        <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;