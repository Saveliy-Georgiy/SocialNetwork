import {v1} from "uuid";

export type SidebarActionsType = {

}

export type FriendsType = {
    id: string
    name: string
}

const initialState = {
    friends: [
        {id: v1(), name: "Dima"},
        {id: v1(), name: "Egor"},
        {id: v1(), name: "Vanya"},
    ] as Array<FriendsType>
}
export type SidebarType = typeof initialState

const sidebarReducer = (state = initialState, action: SidebarActionsType): SidebarType => {
    return state
}

export default sidebarReducer;