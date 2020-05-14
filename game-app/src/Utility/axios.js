import axios from "axios"

const instance = axios.create({
    baseURL: "https://burger-app-3fd69.firebaseio.com/"
})
export default instance;