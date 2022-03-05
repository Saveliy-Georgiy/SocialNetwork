import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";
import axios from "axios";

class Users extends React.Component<UsersPropsType, {}> {
    constructor(props: UsersPropsType) {
        super(props);
        if (props.usersPage.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return (
            <div>
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