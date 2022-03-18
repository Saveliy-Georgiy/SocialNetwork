import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';
import avatar from '../../images/avatar.jpg'
import axios from "axios";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    onPageChanged: (currentPage: number) => void
}

const Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log("Users")
    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id} className={s.userWrapper}>
                        <div className={s.imgWrapper}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={s.photo}
                                         src={u.photos.small !== null ? u.photos.small : avatar}
                                         alt="photo"/>
                                </NavLink>
                            </div>
                            <div className={s.buttonWrapper}>
                                {u.followed ?
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {"API-KEY": "53b48c19-90ac-4424-8dde-79b93625ae97"},
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                            })
                                    }}>Unfollow</button>
                                    :
                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                            {
                                                withCredentials: true,
                                                headers: {"API-KEY": "53b48c19-90ac-4424-8dde-79b93625ae97"},
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            })
                                    }}>Follow</button>
                                }

                            </div>
                        </div>
                        <div className={s.informationWrapper}>
                            <div className={s.message}>
                                <div className={s.name}>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={s.locationWrapper}>
                                <div className={s.location}>{"u.location.country"},</div>
                                <div className={s.location}>{"u.location.city"}</div>
                            </div>
                        </div>
                    </div>)
            }
            <div className={s.paginator}>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? s.selectedPage : s.simplePage}
                        onClick={() => props.onPageChanged(p)}>
                                    {p}
                                    </span>
                })}
            </div>
        </div>
    );
}

export default Users;