import {ActionsTypes} from "./store";
import {v1} from "uuid";

const initialState = {
    friends: [
        {id: v1(), name: "Dima"},
        {id: v1(), name: "Egor"},
        {id: v1(), name: "Vanya"},
    ]
}

const sidebarReducer = (state = initialState, action: ActionsTypes): typeof initialState => {

    return state
}

export default sidebarReducer;