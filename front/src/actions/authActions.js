import axios from 'axios'
import {LOGIN_USER, LOGOUT_USER} from "./types"

export const loginUser = () => dispatch => {
    axios.get('/api/login/42/')
        .then( res => {
            console.log(res.data);
            dispatch({
                type: LOGIN_USER,
                payload: res.data
            })
        })
};