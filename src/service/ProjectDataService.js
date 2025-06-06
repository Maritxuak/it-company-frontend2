import http from "../http-common";

export default {
    getProjectDevelop() {
        return http.get('/projects/developers');
    },

    postProject(data) {
        return http.post('/projects', data);
    },

    getProjects() {
        return http.get('/projects/me');
    },

    getProject() {
        return http.get('/projects');
    },

    getTask() {
        return http.get('/projects/me/tasks');
    },

    createTask(data) {
        return http.post('/projects/tasks', data);
    },

    startTaskTimer(taskId, data) {
      return http.post(`/projects/tasks/${taskId}/start`, data);
    },

    pauseTaskTimer(taskId, data) {
      return http.post(`/projects/tasks/${taskId}/pause`, data);
    },

    resumeTaskTimer(taskId, data) {
      return http.post(`/projects/tasks/${taskId}/resume`, data);
    },

    createJobVacancy( data) {
      return http.post(`/job-vacancies`, data);
    },
    getJobVacancies() {
      return http.get(`/job-vacancies`);
    },
    getHr() {
      return http.get(`/user/hr-managers`);
    },

    closeTask(taskId, data) {
      return http.post(`/projects/tasks/${taskId}/close`, data);
    }
}