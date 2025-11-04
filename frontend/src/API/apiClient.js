import axios from 'axios'

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
    },
})

export default apiClient