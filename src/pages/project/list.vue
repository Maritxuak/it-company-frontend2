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
        <div class="row" v-if="this.actualUser">
          <ul class="nav responsive-tab nav-material nav-material-white">
            <li>
              <a class="nav-link active" href=""><i class="icon icon-list"></i>Проекты</a>
            </li>
            <li v-if="this.actualUser.role === 'admin' ">
              <a class="nav-link " href=""><i
                  class="icon icon-plus-circle"></i>Новый проект</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="">
      <div class="container-fluid relative animatedParent animateOnce p-0">
        <div class="row no-gutters">
          <div class="col-md-9">
            <div class="pl-3 pr-3 my-3">
              <div class="row">
                <!-- Карточка проекта -->
                <div class="col-md-3" v-for="project in projects" :key="project.id">
                  <div class="card shadow my-3 no-b">
                    <img class="card-img-top" src="../../assets/img/demo/portfolio/p4.jpg" alt="">
                    <div class="card-img-overlay">
                      <div class="avatar-group mt-3">
                        <figure class="avatar" v-for="(member, index) in project.teamMembers" :key="index">
                          <img :src="member.avatar || '../../assets/img/dummy/u4.png'" alt="">
                        </figure>
                      </div>
                    </div>
<div class="card-body" @click="openProjectModal(project)" style="z-index: 1">
      <h6 class="mb-1">{{ project.name }}</h6>
      <span>{{ truncateDescription(project.description) }}</span><br/>
      <a href="#" @click.stop="openProjectModal(project)">Подробнее</a>
    </div>
                    <div class="p-2 b-t">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="progress-circle" :data-percent="getProgressPercent(project)">
                            <svg class="progress-circle-svg" viewBox="0 0 36 36">
                              <path class="progress-circle-bg"
                                    d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path class="progress-circle-fill"
                                    :stroke-dasharray="getProgressPercent(project) + ', 100'"
                                    d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <text class="progress-circle-text" x="18" y="20.35">{{ getProgressPercent(project) }}%</text>
                            </svg>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="mt-2 ml-2">
                            <strong>Дедлайн:</strong><br>
                            {{ formatDeadline(project.endDate) }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">{{ selectedProject.name }}</h5>
                  <button type="button" class="close-btn" @click="closeModal">&times;</button>
                </div>
                  <div class="modal-body">
                    <p><strong>Дата начала:</strong> {{ formatDate(selectedProject.startDate) }}</p>
                    <p><strong>Дата окончания:</strong> {{ formatDate(selectedProject.endDate) }}</p>
                    <p><strong>Описание:</strong></p>
                    <p>{{ selectedProject.description }}</p>
                  </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" @click="closeModal">Закрыть</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">

          </div>
        </div>
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
import profileDataService from "@/service/ProfileDataService.js";

export default {
  name: "index",
  data() {
    return {
      developers: [],
      actualUser: null,
      project: {
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        teamMembers: []
      },
      errors: {},
      showSuccess: false,
      touched: {
        name: false,
        description: false,
        startDate: false,
        endDate: false,
        teamMembers: false
      },
      showModal: false,
      errorMessage: '',
      loading: false,
      projects: [],
      selectedProject: {
        name: '',
        description: '',
        startDate: '',
        endDate: ''
      }
    }
  },
  mounted() {
    this.getDevelopment();
    this.getProfile();
  },
  methods: {
    getProfile(){
      console.log('BaseURL:', import.meta.env.VITE_APP_BACKEND_API_BASE);
      profileDataService.getProfile()
          .then(response => {
            this.actualUser = response.data
            console.log("a", this.actualUser)
          })
          .catch(e => {
            localStorage.removeItem('authTokenWD');
          })
    },
    truncateDescription(description) {
      if (!description) return '';
      return description.length > 20
          ? description.substring(0, 20) + '...'
          : description;
    },
    openProjectModal(project) {
      console.log(123)
      this.selectedProject = project;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('ru-RU', options);
    },
    formatDeadline(dateString) {
      if (!dateString) return '';

      const deadline = new Date(dateString);
      const now = new Date();
      const diffTime = deadline - now;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays < 0) {
        return `${Math.abs(diffDays)} дней назад`;
      } else if (diffDays === 0) {
        return 'Сегодня';
      } else {
        return `Через ${diffDays} дней`;
      }
    },
    getProgressPercent(project) {
      if (!project.startDate || !project.endDate) return 0;

      const start = new Date(project.startDate);
      const end = new Date(project.endDate);
      const now = new Date();

      if (now >= end) return 100;
      if (now <= start) return 0;

      const total = end - start;
      const passed = now - start;
      return Math.min(100, Math.round((passed / total) * 100));
    },
    getDevelopment() {
      this.loading = true;
      projectDataService.getProjects()
          .then((response) => {
            console.log(1, response.data)
            this.projects = response.data;
          })
    },
  }
}
</script>

<style scoped>
/* Стили для кругового прогресса */
.progress-circle {
  position: relative;
  width: 60px;
  height: 60px;
}

.progress-circle-svg {
  width: 100%;
  height: 100%;
}

.progress-circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
}

.progress-circle-fill {
  fill: none;
  stroke-width: 3.8;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dasharray 0.6s ease 0s;
}

.progress-circle-text {
  font-size: 10px;
  text-anchor: middle;
  fill: #666;
  font-weight: bold;
}

.progress-circle-fill[stroke-dasharray^="100"] {
  stroke: #7dc855;
}
.progress-circle-fill[stroke-dasharray^="7"] {
  stroke: #ed5564;
}
.progress-circle-fill[stroke-dasharray^="3"] {
  stroke: #ed5564;
}
.progress-circle-fill[stroke-dasharray^="5"] {
  stroke: #f8ac59;
}
.progress-circle-fill[stroke-dasharray^="6"] {
  stroke: #f8ac59;
}
.progress-circle-fill[stroke-dasharray^="8"] {
  stroke: #7dc855;
}
.progress-circle-fill[stroke-dasharray^="9"] {
  stroke: #7dc855;
}
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
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 90%;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
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
