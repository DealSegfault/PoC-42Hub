import axios from 'axios'
import {LOGIN_USER, LOGOUT_USER} from "./types"

export const loginUser = () => dispatch => {
    axios.get('/api/login_user')
        .then( res => {
            dispatch({
                type: LOGIN_USER,
                payload: res.data
            })
        })
};