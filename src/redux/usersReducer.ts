export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
export const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';

type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUserCountAC>

export type LocationType = {
    city: string
    country: string
}

export type PhotoType = {
    small: string | null
    large: string | null
}

export type UserType = {
    id: string
    photos: PhotoType
    followed: boolean
    name: string
    status: string
    location: LocationType
}

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
}

export type UsersPageType = typeof initialState

export const usersReducer = (state = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case SET_USERS:
            return {...state, users: [/*...state.users,*/ ...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUserCount: action.totalCount}
        default:
            return state
    }
}

export const followAC = (userId: string) => {
    return {
        type: FOLLOW,
        userId,
    } as const
}

export const unfollowAC = (userId: string) => {
    return {
        type: UNFOLLOW,
        userId,
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users,
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    } as const
}

export const setTotalUserCountAC = (totalCount: number) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalCount,
    } as const
}


export default usersReducer;