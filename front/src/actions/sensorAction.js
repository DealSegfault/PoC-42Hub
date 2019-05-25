import {SENSOR} from './types'
import axios from "axios";

export const sensorTriggered = () => dispatch => {
    axios.get('/api/signal')
        .then( res => {
            dispatch({
                type: SENSOR,
                payload: res.data
            })
        })
};