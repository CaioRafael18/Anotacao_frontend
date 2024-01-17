import axios from "axios";

const api = axios.create({
    baseURL: 'https://anotacao-backend.vercel.app'
})

export default api