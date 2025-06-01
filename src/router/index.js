import { createRouter, createWebHistory } from 'vue-router'
import Body from "@/components/globalComponents/Body/Body.vue";
import indexLending from "@/pages/lending/index.vue"
import login from "@/pages/auth/login/login.vue";
import register from "@/pages/auth/register/register.vue";
import profile from "@/pages/profile/index.vue";
import reset from "@/pages/auth/reset/reset.vue"
import createNotifications from "@/pages/administrations/notifications/createNotifications.vue"
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
        path: 'createNotifications',
        name: 'createNotifications',
        component: createNotifications,
        meta: {
          title: "Отправка уведомления",
        },
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
