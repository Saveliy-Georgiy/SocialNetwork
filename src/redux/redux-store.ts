import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsType} from "./profileReducer";
import dialogsReducer, {DialogsActionsType} from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer, {UsersActionsType} from "./usersReducer";
import {AuthActionsType, authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

export type AppStateType = ReturnType<typeof rootReducers>
export type AppActionsType = UsersActionsType | ProfileActionsType | DialogsActionsType | AuthActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

export default store
// @ts-ignore
window.store = store;