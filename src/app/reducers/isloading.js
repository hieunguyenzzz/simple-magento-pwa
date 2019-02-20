import {LOADING_BEGIN, LOADING_FINISH} from "../instant";

export const isloading = (state = false, action) => {
    switch (action.type) {
        case LOADING_BEGIN:
            return true
        case LOADING_FINISH:
            return false
        default:
            return state
    }
}