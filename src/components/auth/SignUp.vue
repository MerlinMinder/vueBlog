<template>
  <p id="question">Already have an account? Login</p>
  <RouterLink :to="{ name: 'login' }" id="login">Login</RouterLink>
  <p id="title">Sign Up</p>
  <ul>
    <input class="li" type="text" v-model="account.name" placeholder="Name" />
    <input
      class="li"
      type="text"
      v-model="account.surname"
      placeholder="Surname"
    />
    <input
      class="li"
      type="email"
      v-model="account.email"
      placeholder="E-Mail"
    />
    <input
      class="li"
      type="password"
      v-model="account.password"
      placeholder="Password"
    />
    <p id="error">{{ errorMessage }}</p>
    <button class="li li-dark" @click="submitForm">Sign Up</button>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import { auth, db } from "../../firebase/firebaseinit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import router from "../../router";
import { RouterLink } from "vue-router";

let account = ref({
  name: "",
  surname: "",
  email: "",
  password: "",
  admin: false,
});

let errorMessage = ref("");

const submitForm = async () => {
  if (
    !(
      account.value.name &&
      account.value.surname &&
      account.value.email &&
      account.value.password
    )
  ) {
    errorMessage.value = "Please fill out all fields!";
    return;
  }

  createUserWithEmailAndPassword(
    auth,
    account.value.email,
    account.value.password
  )
    .then(async () => {
      delete account.value.password;
      const user = doc(db, "users", auth.currentUser.uid);
      await setDoc(user, account.value, { merge: true });
      account.value = {
        name: "",
        surname: "",
        email: "",
        password: "",
        admin: false,
      };
      errorMessage.value = "";
    })
    .then(router.push("/"))
    .catch((error) => {
      errorMessage.value = error.code.slice(5);
    });
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";

#login {
  position: absolute;
  top: 35px;
  right: 77px;

  &:hover {
    cursor: pointer;
  }
}

#title {
  font-size: 2rem;
  font-weight: 1000;
  margin-bottom: 20px;
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  min-width: 240px;
  width: 80vw;
  max-width: 300px;

  .li {
    width: auto;
    height: fit-content;
    color: black;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 15px;
    border: none;
    background-color: $col-light;
  }

  .li-dark {
    margin-top: 13px;
    color: $col-light;
    background-color: $col-dark1;

    &:hover {
      transform: scale(1.01);
      cursor: pointer;
    }
  }
  #error {
    position: absolute;
    bottom: 47px;
    left: 15px;
    color: red;
    height: 13px;
    font-size: 13px;
    font-weight: bold;
  }
}
</style>
