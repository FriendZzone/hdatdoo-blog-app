import { INIT_STATE } from "../../constants";
import { createPost, getPosts, getType, updatePost } from "../actions";

export default function postsReducers(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(getPosts.getPostsRequest): // case getPostsRequest
            return {
                ...state,
                isLoading: true
            }
        case getType(getPosts.getPostsSuccess): // case getPostsSuccess
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        case getType(getPosts.getPostsFailure): // case getPostsFailure
            return {
                ...state,
                isLoading: false,
            }
        case getType(createPost.createPostSuccess): // case getPostsFailure
            return {
                ...state,
                data: [...state.data, action.payload],
            }
        case getType(updatePost.updatePostSuccess): // case getPostsFailure
            const updatedPostIndex = state.data.findIndex(post => post._id === action.payload._id)
            const newData = [...state.data]
            if(updatedPostIndex !== -1){
                newData[updatedPostIndex] = action.payload
            } 
            return {
                ...state,
                data: newData,
            }

        default: return state;
    }
}