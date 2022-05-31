import {usersAPI} from '../api/api';
import {AppThunk} from './redux-store';

export enum UsersActionTypes {
    FOLLOW = 'Users/FOLLOW',
    UNFOLLOW = 'Users/UNFOLLOW',
    SET_USERS = 'Users/SET_USERS',
    SET_CURRENT_PAGE = 'Users/SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'Users/SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'Users/TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'Users/TOGGLE_IS_FOLLOWING_PROGRESS',
}

export type UsersRootActionType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export type LocationType = {
    city: string
    country: string
}

export type PhotoType = {
    small: string | null
    large: string | null
}

export type UserType = {
    id: number
    photos: PhotoType
    followed: boolean
    name: string
    status: string
    location: LocationType
}

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
};

export type UsersPageType = typeof initialState

export const usersReducer = (state = initialState, action: UsersRootActionType): UsersPageType => {
    switch (action.type) {
        case UsersActionTypes.FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)};
        case UsersActionTypes.UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)};
        case UsersActionTypes.SET_USERS:
            return {...state, users: [/*...state.users,*/ ...action.users]};
        case UsersActionTypes.SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case UsersActionTypes.SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case UsersActionTypes.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export const followSuccess = (userId: number) => {
    return {
        type: UsersActionTypes.FOLLOW,
        userId,
    } as const;
};
export const unfollowSuccess = (userId: number) => {
    return {
        type: UsersActionTypes.UNFOLLOW,
        userId,
    } as const;
};
export const setUsers = (users: Array<UserType>) => {
    return {
        type: UsersActionTypes.SET_USERS,
        users,
    } as const;
};
export const setCurrentPage = (currentPage: number) => {
    return {
        type: UsersActionTypes.SET_CURRENT_PAGE,
        currentPage,
    } as const;
};
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: UsersActionTypes.SET_TOTAL_USERS_COUNT,
        totalCount,
    } as const;
};
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: UsersActionTypes.TOGGLE_IS_FETCHING,
        isFetching,
    } as const;
};
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: UsersActionTypes.TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId,
    } as const;
};
export const requestUsers = (currentPage: number, pageSize: number): AppThunk => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    };
};
export const follow = (id: number): AppThunk => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.follow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(id));
                }
                dispatch(toggleFollowingProgress(false, id));
            });
    };
};
export const unfollow = (id: number): AppThunk => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersAPI.unfollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(id));
                }
                dispatch(toggleFollowingProgress(false, id));
            });
    };
};

export default usersReducer;