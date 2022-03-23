<template>
  <ul>
    <RouterLink class="link link-second" :to="{ name: 'home' }"
      >Home</RouterLink
    >
    <RouterLink class="link link-second" :to="{ name: 'blogs' }"
      >Blogs</RouterLink
    >
    <RouterLink
      v-if="admin.admin"
      class="link link-second"
      :to="{ name: 'editblogs' }"
    >
      Editor</RouterLink
    >
    <RouterLink
      v-if="!loggedin"
      class="link link-second"
      :to="{ name: 'signup' }"
      >Login/Register</RouterLink
    >
    <div @click="click" v-else class="link link-second">
      {{ name }}
    </div>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { auth, db } from "../../firebase/firebaseinit";
import { getDoc, doc } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useAdminStore } from "../../stores/stores";
import router from "../../router";
const admin = useAdminStore();
const loggedin = ref(false);
const name = ref("$");
onAuthStateChanged(auth, async (user) => {
  if (user) {
    name.value = (await getDoc(doc(db, "users", user.uid)))
      .data()
      .name[0].toUpperCase();
    loggedin.value = true;
    if ((await getDoc(doc(db, "users", user.uid))).data().admin) {
      admin.admin = true;
    }
  } else {
    loggedin.value = false;
    admin.admin = false;
  }
});
const click = async () => {
  signOut(auth);
  loggedin.value = false;
  admin.admin = false;
  router.push("/");
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
ul {
  display: flex;
  flex: 1;
  justify-content: flex-end;

  .link-second {
    margin-right: 30px;
    font-size: 20px;
    color: $col-light;

    &:hover {
      font-weight: 800;
      color: $col-lime;
    }
  }
}
</style>
