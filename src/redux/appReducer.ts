import {AppThunk} from "./redux-store";
import {getAuthUserData} from "./authReducer";

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type AppReducerActionsType = ReturnType<typeof initializedSuccess>

const initialState = {
    initialized: false,
}

export type AppType = typeof initialState

export const appReducer = (state = initialState, action: AppReducerActionsType): AppType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
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
        type: INITIALIZED_SUCCESS,
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