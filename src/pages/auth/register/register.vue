<template>
  <div id="app">
    <main>
      <div id="primary" class="blue4 p-t-b-100 height-full responsive-phone">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <img src="@/assets/img/icon/icon-plane.png" alt="">
            </div>
            <div class="col-lg-6 p-t-100">
              <div class="text-white">
                <h1>Регистрация</h1>
              </div>
              <form @submit.prevent="postRegister">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group has-icon"><i class="icon-envelope-o"></i>
                      <input type="email" class="form-control form-control-lg no-b"
                             placeholder="Почта" v-model="user.email">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group has-icon"><i class="icon-envelope-o"></i>
                      <input type="text" class="form-control form-control-lg no-b"
                             placeholder="Имя" v-model="user.firstName">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group has-icon"><i class="icon-envelope-o"></i>
                      <input type="text" class="form-control form-control-lg no-b"
                             placeholder="Фамилия" v-model="user.lastName">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group has-icon"><i class="icon-user-secret"></i>
                      <input type="password" class="form-control form-control-lg no-b"
                             placeholder="Пароль" v-model="user.password">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group has-icon"><i class="icon-user-secret"></i>
                      <input type="password" class="form-control form-control-lg no-b"
                             placeholder="Повтор пароля" v-model="repeatPassword">
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <input type="submit" class="btn btn-success btn-lg btn-block" value="Регистрация">
                    <p class="forget-pass text-white cursor" @click="openLogin()">Уже есть аккаунт?</p>
                  </div>
                </div>
                <div v-if="errorMessage" class="alert alert-danger mt-3">
                  {{ errorMessage }}
                </div>
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
  name: "register",
  data() {
    return {
      user: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
      },
      repeatPassword: '',
      errorMessage: null,
    }
  },
  methods: {
    openLogin() {
      router.push("/auth/login")
    },
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    validatePassword(password) {
      return password.length >= 6;
    },
    async postRegister() {
      // Сброс предыдущих ошибок
      this.errorMessage = null;
      
      // Проверка заполнения всех полей
      if (!this.user.email || !this.user.password || !this.user.firstName || !this.user.lastName || !this.repeatPassword) {
        this.errorMessage = "Все поля обязательны для заполнения!";
        return;
      }
      
      // Проверка валидности email
      if (!this.validateEmail(this.user.email)) {
        this.errorMessage = "Введите корректный email адрес!";
        return;
      }
      
      // Проверка длины пароля
      if (!this.validatePassword(this.user.password)) {
        this.errorMessage = "Пароль должен содержать минимум 6 символов!";
        return;
      }
      
      // Проверка совпадения паролей
      if (this.user.password !== this.repeatPassword) {
        this.errorMessage = "Пароли не совпадают!";
        return;
      }
      
      try {
        const response = await authDataService.postRegister(this.user);
        localStorage.setItem('authTokenWD', response.data.token);
        this.$router.push("/");
      } catch (e) {
        this.errorMessage = "Ошибка регистрации. Возможно, пользователь с таким email уже существует.";
        console.error(e);
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
  margin-top: 15px;
  padding: 10px 15px;
  border-radius: 4px;
}
.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>