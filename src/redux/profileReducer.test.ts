import {v1} from "uuid";
import profileReducer, {ADD_POST, ProfilePageType, UPDATE_NEW_POST_TEXT} from "./profileReducer";

let initialState: ProfilePageType

beforeEach(() => {
    initialState = {
        posts: [
            {id: v1(), message: "Hi, how a you?", likes: 25},
            {id: v1(), message: "It's my first post", likes: 15},
            {id: v1(), message: "Yo", likes: 33},
        ],
        newPostText: 'it-kamasutra.com',
        profile: null,
        status: "",
    }
})

test("reducer should be add post", () => {

    const newState = profileReducer(initialState, {type: ADD_POST})

    expect(newState.posts.length).toBe(4)
})

test("reducer should be update new post text", () => {

    const newState = profileReducer(initialState, {type: UPDATE_NEW_POST_TEXT, newText: "YO"})

    expect(newState.newPostText).toBe("YO")
})