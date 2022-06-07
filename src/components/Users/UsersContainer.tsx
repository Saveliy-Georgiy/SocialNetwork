import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/reduxStore';
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    UserType,
} from "../../redux/usersReducer";
import {Users} from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getSiblingCount,
    getTotalUsersCount,
    getUsers,
} from '../../redux/usersSelectors';

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    siblingCount: number
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number | string) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    requestUsers: (currentPage: number | string, pageSize: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType, {}> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber: number | string) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ?
                <div style={{padding: '10px', backgroundColor: 'opacity'}}><Preloader/></div> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                siblingCount={this.props.siblingCount}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        siblingCount: getSiblingCount(state),
    }
}
export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers,}),
    )(UsersContainer)

