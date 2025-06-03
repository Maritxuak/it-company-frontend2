<template>

  <div class="page has-sidebar-left">
    <header class="blue accent-3 relative nav-sticky">
      <div class="container-fluid text-white">
        <div class="row">
          <div class="col">
            <h4>
              <i class="icon-package"></i>
              Чаты
            </h4>
          </div>
        </div>
        <div class="row ">
          <ul class="nav responsive-tab">
            <li class="nav-item">
              <a class="nav-link active" href="#"><i class="icon icon-list"></i>Все</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="container-fluid">
      <div class="card my-3 shadow b-0">
        <div class="row no-gutters">
          <!-- Список пользователей -->
          <div class="col-md-3 d-none d-md-block text-truncate white b-r">
            <div class="card-header white">
              <form>
                <div class="form-group has-right-icon m-0">
                  <input v-model="searchQuery" class="form-control light r-30" placeholder="Поиск" type="text">
                  <i class="icon-search"></i>
                </div>
              </form>
            </div>
            <div class="slimScroll" data-height="600">
              <ul class="list-unstyled">
                <li v-for="user in filteredUsers" :key="user.id"
                    class="media p-4 b-b list-group-item-action"
                    @click="startChatWithUser(user.id)"
                    :class="{ 'active': activeChatWithUserId === user.id }">
                  <div class="avatar avatar-md mr-3">
                    <img :src="getUserAvatar(user)" alt="">
                    <span class="avatar-badge has-indicator online">
                      <i class="icon icon-check"></i>
                    </span>
                  </div>
                  <div class="media-body text-truncate">
                    <h6>{{ user.firstName }} {{ user.lastName }}</h6>
                    <small>{{ user.email }}</small>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Область чата -->
          <div class="col-md-9 col-sm-12 white">
            <div v-if="activeChat">
              <div class="card-header white">
                <h5>{{ activeChatWithUser ? `${activeChatWithUser.firstName} ${activeChatWithUser.lastName}` : 'Чат' }}</h5>
              </div>
              <div class="card-body chat-widget p-3 slimScroll" data-height="500">
                <div class="w-body w-scroll">
                  <ul class="list-unstyled">
                    <li v-for="message in messages" :key="message.id"
                        :class="isMyMessage(message) ? 'by-me' : 'by-other'">
                      <div class="avatar" :class="isMyMessage(message) ? 'float-left' : 'float-right'">
                        <img :src="getMessageSenderAvatar(message)" alt="" class="img-responsive">
                      </div>
                      <div class="chat-content">
                        <div class="chat-meta">{{ formatTime(message.createdAt) }}</div>
                        {{ message.content }}
                        <div class="clearfix"></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-footer bg-light">
                <form @submit.prevent="sendMessage">
                  <div class="input-group">
                    <input v-model="newMessage" class="form-control" placeholder="Введите сообщение" type="text">
                    <span class="input-group-btn ml-2">
                      <button type="submit" class="btn btn-primary">Отправить</button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div v-else class="d-flex justify-content-center align-items-center" style="height: 500px;">
              <div class="text-center">
                <i class="icon-chat display-4 text-muted"></i>
                <p class="mt-3">Выберите пользователя для начала общения</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileDataService from "@/service/ProfileDataService.js";
import chatService from "@/service/ChatService.js";
import { socket } from "@/service/socket.js";

export default {
  name: "chat",
  data() {
    return {
      users: [],
      currentUserId: "your-current-user-id", // Замените на реальный ID текущего пользователя
      searchQuery: "",
      activeChatWithUserId: null, // ID пользователя, с которым открыт чат
      activeChat: null, // Данные текущего чата
      messages: [],
      newMessage: "",
      socket: null
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => {
        const search = this.searchQuery.toLowerCase();
        return (
            user.firstName.toLowerCase().includes(search) ||
            user.lastName.toLowerCase().includes(search) ||
            user.email.toLowerCase().includes(search)
        );
      });
    },
    activeChatWithUser() {
      return this.users.find(user => user.id === this.activeChatWithUserId);
    }
  },
  mounted() {
    this.getUsers();
    this.initSocket();
  },
  methods: {
    getUsers() {
      profileDataService.getProfileAll()
          .then((response) => {
            this.users = response.data;
          })
          .catch(error => {
            console.error("Ошибка при получении пользователей:", error);
          });
    },

    async startChatWithUser(otherUserId) {
      this.activeChatWithUserId = otherUserId;

      try {
        // 1. Пытаемся получить существующий чат
        const response = await chatService.getChatWithUser(otherUserId);
        this.activeChat = response.data;
        this.loadMessages();
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // 2. Если чата нет, создаем новый
          await this.createNewChat(otherUserId);
        } else {
          console.error("Ошибка при получении чата:", error);
        }
      }
    },

    async createNewChat(otherUserId) {
      const createChatDto = {
        name: `Чат с ${this.activeChatWithUser.firstName}`,
        userIds: [this.currentUserId, otherUserId],
        isGroup: false
      };

      try {
        // Вариант 1: через REST API
        // const response = await chatService.createChat(createChatDto);
        // this.activeChat = response.data;

        // Вариант 2: через WebSocket
        this.socket.emit('createChat', createChatDto, (createdChat) => {
          this.activeChat = createdChat;
          this.loadMessages();
        });
      } catch (error) {
        console.error("Ошибка при создании чата:", error);
      }
    },

    loadMessages() {
      if (!this.activeChat) return;

      chatService.getChatMessages(this.activeChat.id)
          .then(response => {
            this.messages = response.data;
          })
          .catch(error => {
            console.error("Ошибка при загрузке сообщений:", error);
          });
    },

    sendMessage() {
      if (!this.newMessage.trim() || !this.activeChat) return;

      const createMessageDto = {
        chatId: this.activeChat.id,
        userId: this.currentUserId,
        content: this.newMessage
      };

      // Вариант 1: через REST API
      // chatService.sendMessage(createMessageDto)
      //   .then(response => {
      //     this.messages.push(response.data);
      //     this.newMessage = "";
      //   });

      // Вариант 2: через WebSocket
      this.socket.emit('sendMessage', createMessageDto, (sentMessage) => {
        this.messages.push(sentMessage);
        this.newMessage = "";
      });
    },

    isMyMessage(message) {
      return message.senderId === this.currentUserId;
    },

    initSocket() {
      this.socket = socket;

      this.socket.on('messageSent', (message) => {
        if (this.activeChat && message.chatId === this.activeChat.id) {
          this.messages.push(message);
        }
      });

      this.socket.on('chatCreated', (chat) => {
        if (chat.userIds.includes(this.activeChatWithUserId)) {
          this.activeChat = chat;
          this.loadMessages();
        }
      });
    },

    getUserAvatar(user) {
      return '../../assets/img/dummy/u4.png';
    },

    getMessageSenderAvatar(message) {
      return '../../assets/img/dummy/u4.png';
    },

    formatTime(timestamp) {
      return new Date(timestamp).toLocaleTimeString();
    }
  },
  beforeUnmount() {
    if (this.socket) {
      this.socket.off('messageSent');
      this.socket.off('chatCreated');
    }
  }
}
</script>