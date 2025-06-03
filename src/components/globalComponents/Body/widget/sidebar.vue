
<template>
  <aside class="main-sidebar fixed offcanvas shadow" data-toggle='offcanvas'>
    <section class="sidebar">
      <div class="w-80px mt-3 mb-3 ml-3">
        AreaWD
      </div>
      <div class="relative">
        <div class="user-panel p-3 light mb-2">
          <div>
            <div class="float-left image">
              <img class="user_avatar" src="../../../../assets/img/dummy/u2.png" alt="User Image">
            </div>
            <div class="float-left info">
              <h6 class="font-weight-light mt-2 mb-1">{{firstName}} {{lastName}}</h6>
              <a href="#"><i class="icon-circle text-primary blink"></i> Онлайн</a>
            </div>
          </div>
        </div>
      </div>
      <ul class="sidebar-menu">
        <li class="header"><strong>Личный кабинет</strong></li>
        <li class="treeview" @click="router().push('/profile')"><a href="#">
          <i class="icon icon-sailing-boat-water purple-text s-18"></i> <span>Профиль</span>
        </a>
        </li>
        <li class="treeview" @click="router().push('/profile/edit')"><a href="#">
          <i class="icon icon-sailing-boat-water purple-text s-18"></i> <span>Редактировать профиль</span>
        </a>
        </li>
        <li class="header"><strong>Меню</strong></li>

        <li class="treeview"><a href="#"><i class="icon icon-account_box light-green-text s-18"></i>Статистика</a>
        </li>
        <li class="treeview no-b" @click="router().push('/chat')">
          <a href="#">
            <i class="icon icon-package light-green-text s-18"></i>
            <span>Чаты</span>
            <span class="badge r-3 badge-success pull-right">20</span>
          </a>
        </li>
        <li class="header"><strong>Проекты и Задачи</strong></li>
        <li class="treeview" @click="router().push('/project/list')"><a href="#">
          <i class="icon icon icon-package blue-text s-18"></i>
          <span>Проекты</span>
          <span class="badge r-3 badge-primary pull-right">4</span>
        </a>
        </li>
        <li v-if="role === 'admin'" class="treeview" @click="router().push('/project/create')"><a href="#">
          <i class="icon icon icon-package blue-text s-18"></i>
          <span>Создать проект</span>
          <span class="badge r-3 badge-primary pull-right">4</span>
        </a>
        </li>
        <li class="treeview" @click="router().push('/task/list')"><a href="#">
          <i class="icon icon-sailing-boat-water purple-text s-18"></i> <span>Задачи</span>
        </a>
        </li>
        <li class="treeview" @click="router().push('/task/add')" v-if="role === 'admin'"><a href="#">
          <i class="icon icon-sailing-boat-water purple-text s-18"></i> <span>Создать задачи</span>
        </a>
        </li>
        <li class="header"><strong>Вакансии</strong></li>
        <li class="treeview" @click="router().push('/vacancy/list')"><a href="#">
          <i class="icon icon-sailing-boat-water purple-text s-18"></i> <span>Вакансии</span>
        </a>
        </li>
        <li class="treeview" @click="router().push('/vacancy/add')"><a href="#">
          <i class="icon icon-sailing-boat-water purple-text s-18"></i> <span>Создание вакансии</span>
        </a>
        </li>
        <li class="treeview" @click="router().push('/vacancy/edit')"><a href="#">
          <i class="icon icon-sailing-boat-water purple-text s-18"></i> <span>Редактировании вакансий</span>
        </a>
        </li>
        <li class="header"><strong>Уведомления</strong></li>
        <li class="treeview" @click="router().push('/notitifcation/add')"><a href="#">
          <i class="icon icon-sailing-boat-water purple-text s-18"></i> <span>Создание уведомлений</span>
        </a>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
import router from "@/router/index.js";

export default {
  name: "sidebar",
  props: {
    firstName: {
      require: true,
      type: String
    },
    lastName: {
      require: true,
      type: String
    },
    role: {
      require: true,
      type: String
    }
  },
  data(){
    return{
      modalNotifications: false,
    }
  },
  methods: {
    router() {
      return router
    },
  }
}
</script>
