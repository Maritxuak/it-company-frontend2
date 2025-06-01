import axios from "axios"

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_API_BASE,
    headers: {
        "Content-type": "application/json"
    }
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('authTokenWD');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {

        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {

        return response;
    },
    error => {

        if (error.response.status === 500) {

            localStorage.setItem('internalError', true);

            window.location.href='/my/error-fatal';

        }

        if (error.response && error.response.status === 401) {
            if (window.location.pathname !== '/my/auth/login') {
                logout();
            }
        }
        return Promise.reject(error);
    }
);
function logout() {
    localStorage.removeItem('authTokenWD');
    localStorage.removeItem('internalError')
    window.location.href='/my/auth/login';
}

export default instance;