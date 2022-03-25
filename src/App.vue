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
import { useBlogStore } from "./stores/stores";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "./firebase/firebaseinit";

const fetchBlogs = async () => {
  const blogs = useBlogStore();
  const blogCollection = await getDocs(collection(db, "blogs"));
  blogCollection.forEach(async (doc) => {
    const posts = [];
    const postCollection = await getDocs(
      collection(db, `blogs/${doc.data().title}/posts`)
    );
    postCollection.forEach((postdoc) => {
      posts.unshift(postdoc.data());
    });
    const blog = doc.data();
    blog["posts"] = posts;
    blogs.addblog(blog);
  });
  return;
};

fetchBlogs();
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap");
@import "./assets/base.css";
@import "./assets/variables.scss";

* {
  font-family: "Nunito";
  padding: 0;
  margin: 0;
  border-color: $border;
}

.link {
  text-decoration: none;
  color: $text;
}

a {
  color: $text;
}

p {
  color: $text;
}

button {
  background-color: $button;
}
</style>
