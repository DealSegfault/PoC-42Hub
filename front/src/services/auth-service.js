import axiosService from './axios-service';
import axios from 'axios'
const axiosInstance = axiosService.getInstance();


class AuthService {
    fetchToken = () => {
        axios.get('/api/login/42/return').then(result => {
            return result
        })
        // axiosInstance.get("/login/42/return", {}).then(result => {
        //     console.log(result)
        //     return result
        // })
    }
}

export default new AuthService()