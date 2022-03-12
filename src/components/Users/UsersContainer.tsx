import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
    UsersPageType,
    UserType
} from "../../redux/usersReducer";
import {Dispatch} from 'redux';
import axios from "axios";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

type MapStatePropsType = {
    usersPage: UsersPageType
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.usersPage.isFetching ? <div style={{padding: '10px', backgroundColor: 'opacity'}}><Preloader/></div>: null}
        <Users
            totalUserCount={this.props.usersPage.totalUserCount}
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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);