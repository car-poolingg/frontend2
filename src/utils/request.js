import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://tag-c5ba886bbc3c.herokuapp.com/api/v1",
})

export function logAxiosResponse(errorFromTrial) {
    if (!errorFromTrial instanceof Error) {
        alert(JSON.stringify(errorFromTrial))
        return { axiosError: false }
    }
    if (errorFromTrial.response) {
        const errResponse = errorFromTrial.response
        console.log(errResponse)
        alert(errResponse.data.message)
        return {
            axiosError: true,
            ...errResponse
        }
    }
    alert(errorFromTrial.message)
    return { axiosError: false }
}

export default axiosInstance
