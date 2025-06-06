<template>
  <div class="page has-sidebar-left">
    <header class="blue accent-3 relative">
      <div class="container-fluid text-white">
        <div class="row p-t-b-10">
          <div class="col">
            <h4>
              <i class="icon-briefcase"></i>
              Вакансии
            </h4>
          </div>
        </div>
        <div class="row">
          <ul class="nav responsive-tab nav-material nav-material-white">
            <li>
              <a class="nav-link active" href=""><i class="icon icon-list"></i>Список вакансий</a>
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

        <div class="row">
          <!-- Карточки вакансий -->
          <div class="col-md-4 mb-4" v-for="vacancy in vacancies" :key="vacancy.id">
            <div class="card shadow-sm h-100">
              <div class="card-body">
                <h5 class="card-title">{{ vacancy.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ vacancy.role }}</h6>
                <p class="card-text">
                  <small class="text-muted">
                    Зарплата: {{ vacancy.salaryRangeFrom }} - {{ vacancy.salaryRangeTo }} ₽
                  </small>
                </p>
                <p class="card-text">{{ truncateDescription(vacancy.description) }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="badge bg-primary">{{ vacancy.employmentType }}</span>
                  <span class="badge bg-secondary">{{ vacancy.experienceLevel }}</span>
                </div>
              </div>
              <div class="card-footer bg-white">
                <small class="text-muted">
                  Требуется сотрудников: {{ vacancy.requiredEmployees }}
                </small>
              </div>
            </div>
          </div>
        </div>

        <!-- Пустое состояние -->
        <div v-if="vacancies.length === 0 && !loading" class="text-center py-5">
          <i class="icon-briefcase icon-3x text-muted"></i>
          <p class="mt-3">Нет доступных вакансий</p>
        </div>

        <!-- Индикатор загрузки -->
        <div v-if="loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Загрузка...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectDataService from "@/service/ProjectDataService.js";

export default {
  name: "JobVacanciesList",
  data() {
    return {
      vacancies: [],
      loading: false,
      errorMessage: ''
    }
  },
  mounted() {
    this.getVacancies();
  },
  methods: {
    getVacancies() {
      this.loading = true;
      this.errorMessage = '';
      
      projectDataService.getJobVacancies()
        .then(response => {
          this.vacancies = response.data;
        })
        .catch(error => {
          console.error("Ошибка при загрузке вакансий:", error);
          this.errorMessage = "Не удалось загрузить список вакансий";
        })
        .finally(() => {
          this.loading = false;
        });
    },
    truncateDescription(description) {
      if (!description) return '';
      const maxLength = 100;
      return description.length > maxLength 
        ? description.substring(0, maxLength) + '...' 
        : description;
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('ru-RU', options);
    }
  }
}
</script>

<style scoped>
.card {
  transition: transform 0.2s;
  border: none;
  border-radius: 10px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.card-title {
  font-weight: 600;
  color: #2c3e50;
}

.card-text {
  color: #555;
}

.badge {
  font-size: 0.8rem;
  font-weight: 500;
  padding: 5px 10px;
}

.bg-primary {
  background-color: #3f80ea !important;
}

.bg-secondary {
  background-color: #6c757d !important;
}
</style>