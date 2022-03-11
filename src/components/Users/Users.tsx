import React, {MouseEventHandler} from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";
import axios from "axios";

class Users extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.usersPage.totalUserCount / this.props.usersPage.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span
                            className={this.props.usersPage.currentPage === p ? s.selectedPage : ""}
                            onClick={() => this.onPageChanged(p)}>
                            {p}
                        </span>
                    })}
                </div>
                {
                    this.props.usersPage.users.map(u =>
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
                                            this.props.follow(u.id)
                                        }}>Follow</button> :
                                        <button onClick={() => {
                                            this.props.unfollow(u.id)
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
            </div>
        );
    }
}

export default Users;