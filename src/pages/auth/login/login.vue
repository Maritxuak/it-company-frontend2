<template>
  <div>
    <main>
      <div id="primary" class="p-t-b-100 height-full">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 mx-md-auto">
              <div class="text-center">
                <img src="@/assets/img/dummy/u5.png" alt="">
                <h3 class="mt-2">Авторизация</h3>
                <p class="p-t-b-20">Добро пожаловать обратно, тебя ждёт много нового!</p>
              </div>
              <!-- Блок для отображения ошибок -->
              <div v-if="errorMessage" class="alert alert-danger">
                {{ errorMessage }}
              </div>
              <form @submit.prevent="postLogin">
                <div class="form-group has-icon"><i class="icon-envelope-o"></i>
                  <input type="email" class="form-control form-control-lg"
                         placeholder="Email Address" v-model="user.email">
                </div>
                <div class="form-group has-icon"><i class="icon-user-secret"></i>
                  <input type="password" class="form-control form-control-lg"
                         placeholder="Password" v-model="user.password">
                </div>
                <button type="submit" class="btn btn-success btn-lg btn-block" :disabled="loading">
                  <span v-if="!loading">Войти</span>
                  <span v-else>Вход...</span>
                </button>
                <p class="forget-pass pointer" @click="openReset">Забыли логин или пароль?</p>
                <p class="forget-pass pointer" @click="openRegister">Зарегистрироваться</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="control-sidebar-bg shadow white fixed"></div>
  </div>
</template>

<script>
import authDataService from "@/service/AuthDataService.js";
import router from "@/router/index.js";

export default {
  name: "login",
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      errorMessage: null,
      loading: false,
    }
  },
  methods: {
    openReset() {
      router.push("/auth/reset")
    },
    openRegister() {
      router.push("/auth/register")
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    validateForm() {
      // Проверка email
      if (!this.user.email) {
        this.errorMessage = "Введите почту!";
        return false;
      }

      if (!this.validateEmail(this.user.email)) {
        this.errorMessage = "Введите корректный email!";
        return false;
      }

      // Проверка пароля
      if (!this.user.password) {
        this.errorMessage = 'Введите пароль!';
        return false;
      }

      if (this.user.password.length < 6) {
        this.errorMessage = 'Пароль должен содержать минимум 6 символов!';
        return false;
      }

      return true;
    },
    async postLogin() {
      // Валидация формы
      if (!this.validateForm()) {
        setTimeout(() => {
          this.errorMessage = ""
        }, 5000);
        return;
      }

      this.loading = true;
      this.errorMessage = null;

      try {
        const response = await authDataService.postLogin(this.user);

        // Проверяем, есть ли токен в ответе
        if (!response.data?.accessToken) {
          throw new Error('Не получили токен авторизации');
        }

        // Сохраняем токен
        localStorage.setItem('authTokenWD', response.data.accessToken);

        // Перенаправляем пользователя
        await this.$router.push("/profile");

      } catch (error) {
        // Обработка различных типов ошибок
        if (error.response) {
          // Ошибка от сервера
          switch (error.response.status) {
            case 400:
              this.errorMessage = "Неверный запрос. Проверьте введенные данные.";
              break;
            case 401:
              this.errorMessage = "Неверный email или пароль.";
              break;
            case 403:
              this.errorMessage = "Доступ запрещен. Ваш аккаунт может быть заблокирован.";
              break;
            case 404:
              this.errorMessage = "Сервер авторизации недоступен.";
              break;
            case 500:
              this.errorMessage = "Ошибка сервера. Попробуйте позже.";
              break;
            default:
              this.errorMessage = "Произошла ошибка при авторизации.";
          }
        } else if (error.request) {
          // Запрос был сделан, но ответ не получен
          this.errorMessage = "Сервер не отвечает. Проверьте интернет-соединение.";
        } else {
          // Ошибка при настройке запроса
          this.errorMessage = "Ошибка при отправке запроса.";
        }

        console.error("Ошибка авторизации:", error);
      } finally {
        this.loading = false;

        // Автоматически скрываем сообщение об ошибке через 5 секунд
        if (this.errorMessage) {
          setTimeout(() => {
            this.errorMessage = null;
          }, 5000);
        }
      }
    },
  },
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

.border-5 {
  border-radius: 20px !important;
}

.s_alert {
  position: fixed;
  top: 50px;
  right: 20px;
}

.wrapper-sweet {
  position: relative;
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

.alert {
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 4px;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>