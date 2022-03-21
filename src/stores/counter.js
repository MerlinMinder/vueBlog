import { defineStore } from "pinia";

export const useAdminStore = defineStore({
  id: "admin",
  state: () => ({
    admin: false,
  }),
  getters: {},
  actions: {
    change() {
      state.admin = !state.admin;
    },
  },
});
