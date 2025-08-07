import axios from 'axios'

const api = axios.create({
  baseURL: 'https://diet-app-9l79.onrender.com',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api