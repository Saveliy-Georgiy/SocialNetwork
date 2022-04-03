import {AppThunk} from "./redux-store";
import {authAPI} from "../api/api";

export const SET_USER_DATA = 'SET_USER_DATA';

export type AuthActionsType = ReturnType<typeof setAuthUserData>

const initialState = {
    id: 0,
    login: '',
    email: '',
    isAuth: false,
}

export type AuthType = typeof initialState

export const authReducer = (state = initialState, action: AuthActionsType): AuthType => {
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
export const getAuthUserData = ():AppThunk => {
    return (dispatch) => {
        authAPI.me()
            .then(data => {
                if(data.resultCode === 0) {
                    let isAuth = true
                    let {id, login, email,} = data.data
                    dispatch(setAuthUserData(id, login, email, isAuth))
                }
            })
    }
}