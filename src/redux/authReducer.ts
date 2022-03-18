export const SET_USER_DATA = 'SET-USER-DATA';

type ActionsTypes = ReturnType<typeof setAuthUserData>

const initialState = {
    id: 0,
    login: '',
    email: '',
    isAuth: false,
}

export type AuthType = typeof initialState

export const authReducer = (state = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, login: string, email: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data: {id, login, email, isAuth},
    } as const
}