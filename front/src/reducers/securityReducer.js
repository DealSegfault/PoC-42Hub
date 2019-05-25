import {SECURITY_MAP} from "../actions/types";

export default function(state={}, action) {
    switch(action.type) {
        case SECURITY_MAP:
            return {...state, map: action.payload};
        default:
            return state;
    }
}