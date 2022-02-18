import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
})

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

const store = createStore(reducers)
export type StoreType = typeof store;

export default store