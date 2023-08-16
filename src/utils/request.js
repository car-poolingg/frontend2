import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://car-pooling-7cm0.onrender.com/api/v1",
})

export default axiosInstance
