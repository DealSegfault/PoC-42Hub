import axiosService from './axios-service';
import axios from 'axios'
const axiosInstance = axiosService.getInstance();


class ProfileService {
    fetchAlert = () => {
        axiosInstance.get('/alert').then(result => {
            return result
        })
    };
    fetchDiffuse = () => {
        axiosInstance.get('/abort').then(result => {
            return result
        })
    }
}

export default new ProfileService()