import { combineReducers } from "redux";
import posts from "./posts";
import createPostModal from "./createPostModal";
export default combineReducers(
    {posts, createPostModal}
)