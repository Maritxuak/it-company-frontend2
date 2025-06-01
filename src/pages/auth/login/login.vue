<template>
 <div >
<main>
    <div id="primary" class="p-t-b-100 height-full ">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mx-md-auto">
                    <div class="text-center">
                        <img src="@/assets/img/dummy/u5.png" alt="">
                        <h3 class="mt-2">Авторизация</h3>
                        <p class="p-t-b-20">Добро пожаловать обратно, тебя ждёт много нового!</p>
                    </div>
                    <form action="dashboard2.html">
                        <div class="form-group has-icon"><i class="icon-envelope-o"></i>
                            <input type="text" class="form-control form-control-lg"
                                   placeholder="Email Address" v-model="user.email">
                        </div>
                        <div class="form-group has-icon"><i class="icon-user-secret"></i>
                            <input type="text" class="form-control form-control-lg"
                                   placeholder="Password" v-model="user.password">
                        </div>
                        <input @click="postLogin()" class="btn btn-success btn-lg btn-block" value="Войти">
                        <p class="forget-pass pointer" @click="openReset()">Забыли логин или пароль?</p>
                        <p class="forget-pass pointer" @click="openRegister()">Зарегестрироваться</p>
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
  data(){
    return{
      user: {
        email: null,
        password: null,
      },
      errorMessage: null,
    }
  },
  methods:{
    openReset(){
      router.push("/auth/reset")
    },
    openRegister() {
      router.push("/auth/register")
    },
  async  postLogin(){
      if (!this.user.email){
        this.errorMessage = "Введите почту!"
        setTimeout(() => {
          this.errorMessage = ""
        }, 5000)
        return;
      }
      if (!this.user.password) {
        this.errorMessage = 'Введите пароль!';
        setTimeout(() => {
          this.errorMessage = ""
        }, 5000)
        return;
      }
      await authDataService.postLogin(this.user)
          .then(response => {
            console.log(response.data)
            localStorage.setItem('authTokenWD', response.data.accessToken)

            this.$router.push("/profile");
          })
          .catch(e => {
            this.errorMessage = "Неверный логин или пароль!";
            setTimeout(() => {
              this.errorMessage = ""
            }, 5000)
            console.log(e);
          });
    },
  },
}
</script>

<style scoped>
.pointer{
  cursor: pointer;
}
.border-5{
  border-radius: 20px !important;
}
.s_alert{
  position: fixed;
  top:50px;
  right: 20px;
}
.wrapper-sweet{
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
</style>