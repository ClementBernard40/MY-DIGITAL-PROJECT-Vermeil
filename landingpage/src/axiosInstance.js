import axios from "axios";
// Créez une instance Axios avec une configuration de base
const axiosInstance = axios.create({
  baseURL: "https://chouchef-back-db3a6506fb5c.herokuapp.com",
});

export default axiosInstance;
