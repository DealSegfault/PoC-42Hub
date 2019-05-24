import axiosService from "./axios-service";
const axiosInstance = axiosService.getInstance();


class UserService {
    fetchUser = async () => await axiosService.post('/user') 
}

export default new UserService()

