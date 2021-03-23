import Vue from 'vue';
import VueRouter from 'vue-router';
import atob from 'atob';
import Home from '../views/Home.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

function loggedInRedirectDashboard(to, from, next) {
  if (localStorage.token) { next('/'); } else { next(); }
}
function isAdmin(to, from, next) {
  const token = localStorage.token.split('.')[1];
  const decodedToken = JSON.parse(atob(token));
  if (decodedToken.role === 'admin') {
    console.log(decodedToken.role);
    next();
  } else {
    next('/404');
  }
}
function isLoggedIn(to, from, next) {
  if (localStorage.token) {
    isAdmin(to, from, next);
    next();
  } else {
    next('/login');
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter: loggedInRedirectDashboard,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: loggedInRedirectDashboard,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: isLoggedIn,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
