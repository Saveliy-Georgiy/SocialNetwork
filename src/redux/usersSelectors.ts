import {AppStateType} from "./reduxStore";
import {createSelector} from "reselect";
import {UserType} from "./usersReducer";

const getUsersSelector = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users: UserType[]) => {
    return users.filter(u => true)
})

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
export const getSiblingCount = (state: AppStateType) => {
    return state.usersPage.siblingCount
}
