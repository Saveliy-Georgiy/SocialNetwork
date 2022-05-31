import {AppThunk} from "./redux-store";
import {authAPI} from "../api/api";

export enum AuthActionTypes {
    SET_USER_DATA = 'Auth/SET_USER_DATA',
}

export type AuthRootActionType = ReturnType<typeof setAuthUserData>

const initialState = {
    id: 0,
    login: '',
    email: '',
    isAuth: false,
}

export type AuthType = typeof initialState

export const authReducer = (state = initialState, action: AuthRootActionType): AuthType => {
    switch (action.type) {
        case AuthActionTypes.SET_USER_DATA:
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
        type: AuthActionTypes.SET_USER_DATA,
        data: {id, login, email, isAuth},
    } as const
}
export const getAuthUserData = ():AppThunk => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, login, email,} = response.data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}
export const login = (email: string, password: string, rememberMe: boolean, setStatus: any):AppThunk => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    setStatus(response.data.messages)
                }
            })
    }
}
export const logout = ():AppThunk => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(NaN, '', '', false))
                }
            })
    }
}