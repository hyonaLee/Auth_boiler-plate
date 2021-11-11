import {LOGIN_USER} from "../_actions/types";
import {REGISTER_USER} from "../_actions/types";

function user_reducer(state={}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state, loginSuccess: action.payload
            }
            break;
        case REGISTER_USER: 
            return {
                ...state, register: action.payload
            }
        default:
            return state;
    }
}

export default user_reducer
