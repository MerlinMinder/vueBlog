<template>
  <div class="container">
    <ul>
      <input type="text" v-model="account.name" placeholder="Name" />
      <input type="text" v-model="account.surname" placeholder="Surname" />
      <input type="email" v-model="account.email" placeholder="E-Mail" />
      <input
        type="password"
        v-model="account.password"
        placeholder="Password"
      />
      <input
        type="password"
        v-model="account.confirmPassword"
        placeholder="Confirm Password"
      />
    </ul>
    <button @click="submitForm">Login</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { db } from "../firebase/firebaseinit";
import { setDoc, doc } from "firebase/firestore";

let account = reactive({
  name: "",
  surname: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const submitForm = async () => {
  const user = doc(db, "data", Date());
  await setDoc(user, account, { merge: true });
  account.name = "";
  account.password = "";
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 340px;
    width: 360px;
    border-radius: 20px;
    padding: 35px 30px;
    background-color: $col-dark1;

    input {
      width: auto;
      height: fit-content;
      color: black;
      padding: 10px 20px;
      font-size: 15px;
      font-weight: 600;
      border-radius: 15px;
      border: 2px solid $col-light;
      background-color: $col-lime;
    }
  }
  button {
    color: black;
  }
}
</style>
