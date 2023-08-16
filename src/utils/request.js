import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://tag-c5ba886bbc3c.herokuapp.com/api/v1",
})

export default axiosInstance
