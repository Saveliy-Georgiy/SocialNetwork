import profileReducer, {ADD_POST, DELETE_POST, ProfilePageType} from './profileReducer';

let initialState: ProfilePageType

beforeEach(() => {
    initialState = {
        posts: [
            {id: '1', message: "Hi, how a you?", likes: 25},
            {id: '2', message: "It's my first post", likes: 15},
            {id: '3', message: "Yo", likes: 33},
        ],
        profile: null,
        status: "",
    }
})

test("new post should be added", () => {

    const newState = profileReducer(initialState, {type: ADD_POST, message: "IT-INCUBATOR"})

    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].message).toBe("IT-INCUBATOR")
})

  test("should be deleted post", () => {

    const newState = profileReducer(initialState, {type: DELETE_POST, postId: '1'})

    expect(newState.posts.length).toBe(2)
})

test("should not be deleted post", () => {

    const newState = profileReducer(initialState, {type: DELETE_POST, postId: '1000'})

    expect(newState.posts.length).toBe(3)
})