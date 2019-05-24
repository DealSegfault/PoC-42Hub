import axios from 'axios';

class AxiosService {

    axiosInstance = {};

    constructor() {
        this.initInstance();
    }
    initInstance() {
        this.axiosInstance = axios.create({
            baseURL: '/api',
            timeout: 1000
        });
    this.axiosInstance.interceptors.request.use(
        (config) => {
            return config;
        });

        return this.axiosInstance;
    }

    getInstance(){
        return this.axiosInstance || this.initInstance;
    }
}

export default new AxiosService();