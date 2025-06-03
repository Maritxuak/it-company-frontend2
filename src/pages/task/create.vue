<template>
  <div class="page has-sidebar-left">
    <header class="blue accent-3 relative">
      <div class="container-fluid text-white">
        <div class="row p-t-b-10 ">
          <div class="col">
            <h4>
              <i class="icon-package"></i>
              Проекты
            </h4>
          </div>
        </div>
        <div class="row">
          <ul class="nav responsive-tab nav-material nav-material-white">
            <li @click="router().push('/profile')">
              <a class="nav-link" href=""><i class="icon icon-list"></i>Задачи</a>
            </li>
            <li>
              <a class="nav-link active" href=""><i
                  class="icon icon-plus-circle"></i> Добавить новую задачу</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="container-fluid animatedParent animateOnce my-3">
      <div class="animated fadeInUpShort">
        <!-- Блок для отображения ошибок -->
        <div v-if="errorMessage" class="alert alert-danger mb-4">
          {{ errorMessage }}
        </div>

        <form id="needs-validation" novalidate @submit.prevent="validateBeforeSubmit">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="validationCustom01">Название задачи</label>
                  <input type="text" class="form-control"
                         :class="{'is-invalid': errors.title && touched.title}"
                         placeholder="Название задачи"
                         v-model="task.title"
                         @blur="touched.title = true">
                  <div class="invalid-feedback" v-if="errors.title && touched.title">
                    {{ errors.title }}
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="dueDate">Срок выполнения</label>
                  <input type="date" class="form-control"
                         :class="{'is-invalid': errors.dueDate && touched.dueDate}"
                         v-model="task.dueDate"
                         @blur="touched.dueDate = true">
                  <div class="invalid-feedback" v-if="errors.dueDate && touched.dueDate">
                    {{ errors.dueDate }}
                  </div>
                </div>

                <div class="col-md-3 mb-3">
                  <label for="estimatedTime">Оценочное время</label>
                  <input type="time" class="form-control"
                         :class="{'is-invalid': errors.estimatedTime && touched.estimatedTime}"
                         v-model="task.estimatedTime"
                         @blur="touched.estimatedTime = true">
                  <div class="invalid-feedback" v-if="errors.estimatedTime && touched.estimatedTime">
                    {{ errors.estimatedTime }}
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="taskDescription">Описание задачи</label>
                <textarea class="form-control p-t-40 editor"
                          :class="{'is-invalid': errors.description && touched.description}"
                          placeholder="Описание задачи..." rows="17"
                          v-model="task.description"
                          @blur="touched.description = true"></textarea>
                <div class="invalid-feedback" v-if="errors.description && touched.description">
                  {{ errors.description }}
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card mt-4">
                <h6 class="card-header white">Разработчики</h6>
                <div class="card-body">
                  <div v-if="developers.length === 0" class="text-muted">
                    Нет доступных разработчиков
                  </div>
                  <div v-for="developer in developers" :key="developer.id"
                       class="custom-control custom-radio mb-3 d-flex align-items-center">
                    <input
                        type="radio"
                        class="custom-control-input"
                        :id="'developer-' + developer.id"
                        :value="developer.id"
                        v-model="task.developerId"
                        @change="touched.developerId = true"
                    >
                    <label class="custom-control-label ml-2" :for="'developer-' + developer.id">
                      {{ developer.firstName }} {{ developer.lastName }}
                    </label>
                  </div>
                  <div v-if="errors.developerId && touched.developerId" class="text-danger small mt-2">
                    {{ errors.developerId }}
                  </div>
                </div>
              </div>

              <div class="card mt-4">
                <h6 class="card-header white">Проекты</h6>
                <div class="card-body">
                  <div v-if="projects.length === 0" class="text-muted">
                    Нет доступных проектов
                  </div>
                  <div v-for="project in projects" :key="project.id"
                       class="custom-control custom-radio mb-3 d-flex align-items-center">
                    <input
                        type="radio"
                        class="custom-control-input"
                        :id="'project-' + project.id"
                        :value="project.id"
                        v-model="task.projectId"
                        @change="touched.projectId = true"
                    >
                    <label class="custom-control-label ml-2" :for="'project-' + project.id">
                      {{ project.name }}
                    </label>
                  </div>
                  <div v-if="errors.projectId && touched.projectId" class="text-danger small mt-2">
                    {{ errors.projectId }}
                  </div>
                </div>
                <div class="card-footer bg-transparent">
                  <button class="btn btn-primary" type="submit" :disabled="loading">
                    <span v-if="!loading">Создать задачу</span>
                    <span v-else>Создание...</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="showSuccess" class="success-notification">
        Задача успешно создана!
      </div>
    </transition>
  </div>
</template>

<script>
import projectDataService from "@/service/ProjectDataService.js";
import router from "@/router/index.js";

export default {
  name: "index",
  data() {
    return {
      developers: [],
      projects: [],
      task: {
        title: '',
        description: '',
        dueDate: '',
        developerId: null,
        projectId: null,
        estimatedTime: '08:00'
      },
      errors: {},
      showSuccess: false,
      touched: {
        title: false,
        description: false,
        dueDate: false,
        developerId: false,
        projectId: false,
        estimatedTime: false
      },
      errorMessage: '',
      loading: false
    }
  },
  mounted() {
    this.getDevelopers();
    this.getProjects();
  },
  methods: {
    router() {
      return router
    },
    getDevelopers() {
      this.loading = true;
      projectDataService.getProjectDevelop()
          .then((response) => {
            this.developers = response.data;
          })
          .catch(error => {
            console.error("Ошибка при получении списка разработчиков:", error);
            this.errorMessage = "Не удалось загрузить список разработчиков";
          })
          .finally(() => {
            this.loading = false;
          });
    },

    getProjects() {
      this.loading = true;
      projectDataService.getProject()
          .then((response) => {
            this.projects = response.data;
          })
          .catch(error => {
            console.error("Ошибка при получении списка проектов:", error);
            this.errorMessage = "Не удалось загрузить список проектов";
          })
          .finally(() => {
            this.loading = false;
          });
    },

    validateForm() {
      this.errors = {};
      let isValid = true;

      if (!this.task.title.trim()) {
        this.errors.title = 'Название задачи обязательно';
        isValid = false;
      }

      if (!this.task.description.trim()) {
        this.errors.description = 'Описание задачи обязательно';
        isValid = false;
      } else if (this.task.description.trim().length < 10) {
        this.errors.description = 'Описание должно содержать минимум 10 символов';
        isValid = false;
      }

      if (!this.task.dueDate) {
        this.errors.dueDate = 'Укажите срок выполнения';
        isValid = false;
      } else if (new Date(this.task.dueDate) < new Date()) {
        this.errors.dueDate = 'Дата выполнения не может быть в прошлом';
        isValid = false;
      }

      if (!this.task.developerId) {
        this.errors.developerId = 'Выберите разработчика';
        isValid = false;
      }

      if (!this.task.projectId) {
        this.errors.projectId = 'Выберите проект';
        isValid = false;
      }

      if (!this.task.estimatedTime) {
        this.errors.estimatedTime = 'Укажите оценочное время';
        isValid = false;
      }

      return isValid;
    },

    validateBeforeSubmit() {
      this.touched = {
        title: true,
        description: true,
        dueDate: true,
        developerId: true,
        projectId: true,
        estimatedTime: true
      };

      if (this.validateForm()) {
        this.createTask();
      }
    },

    createTask() {
      this.loading = true;
      this.errorMessage = '';

      const taskData = {
        title: this.task.title.trim(),
        description: this.task.description.trim(),
        dueDate: this.task.dueDate,
        developerId: this.task.developerId,
        projectId: this.task.projectId,
        estimatedTime: this.task.estimatedTime
      };

      projectDataService.createTask(taskData)
          .then(response => {
            console.log("Задача создана:", response);
            this.showSuccess = true;
            this.resetForm();

            setTimeout(() => {
              this.showSuccess = false;
              // Можно добавить перенаправление или обновление списка
            }, 3000);
          })
          .catch(error => {
            console.error("Ошибка при создании задачи:", error);
            this.errorMessage = this.getErrorMessage(error, 'Ошибка при создании задачи');
          })
          .finally(() => {
            this.loading = false;
          });
    },

    resetForm() {
      this.task = {
        title: '',
        description: '',
        dueDate: '',
        developerId: null,
        projectId: null,
        estimatedTime: '08:00'
      };
      this.errors = {};
      this.touched = {
        title: false,
        description: false,
        dueDate: false,
        developerId: false,
        projectId: false,
        estimatedTime: false
      };
    },

    getErrorMessage(error, defaultMessage) {
      if (error.response && error.response.data && error.response.data.message) {
        return error.response.data.message;
      }
      return defaultMessage;
    }
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.success-notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #4CAF50;
  color: white;
  padding: 15px 25px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 1000;
}

.custom-control {
  display: flex;
  align-items: center;
}

.custom-control-label {
  margin-left: 0.5rem;
}

.custom-control-label::before {
  top: .25rem !important;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
}
</style>