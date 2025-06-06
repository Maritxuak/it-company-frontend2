<template>
  <header class="header white-bg fixed-top d-flex align-content-center flex-wrap">
    <div class="has-sidebar-left" style="width: 100%">
      <div class="pos-f-t">
      </div>
      <div class="sticky">
        <div class="navbar navbar-expand navbar-dark d-flex justify-content-between bd-navbar blue accent-3">
          <div class="relative">
            <a href="#" data-toggle="push-menu" class="paper-nav-toggle pp-nav-toggle">
              <i></i>
            </a>
          </div>
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
  <li class="dropdown custom-dropdown notifications-menu">
    <a href="#" class="nav-link" @click.prevent="toggleNotifications" aria-expanded="false">
      <i class="icon-notifications"></i>
      <span v-if="unreadCount > 0" class="badge badge-danger badge-mini rounded-circle">{{ unreadCount }}</span>
    </a>
    <transition name="slide-fade">
      <ul v-if="showNotifications" class="dropdown-menu dropdown-menu-right notification-dropdown">
        <li class="header">У вас {{ notifications.length }} новых уведомлений</li>
        <li>
          <ul class="menu">
            <li v-for="(notification, index) in notifications" :key="index" 
                :class="{'unread': !notification.isRead}">
              <a href="#" @click.prevent="handleNotificationClick(notification)">
                <i :class="getNotificationIcon(notification)"></i> 
                {{ notification.message }}
                
              </a>
            </li>
            <li v-if="notifications.length === 0">
              <a href="#" class="text-muted">Нет новых уведомлений</a>
            </li>
          </ul>
        </li>
      </ul>
    </transition>
  </li>
              <li class="dropdown custom-dropdown user user-menu ">
                <a href="#" class="nav-link" data-toggle="dropdown">
                  <img src="../../../../assets/img/dummy/u8.png" class="user-image" alt="User Image">
                  <i class="icon-more_vert "></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NotificationDataService from '@/service/NotificationDataService';
import io from 'socket.io-client';

export default {
  name: "header",
  props: {
    fio: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      showNotifications: false,
      notifications: [],
      socket: null,
      unreadCount: 0,
    }
  },
  created() {
    this.initWebSocket();
    this.init();
  },
  beforeDestroy() {
    if (this.socket) {
      this.socket.disconnect();
    }
  },
  methods: {
    init(){
      NotificationDataService.getNotification()
        .then((response) => {
          this.notifications = response.data;
        })
    },
    initWebSocket() {
            this.socket = io(this.socketUrl, {
        autoConnect: true,
        withCredentials: true,
        transports: ["websocket", "polling"],
      });
      
      this.socket.on('notification', (notification) => {
        this.notifications.unshift(notification);
        if (!notification.isRead) {
          this.unreadCount++;
        }
        
        if (this.showNotifications) {
          this.$toast.info(notification.message);
        }
      });
    },
    

    
    toggleNotifications() {
      this.showNotifications = !this.showNotifications;
      if (this.showNotifications && this.unreadCount > 0) {
        this.markAllAsRead();
      }
    },
    
    async markAllAsRead() {
      NotificationDataService.readNotification()
      .then((response) => {
        notification.isRead = true;
        this.unreadCount--;
      })
    },
    
    
    getNotificationIcon(notification) {
      const icons = {
        success: 'icon-check text-success',
        error: 'icon-error text-danger',
        warning: 'icon-warning text-warning',
        info: 'icon-info text-info',
        default: 'icon-notifications text-primary'
      };
      
      return icons[notification.type] || icons.default;
    },
        handleNotificationClick(notification) {
      if (!notification.isRead) {
        notification.isRead = true;
        this.unreadCount--;
      }
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleString();
    }
  }
}
</script>

<style scoped>
.notification-dropdown {
  width: 320px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  padding: 0;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.notification-header {
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
}

.notification-header span {
  font-weight: 600;
}

.mark-all-read {
  color: #007bff;
  font-size: 0.85rem;
  text-decoration: none;
}

.notification-body {
  overflow-y: auto;
  flex-grow: 1;
}

.empty-notifications {
  padding: 20px;
  text-align: center;
  color: #6c757d;
}

.empty-notifications i {
  font-size: 2rem;
  margin-bottom: 10px;
  display: block;
}

.empty-notifications p {
  margin: 0;
}

.notification-item {
  padding: 12px 16px;
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
  transition: background-color 0.2s;
}

.notification-item:hover {
  background-color: #f8f9fa;
}

.notification-item.unread {
  background-color: #f8faff;
}

.notification-icon {
  margin-right: 12px;
  font-size: 1.2rem;
}

.notification-content {
  flex-grow: 1;
}

.notification-message {
  margin: 0 0 4px 0;
  line-height: 1.4;
}

.notification-time {
  color: #6c757d;
  font-size: 0.8rem;
}

.notification-footer {
  padding: 8px 16px;
  text-align: center;
  border-top: 1px solid #eee;
  background-color: #f8f9fa;
}

.notification-footer a {
  color: #007bff;
  text-decoration: none;
  font-size: 0.85rem;
}

/* Анимации */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.badge {
  transition: transform 0.2s;
}
.badge:hover {
  transform: scale(1.1);
}
</style>