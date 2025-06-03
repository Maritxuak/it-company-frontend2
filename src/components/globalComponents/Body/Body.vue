<template>
  <div class="offcanvas-overlay"></div>
  <sidebar v-if="actualUser" :firstName = "this.actualUser.firstName" :lastName = "this.actualUser.lastName" :role = "this.actualUser.role"/>
  <headerBody />
  <router-view></router-view>
  <footer class="footer">
    AreaWD © 2025
  </footer>
</template>

<script>
import headerBody from "@/components/globalComponents/Body/widget/header.vue";
import FooterBody from "@/components/globalComponents/Body/widget/footer.vue";
import Sidebar from "@/components/globalComponents/Body/widget/sidebar.vue";
import profileDataService from "@/service/ProfileDataService.js";
export default {
  name: "Body",
  data(){
    return{
      actualUser: null,
    }
  },
  mounted(){
    this.getProfile()
  },
  methods:{
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
  },

  components: {
    Sidebar,
    headerBody,
    FooterBody
  }
}
</script>