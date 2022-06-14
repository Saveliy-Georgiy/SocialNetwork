import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReducer, {ProfileRootActionType} from './profileReducer';
import dialogsReducer, {DialogsRootActionType} from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer, {UsersRootActionType} from './usersReducer';
import {authReducer, AuthRootActionType} from './authReducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {appReducer, AppReducerRootActionType} from './appReducer';

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export type AppStateType = ReturnType<typeof rootReducers>
export type AppActionsType = UsersRootActionType | ProfileRootActionType | DialogsRootActionType | AuthRootActionType | AppReducerRootActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>

export default store
// @ts-ignore
window.store = store;