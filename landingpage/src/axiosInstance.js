import axios from "axios";
// Créez une instance Axios avec une configuration de base
const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export default axiosInstance;
