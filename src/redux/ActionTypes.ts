import {addPostAC, updateNewPostTextAC} from "./profileReducer";
import {sendMessageAC, updateNewMessageBodyAC} from "./dialogsReducer";

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

