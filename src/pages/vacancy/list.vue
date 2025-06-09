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
        <div v-if="errorMessage" class="alert alert-danger mb-4">
          {{ errorMessage }}
        </div>

        <div class="row">
          <div class="col-md-4 mb-4" v-for="vacancy in vacancies" :key="vacancy.id">
            <div class="card shadow-sm h-100" :class="{ 'bg-light': vacancy.isClosed }">
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
                <p v-if="vacancy.isClosed" class="text-danger mt-2">
                  <strong>Вакансия закрыта</strong>
                </p>
              </div>
              <div class="card-footer bg-white">
                <small class="text-muted">
                  Требуется сотрудников: {{ vacancy.requiredEmployees }}
                </small>
              </div>
              <div class="card-footer bg-white">
                <button class="btn btn-primary" @click="showVacancyDetails(vacancy)" :disabled="vacancy.isClosed">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="vacancies.length === 0 && !loading" class="text-center py-5">
          <i class="icon-briefcase icon-3x text-muted"></i>
          <p class="mt-3">Нет доступных вакансий</p>
        </div>

        <div v-if="loading" class="text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Загрузка...</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="modal-backdrop fade show"></div>
    <div v-if="showModal" class="modal fade show" tabindex="-1" role="dialog" aria-hidden="false">
      <div class="modal-dialog modal-lg" role="document" style="margin: 0 auto; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Детали вакансии</h5>
            <button type="button" class="close" @click="closeVacancyDetailsModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div v-if="selectedVacancy">
              <p><strong>Название:</strong> {{ selectedVacancy.title }}</p>
              <p><strong>Описание:</strong> {{ selectedVacancy.description }}</p>
              <p><strong>Требуются сотрудников:</strong> {{ selectedVacancy.requiredEmployees }}</p>
              <p><strong>Зарплата:</strong> {{ selectedVacancy.salaryRangeFrom }} - {{ selectedVacancy.salaryRangeTo }} ₽</p>
              <p><strong>Требуются:</strong> {{ selectedVacancy.role }}</p>

              <h3>Кандидаты</h3>
              <ul v-if="selectedVacancy.candidates && selectedVacancy.candidates.length > 0">
                <li v-for="candidate in selectedVacancy.candidates" :key="candidate.id" class="mb-3 candidate-item">
                  <strong>{{ candidate.name }}</strong> - {{ translatedStatus(candidate.status) }} - {{ candidate.phone }}
                  <button class="btn btn-sm btn-primary ml-2" @click="showEditCandidateModal(candidate)">
                    Редактировать
                  </button>
                </li>
              </ul>
              <p v-else>Нет кандидатов</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeVacancyDetailsModal">Закрыть</button>
            <button type="button" class="btn btn-primary" @click="showAddCandidateModal1" :disabled="selectedVacancy.isClosed">
              Добавить кандидата
            </button>
            <p v-if="selectedVacancy.isClosed" class="text-danger mt-2">
              <strong>Вакансия закрыта</strong>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно для добавления кандидата -->
    <div v-if="showAddCandidateModal" class="modal-backdrop fade show"></div>
    <div v-if="showAddCandidateModal" class="modal fade show" tabindex="3" role="dialog" aria-hidden="false">
      <div class="modal-dialog modal-lg" role="document" style="margin: 0 auto; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Добавить кандидата</h5>
            <button type="button" class="close" @click="closeAddCandidateModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addCandidate">
              <div class="form-group">
                <label for="candidateName">Имя кандидата</label>
                <input type="text" class="form-control" id="candidateName" v-model="candidateName" required>
              </div>
              <div class="form-group">
                <label for="candidateEmail">Email кандидата</label>
                <input type="email" class="form-control" id="candidateEmail" v-model="candidateEmail" required>
              </div>
              <div class="form-group">
                <label for="candidatePhone">Телефон кандидата</label>
                <input type="text" class="form-control" id="candidatePhone" v-model="candidatePhone" required>
              </div>
              <div class="form-group">
                <label for="candidateStatus">Статус кандидата</label>
                <select class="form-control" id="candidateStatus" v-model="candidateStatus" required>
                  <option v-for="(translation, status) in statusTranslations" :key="status" :value="status">
                    {{ translation }}
                  </option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">Добавить кандидата</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Candidate Modal -->
    <CandidateModal
      v-if="showEditCandidateModal1"
      :showModal="showEditCandidateModal"
      :candidate="editCandidate"
      @close="closeEditCandidateModal"
      @update="updateCandidate"
    />
  </div>
</template>

<script>
import projectDataService from "@/service/ProjectDataService.js";
import CandidateModal from "@/components/CandidateModal.vue";

export default {
  name: "JobVacanciesList",
  components: {
    CandidateModal
  },
  data() {
    return {
      vacancies: [],
      loading: false,
      errorMessage: '',
      showModal: false,
      selectedVacancy: null,
      showAddCandidateModal: false,
      showEditCandidateModal1: false,
      editCandidate: null,
      candidateName: '',
      candidateEmail: '',
      candidatePhone: '',
      candidateStatus: 'hired', // Set default status to 'hired'
      statusTranslations: {
        'hired': 'Принят',
        'new': 'Новый',
        'in_progress': 'В процессе',
        'offered': 'Предложено',
        'rejected': 'Отклонено'
      }
    }
  },
  computed: {
    translatedStatus() {
      return (status) => {
        return this.statusTranslations[status] || status;
      };
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
    },
    showVacancyDetails(vacancy) {
      this.selectedVacancy = vacancy;
      this.showModal = true;
      document.body.classList.add('modal-open');

      // Fetch detailed vacancy information
      projectDataService.getVacancy(vacancy.id)
        .then(response => {
          this.selectedVacancy = response.data;
        })
        .catch(error => {
          console.error("Ошибка при загрузке деталей вакансии:", error);
          this.errorMessage = "Не удалось загрузить детали вакансии";
        });
    },
    closeVacancyDetailsModal() {
      this.showModal = false;
      document.body.classList.remove('modal-open');
    },
    showAddCandidateModal1() {
      console.log("Attempting to open add candidate modal");
      this.showAddCandidateModal = true;
      document.body.classList.add('modal-open');
    },
    closeAddCandidateModal() {
      console.log("Closing add candidate modal");
      this.showAddCandidateModal = false;
      document.body.classList.remove('modal-open');
    },
    showEditCandidateModal(candidate) {
      this.editCandidate = candidate;
      this.showEditCandidateModal1 = true;
      document.body.classList.add('modal-open');
    },
    closeEditCandidateModal() {
      this.showEditCandidateModal1 = false;
      document.body.classList.remove('modal-open');
      this.editCandidate = null;
    },
    updateCandidate(updatedCandidate) {
      const vacancy = this.vacancies.find(v => v.id === this.selectedVacancy.id);
      if (vacancy) {
        const candidateIndex = vacancy.candidates.findIndex(c => c.id === updatedCandidate.id);
        if (candidateIndex !== -1) {
          vacancy.candidates[candidateIndex] = updatedCandidate;
        }
      }
    },
    addCandidate() {
      const candidateData = {
        name: this.candidateName,
        email: this.candidateEmail,
        phone: this.candidatePhone,
        status: this.candidateStatus // Use the selected status
      };

      projectDataService.addCandidate(this.selectedVacancy.id, candidateData)
        .then(response => {
          this.selectedVacancy.candidates.push(response.data);
          this.closeAddCandidateModal();
          this.candidateName = '';
          this.candidateEmail = '';
          this.candidatePhone = '';
          this.candidateStatus = 'new';
        })
        .catch(error => {
          console.error("Ошибка при добавлении кандидата:", error);
          this.errorMessage = "Не удалось добавить кандидата";
        });
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

.modal-open {
  overflow: hidden;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
}

.modal {
  display: block;
  z-index: 1050;
}

.modal-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1050;
  width: 80%;
  max-width: 800px;
  margin: 0;
}

.modal-content {
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
}

.modal-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.close {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.3;
}

.close:hover {
  opacity: 0.5;
}

.modal-body {
  padding: 1rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
}

.candidate-item {
  margin-bottom: 1rem; /* Add space between candidate blocks */
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
}
</style>
