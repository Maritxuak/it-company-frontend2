<template>
  <div class="page has-sidebar-left">
    <header class="blue accent-3 relative">
      <div class="container-fluid text-white">
        <div class="row p-t-b-10 ">
          <div class="col">
            <h4>
              <i class="icon-bell"></i>
              Уведомления
            </h4>
          </div>
        </div>
        <div class="row">
          <ul class="nav responsive-tab nav-material nav-material-white">
            <li @click="router().push('/profile')">
              <a class="nav-link" href=""><i class="icon icon-list"></i>Уведомления</a>
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
                  <label for="notificationType">Тип уведомления</label>
                  <select class="form-control" 
                          :class="{'is-invalid': errors.type && touched.type}"
                          v-model="notification.type"
                          @blur="touched.type = true">
                    <option value="">Выберите тип</option>
                    <option value="info">Информационное</option>
                    <option value="warning">Предупреждение</option>
                    <option value="error">Ошибка</option>
                    <option value="success">Успех</option>
                  </select>
                  <div class="invalid-feedback" v-if="errors.type && touched.type">
                    {{ errors.type }}
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="notificationMessage">Текст уведомления</label>
                <textarea class="form-control p-t-40"
                          :class="{'is-invalid': errors.message && touched.message}"
                          placeholder="Введите текст уведомления..." rows="5"
                          v-model="notification.message"
                          @blur="touched.message = true"></textarea>
                <div class="invalid-feedback" v-if="errors.message && touched.message">
                  {{ errors.message }}
                </div>
              </div>

              <div class="form-group mt-4">
                <button type="submit" class="btn btn-primary" :disabled="loading">
                  <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  {{ loading ? 'Отправка...' : 'Отправить уведомление' }}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="showSuccess" class="success-notification">
        Уведомление успешно отправлено!
      </div>
    </transition>
  </div>
</template>

<script>
import notificationDataService from "@/service/NotificationDataService.js";
import router from "@/router/index.js";

export default {
  name: "NotificationCreate",
  data() {
    return {
      notification: {
        message: '',
        type: 'info'
      },
      errors: {},
      showSuccess: false,
      touched: {
        message: false,
        type: false
      },
      errorMessage: '',
      loading: false
    }
  },
  methods: {
    router() {
      return router
    },
    
    validateForm() {
      this.errors = {};
      let isValid = true;

      if (!this.notification.message.trim()) {
        this.errors.message = 'Текст уведомления обязателен';
        isValid = false;
      } else if (this.notification.message.trim().length < 5) {
        this.errors.message = 'Текст должен содержать минимум 5 символов';
        isValid = false;
      }

      if (!this.notification.type) {
        this.errors.type = 'Тип уведомления обязателен';
        isValid = false;
      }

      return isValid;
    },

    validateBeforeSubmit() {
      this.touched = {
        message: true,
        type: true
      };

      if (this.validateForm()) {
        this.submitNotification();
      }
    },

    submitNotification() {
      this.loading = true;
      this.errorMessage = '';

      const notificationData = {
        message: this.notification.message.trim(),
        type: this.notification.type
      };

      notificationDataService.createNotification(notificationData)
          .then(response => {
            console.log("Уведомление создано:", response);
            this.showSuccess = true;
            this.resetForm();

            setTimeout(() => {
              this.showSuccess = false;
            }, 3000);
          })
          .catch(error => {
            console.error("Ошибка при создании уведомления:", error);
            this.errorMessage = this.getErrorMessage(error, 'Ошибка при создании уведомления');
          })
          .finally(() => {
            this.loading = false;
          });
    },

    getErrorMessage(error, defaultMessage) {
      if (error.response && error.response.data && error.response.data.message) {
        return error.response.data.message;
      }
      return defaultMessage;
    },

    resetForm() {
      this.notification = {
        message: '',
        type: 'info'
      };
      this.errors = {};
      this.touched = {
        message: false,
        type: false
      };
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