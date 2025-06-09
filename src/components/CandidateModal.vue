<template>
  <div v-if="showModal" class="modal-backdrop fade show"></div>
  <div v-if="showModal" class="modal fade show" tabindex="-1" role="dialog" aria-hidden="false">
    <div class="modal-dialog modal-lg" role="document" style="margin: 0 auto; top: 50%; left: 50%; transform: translate(-50%, -50%);">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Редактировать кандидата</h5>
          <button type="button" class="close" @click="closeModal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateCandidate">
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
            <button type="submit" class="btn btn-primary">Сохранить изменения</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import projectDataService from "@/service/ProjectDataService.js";

export default {
  name: "CandidateModal",
  props: {
    showModal: {
      type: Boolean,
      required: true
    },
    candidate: {
      type: Object,
      required: false
    },
    vacancy: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      candidateId: null,
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
      return this.statusTranslations[this.candidateStatus] || this.candidateStatus;
    }
  },
  watch: {
    candidate(newVal) {
      if (newVal) {
        this.candidateId = newVal.id;
        this.candidateName = newVal.name;
        this.candidateEmail = newVal.email;
        this.candidatePhone = newVal.phone;
        this.candidateStatus = newVal.status || 'hired'; // Set default status to 'hired'
      }
    }
  },
  mounted() {
    if (this.candidate) {
      this.candidateId = this.candidate.id;
      this.candidateName = this.candidate.name;
      this.candidateEmail = this.candidate.email;
      this.candidatePhone = this.candidate.phone;
      this.candidateStatus = this.candidate.status || 'hired'; 
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    updateCandidate() {
      const candidateData = {
        name: this.candidateName,
        email: this.candidateEmail,
        phone: this.candidatePhone,
        status: this.candidateStatus || 'hired' // Set default status to 'hired'
      };

      projectDataService.updateCandidate(this.candidateId, candidateData)
        .then(response => {
          this.$emit('update', response.data);
          this.closeModal();
          location.reload();
        })
        .catch(error => {
          console.error("Ошибка при обновлении кандидата:", error);
          location.reload();
        });
    }
  }
}
</script>

<style scoped>
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
</style>
