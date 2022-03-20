import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogsView from "../views/BlogsView.vue";
import BlogView from "../views/BlogView.vue";
import LoginView from "../views/LoginView.vue";
import EditorView from "../views/EditorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView, meta: { title: "Home" } },
    {
      path: "/blogs",
      name: "blogs",
      component: BlogsView,
      meta: { title: "Blogs" },
    },
    {
      path: "/editor",
      name: "editor",
      component: EditorView,
      meta: { title: "Editor" },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { title: "Login" },
    },
  ],
});

export default router;
