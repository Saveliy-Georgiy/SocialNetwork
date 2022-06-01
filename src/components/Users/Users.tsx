import React from 'react';
import s from './Users.module.css';
import {UserType} from '../../redux/usersReducer';
import {Paginator} from './Paginator/Paginator';
import {User} from './User/User';

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
    //let pagesCount = Math.ceil(totalUsersCount / pageSize);

  /*  let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }*/

    return (
        <div>
            {
                users.map(u =>
                    <User key={u.id}
                          user={u}
                          followingInProgress={followingInProgress}
                          follow={follow}
                          unfollow={unfollow}/>)
            }
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