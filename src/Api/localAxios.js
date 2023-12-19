import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://ondc-seller-dev.rpsite.top/`,
});

export default axiosInstance;
