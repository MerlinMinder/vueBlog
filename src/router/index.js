import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogsView from "../views/BlogsView.vue";
import BlogView from "../views/BlogView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/blogs", name: "blogs", component: BlogsView },
    { path: "/editor", name: "editor", component: BlogView },
    { path: "/login", name: "login", component: LoginView },
  ],
});

export default router;
