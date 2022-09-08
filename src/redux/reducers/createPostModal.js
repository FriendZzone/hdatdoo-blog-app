import { INIT_STATE } from "../../constants";
import { getType, hideModal, showModal } from "../actions";

export default function createPostModalReducers(state = INIT_STATE.createPostModal, action) {
    switch (action.type) {
        case getType(showModal): // case showModal
            return {
                ...state,
                isShow: true
            }
        case getType(hideModal): // case hideModal
            return {
                ...state,
                isShow: false
            }

        default: return state;
    }
}