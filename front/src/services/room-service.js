import axiosService from './axios-service';
import axios from 'axios'
const axiosInstance = axiosService.getInstance();


class roomService {
    fetchRoomStatus = () => {
        return axiosInstance.get('/room').then(result => {
            return result.data.result
        })
    };
}

export default new roomService()