import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://tag-c5ba886bbc3c.herokuapp.com/api/v1",
})

export function logAxiosResponse(errorFromTrial) {
    if (!errorFromTrial instanceof Error)
        return alert(JSON.stringify(errorFromTrial))
    if (errorFromTrial.response) {
        const errResponse = errorFromTrial.response
        console.log(errResponse)
        return alert(errResponse.data.message)
    }
    alert(errorFromTrial.message)
}

export default axiosInstance
