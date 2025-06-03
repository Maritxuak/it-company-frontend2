import http from "../http-common";

export default {
    //TODO Получение списка разработчиков.
    getProjectDevelop() {
        return http.get('/projects/developers');
    },

    //TODO Создание проекта.
    postProject(data) {
        return http.post('/projects', data);
    },

    //TODO Получение списка проектов пользователя.
    getProjects() {
        return http.get('/projects/me');
    },
    //TODO Получение списка проектов.
    getProject() {
        return http.get('/projects');
    },

    //TODO Получение списка проектов.
    getTask() {
        return http.get('/projects/me/tasks');
    },

    //TODO Создание таска по проекту.
    createTask(data) {
        return http.post('/projects/tasks', data);
    },
}