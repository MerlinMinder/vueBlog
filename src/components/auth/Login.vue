<template>
  <p>No account? Sign Up</p>
  <RouterLink :to="{ name: 'signup' }" id="link">Sign Up</RouterLink>
  <p id="title">Login</p>
  <ul>
    <input class="li" type="email" v-model="email" placeholder="E-Mail" />
    <input
      class="li"
      type="password"
      v-model="password"
      placeholder="Password"
    />
    <p id="error">{{ errorMessage }}</p>
    <button class="li li-dark" @click="submitForm">Login</button>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import router from "../../router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { RouterLink } from "vue-router";
import { auth } from "../../firebase/firebaseinit";

const email = ref("");
const password = ref("");

let errorMessage = ref("");

const submitForm = async () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      if (auth.currentUser) {
        router.push("/");
      }
    })
    .catch((error) => {
      errorMessage.value = error.code.slice(5);
    });
  email.value = "";
  password.value = "";
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";

#title {
  font-size: 2rem;
  font-weight: 1000;
  margin-bottom: 20px;
}

#link {
  position: absolute;
  top: 35px;
  right: 113px;

  &:hover {
    cursor: pointer;
  }
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  min-width: 240px;
  width: 80vw;
  max-width: 300px;

  .li {
    width: auto;
    height: fit-content;
    color: $text;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 600;
    border-radius: 15px;
    border: none;
    background-color: $entry;
  }

  .li-dark {
    margin-top: 13px;
    color: $text;
    background-color: $button;

    &:hover {
      transform: scale(1.01);
      cursor: pointer;
    }
  }
  #error {
    position: absolute;
    bottom: 47px;
    left: 15px;
    color: $error;
    height: 13px;
    font-size: 13px;
    font-weight: bold;
  }
}
</style>
