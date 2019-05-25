import {combineReducers} from 'redux'
import user from './userReducer'
import security from './securityReducer'

const rootReducer = combineReducers({
    user,
    security
});

export default rootReducer