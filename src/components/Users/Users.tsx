import React from 'react';
import s from './Users.module.css';
import {UserType} from '../../redux/usersReducer';
import {NavLink} from 'react-router-dom';
import avatar from '../../icons/avatar.jpg';
import {Paginator} from './Paginator/Paginator';

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    followingInProgress: Array<number>
    siblingCount: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    onPageChanged: (currentPage: number | string) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

const Users = (props: UsersType) => {

    const {
        totalUsersCount,
        pageSize,
        currentPage,
        users,
        followingInProgress,
        siblingCount,
        follow,
        unfollow,
        onPageChanged,
    } = props;
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {
                users.map(u =>
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
                                    <button
                                        disabled={followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            unfollow(u.id);
                                        }}>Unfollow</button>
                                    :
                                    <button
                                        disabled={followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            follow(u.id);
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
                                <div className={s.location}>{'u.location.country'},</div>
                                <div className={s.location}>{'u.location.city'}</div>
                            </div>
                        </div>
                    </div>)
            }
          {/*  <div className={s.paginator}>
                {pages.map(p => {
                    return <span
                        className={currentPage === p ? s.selectedPage : s.simplePage}
                        onClick={() => onPageChanged(p)}>
                                    {p}
                                    </span>;
                })}
            </div>*/}
            <div className={s.paginator}>
                   <Paginator
                        currentPage={currentPage}
                        onPageChange={onPageChanged}
                        totalCount={totalUsersCount}
                        pageSize={pageSize}
                        siblingCount={siblingCount}/>
            </div>

        </div>
    );
};

export default Users;