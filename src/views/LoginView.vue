<template>
  <input type="text" v-model="name" placeholder="Name" />
  <input type="password" v-model="password" placeholder="Password" />
  <button @click="submitForm">Submit</button>
</template>

<script setup>
import { ref } from "vue";
import { db } from "../firebase/firebaseinit";
import { setDoc, doc } from "firebase/firestore";

const name = ref("");
const password = ref("");
const submitForm = async () => {
  const user = doc(db, "data", Date());
  await setDoc(
    user,
    { name: name.value, password: password.value },
    { merge: true }
  );
  name.value = "";
  password.value = "";
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

input {
  color: black;
}
button {
  color: black;
}
</style>
