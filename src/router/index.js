import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogsView from "../views/BlogsView.vue";
import BlogView from "../views/BlogView.vue";
import AuthView from "../views/AuthView.vue";
import EditorView from "../views/EditorView.vue";
import SignUpVue from "../components/SignUp.vue";
import LoginVue from "../components/Login.vue";

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
      path: "/auth",
      name: "auth",
      component: AuthView,
      meta: { title: "Login" },
      children: [
        {
          path: "signup",
          name: "signup",
          component: SignUpVue,
        },
        {
          path: "login",
          name: "login",
          component: LoginVue,
        },
      ],
    },
  ],
});

export default router;
