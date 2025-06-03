import http from "../http-common";

export default {
    //TODO Получение профиля текущего пользователя.
    getProfile() {
        return http.get('/user-profile/me');
    },

    //TODO Получение всех пользователей.
    getProfileAll() {
        return http.get('/user-profile/all');
    },
}