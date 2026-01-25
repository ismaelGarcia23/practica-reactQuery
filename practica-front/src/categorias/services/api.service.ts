import axios from "axios";


const  BASE_URL = import.meta.env.VITE_API_URL

const api = axios.create({
    baseURL: BASE_URL,
    headers:{
        'Content-Type': 'application/json',
    }
});


api.interceptors.request.use(
    (config) => {
        return config;

    },
    (error) => {
        return Promise.reject(error);
    }

);

api.interceptors.response.use(
    (response ) => {
        return response;
    },
    (error) => {
         return Promise.reject(error)
    }
);

export default api;