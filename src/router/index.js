import { createRouter, createWebHistory } from 'vue-router'
import Body from "@/components/globalComponents/Body/Body.vue";
import login from "@/pages/auth/login/login.vue";
import register from "@/pages/auth/register/register.vue";
import profile from "@/pages/profile/index.vue";
import reset from "@/pages/auth/reset/reset.vue"
import createProject from "@/pages/project/create.vue"
import list from "@/pages/project/list.vue";
import listNotification from "@/pages/notifications/list.vue"
import createNotification from "@/pages/notifications/create.vue"
import taskList from "@/pages/task/list.vue"
import createTask from "@/pages/task/create.vue"
import chat from "@/pages/chat/index.vue"
import createVacancy from "@/pages/vacancy/create.vue"
import listVacancy from "@/pages/vacancy/list.vue"
const routes = [
  {
    path: '/',
    component: Body,
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: profile,
        meta: {
          title: "Профиль",
        },
      },
      {
        path: 'chat',
        name: 'chat',
        component: chat,
        meta: {
          title: "Чаты",
        },
      },
      {
        path: '/project',
        children: [
          {
            path: 'list',
            name: 'projectList',
            component: list,
            meta: {
              title: "Список проектов",
            },
          },
          {
            path: 'create',
            name: 'createProject',
            component: createProject,
            meta: {
              title: "Создание проекта",
            },
          },
        ]
      },
      {
        path: '/task',
        children: [
          {
            path: 'list',
            name: 'taskList',
            component: taskList,
            meta: {
              title: "Список задач",
            },
          },
          {
            path: 'add',
            name: 'addTask',
            component: createTask,
            meta: {
              title: "Создание задач",
            },
          },
        ]
      },
      {
        path: '/notitifcation',
        children: [
          {
            path: 'list',
            name: 'notificationList',
            component: listNotification,
            meta: {
              title: "Список уведомлений",
            },
          },
          {
            path: 'add',
            name: 'addNotification',
            component: createNotification,
            meta: {
              title: "Создание уведомлений",
            },
          },
        ]
      },
            {
        path: '/vacancy',
        children: [
          {
            path: 'list',
            name: 'VacancyList',
            component: listVacancy,
            meta: {
              title: "Список вакансий",
            },
          },
          {
            path: 'add',
            name: 'addVacancy',
            component: createVacancy,
            meta: {
              title: "Создание вакансий",
            },
          },
        ]
      },
    ]
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        name: 'login',
        component: login,
        meta: {
          title: "Вход",
        },
      },
      {
        path: 'register',
        name: 'register',
        component: register,
        meta: {
          title: "Регистрация",
        },
      },
      {
        path: 'reset',
        name: 'reset',
        component: reset,
        meta: {
          title: "Восстановление пароля",
        },
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory("/my/"),
  routes,
});

router.beforeEach((to, from, next) => {

  if (to.meta.title) document.title = to.meta.title + " | AreaWD";


  const publicPaths = ['/auth/login', '/auth/register', '/auth/reset'];
  const isAuthenticated = !!localStorage.getItem("authTokenWD");

  if (!isAuthenticated && !publicPaths.includes(to.path)) {
    return next({
      path: '/auth/login',
      query: { next: to.fullPath }
    });
  }


  if (isAuthenticated && publicPaths.includes(to.path)) {
    return next('/profile');
  }

  next();
});

export default router
