<template>
  <div class="container">
    <HeaderVue v-if="useRoute().path.slice(1, 5) != 'auth'" />
    <RouterView></RouterView>
    <FooterVue v-if="useRoute().path.slice(1, 5) != 'auth'" />
  </div>
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";
import HeaderVue from "./components/navigation/Header.vue";
import FooterVue from "./components/navigation/Footer.vue";
import { onBeforeMount } from "@vue/runtime-core";
import { useBlogStore } from "./stores/stores";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "./firebase/firebaseinit";

const fetchBlogs = async () => {
  const blogs = useBlogStore();
  const blogCollection = await getDocs(collection(db, "blogs"));
  blogCollection.forEach((doc) => {
    blogs.addblog(doc.data());
  });
};

onBeforeMount(fetchBlogs());
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap");
@import "./assets/base.css";
@import "./assets/variables.scss";

* {
  font-family: "Nunito";
  padding: 0;
  margin: 0;
}

.link {
  text-decoration: none;
  color: black;
}
</style>
