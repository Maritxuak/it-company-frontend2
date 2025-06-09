import http from "../http-common";

export default {
    createNotification(data) {
        return http.post(`/notifications`, data);
    },
    readNotification() {
        return http.post(`/notifications/mark-all-read`);
    },
    getNotification() {
        return http.get(`/notifications/me`);
    },
}
