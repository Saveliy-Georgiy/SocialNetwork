import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UsersPageType,
    UserType
} from "../../redux/usersReducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from '../../api/api';

type MapStatePropsType = {
    usersPage: UsersPageType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.usersPage.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        console.log("UsersContainer")
        return <>
            {this.props.usersPage.isFetching ?
                <div style={{padding: '10px', backgroundColor: 'opacity'}}><Preloader/></div> : null}
            <Users
                totalUsersCount={this.props.usersPage.totalUsersCount}
                pageSize={this.props.usersPage.pageSize}
                currentPage={this.props.usersPage.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.usersPage.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
})(UsersContainer);
