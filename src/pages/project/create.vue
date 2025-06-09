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
              <a class="nav-link" href=""><i class="icon icon-list"></i>Проекты</a>
            </li>
            <li>
              <a class="nav-link active" href=""><i
                  class="icon icon-plus-circle"></i> Добавить новый проект</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="container-fluid animatedParent animateOnce my-3">
      <div class="animated fadeInUpShort">
        <div v-if="errorMessage" class="alert alert-danger mb-4">
          {{ errorMessage }}
        </div>

        <form id="needs-validation" novalidate @submit.prevent="validateBeforeSubmit">
          <div class="row">
            <div class="col-md-8">
              <div class="row">
<div class="col-md-6 mb-3">
      <label for="validationCustom01">Название проекта</label>
      <input type="text" class="form-control"
             :class="{'is-invalid': errors.name && touched.name}"
             placeholder="Название проекта"
             v-model="project.name"
             @blur="touched.name = true">
      <div class="invalid-feedback" v-if="errors.name && touched.name">
        {{ errors.name }}
      </div>
    </div>

    <div class="col-md-6 mb-3">
      <label for="projectCategory">Категория проекта</label>
      <select class="form-control"
              :class="{'is-invalid': errors.category && touched.category}"
              id="projectCategory"
              v-model="project.category"
              @blur="touched.category = true">
        <option value="" disabled selected>Выберите категорию</option>
        <option value="1">Веб проект</option>
        <option value="2">ТГ бот</option>
        <option value="3">Мобильное приложение</option>
      </select>
      <div class="invalid-feedback" v-if="errors.category && touched.category">
        {{ errors.category }}
      </div>
    </div>
              </div>

              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="DataStart">Начало разработки</label>
                  <input type="date" class="form-control"
                         :class="{'is-invalid': errors.startDate && touched.startDate}"
                         v-model="project.startDate"
                         @blur="touched.startDate = true">
                  <div class="invalid-feedback" v-if="errors.startDate && touched.startDate">
                    {{ errors.startDate }}
                  </div>
                </div>

                <div class="col-md-3 mb-3">
                  <label for="DataEnd">Конец разработки</label>
                  <input type="date" class="form-control"
                         :class="{'is-invalid': errors.endDate && touched.endDate}"
                         v-model="project.endDate"
                         @blur="touched.endDate = true">
                  <div class="invalid-feedback" v-if="errors.endDate && touched.endDate">
                    {{ errors.endDate }}
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="productDetails">Описание проекта</label>
                <textarea class="form-control p-t-40 editor"
                          :class="{'is-invalid': errors.description && touched.description}"
                          placeholder="Описание проекта..." rows="17"
                          v-model="project.description"
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
                       class="custom-control custom-checkbox mb-3 d-flex align-items-center">
                    <input
                        type="checkbox"
                        class="custom-control-input"
                        :id="'developer-' + developer.id"
                        :value="developer.id"
                        v-model="project.teamMembers"
                        @change="touched.teamMembers = true"
                    >
                    <label class="custom-control-label ml-2" :for="'developer-' + developer.id">
                      {{ developer.firstName }} {{ developer.lastName }}
                    </label>
                  </div>
                  <div v-if="errors.teamMembers && touched.teamMembers" class="text-danger small mt-2">
                    {{ errors.teamMembers }}
                  </div>
                </div>
                <div class="card-footer bg-transparent">
                  <button class="btn btn-primary" type="submit" :disabled="loading">
                    <span v-if="!loading">Отправить</span>
                    <span v-else>Отправка...</span>
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
        Проект успешно создан!
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
      project: {
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        teamMembers: [],
        category: ''
      },
      errors: {},
      showSuccess: false,
      touched: {
        name: false,
        description: false,
        startDate: false,
        endDate: false,
        teamMembers: false,
        category: false
      },
      errorMessage: '',
      loading: false
    }
  },
  mounted() {
    this.getDevelopment()
  },
  methods: {
    router() {
      return router
    },
    getDevelopment() {
      this.loading = true;
      projectDataService.getProjectDevelop()
          .then((response) => {
            this.developers = response.data;
          })
          .catch(error => {
            this.errorMessage = this.getErrorMessage(error, 'Не удалось загрузить список разработчиков');
            console.error("Ошибка при получении списка разработчиков:", error);
          })
          .finally(() => {
            this.loading = false;
          });
    },

    validateForm() {
      this.errors = {};
      let isValid = true;

      if (!this.project.name.trim()) {
        this.errors.name = 'Название проекта обязательно';
        isValid = false;
      }

      if (!this.project.description.trim()) {
        this.errors.description = 'Описание проекта обязательно';
        isValid = false;
      } else if (this.project.description.trim().length < 10) {
        this.errors.description = 'Описание должно содержать минимум 10 символов';
        isValid = false;
      }

      if (!this.project.startDate) {
        this.errors.startDate = 'Укажите дату начала';
        isValid = false;
      } else if (new Date(this.project.startDate) < new Date()) {
        this.errors.startDate = 'Дата начала не может быть в прошлом';
        isValid = false;
      }

      if (!this.project.endDate) {
        this.errors.endDate = 'Укажите дату окончания';
        isValid = false;
      } else if (new Date(this.project.endDate) < new Date()) {
        this.errors.endDate = 'Дата окончания не может быть в прошлом';
        isValid = false;
      } else if (this.project.startDate && new Date(this.project.endDate) <= new Date(this.project.startDate)) {
        this.errors.endDate = 'Дата окончания не может быть раньше или в день начала';
        isValid = false;
      }

      if (this.project.teamMembers.length === 0) {
        this.errors.teamMembers = 'Выберите хотя бы одного разработчика';
        isValid = false;
      }

      if (!this.project.category) {
        this.errors.category = 'Выберите категорию проекта';
        isValid = false;
      }

      return isValid;
    },
    validateBeforeSubmit() {
      this.touched = {
        name: true,
        description: true,
        startDate: true,
        endDate: true,
        teamMembers: true,
        category: true
      };

      if (this.validateForm()) {
        this.submitProject();
      }
    },

    submitProject() {
      this.loading = true;
      this.errorMessage = '';

      const projectData = {
        name: this.project.name.trim(),
        description: this.project.description.trim(),
        startDate: this.project.startDate,
        endDate: this.project.endDate,
        teamMembers: this.project.teamMembers,
        category: parseInt(this.project.category)
      };

      projectDataService.postProject(projectData)
          .then(response => {
            console.log("Проект создан:", response);
            this.showSuccess = true;

            setTimeout(() => {
              this.showSuccess = false;
              window.location.reload();
            }, 3000);
          })
          .catch(error => {
            console.error("Ошибка при создании проекта:", error);
            this.errorMessage = this.getErrorMessage(error, 'Ошибка при создании проекта');
          })
          .finally(() => {
            this.loading = false;
          });
    },

    resetForm() {
      this.project = {
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        teamMembers: []
      };
      this.errors = {};
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
  top: 60px;
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

.Alert-danger {
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
