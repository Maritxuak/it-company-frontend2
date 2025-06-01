<template>
  <header class="header white-bg fixed-top d-flex align-content-center flex-wrap">

    <div class="logo">
      <a href="../../../index.html" class="default-logo"><img src="../../../../assets/img/header/logo/logo.png" alt=""></a>
      <a href="../../../index.html" class="mobile-logo"><img src="../../../../assets/img/header/logo/mobile-logo.png" alt=""></a>
    </div>
    <div class="main-header">
      <div class="container-fluid">
        <div class="row justify-content-between">
          <div class="col-3 col-lg-1 col-xl-4">
            <div class="main-header-left h-100 d-flex align-items-center">
              <div class="main-header-user">
                <a href="#" class="d-flex align-items-center" data-toggle="dropdown">
                  <div class="menu-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div class="user-profile d-xl-flex align-items-center d-none">
                    <div class="user-avatar">
                      <img src="../../../../assets/img/header/avatar/user.png" alt="">
                    </div>
                    <div class="user-info" v-if="fio">
                      <h4 class="user-name">{{fio}}</h4>
                      <p class="user-email">{{email}}</p>
                    </div>
                  </div>
                </a>
                <div class="dropdown-menu">
                  <a href="#">My Profile</a>
                  <a href="#">task</a>
                  <a href="#">Settings</a>
                  <a href="#">Log Out</a>
                </div>
              </div>
              <div class="main-header-pin d-block d-lg-none">
                <div class="header-toogle-menu">
                  <img src="../../../../assets/img/header/menu/menu.png" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="col-9 col-lg-11 col-xl-8">
            <div class="main-header-right d-flex justify-content-end">
              <ul class="nav">
                <li class="ml-0 d-none d-lg-flex">
                  <div class="main-header-print">
                    <a href="#">
                      <img src="../../../assets/img/svg/print-icon.svg" alt="">
                    </a>
                  </div>
                </li>
                <li class="d-none d-lg-flex">
                  <div class="main-header-date-time text-right">
                    <h3 class="time">
                      <span id="hours"></span>
                      <span id="point">:</span>
                      <span id="min"></span>
                    </h3>
<!--                    <span class="date"><span id="date">Tue, 12 1 2019</span></span>-->
                  </div>
                </li>
                <li class="d-none d-lg-flex">
                  <div class="main-header-btn ml-md-1">
                    <a href="#" class="btn">Посмотреть задачи</a>
                  </div>
                </li>
                <li>
                  <div class="main-header-message">
                    <a href="#" class="header-icon" data-toggle="dropdown">
                      <img src="../../../../assets/img/header/message/message-icon.svg" alt="" class="svg">
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      <div class="dropdown-header d-flex align-items-center justify-content-between">
                        <h5>3 Unread messages</h5>
                        <a href="#" class="text-mute d-inline-block">Clear all</a>
                      </div>
                      <div class="dropdown-body">
                        <a href="#" class="item-single d-flex media align-items-center">
                          <div class="figure">
                            <img src="../../../../assets/img/header/avatar/m1.png" alt="">
                            <span class="avatar-status bg-teal"></span>
                          </div>
                          <div class="content media-body">
                            <div class="d-flex align-items-center mb-2">
                              <h6 class="name">Sender Name</h6>
                              <p class="time">2 min ago</p>
                            </div>
                            <p class="main-text">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.</p>
                          </div>
                        </a>
                        <a href="#" class="item-single d-flex media align-items-center">
                          <div class="figure">
                            <img src="../../../../assets/img/header/avatar/m2.png" alt="">
                            <span class="avatar-status bg-teal"></span>
                          </div>
                          <div class="content media-body">
                            <div class="d-flex align-items-center mb-2">
                              <h6 class="name">Tonya Lee</h6>
                              <p class="time">2 min ago</p>
                            </div>
                            <p class="main-text">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.</p>
                          </div>
                        </a>
                        <a href="#" class="item-single d-flex media align-items-center">
                          <div class="figure">
                            <img src="../../../../assets/img/header/avatar/m3.png" alt="">
                            <span class="avatar-status bg-teal"></span>
                          </div>
                          <div class="content media-body">
                            <div class="d-flex align-items-center mb-2">
                              <h6 class="name">Cathy Nichols</h6>
                              <p class="time">2 min ago</p>
                            </div>
                            <p class="main-text">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.</p>
                          </div>
                        </a>
                        <a href="#" class="item-single d-flex media align-items-center">
                          <div class="figure">
                            <img src="../../../../assets/img/header/avatar/m4.png" alt="">
                            <span class="avatar-status bg-teal"></span>
                          </div>
                          <div class="content media-body">
                            <div class="d-flex align-items-center mb-2">
                              <h6 class="name">Hubert Griffith</h6>
                              <p class="time">2 min ago</p>
                            </div>
                            <p class="main-text">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="main-header-notification">
                    <a href="#" class="header-icon notification-icon" data-toggle="dropdown">
                      <span class="count" data-bg-img="../../../../assets/img/header/notification/count-bg.png">22</span>
                      <img src="../../../../assets/img/header/notification/notification-icon.svg" alt="" class="svg">
                    </a>
                    <div class="dropdown-menu style--two dropdown-menu-right">
                      <div class="dropdown-header d-flex align-items-center justify-content-between">
                        <h5>5 New notifications</h5>
                        <a href="#" class="text-mute d-inline-block">Clear all</a>
                      </div>
                      <div class="dropdown-body">
                        <a href="#" class="item-single d-flex align-items-center">
                          <div class="content">
                            <div class="mb-2">
                              <p class="time">2 min ago</p>
                            </div>
                            <p class="main-text">Donec dapibus mauris id odio ornare tempus amet.</p>
                          </div>
                        </a>
                        <a href="#" class="item-single d-flex align-items-center">
                          <div class="content">
                            <div class="mb-2">
                              <p class="time">2 min ago</p>
                            </div>
                            <p class="main-text">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.</p>
                          </div>
                        </a>
                        <a href="#" class="item-single d-flex align-items-center">
                          <div class="content">
                            <div class="mb-2">
                              <p class="time">2 min ago</p>
                            </div>
                            <p class="main-text">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.</p>
                          </div>
                        </a>
                        <a href="#" class="item-single d-flex align-items-center">
                          <div class="content">
                            <div class="mb-2">
                              <p class="time">2 min ago</p>
                            </div>
                            <p class="main-text">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
  props:{
    fio: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    }
  },
  data(){
    return{
      isNotification: true,
    }
  },
}
</script>

<style scoped>
.dropdown-menu-notification{
  top: 70px;
  right: 0;
  display: block;
}

</style>