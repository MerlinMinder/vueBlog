import { defineStore } from "pinia";

export const useAdminStore = defineStore({
  id: "admin",
  state: () => ({
    admin: false,
  }),
  getters: {},
  actions: {},
});

export const useBlogStore = defineStore({
  id: "blogs",
  state: () => ({
    blogs: {},
  }),
  getters: {},
  actions: {
    addblog(blog) {
      this.blogs[blog.title.replace(/[^a-zA-Z0-9]/g, "")] = blog;
    },
  },
});
