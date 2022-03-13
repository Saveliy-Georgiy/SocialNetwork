import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/usersReducer";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    follow: (id: string) => void
    unfollow: (id: string) => void
    onPageChanged: (currentPage: number) => void
}

const Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id} className={s.userWrapper}>
                        <div className={s.imgWrapper}>
                            <div>
                                <img className={s.photo}
                                     src={u.photos.small !== null ? u.photos.small : 'https://icon-library.com/images/avatar-icon/avatar-icon-6.jpg'}
                                     alt="photo"/>
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