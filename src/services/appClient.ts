import axios from 'axios';
import { LOCALSTORAGE_ACCESS_TOKEN, PATH_AUTH, RESPONSE_STATUS_401 } from '../common/const';

const apiClient = axios.create({
    baseURL: import.meta.env.API_BASE_URL_BACKEND_SERVICE,
    timeout: import.meta.env.TIME_OUT_URL_BACKEND_SERVICE,
    headers: {
        "Content-Type": "application/json"
    }
});

// Interceptor request -> gan thong tin token neu co
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise. reject(error),
);

// Interceptor response -> Xu ly loi chung
apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.response?.status === RESPONSE_STATUS_401) {
            // Loi token het han
            localStorage.removeItem(LOCALSTORAGE_ACCESS_TOKEN);
            window.location.href = PATH_AUTH;
        }
        return Promise.reject(error);
    }
);

export default apiClient;