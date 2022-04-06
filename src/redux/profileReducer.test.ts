import {v1} from "uuid";
import profileReducer, {ADD_POST, ProfilePageType} from "./profileReducer";

let initialState: ProfilePageType

beforeEach(() => {
    initialState = {
        posts: [
            {id: v1(), message: "Hi, how a you?", likes: 25},
            {id: v1(), message: "It's my first post", likes: 15},
            {id: v1(), message: "Yo", likes: 33},
        ],
        profile: null,
        status: "",
    }
})

test("reducer should be add post", () => {

    const newState = profileReducer(initialState, {type: ADD_POST, message: "IT-INCUBATOR"})

    expect(newState.posts.length).toBe(4)
})