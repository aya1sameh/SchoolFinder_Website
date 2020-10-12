import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import Login from '../views/Login.vue';
import RecoverPassword from '../views/RecoverPassword.vue';
import ResetPassword from '../views/ResetPassword.vue';
import UserProfile from '../views/UserProfile.vue';
import SchoolProfile from '../views/SchoolProfile.vue';
import FavouriteSchools from '../views/FavouriteSchools.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/recover_password',
    name: 'RecoverPassword',
    component: RecoverPassword,
  },
  {
    path: '/reset_password',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/user_profile',
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    path: '/favourite_schools',
    name: 'FavouriteSchools',
    component: FavouriteSchools,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/school',
    name: 'School Profile',
    component: SchoolProfile,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
