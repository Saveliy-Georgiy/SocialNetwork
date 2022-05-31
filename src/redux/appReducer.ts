import {AppThunk} from './redux-store';
import {getAuthUserData} from './authReducer';

export enum AppReducerActionTypes {
    INITIALIZED_SUCCESS = 'AppReducer/INITIALIZED_SUCCESS',
}

export type AppReducerRootActionType = ReturnType<typeof initializedSuccess>

const initialState = {
    initialized: false,
}

export type AppType = typeof initialState

export const appReducer = (state = initialState, action: AppReducerRootActionType): AppType => {
    switch (action.type) {
        case AppReducerActionTypes.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {
        type: AppReducerActionTypes.INITIALIZED_SUCCESS,
    } as const
}
export const initializeApp = (): AppThunk => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }
}