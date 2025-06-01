import http from "../http-common";

export default {
    //TODO Авторизация
    postLogin(form) {
        return http.post('/auth/login', form);
    },
    //TODO Регистрация
    postRegister(form) {
        return http.post('/auth/register', form);
    },
}