
<template>
  <nav class="sidebar" data-trigger="scrollbar">
    <div class="sidebar-body">
      <ul class="nav">
        <li class="nav-category">Основное</li>
        <li>
          <div @click="openPages(1)">
            <i class="icofont-pie-chart"></i>
            <span class="link-title">Профиль</span>
          </div>
        </li>
        <li>
          <div @click="OpenModal(1)" v-if="roleId === 'User'">
            <i class="icofont-shopping-cart"></i>
            <span class="link-title">Администрация</span>
          </div>
          <ul class="nav" v-if="this.modalNotifications">
            <li @click="openPages(2)"><div >Уведомления</div></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import router from "@/router/index.js";

export default {
  name: "sidebar",
  props: {
    roleId: {
      type: String,
      required: true,
    }
  },
  data(){
    return{
      modalNotifications: false,
    }
  },
  methods: {
    OpenModal(id){
      if (id === 1){
        this.modalNotifications = !this.modalNotifications
      }
    },
    openPages(id){
      console.log(1)
      if(id === 1){
        router.push("/profile")
      }else if(id === 2){
        router.push("/createNotifications")
      }
    }
  }
}
</script>
