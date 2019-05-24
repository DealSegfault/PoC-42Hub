import axiosService from "./axios-service";
const axiosInstance = axiosService.getInstance();

class MarketDataService {
  fetchPosition = () =>
    axiosInstance.post("/position", {}).then(res => res.data.result);

  fetchOrders = () =>
    axiosInstance.post("/orders", {}).then(res => res.data.result);
  
  fetchBalance = () => 
    axiosInstance.post('/balance', {}).then(res => res.data.result)
  
}

export default new MarketDataService();
 