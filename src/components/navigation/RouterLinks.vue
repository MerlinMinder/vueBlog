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
    <div
      @click="click"
      v-else
      class="link link-second profile"
      title="Sign Out"
    >
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
    margin: 0px 15px;
    font-size: 20px;
    color: $text;
    display: flex;
    align-items: center;

    &:hover {
      font-weight: 800;
      color: $hover;
      cursor: pointer;
    }
  }

  .profile {
    font-size: 30px;
    font-weight: 1000;
    width: 50px;
    height: 50px;
    background-color: $background;
    display: flex;
    justify-content: center;
    border-radius: 25px;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
