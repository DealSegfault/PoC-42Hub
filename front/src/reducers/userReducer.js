import {LOGIN_USER, LOGOUT_USER} from "../actions/types";

export default function(state={}, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {...state, res: action.payload};
        default:
            return state;
    }
}