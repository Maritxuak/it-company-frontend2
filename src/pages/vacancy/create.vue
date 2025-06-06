<template>
  <div class="page has-sidebar-left">
    <header class="blue accent-3 relative">
      <div class="container-fluid text-white">
        <div class="row p-t-b-10 ">
          <div class="col">
            <h4>
              <i class="icon-briefcase"></i>
              Вакансии
            </h4>
          </div>
        </div>
        <div class="row">
          <ul class="nav responsive-tab nav-material nav-material-white">
            <li @click="router().push('/job-vacancies')">
              <a class="nav-link" href=""><i class="icon icon-list"></i>Список вакансий</a>
            </li>
            <li>
              <a class="nav-link active" href=""><i
                  class="icon icon-plus-circle"></i> Добавить вакансию</a>
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
    <label for="title">Название вакансии</label>
    <input type="text" class="form-control"
           :class="{'is-invalid': errors.title && touched.title}"
           placeholder="Например, Frontend Developer"
           v-model="vacancy.title"
           @blur="touched.title = true">
    <div class="invalid-feedback" v-if="errors.title && touched.title">
      {{ errors.title }}
    </div>
  </div>
              </div>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="role">Роль (должность)</label>
      <input type="text" class="form-control"
             :class="{'is-invalid': errors.role && touched.role}"
             placeholder="Например, Frontend Developer"
             v-model="vacancy.role"
             @blur="touched.role = true"
             required>
      <div class="invalid-feedback" v-if="errors.role && touched.role">
        {{ errors.role }}
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="salaryRangeFrom">Минимальная зарплата</label>
      <input type="number" class="form-control"
             :class="{'is-invalid': errors.salaryRangeFrom && touched.salaryRangeFrom}"
             v-model="vacancy.salaryRangeFrom"
             @blur="touched.salaryRangeFrom = true"
             required>
      <div class="invalid-feedback" v-if="errors.salaryRangeFrom && touched.salaryRangeFrom">
        {{ errors.salaryRangeFrom }}
      </div>
    </div>

    <div class="col-md-6 mb-3">
      <label for="salaryRangeTo">Максимальная зарплата</label>
      <input type="number" class="form-control"
             :class="{'is-invalid': errors.salaryRangeTo && touched.salaryRangeTo}"
             v-model="vacancy.salaryRangeTo"
             @blur="touched.salaryRangeTo = true"
             required>
      <div class="invalid-feedback" v-if="errors.salaryRangeTo && touched.salaryRangeTo">
        {{ errors.salaryRangeTo }}
      </div>
    </div>
  </div>

              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="requiredEmployees">Требуемое количество сотрудников</label>
                  <input type="number" class="form-control"
                         :class="{'is-invalid': errors.requiredEmployees && touched.requiredEmployees}"
                         v-model="vacancy.requiredEmployees"
                         @blur="touched.requiredEmployees = true">
                  <div class="invalid-feedback" v-if="errors.requiredEmployees && touched.requiredEmployees">
                    {{ errors.requiredEmployees }}
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="jobDescription">Описание вакансии</label>
                <textarea class="form-control p-t-40 editor"
                          :class="{'is-invalid': errors.description && touched.description}"
                          placeholder="Опишите требования и обязанности..." rows="17"
                          v-model="vacancy.description"
                          @blur="touched.description = true"></textarea>
                <div class="invalid-feedback" v-if="errors.description && touched.description">
                  {{ errors.description }}
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div class="card mt-4">
                <h6 class="card-header white">HR менеджер</h6>
                <div class="card-body">
                  <div v-if="hrManagers.length === 0" class="text-muted">
                    Нет доступных HR менеджеров
                  </div>
                  <div v-for="hr in hrManagers" :key="hr.id"
                       class="custom-control custom-radio mb-3 d-flex align-items-center">
                    <input
                        type="radio"
                        class="custom-control-input"
                        :id="'hr-' + hr.id"
                        :value="hr.id"
                        v-model="vacancy.hrId"
                        @change="touched.hrId = true"
                    >
                    <label class="custom-control-label ml-2" :for="'hr-' + hr.id">
                      {{ hr.profile.firstName }} {{ hr.profile.lastName }}
                    </label>
                  </div>
                  <div v-if="errors.hrId && touched.hrId" class="text-danger small mt-2">
                    {{ errors.hrId }}
                  </div>
                </div>
              </div>

              <div class="card mt-4">
                <h6 class="card-header white">Дополнительная информация</h6>
                <div class="card-body">
                  <div class="mb-3">
                    <label class="form-label">Тип занятости</label>
                    <select class="form-select"
                            :class="{'is-invalid': errors.employmentType && touched.employmentType}"
                            v-model="vacancy.employmentType"
                            @blur="touched.employmentType = true">
                      <option value="" disabled selected>Выберите тип</option>
                      <option value="FULL_TIME">Полная занятость</option>
                      <option value="PART_TIME">Частичная занятость</option>
                      <option value="REMOTE">Удалённая работа</option>
                      <option value="CONTRACT">Контракт</option>
                    </select>
                    <div class="invalid-feedback" v-if="errors.employmentType && touched.employmentType">
                      {{ errors.employmentType }}
                    </div>
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Опыт работы</label>
                    <select class="form-select"
                            :class="{'is-invalid': errors.experienceLevel && touched.experienceLevel}"
                            v-model="vacancy.experienceLevel"
                            @blur="touched.experienceLevel = true">
                      <option value="" disabled selected>Выберите уровень</option>
                      <option value="INTERN">Стажёр</option>
                      <option value="JUNIOR">Junior</option>
                      <option value="MIDDLE">Middle</option>
                      <option value="SENIOR">Senior</option>
                      <option value="LEAD">Lead</option>
                    </select>
                    <div class="invalid-feedback" v-if="errors.experienceLevel && touched.experienceLevel">
                      {{ errors.experienceLevel }}
                    </div>
                  </div>
                </div>
                <div class="card-footer bg-transparent">
                  <button class="btn btn-primary" type="submit" :disabled="loading">
                    <span v-if="!loading">Опубликовать вакансию</span>
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
        Вакансия успешно создана!
      </div>
    </transition>
  </div>
</template>

<script>
import projectDataService from "@/service/ProjectDataService.js";
import router from "@/router/index.js";

export default {
  name: "CreateVacancy",
  data() {
    return {
      hrManagers: [],
      vacancy: {
        salaryRangeFrom: null,
        salaryRangeTo: null,
        requiredEmployees: 1,
        role: '',
        title: '',
        description: '',
        employmentType: '',
        experienceLevel: '',
        hrId: null
      },
      errors: {},
      showSuccess: false,
      touched: {
        salaryMin: false,
        salaryMax: false,
        requiredEmployees: false,
        title: false,
        description: false,
        employmentType: false,
        experienceLevel: false,
        hrId: false
      },
      errorMessage: '',
      loading: false
    }
  },
  mounted() {
    this.getHrManagers();
  },
  methods: {
    router() {
      return router
    },
    
    getHrManagers() {
      this.loading = true;
      projectDataService.getHr()
        .then((response) => {
          this.hrManagers = response.data;
          if (this.hrManagers.length > 0) {
            this.vacancy.hrId = this.hrManagers[0].id; 
          }
        })
        .catch(error => {
          console.error("Ошибка при получении списка HR менеджеров:", error);
          this.errorMessage = "Не удалось загрузить список HR менеджеров";
        })
        .finally(() => {
          this.loading = false;
        });
    },

    validateForm() {
      this.errors = {};
      let isValid = true;

      if (!this.vacancy.salaryRangeFrom) { 
        this.errors.salaryRangeFrom = 'Укажите минимальную зарплату';
        isValid = false;
      }

      if (!this.vacancy.salaryRangeTo) { 
        this.errors.salaryRangeTo = 'Укажите максимальную зарплату';
        isValid = false;
      } else if (parseInt(this.vacancy.salaryRangeTo) < parseInt(this.vacancy.salaryRangeFrom)) {
        this.errors.salaryRangeTo = 'Макс. зарплата не может быть меньше мин. зарплаты';
        isValid = false;
      }

      if (!this.vacancy.requiredEmployees) {
        this.errors.requiredEmployees = 'Укажите количество сотрудников';
        isValid = false;
      } else if (this.vacancy.requiredEmployees < 1) {
        this.errors.requiredEmployees = 'Должен быть хотя бы 1 сотрудник';
        isValid = false;
      }

      if (!this.vacancy.description.trim()) {
        this.errors.description = 'Описание вакансии обязательно';
        isValid = false;
      } else if (this.vacancy.description.trim().length < 20) {
        this.errors.description = 'Описание должно содержать минимум 20 символов';
        isValid = false;
      }

      if (!this.vacancy.employmentType) {
        this.errors.employmentType = 'Выберите тип занятости';
        isValid = false;
      }

      if (!this.vacancy.experienceLevel) {
        this.errors.experienceLevel = 'Выберите уровень опыта';
        isValid = false;
      }

      if (!this.vacancy.hrId) {
        this.errors.hrId = 'Выберите HR менеджера';
        isValid = false;
      }

      return isValid;
    },

    validateBeforeSubmit() {
      this.touched = {
        salaryRangeFrom: null,
        salaryRangeTo: null,
        requiredEmployees: true,
        employeeType: true,
        description: true,
        employmentType: true,
        experienceLevel: true,
        hrId: true
      };

      if (this.validateForm()) {
        this.createVacancy();
      }
    },

    createVacancy() {
      this.loading = true;
      this.errorMessage = '';

      const vacancyData = {
        salaryRangeFrom: parseInt(this.vacancy.salaryRangeFrom),
        salaryRangeTo: parseInt(this.vacancy.salaryRangeTo),
        requiredEmployees: parseInt(this.vacancy.requiredEmployees),
        title: this.vacancy.title.trim(), 
        description: this.vacancy.description.trim(),
        hrId: this.vacancy.hrId,
        role: this.vacancy.role,
        employmentType: this.vacancy.employmentType,
        experienceLevel: this.vacancy.experienceLevel
      };

      projectDataService.createJobVacancy(vacancyData)
          .then(response => {
            console.log("Вакансия создана:", response);
            this.showSuccess = true;
            this.resetForm();

            setTimeout(() => {
              this.showSuccess = false;
            }, 2000);
          })
          .catch(error => {
            console.error("Ошибка при создании вакансии:", error);
            this.errorMessage = this.getErrorMessage(error, 'Ошибка при создании вакансии');
          })
          .finally(() => {
            this.loading = false;
          });
    },

    resetForm() {
      this.vacancy = {
        salaryRangeFrom: parseInt(this.vacancy.salaryRangeFrom), 
        salaryRangeTo: parseInt(this.vacancy.salaryRangeTo),
        requiredEmployees: 1,
        title: '',
        description: '',
        employmentType: '',
        experienceLevel: '',
        hrId: this.hrManagers.length > 0 ? this.hrManagers[0].id : null
      };
      this.errors = {};
      this.touched = {
        salaryRangeFrom: null, 
        salaryRangeTo: null,
        requiredEmployees: false,
        employeeType: false,
        description: false,
        employmentType: false,
        experienceLevel: false,
        hrId: false
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

.form-select.is-invalid {
  border-color: #dc3545;
}
</style>