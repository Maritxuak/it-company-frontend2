import http from "../http-common";

export default {
    //TODO Получение профиля текущего пользователя.
    getProfile() {
        return http.get('/user-profile/me');
    },
}