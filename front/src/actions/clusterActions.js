import {SECURITY_MAP} from './types'
import axios from "axios";

export const mapCluster = () => dispatch => {
    axios.get('/api/room')
        .then( res => {
            dispatch({
                type: SECURITY_MAP,
                payload: res.data
            })
        })
};