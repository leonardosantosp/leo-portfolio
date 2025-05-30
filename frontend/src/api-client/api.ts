import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://leo-portfolio-sl05.onrender.com'
})

API.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
